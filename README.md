# Prompt Kit

Build interactive command line interfaces with ease.

## Installation

To install the latest version, run:

```bash
npm install prompt-kit
```

## Usage

```js
const { SelectionBuilder } = require('prompt-kit');

const selection = new SelectionBuilder()
  .setPrompt('Select a color')
  .setOptions([
	{ option: 'red', value: 'red' },
	{ option: 'green', value: 'green' },
	{ option: 'blue', value: 'blue' },
  ])
  .build()
  .then((selected) => {
	console.log(`You selected ${selected.map((s) => s.value).join(', ')}`);
  });
```

## Documentation

You can find the documentation [here](https://prompt-kit.xndr.tech/).
