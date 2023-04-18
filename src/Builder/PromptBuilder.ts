import { Base } from "../Base";

export class PromptBuilder extends Base {

	private _message = "";

	private _input_validation: (input: string) => boolean = () => true;

	private _input_transform: (input: string) => string = (input) => input;

	private _input_default?: string;

	/**
	 * Sets the message that will be displayed to the user
	 * @param message The message to display to the user
	 * @returns The current instance of the builder
	 */
	public setMessage(message: string): PromptBuilder {
		this._message = message;
		return this;
	}

	/**
	 * Sets the validation function that will be used to validate the user's input
	 * @param validation The validation function to use
	 * @returns The current instance of the builder
	 */
	public setValidation(validation: (input: string) => boolean): PromptBuilder {
		this._input_validation = validation;
		return this;
	}

	/**
	 * Sets the transform function
	 * @param transform The transform function to use
	 * @returns The current instance of the builder
	 */
	public setTransform(transform: (input: string) => string): PromptBuilder {
		this._input_transform = transform;
		return this;
	}

	/**
	 * Sets the default value. If none is provided, the user will be prompted until they provide a valid input
	 * @param default_value The default value to use
	 * @returns The current instance of the builder
	 */
	public setDefault(default_value: string): PromptBuilder {
		this._input_default = default_value;
		return this;
	}

	public prompt(): Promise<string> {
		return new Promise((resolve): void => {

			const createUI = (error?: string): void => {
				if (error) {
					console.log(error);
				}
				console.log(this._message);
				this.readLine(`${this._input_default ? `[Default: ${this._input_default}]` : ""} > `).then(handleInput);
			}

			const validateInput = (input: string): void => {
				if (this.validateUserInput(input)) {
					resolve(this._input_transform(input));
				} else {
					createUI("Your input was invalid.");
				}
			}

			const handleInput = (input: string): void => {
				if (input.length === 0) {
					if (this._input_default) {
						resolve(this._input_default);
					} else {
						createUI("You must provide a value.");
					}
				} else {
					validateInput(input);
				}
			}

			createUI();
		});
	}

	public validateUserInput(input: string): boolean {
		return this._input_validation(input);
	}
}