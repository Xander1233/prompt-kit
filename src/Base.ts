import readline from 'readline';

export class Base {
	
	protected rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});

	constructor() {
		readline.emitKeypressEvents(process.stdin);
		if (process.stdin.isTTY) {
			process.stdin.setRawMode(true);
		}
	}

	public readLine(): Promise<string> {
		return new Promise((resolve) => {
			this.rl.question('', (answer) => {
				resolve(answer);
			});
		});
	}

	public close() {
		this.rl.close();
	}
}