export class Option {
	public option: string;
	public value: any;

	constructor(option: string, value: any) {
		this.option = option;
		this.value = value;
	}

	public toString(): string {
		return `Option { option: ${this.option}, value: ${this.value} }`;
	}
}