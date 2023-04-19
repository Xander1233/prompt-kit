import { Background, Foreground } from "../ANSICodes";
import { Base } from "../Base";
import { Option } from "../Option";
import { Terminal } from "../Terminal";

export class SelectionBuilder extends Base {
	public prompt = "";
	public options: Option[] = [];
	public defaultOption: Set<number> = new Set();
	
	public static new(): SelectionBuilder {
		return new SelectionBuilder();
	}

	public setPrompt(prompt: string): SelectionBuilder {
		this.prompt = prompt;
		return this;
	}

	public addOptions(options: (Option | { option: string, value: any })[]): SelectionBuilder {
		this.options.push(...options);
		return this;
	}

	public addOption(option: Option | { option: string, value: any }): SelectionBuilder {
		this.options.push(option);
		return this;
	}

	public addDefaultOption(index: number): SelectionBuilder {
		if (index < 0 || index >= this.options.length) {
			throw new Error('Invalid default option index');
		}
		this.defaultOption.add(index);
		return this;
	}
	
	public removeDefaultOption(index: number): SelectionBuilder {
		if (index < 0 || index >= this.options.length) {
			throw new Error('Invalid default option index');
		}
		this.defaultOption.delete(index);
		return this;
	}

	public build(): Promise<Option[]> {

		if (this.options.length === 0) {
			throw new Error('No options added');
		}

		if (this.prompt === "") {
			this.prompt = 'Select some options:';
		}

		return new Promise((resolve) => {
			let currentSelection = 0;
			let isFirstPrint = true;

			const selectedOptions = new Set<number>();

			this.defaultOption.forEach((index) => {
				selectedOptions.add(index);
			});

			const printFunctions = (): void => {

				if (!isFirstPrint) {
					// Clear the previous line
					// prompt, 5 options, instructions
					Terminal.shared.clearLinesToCursor(7);
				}

				console.log(this.getPromptString(currentSelection, selectedOptions));

				isFirstPrint = false;
			}

			process.stdin.on('keypress', (str, key) => {
				if (key.name === 'up') {
					currentSelection--;
					if (currentSelection < 0) {
						currentSelection = this.options.length - 1;
					}
					printFunctions();
				} else if (key.name === 'down') {
					currentSelection++;
					if (currentSelection >= this.options.length) {
						currentSelection = 0;
					}
					printFunctions();
				} else if (key.name === 'return') {
					this.rl.close();
					resolve(this.options.filter((_, index) => selectedOptions.has(index)));
				} else if (key.name === 'space') {
					if (selectedOptions.has(currentSelection)) {
						selectedOptions.delete(currentSelection);
					} else {
						selectedOptions.add(currentSelection);
					}
					printFunctions();
				}
			});

			printFunctions();
		});
	}

	/**
	 * Returns the string to print to the console. Includes the prompt, options, and instructions.
	 * @param currentSelection The index of the currently selected option (The option the cursor is on)
	 * @param selectedOptions The indexes of the options that are currently selected and will be returned
	 * @returns The string to print to the console
	 */
	public getPromptString(currentSelection: number, selectedOptions: Set<number>): string {
		let returnString = `${this.prompt}\n`;

		returnString += this.createScrollableOptionString(currentSelection, selectedOptions);

		returnString += '↑↓: Select option, ␣: Select, ↵: Finish';

		if (this.defaultOption.size > 0) {
			returnString += ` (Press ↵ to use the default option${this.defaultOption.size > 1 ? 's' : ''})`;
		}

		return returnString;
	}

	public createScrollableOptionString(currentSelection: number, selected: Set<number>) {

		let returnString = '';

		if (this.options.length < 6) {
			for (let i = 0; i < this.options.length; i++) {
				if (i === currentSelection) {
					returnString += `\x1b[${Background.White}m\x1b[${Foreground.Black}m${selected.has(i) ? "◉" : "◯"} ${this.options[i].option}\x1b[0m`;
				} else {
					returnString += `${selected.has(i) ? "◉" : "◯"} ${this.options[i].option}`;
				}
				returnString += "\n";
			}
			return returnString;
		}

		let maxScroll = currentSelection + 5;
		// If the max scroll is greater than the number of options, we need to wrap around
		let upperBound = maxScroll > this.options.length ? maxScroll - this.options.length : maxScroll;
		let lowerBound = currentSelection;

		for (let i = lowerBound;; i++) {

			// If we've reached the upper bound, break
			if (i === upperBound) {
				break;
			}

			// If we've reached the end of the possible options, start from the beginning
			if (lowerBound > upperBound && i === this.options.length) {
				i = 0;
			}

			if (i === currentSelection) {
				returnString += `\x1b[${Background.White}m\x1b[${Foreground.Black}m${selected.has(i) ? "◉" : "◯"} ${this.options[i].option}\x1b[0m`;
			} else {
				returnString += `${selected.has(i) ? "◉" : "◯"} ${this.options[i].option}`;
			}
			returnString += "\n";
		}

		return returnString;
	}
}
