import { SelectionBuilder } from "../../src";

let builder = new SelectionBuilder();

describe("SelectionBuilder", () => {

	describe("setPrompt", () => {
		it("should set the prompt", () => {
			builder.setPrompt("Select an option");
			expect(builder.prompt).toBe("Select an option");
		});
	});

	describe("options", () => {
		describe('addOptions', () => {
			it("should add multiple options", () => {
				builder.addOptions([
					{ option: 'Option 1', value: 1 },
					{ option: 'Option 2', value: 2 },
					{ option: 'Option 3', value: 3 },
				]);
				expect(builder.options).toHaveLength(3);
			});
		});

		describe('addOption', () => {
			it("should add an option", () => {
				builder.addOption({ option: 'Option 4', value: 4 });
				expect(builder.options).toHaveLength(4);
			});
		});

		describe('addDefaultOption', () => {
			it("should add a default option", () => {
				builder.addDefaultOption(0);
				expect(builder.defaultOption.size).toBe(1);
			});
		});

		describe('removeDefaultOption', () => {
			it("should remove a default option", () => {
				builder.removeDefaultOption(0);
				expect(builder.defaultOption.size).toBe(0);
			});
		});
	});

	describe("Instructions", () => {
		beforeEach(() => {
			builder = new SelectionBuilder();

			builder.setPrompt("Select an option");
			builder.addOptions([
				{ option: 'Option 1', value: 1 },
				{ option: 'Option 2', value: 2 },
				{ option: 'Option 3', value: 3 },
				{ option: 'Option 4', value: 4 }
			]);
		});

		it("should create prompt string", () => {
			expect(builder.getPromptString(0, new Set())).toBe(`Select an option
\x1b[47m\x1b[30m◯ Option 1\x1b[0m
◯ Option 2
◯ Option 3
◯ Option 4
↑↓: Select option, ␣: Select, ↵: Finish`);
		});

		it('should create prompt string with 3rd option focused', () => {
			expect(builder.getPromptString(2, new Set())).toBe(`Select an option
◯ Option 1
◯ Option 2
\x1b[47m\x1b[30m◯ Option 3\x1b[0m
◯ Option 4
↑↓: Select option, ␣: Select, ↵: Finish`);
		});

		it('should create prompt string with 3rd option selected', () => {
			expect(builder.getPromptString(2, new Set([2]))).toBe(`Select an option
◯ Option 1
◯ Option 2
\x1b[47m\x1b[30m◉ Option 3\x1b[0m
◯ Option 4
↑↓: Select option, ␣: Select, ↵: Finish`);
		});

		it('should create prompt string with 3rd and 4th option selected, 3rd option focused', () => {
			expect(builder.getPromptString(2, new Set([2, 3]))).toBe(`Select an option
◯ Option 1
◯ Option 2
\x1b[47m\x1b[30m◉ Option 3\x1b[0m
◉ Option 4
↑↓: Select option, ␣: Select, ↵: Finish`);
		});
	});

	afterAll(() => {
		builder.close();
	});
});