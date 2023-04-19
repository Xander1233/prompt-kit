process.env.PROMPTKIT_DISABLE_TTY_WARNING = "true";

import { Foreground, Background, getColor } from '../../src';

describe('Colors', () => {
	describe('Foreground', () => {
		describe('Black', () => {
			it('should return the correct Color Code', () => {
				expect(Foreground.Black).toBe(30);
			})
		});
		describe('Red', () => {
			it('should return the correct Color Code', () => {
				expect(Foreground.Red).toBe(31);
			})
		});
		describe('Green', () => {
			it('should return the correct Color Code', () => {
				expect(Foreground.Green).toBe(32);
			})
		});
		describe('Yellow', () => {
			it('should return the correct Color Code', () => {
				expect(Foreground.Yellow).toBe(33);
			})
		});
		describe('Blue', () => {
			it('should return the correct Color Code', () => {
				expect(Foreground.Blue).toBe(34);
			})
		});
		describe('Magenta', () => {
			it('should return the correct Color Code', () => {
				expect(Foreground.Magenta).toBe(35);
			})
		});
		describe('Cyan', () => {
			it('should return the correct Color Code', () => {
				expect(Foreground.Cyan).toBe(36);
			})
		});
		describe('White', () => {
			it('should return the correct Color Code', () => {
				expect(Foreground.White).toBe(37);
			})
		});
		describe('Reset', () => {
			it('should return the correct Color Code', () => {
				expect(Foreground.Reset).toBe(39);
			})
		});

		describe('getColor', () => {
			it('should return the correct ANSI escape sequence', () => {
				expect(getColor(Foreground.Black)).toBe('\x1b[30m');
			});
			it('should return the correct ANSI escape sequence for RGB (100, 100, 100)', () => {
				expect(getColor({ red: 100, green: 100, blue: 100 })).toBe('\x1b[38;2;100;100;100m');
			});
		});
	});

	describe('Background', () => {
		describe('Black', () => {
			it('should return the correct Color Code', () => {
				expect(Background.Black).toBe(40);
			})
		});
		describe('Red', () => {
			it('should return the correct Color Code', () => {
				expect(Background.Red).toBe(41);
			})
		});
		describe('Green', () => {
			it('should return the correct Color Code', () => {
				expect(Background.Green).toBe(42);
			})
		});
		describe('Yellow', () => {
			it('should return the correct Color Code', () => {
				expect(Background.Yellow).toBe(43);
			})
		});
		describe('Blue', () => {
			it('should return the correct Color Code', () => {
				expect(Background.Blue).toBe(44);
			})
		});
		describe('Magenta', () => {
			it('should return the correct Color Code', () => {
				expect(Background.Magenta).toBe(45);
			})
		});
		describe('Cyan', () => {
			it('should return the correct Color Code', () => {
				expect(Background.Cyan).toBe(46);
			})
		});
		describe('White', () => {
			it('should return the correct Color Code', () => {
				expect(Background.White).toBe(47);
			})
		});
		describe('Reset', () => {
			it('should return the correct Color Code', () => {
				expect(Background.Reset).toBe(49);
			})
		});

		describe('getColor', () => {
			it('should return the correct ANSI escape sequence', () => {
				expect(getColor(Background.Black)).toBe('\x1b[40m');
			});
			it('should return the correct ANSI escape sequence for RGB (100, 100, 100)', () => {
				expect(getColor({ red: 100, green: 100, blue: 100, background: true })).toBe('\x1b[48;2;100;100;100m');
			});
		});
	});
});