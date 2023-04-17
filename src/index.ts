import { SelectionBuilder } from "./Builder/SelectionBuilder";
import { PickerBuilder } from "./Builder/PickerBuilder";
import { MessageBuilder } from "./Builder/MessageBuilder";

import { Terminal } from "./Terminal";

import { Foreground, Background, Cursor, Text, getColor as getColorFunction } from "./ANSICodes";


export { SelectionBuilder, MessageBuilder, PickerBuilder };

export { Terminal };

export { Foreground, Background, Cursor, Text }
export { getColor } from "./ANSICodes";

export default class PromptKit {
	public static get SelectionBuilder() {
		return SelectionBuilder;
	}

	public static get PickerBuilder() {
		return PickerBuilder;
	}

	public static get MessageBuilder() {
		return MessageBuilder;
	}

	public static get Terminal() {
		return Terminal;
	}

	public static get Foreground() {
		return Foreground;
	}

	public static get Background() {
		return Background;
	}

	public static get Cursor() {
		return Cursor;
	}

	public static get Text() {
		return Text;
	}

	public static getColor(color: Foreground | Background | { red: number, green: number, blue: number, background?: boolean }) {
		return getColorFunction(color);
	}
}