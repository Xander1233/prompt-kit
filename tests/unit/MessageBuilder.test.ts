process.env.PROMPTKIT_DISABLE_TTY_WARNING = "true";

import { MessageBuilder } from "../../src";

let messageBuilder: MessageBuilder;

describe('MessageBuilder', () => {

	afterEach(() => {
		messageBuilder = new MessageBuilder();
	});

	describe('constructor', () => {
		it('should create a new instance of MessageBuilder', () => {
			messageBuilder = new MessageBuilder();
			expect(messageBuilder).toBeInstanceOf(MessageBuilder);
		});
	});

	describe('add foreground color', () => {
		afterEach(() => {
			messageBuilder = new MessageBuilder();
		});
		
		it('should add a red foreground color to the message', () => {
			messageBuilder.foregroundRed();
			expect(messageBuilder.toString()).toBe('\x1b[31m');
		});

		it('should add a green foreground color to the message', () => {
			messageBuilder.foregroundGreen();
			expect(messageBuilder.toString()).toBe('\x1b[32m');
		});

		it('should add a yellow foreground color to the message', () => {
			messageBuilder.foregroundYellow();
			expect(messageBuilder.toString()).toBe('\x1b[33m');
		});

		it('should add a blue foreground color to the message', () => {
			messageBuilder.foregroundBlue();
			expect(messageBuilder.toString()).toBe('\x1b[34m');
		});

		it('should add a magenta foreground color to the message', () => {
			messageBuilder.foregroundMagenta();
			expect(messageBuilder.toString()).toBe('\x1b[35m');
		});

		it('should add a cyan foreground color to the message', () => {
			messageBuilder.foregroundCyan();
			expect(messageBuilder.toString()).toBe('\x1b[36m');
		});

		it('should add a white foreground color to the message', () => {
			messageBuilder.foregroundWhite();
			expect(messageBuilder.toString()).toBe('\x1b[37m');
		});

		it('should add a black foreground color to the message', () => {
			messageBuilder.foregroundBlack();
			expect(messageBuilder.toString()).toBe('\x1b[30m');
		});
	});

	describe('add background color', () => {
		afterEach(() => {
			messageBuilder = new MessageBuilder();
		});

		it('should add a red background color to the message', () => {
			messageBuilder.backgroundRed();
			expect(messageBuilder.toString()).toBe('\x1b[41m');
		});

		it('should add a green background color to the message', () => {
			messageBuilder.backgroundGreen();
			expect(messageBuilder.toString()).toBe('\x1b[42m');
		});

		it('should add a yellow background color to the message', () => {
			messageBuilder.backgroundYellow();
			expect(messageBuilder.toString()).toBe('\x1b[43m');
		});

		it('should add a blue background color to the message', () => {
			messageBuilder.backgroundBlue();
			expect(messageBuilder.toString()).toBe('\x1b[44m');
		});

		it('should add a magenta background color to the message', () => {
			messageBuilder.backgroundMagenta();
			expect(messageBuilder.toString()).toBe('\x1b[45m');
		});

		it('should add a cyan background color to the message', () => {
			messageBuilder.backgroundCyan();
			expect(messageBuilder.toString()).toBe('\x1b[46m');
		});

		it('should add a white background color to the message', () => {
			messageBuilder.backgroundWhite();
			expect(messageBuilder.toString()).toBe('\x1b[47m');
		});

		it('should add a black background color to the message', () => {
			messageBuilder.backgroundBlack();
			expect(messageBuilder.toString()).toBe('\x1b[40m');
		});
	});

	describe('add text', () => {
		it('should add text to the message', () => {
			messageBuilder.text('Hello World');
			expect(messageBuilder.toString()).toBe('Hello World');
		});
	});

	describe('add text format', () => {
		afterEach(() => {
			messageBuilder = new MessageBuilder();
		});

		it('should add bold text to the message', () => {
			messageBuilder.bold();
			expect(messageBuilder.toString()).toBe('\x1b[1m');
		});

		it('should add dim text to the message', () => {
			messageBuilder.dim();
			expect(messageBuilder.toString()).toBe('\x1b[2m');
		});

		it('should add italic text to the message', () => {
			messageBuilder.italic();
			expect(messageBuilder.toString()).toBe('\x1b[3m');
		});

		it('should add underline text to the message', () => {
			messageBuilder.underscore();
			expect(messageBuilder.toString()).toBe('\x1b[4m');
		});

		it('should add blink text to the message', () => {
			messageBuilder.blink();
			expect(messageBuilder.toString()).toBe('\x1b[5m');
		});

		it('should add rapid blink text to the message', () => {
			messageBuilder.rapidBlink();
			expect(messageBuilder.toString()).toBe('\x1b[6m');
		});

		it('should add inverse text to the message', () => {
			messageBuilder.reverse();
			expect(messageBuilder.toString()).toBe('\x1b[7m');
		});

		it('should add hidden text to the message', () => {
			messageBuilder.hidden();
			expect(messageBuilder.toString()).toBe('\x1b[8m');
		});

		it('should add strikethrough text to the message', () => {
			messageBuilder.crossOut();
			expect(messageBuilder.toString()).toBe('\x1b[9m');
		});

		it('should add double underline text to the message', () => {
			messageBuilder.doubleUnderline();
			expect(messageBuilder.toString()).toBe('\x1b[21m');
		});
	});

	it('should reset all text styles', () => {
		messageBuilder.reset();
		expect(messageBuilder.toString()).toBe('\x1b[0m');
	});

	it('should clear and reset the instance', () => {
		messageBuilder.text('Hello World');
		expect(messageBuilder.toString()).toBe('Hello World');
		messageBuilder.clear();
		expect(messageBuilder.toString()).toBe('');
	});

	describe('multiple styles', () => {
		it('should add multiple styles to the message', () => {
			messageBuilder
				.foregroundRed()
				.backgroundGreen()
				.text('Hello World');
			expect(messageBuilder.toString()).toBe('\x1b[31m\x1b[42mHello World');
		});

		it('should add multiple resets and other styles', () => {
			messageBuilder
				.foregroundBlue()
				.backgroundRed()
				.text('This text should be blue on red')
				.reset()
				.foregroundWhite()
				.backgroundBlue()
				.text('This text should be white on blue')
				.reset();
			expect(messageBuilder.toString()).toBe('\x1b[34m\x1b[41mThis text should be blue on red\x1b[0m\x1b[37m\x1b[44mThis text should be white on blue\x1b[0m');
		});
	});
});