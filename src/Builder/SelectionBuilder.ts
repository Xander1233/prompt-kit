import { Background, Foreground } from "../ANSICodes";
import { Base } from "../Base";
import { Option } from "../Option";

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

	public setOptions(options: Option[]): SelectionBuilder {
		this.options = options;
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
		return new Promise((resolve) => {
			let currentSelection = 0;
			let isFirstPrint = true;

			let selectedOptions = new Set<number>();

			this.defaultOption.forEach((index) => {
				selectedOptions.add(index);
			});

			const printFunctions = () => {

				if (!isFirstPrint) {
					// Clear the options.length lines with ansi escape codes
					for (let i = 0; i < this.options.length + 1; i++) {
						process.stdout.write('\x1B[1A\x1B[2K');
					}
				}

				console.log(this.prompt);

				this.options.forEach((option, index) => {
					if (index === currentSelection) {
						console.log(`\x1b[${Background.White}m\x1b[${Foreground.Black}m${selectedOptions.has(index) ? "◉" : "◯"} ${option.option}\x1b[0m`);
					} else {
						console.log(`${selectedOptions.has(index) ? "◉" : "◯"} ${option.option}`);
					}
				});

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
}
