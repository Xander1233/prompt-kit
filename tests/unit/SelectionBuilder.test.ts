process.env.PROMPTKIT_DISABLE_TTY_WARNING = "true";

import { SelectionBuilder } from "../../src";

let builder = new SelectionBuilder();

describe("SelectionBuilder", () => {

	describe("prompt", () => {
		
		beforeEach(() => {
			builder.close();
			builder = new SelectionBuilder();
		});

		it("should set the prompt", () => {
			builder.setPrompt("Select an option");
			expect(builder.prompt).toBe("Select an option");
		});

		it('should set a default prompt', () => {
			const promptString = builder.getPromptString(0, new Set());
			expect(promptString.split('\n')[0]).toBe('Select some options:');
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
			builder.close();
			builder = new SelectionBuilder();

			builder.setPrompt("Select an option");
			builder.addOptions([
				{ option: 'Option 1', value: 1 },
				{ option: 'Option 2', value: 2 },
				{ option: 'Option 3', value: 3 },
				{ option: 'Option 4', value: 4 }
			]);
		});

		it('should throw an error if no options are added', () => {
			builder = new SelectionBuilder();
			expect(() => builder.build()).toThrowError('No options added');
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

	describe('Scrolling', () => {

		beforeEach(() => {
			builder.close();
			builder = new SelectionBuilder();

			builder.setPrompt("Select an option");
			builder.addOptions([
				{ option: 'Option 1', value: 1 },
				{ option: 'Option 2', value: 2 },
				{ option: 'Option 3', value: 3 },
				{ option: 'Option 4', value: 4 },
				{ option: 'Option 5', value: 5 },
				{ option: 'Option 6', value: 6 },
				{ option: 'Option 7', value: 7 },
				{ option: 'Option 8', value: 8 },
				{ option: 'Option 9', value: 9 },
				{ option: 'Option 10', value: 10 },
				{ option: 'Option 11', value: 11 },
				{ option: 'Option 12', value: 12 }
			]);
		});

		it('should create instruction string, showing only the first 5 options', () => {
			expect(builder.getPromptString(0, new Set())).toBe(`Select an option
\x1b[47m\x1b[30m◯ Option 1\x1b[0m
◯ Option 2
◯ Option 3
◯ Option 4
◯ Option 5
↑↓: Select option, ␣: Select, ↵: Finish`);
		});

		it('should create instruction string, showing option 5-9', () => {
			expect(builder.getPromptString(4, new Set())).toBe(`Select an option
\x1b[47m\x1b[30m◯ Option 5\x1b[0m
◯ Option 6
◯ Option 7
◯ Option 8
◯ Option 9
↑↓: Select option, ␣: Select, ↵: Finish`);
		});

		it('should create instruction string, showing option 10-12 and 1-2', () => {
			expect(builder.getPromptString(9, new Set())).toBe(`Select an option
\x1b[47m\x1b[30m◯ Option 10\x1b[0m
◯ Option 11
◯ Option 12
◯ Option 1
◯ Option 2
↑↓: Select option, ␣: Select, ↵: Finish`);
		});
	});

	describe('Default option', () => {
		beforeEach(() => {
			builder.close();
			builder = new SelectionBuilder();
			builder.addOptions([
				{ option: 'Option 1', value: 1 },
				{ option: 'Option 2', value: 2 },
				{ option: 'Option 3', value: 3 },
				{ option: 'Option 4', value: 4 }
			])
			builder.addDefaultOption(0);
		});

		it('should create instruction string with default option selected', () => {
			expect(builder.getPromptString(0, builder.defaultOption)).toBe(`Select some options:
\x1b[47m\x1b[30m◉ Option 1\x1b[0m
◯ Option 2
◯ Option 3
◯ Option 4
↑↓: Select option, ␣: Select, ↵: Finish (Press ↵ to use the default option)`);
		});

		it('should create instruction with default options', () => {
			builder.addDefaultOption(1);

			expect(builder.getPromptString(0, builder.defaultOption)).toBe(`Select some options:
\x1b[47m\x1b[30m◉ Option 1\x1b[0m
◉ Option 2
◯ Option 3
◯ Option 4
↑↓: Select option, ␣: Select, ↵: Finish (Press ↵ to use the default options)`);
		});
	});

	afterEach(() => {
		builder.close();
	});
});
