import { Background, Foreground, getColor } from "./Color";
import { Cursor } from "./Cursor";
import { Text } from "./Text";

export { Foreground } from "./Color";
export { Background } from "./Color";
export { Cursor } from "./Cursor";
export { Text } from "./Text";
export { getColor } from "./Color";

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

	public static get Text() {
		return Text;
	}

	public static getColor(color: Foreground | Background) {
		return getColor(color);
	}
}