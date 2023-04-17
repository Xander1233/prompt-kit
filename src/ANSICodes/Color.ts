/**
 * The color codes for ANSI foreground escape sequences.
 */
export enum Foreground {
	Black = 30,
	Red = 31,
	Green = 32,
	Yellow = 33,
	Blue = 34,
	Magenta = 35,
	Cyan = 36,
	White = 37,
	Reset = 39
}

/**
 * The color codes for ANSI background escape sequences.
 */
export enum Background {
	Black = 40,
	Red = 41,
	Green = 42,
	Yellow = 43,
	Blue = 44,
	Magenta = 45,
	Cyan = 46,
	White = 47,
	Reset = 49
}

/**
 * Gets the ANSI escape sequence for a color. This can be used to set the foreground or background color of text. If a custom RGB color is provided, the background property can be set to true to get the background color escape sequence.
 * @param color The color to get the ANSI escape sequence for. Can be a Foreground or Background enum, or a custom RGB color.
 * @returns The ANSI escape sequence for the color.
 */
export function getColor(color: Foreground | Background | { red: number, green: number, blue: number, background?: boolean }): string {
	
	if (typeof color === 'number') {
		return `\x1b[${color}m`;
	}

	const { red, green, blue, background = false } = color;

	return `\x1b[${background ? '4' : 3}8;2;${red};${green};${blue}m`;
}