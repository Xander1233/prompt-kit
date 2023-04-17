import { Background, Foreground, getColor, Text } from "../ANSICodes";

/**
 * A builder class for creating messages with ANSI escape codes
 */
export class MessageBuilder {

	private _message: string = "";

	/**
	 * Add a black foreground color to the message
	 * @returns The MessageBuilder instance
	 */
	public foregroundBlack(): MessageBuilder {
		this._message += getColor(Foreground.Black);
		return this;
	}

	/**
	 * Add a red foreground color to the message
	 * @returns The MessageBuilder instance
	 */
	public foregroundRed(): MessageBuilder {
		this._message += getColor(Foreground.Red);
		return this;
	}

	/**
	 * Add a green foreground color to the message
	 * @returns The MessageBuilder instance
	 */
	public foregroundGreen(): MessageBuilder {
		this._message += getColor(Foreground.Green);
		return this;
	}
	
	/**
	 * Add a yellow foreground color to the message
	 * @returns The MessageBuilder instance
	 */
	public foregroundYellow(): MessageBuilder {
		this._message += getColor(Foreground.Yellow);
		return this;
	}

	/**
	 * Add a blue foreground color to the message
	 * @returns The MessageBuilder instance
	 */
	public foregroundBlue(): MessageBuilder {
		this._message += getColor(Foreground.Blue);
		return this;
	}

	/**
	 * Add a magenta foreground color to the message
	 * @returns The MessageBuilder instance
	 */
	public foregroundMagenta(): MessageBuilder {
		this._message += getColor(Foreground.Magenta);
		return this;
	}

	/**
	 * Add a cyan foreground color to the message
	 * @returns The MessageBuilder instance
	 */
	public foregroundCyan(): MessageBuilder {
		this._message += getColor(Foreground.Cyan);
		return this;
	}

	/**
	 * Add a white foreground color to the message
	 * @returns The MessageBuilder instance
	 */
	public foregroundWhite(): MessageBuilder {
		this._message += getColor(Foreground.White);
		return this;
	}

	/**
	 * Add a black background color to the message
	 * @returns The MessageBuilder instance
	 */
	public backgroundBlack(): MessageBuilder {
		this._message += getColor(Background.Black);
		return this;
	}

	/**
	 * Add a red background color to the message
	 * @returns The MessageBuilder instance
	 */
	public backgroundRed(): MessageBuilder {
		this._message += getColor(Background.Red);
		return this;
	}

	/**
	 * Add a green background color to the message
	 * @returns The MessageBuilder instance
	 */
	public backgroundGreen(): MessageBuilder {
		this._message += getColor(Background.Green);
		return this;
	}

	/**
	 * Add a yellow background color to the message
	 * @returns The MessageBuilder instance
	 */
	public backgroundYellow(): MessageBuilder {
		this._message += getColor(Background.Yellow);
		return this;
	}

	/**
	 * Add a blue background color to the message
	 * @returns The MessageBuilder instance
	 */
	public backgroundBlue(): MessageBuilder {
		this._message += getColor(Background.Blue);
		return this;
	}

	/**
	 * Add a magenta background color to the message
	 * @returns The MessageBuilder instance
	 */
	public backgroundMagenta(): MessageBuilder {
		this._message += getColor(Background.Magenta);
		return this;
	}

	/**
	 * Add a cyan background color to the message
	 * @returns The MessageBuilder instance
	 */
	public backgroundCyan(): MessageBuilder {
		this._message += getColor(Background.Cyan);
		return this;
	}

	/**
	 * Add a white background color to the message
	 * @returns The MessageBuilder instance
	 */
	public backgroundWhite(): MessageBuilder {
		this._message += getColor(Background.White);
		return this;
	}

	/**
	 * Add a bold text style to the message
	 * @returns The MessageBuilder instance
	 */
	public bold(): MessageBuilder {
		this._message += Text.Bold;
		return this;
	}

	/**
	 * Add a dim text style to the message
	 * @returns The MessageBuilder instance
	 */
	public dim(): MessageBuilder {
		this._message += Text.Dim;
		return this;
	}

	/**
	 * Add an italic text style to the message
	 * @returns The MessageBuilder instance
	 */
	public italic(): MessageBuilder {
		this._message += Text.Italic;
		return this;
	}

	/**
	 * Add an italic text style to the message
	 * @returns The MessageBuilder instance
	 */
	public underscore(): MessageBuilder {
		this._message += Text.Underscore;
		return this;
	}

	/**
	 * Add a blink text style to the message
	 * @returns The MessageBuilder instance
	 */
	public blink(): MessageBuilder {
		this._message += Text.Blink;
		return this;
	}

	/**
	 * Add a rapid blink text style to the message
	 * @returns The MessageBuilder instance
	 */
	public rapidBlink(): MessageBuilder {
		this._message += Text.RapidBlink;
		return this;
	}

	/**
	 * Add a reverse text style to the message
	 * @returns The MessageBuilder instance
	 */
	public reverse(): MessageBuilder {
		this._message += Text.Reverse;
		return this;
	}

	/**
	 * Add a hidden text style to the message
	 * @returns The MessageBuilder instance
	 */
	public hidden(): MessageBuilder {
		this._message += Text.Hidden;
		return this;
	}

	/**
	 * Add a crossed out text style to the message
	 * @returns The MessageBuilder instance
	 */
	public crossOut(): MessageBuilder {
		this._message += Text.CrossedOut;
		return this;
	}

	/**
	 * Add a double underline text style to the message
	 * @returns The MessageBuilder instance
	 */
	public doubleUnderline(): MessageBuilder {
		this._message += Text.DoubleUnderline;
		return this;
	}

	/**
	 * Reset all text styles and colors to the default
	 * @returns The MessageBuilder instance
	 */
	public reset(): MessageBuilder {
		this._message += Text.Reset;
		return this;
	}

	/**
	 * Add text to the message
	 * @param text The text to add to the message
	 * @returns The MessageBuilder instance
	 */
	public text(text: string): MessageBuilder {
		this._message += text;
		return this;
	}

	/**
	 * Clears and resets the builder
	 * @returns The MessageBuilder instance
	 */
	public clear(): MessageBuilder {
		this._message = '';
		return this;
	}

	/**
	 * Print the message to the console
	 * @returns The MessageBuilder instance
	 */
	public build(): MessageBuilder {
		console.log(this.toString());
		return this;
	}

	/**
	 * Get the message as a string with all ANSI escape sequences. Can be used to add to other Builder instances or to print to the console.
	 * @returns The message as a string
	 */
	public toString() {
		return this._message + Text.Reset;
	}
}