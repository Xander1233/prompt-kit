# Prompt Kit

[![Node.js CI Status Badge](https://github.com/Xander1233/prompt-kit/actions/workflows/tests.yml/badge.svg)](https://github.com/Xander1233/prompt-kit/actions/workflows/tests.yml) [![npm version](https://badge.fury.io/js/@xandrrrr%2Fprompt-kit.svg)](https://badge.fury.io/js/@xandrrrr%2Fprompt-kit)
Build interactive command line interfaces with ease.

This package only works in a TTY-enabled environment. If the package is used in a non-TTY environment, it will print a warning that can be suppressed by setting the `PROMPTKIT_DISABLE_TTY_WARNING` environment variable to `true`.

## Installation

To install the latest version, run:

```bash
npm install @xandrrrr/prompt-kit
```

## Usage

```js
const { MessageBuilder } = require('@xandrrrr/prompt-kit'); // Import the components you need or use a default import.

const messageBuilder = new MessageBuilder(); // Create a new component instance.

messageBuilder
  .foregroundBlack()
  .backgroundWhite()
  .text('Hi')
  .reset(); // Chain methods to build your message.

messageBuilder.build(); // Use build to directly print the message / get user input/selections, etc.

console.log(messageBuilder.toString()); // Use toString() to get the component's string representation.
```

## Bug Reports

If you find a bug, please report it on the [GitHub issues page](https://github.com/Xander1233/prompt-kit/issues).

## Links

**[Documentation](https://prompt-kit.xndr.tech/)**
**[GitHub](https://github.com/Xander1233/prompt-kit)**
**[NPM](https://www.npmjs.com/package/@xandrrrr/prompt-kit)**
**[Support (Discord)](https://discord.gg/sWjcyBbSgC)**
