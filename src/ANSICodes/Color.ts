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
export function getColor(color: Foreground | Background | { red: number, green: number, blue: number, background?: boolean }): string {
	
	if (typeof color === 'number') {
		return `\x1b[${color}m`;
	}

	const { red, green, blue, background = false } = color;

	return `\x1b[${background ? '4' : 3}8;2;${red};${green};${blue}m`;
}