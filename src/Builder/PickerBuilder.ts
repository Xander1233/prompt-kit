import { Background, Foreground } from "../ANSICodes";
import { Base } from "../Base";
import { Option } from "../Option";

export class PickerBuilder extends Base {
	public prompt = "";
	public options: Option[] = [];
	public defaultOptionIndex = -1;

	public setPrompt(prompt: string): PickerBuilder {
		this.prompt = prompt;
		return this;
	}

	public setOptions(options: Option[]): PickerBuilder {
		this.options = options;
		return this;
	}

	public setDefaultOption(defaultOptionIndex: number): PickerBuilder {
		if (defaultOptionIndex < 0 || defaultOptionIndex >= this.options.length) {
			throw new Error('Invalid default option index');
		}
		this.defaultOptionIndex = defaultOptionIndex;
		return this;
	}

	public build(): Promise<Option> {
		return new Promise((resolve) => {
			let currentSelection = this.defaultOptionIndex == -1 ? 0 : this.defaultOptionIndex;
			let isFirstPrint = true;

			const printFunctions = (): void => {

				if (!isFirstPrint) {
					// Clear the options.length lines with ansi escape codes
					for (let i = 0; i < this.options.length + 2; i++) {
						process.stdout.write('\x1B[1A\x1B[2K');
					}
				}

				console.log(this.prompt);

				this.options.forEach((option, index) => {
					if (index === currentSelection) {
						console.log(`\x1b[${Background.White}m\x1b[${Foreground.Black}m> ${option.option}\x1b[0m`);
					} else {
						console.log(`  ${option.option}`);
					}
				});

				console.log('Use the arrow keys to navigate, and press enter to select.');

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
					resolve(this.options[currentSelection]);
				}
			});

			printFunctions();
		});
	}
}