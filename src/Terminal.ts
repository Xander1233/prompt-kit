import { Cursor } from "./ANSICodes";
import { MessageBuilder } from "./Builder/MessageBuilder";

export class Terminal {

	public print(message: string | MessageBuilder): void {
		console.log(message);
	}

	public cursorUp(): void {
		console.log(Cursor.Up);
	}

	public cursorDown(): void {
		console.log(Cursor.Down);
	}

	public cursorRight(): void {
		console.log(Cursor.Right);
	}

	public cursorLeft(): void {
		console.log(Cursor.Left);
	}

	public cursorNextLine(): void {
		console.log(Cursor.NextLine);
	}

	public cursorPreviousLine(): void {
		console.log(Cursor.PreviousLine);
	}

	public cursorHorizontalAbsolute(column: number): void {
		console.log(`\x1b[${column}G`);
	}

	public cursorPosition(row: number, column: number): void {
		console.log(`\x1b[${row};${column}H`);
	}

	public clearScreen(): void {
		console.log(Cursor.EraseScreen);
	}

	public clearLine(): void {
		console.log(Cursor.EraseLine);
	}

	public clearLineFromCursor(): void {
		console.log(Cursor.EraseLineFromCursor);
	}

	public clearLineToCursor(): void {
		console.log(Cursor.EraseLineToCursor);
	}

	public scrollUp(): void {
		console.log(Cursor.ScrollUp);
	}

	public scrollDown(): void {
		console.log(Cursor.ScrollDown);
	}

	public saveCursorPosition(): void {
		console.log(Cursor.SaveCursorPosition);
	}

	public restoreCursorPosition(): void {
		console.log(Cursor.RestoreCursorPosition);
	}

	public hideCursor(): void {
		console.log(Cursor.HideCursor);
	}

	public showCursor(): void {
		console.log(Cursor.ShowCursor);
	}
}