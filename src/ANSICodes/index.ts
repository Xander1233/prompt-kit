import { Background, Foreground } from "./Color";
import { Cursor } from "./Cursor";

export { Foreground } from "./Color";
export { Background } from "./Color";
export { Cursor } from "./Cursor";

export default class ANSICodes {
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