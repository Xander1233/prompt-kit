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
	public static get SelectionBuilder(): typeof SelectionBuilder {
		return SelectionBuilder;
	}

	public static get PickerBuilder(): typeof PickerBuilder {
		return PickerBuilder;
	}

	public static get MessageBuilder(): typeof MessageBuilder {
		return MessageBuilder;
	}

	public static get Terminal(): typeof Terminal {
		return Terminal;
	}

	public static get Foreground(): typeof Foreground {
		return Foreground;
	}

	public static get Background(): typeof Background {
		return Background;
	}

	public static get Cursor(): typeof Cursor {
		return Cursor;
	}

	public static get Text(): typeof Text {
		return Text;
	}

	public static getColor(color: Foreground | Background | { red: number, green: number, blue: number, background?: boolean }): string {
		return getColorFunction(color);
	}
}