import ANSICodes, { Cursor } from "./ANSICodes";

export class ProgressBar {

	private _isSpinner = false;

	private _max = 100;
	private _min = 0;

	private _spinner = 0;

	private _label = '';

	constructor(settings: { isSpinner?: boolean, max?: number, label?: string }) {
		this._isSpinner = settings.isSpinner ?? false;
		this._max = settings.max ?? 100;
		this._label = settings.label ?? '';
	}

	public get max(): number {
		if (this._isSpinner) {
			throw new Error("ProgressBar is a spinner");
		}
		return this._max;
	}

	public set max(value: number) {
		if (value < 0) {
			throw new Error("Invalid value");
		}
		this._max = value;
	}

	public get min(): number {
		return this._min;
	}

	/**
	 * Get the current spinner to display. Only works if the object is set to be a spinner.
	 * @returns Returns the progress bar or spinner
	 */
	public spin(): string {
		if (!this._isSpinner) {
			throw new Error("ProgressBar is not a spinner");
		}

		// Put the cursor at the beginning of the line and erase the line
		return `${Cursor.Left}${Cursor.EraseLine}${this._label} ${this.getSpinner()}`;
	}

	/**
	 * Get the current progress bar to display. Only works if the object is set to be a progress bar.
	 * @param newProgress The new progress
	 * @returns Returns the progress bar
	 */
	public update(newProgress: number): string {

		if (this._isSpinner) {
			throw new Error("ProgressBar is a spinner");
		}

		if (newProgress < this._min || newProgress > this._max) {
			throw new Error("Invalid value");
		}

		if (newProgress === this._max) {
			return `${ANSICodes.setColumn(0)}${Cursor.EraseLine}${this._label}Done`;
		}

		let progressBar = '';

		const progress = newProgress;
		const percentage = (progress / this._max) * 100;
		const progressLength = Math.round(percentage / 2);

		progressBar += `${ANSICodes.setColumn(0)}`
		progressBar += `${Cursor.EraseLine}`;

		progressBar += this._label + '[';
		progressBar += '='.repeat(progressLength);
		progressBar += '>'.repeat(progressLength < 50 ? 1 : 0);
		progressBar += ' '.repeat(50 - progressLength);
		progressBar += ']';
		progressBar += ` ${percentage.toFixed(2)}%`;

		return progressBar;
	}

	public getSpinner(): string {
		const spinner = ['|', '/', '-', '\\'];
		return spinner[this._spinner++ % spinner.length];
	}
}