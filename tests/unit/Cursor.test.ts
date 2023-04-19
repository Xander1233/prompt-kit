process.env.PROMPTKIT_DISABLE_TTY_WARNING = "true";

import { Cursor } from "../../src";

describe("Cursor", () => {
	describe("Up", () => {
		it("should return the correct ANSI escape sequence", () => {
			expect(Cursor.Up).toBe("\x1B[1A");
		});
	});
	describe("Down", () => {
		it("should return the correct ANSI escape sequence", () => {
			expect(Cursor.Down).toBe("\x1B[1B");
		});
	});
	describe("Right", () => {
		it("should return the correct ANSI escape sequence", () => {
			expect(Cursor.Right).toBe("\x1B[1C");
		});
	});
	describe("Left", () => {
		it("should return the correct ANSI escape sequence", () => {
			expect(Cursor.Left).toBe("\x1B[1D");
		});
	});
	describe("NextLine", () => {
		it("should return the correct ANSI escape sequence", () => {
			expect(Cursor.NextLine).toBe("\x1B[1E");
		});
	});
	describe("PreviousLine", () => {
		it("should return the correct ANSI escape sequence", () => {
			expect(Cursor.PreviousLine).toBe("\x1B[1F");
		});
	});
	describe("Column", () => {
		it("should return the correct ANSI escape sequence", () => {
			expect(Cursor.Column).toBe("\x1B[1G");
		});
	});
	describe("Position", () => {
		it("should return the correct ANSI escape sequence", () => {
			expect(Cursor.Position).toBe("\x1B[1;1H");
		});
	});
	describe("EraseScreen", () => {
		it("should return the correct ANSI escape sequence", () => {
			expect(Cursor.EraseScreen).toBe("\x1B[2J");
		});
	});
	describe("EraseLine", () => {
		it("should return the correct ANSI escape sequence", () => {
			expect(Cursor.EraseLine).toBe("\x1B[2K");
		});
	});
	describe("EraseLineFromCursor", () => {
		it("should return the correct ANSI escape sequence", () => {
			expect(Cursor.EraseLineFromCursor).toBe("\x1B[0K");
		});
	});
	describe("EraseLineToCursor", () => {
		it("should return the correct ANSI escape sequence", () => {
			expect(Cursor.EraseLineToCursor).toBe("\x1B[1K");
		});
	});
	describe("ScrollUp", () => {
		it("should return the correct ANSI escape sequence", () => {
			expect(Cursor.ScrollUp).toBe("\x1B[1S");
		});
	});
	describe("ScrollDown", () => {
		it("should return the correct ANSI escape sequence", () => {
			expect(Cursor.ScrollDown).toBe("\x1B[1T");
		});
	});
	describe("SaveCursorPosition", () => {
		it("should return the correct ANSI escape sequence", () => {
			expect(Cursor.SaveCursorPosition).toBe("\x1B[s");
		});
	});
	describe("RestoreCursorPosition", () => {
		it("should return the correct ANSI escape sequence", () => {
			expect(Cursor.RestoreCursorPosition).toBe("\x1B[u");
		});
	});
	describe("HideCursor", () => {
		it("should return the correct ANSI escape sequence", () => {
			expect(Cursor.HideCursor).toBe("\x1B[?25l");
		});
	});
	describe("ShowCursor", () => {
		it("should return the correct ANSI escape sequence", () => {
			expect(Cursor.ShowCursor).toBe("\x1B[?25h");
		});
	});
});