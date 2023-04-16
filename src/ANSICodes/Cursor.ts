export enum Cursor {
	Up = '\x1B[1A',
	Down = '\x1B[1B',
	Right = '\x1B[1C',
	Left = '\x1B[1D',
	NextLine = '\x1B[1E',
	PreviousLine = '\x1B[1F',
	Column = '\x1B[1G',
	Position = '\x1B[1;1H',

	// Erase in Screen
	EraseScreen = '\x1B[2J',
	
	// Erase in Line
	EraseLine = '\x1B[2K',
	EraseLineFromCursor = '\x1B[0K',
	EraseLineToCursor = '\x1B[1K',
	
	// Scroll
	ScrollUp = '\x1B[1S',
	ScrollDown = '\x1B[1T',
	
	// Save and Restore Cursor Position
	SaveCursorPosition = '\x1B[s',
	RestoreCursorPosition = '\x1B[u',
	
	// Hide and Show Cursor
	HideCursor = '\x1B[?25l',
	ShowCursor = '\x1B[?25h',
}