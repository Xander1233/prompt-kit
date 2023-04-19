import { SelectionBuilder } from "./Builder/SelectionBuilder";

const builder = new SelectionBuilder();

builder.addOptions([
	{ option: "Option 1", value: 1 },
	{ option: "Option 2", value: 2 },
	{ option: "Option 3", value: 3 },
	{ option: "Option 4", value: 4 },
	{ option: "Option 5", value: 5 },
	{ option: "Option 6", value: 6 },
	{ option: "Option 7", value: 7 },
	{ option: "Option 8", value: 8 },
	{ option: "Option 9", value: 9 },
	{ option: "Option 10", value: 10 },
	{ option: "Option 11", value: 11 },
	{ option: "Option 12", value: 12 }
]);

builder.addDefaultOption(2);

const currentSelection = 10;
const selectedOptions = new Set<number>();
const firstIndex = 10;

builder.setPrompt('LOL')
builder.build()
.then((options) => {
	console.log(options);
	builder.close();
});