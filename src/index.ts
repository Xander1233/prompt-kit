import { SelectionBuilder } from "./Builder/SelectionBuilder";
import { Foreground, Background, Cursor } from "./ANSICodes";

export { SelectionBuilder, Foreground, Background, Cursor };

export default class PromptKit {
	public static get SelectionBuilder() {
		return SelectionBuilder;
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
}