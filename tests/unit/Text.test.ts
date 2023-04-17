import { Text } from "../../src";

describe("Text", () => {
	describe("Bold", () => {
		it("should return the correct ANSI escape sequence", () => {
			expect(Text.Bold).toBe("\x1B[1m");
		});
	});
	describe("Dim", () => {
		it("should return the correct ANSI escape sequence", () => {
			expect(Text.Dim).toBe("\x1B[2m");
		});
	});
	describe("Italic", () => {
		it("should return the correct ANSI escape sequence", () => {
			expect(Text.Italic).toBe("\x1B[3m");
		});
	});
	describe("Underline", () => {
		it("should return the correct ANSI escape sequence", () => {
			expect(Text.Underscore).toBe("\x1B[4m");
		});
	});
	describe("Blink", () => {
		it("should return the correct ANSI escape sequence", () => {
			expect(Text.Blink).toBe("\x1B[5m");
		});
	});
	describe("RapidBlink", () => {
		it("should return the correct ANSI escape sequence", () => {
			expect(Text.RapidBlink).toBe("\x1B[6m");
		});
	});
	describe("Inverse", () => {
		it("should return the correct ANSI escape sequence", () => {
			expect(Text.Reverse).toBe("\x1B[7m");
		});
	});
	describe("Hidden", () => {
		it("should return the correct ANSI escape sequence", () => {
			expect(Text.Hidden).toBe("\x1B[8m");
		});
	});
	describe("Strikethrough", () => {
		it("should return the correct ANSI escape sequence", () => {
			expect(Text.CrossedOut).toBe("\x1B[9m");
		});
	});
	describe("Reset", () => {
		it("should return the correct ANSI escape sequence", () => {
			expect(Text.Reset).toBe("\x1B[0m");
		});
	});
});