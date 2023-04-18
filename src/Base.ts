import readline from 'readline';

export class Base {
	
	protected rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});

	constructor() {
		readline.emitKeypressEvents(process.stdin);
	}

	protected readLine(message: string = ""): Promise<string> {
		return new Promise((resolve) => {
			this.rl.question(message, (answer) => {
				resolve(answer);
			});
		});
	}

	public close(): void {
		this.rl.close();
	}
}