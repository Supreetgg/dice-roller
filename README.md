# dice-roller

A small, dependency-free command-line dice roller that understands standard tabletop notation like `2d6+3`.

![Node.js](https://img.shields.io/badge/Node.js-%3E%3D14-green)
![License](https://img.shields.io/badge/license-MIT-blue)
![Dependencies](https://img.shields.io/badge/dependencies-none-brightgreen)

## Overview

`dice-roller` rolls any number of dice with any number of sides, adds an optional modifier, and prints each individual roll along with the total. It is useful for tabletop games such as Dungeons & Dragons, or any time you need a quick random number.

## Features

- Standard dice notation: `<count>d<sides>` with an optional `+` or `-` modifier
- Shows every individual roll as well as the total
- Defaults to a single six-sided die when no argument is given
- Input validation with a helpful usage message
- Zero dependencies

## Requirements

- [Node.js](https://nodejs.org/) 14 or newer (check with `node --version`)

## Installation

```bash
git clone https://github.com/Supreetgg/dice-roller.git
cd dice-roller
```

There is nothing to install.

## Usage

```bash
node dice.js [notation]
```

Or through npm: `npm start -- 2d6+3`.

### Notation

```text
<count>d<sides>[+/-modifier]
```

| Part | Meaning | Limits |
|---|---|---|
| `count` | How many dice to roll | 1 to 100 |
| `sides` | How many sides each die has | 2 or more |
| `modifier` | Number added to or subtracted from the total (optional) | any integer |

### Examples

```text
$ node dice.js
Rolls: 4
Total: 4

$ node dice.js 1d20
Rolls: 17
Total: 17

$ node dice.js 2d6+3
Rolls: 5, 2 (modifier +3)
Total: 10

$ node dice.js 4d8-2
Rolls: 8, 1, 3, 6 (modifier -2)
Total: 16
```

Results are random, so your numbers will differ.

### Errors

An invalid format, zero dice, more than 100 dice, or a die with fewer than 2 sides prints a usage message and exits with code 1.

## How it works

Each die is rolled with `1 + Math.floor(Math.random() * sides)`, giving a uniform result from 1 to `sides`. `Math.random()` is fine for games but is not suitable for anything security-sensitive.

## Project structure

```text
dice-roller/
├── dice.js        # the whole program
├── package.json   # project metadata and npm scripts
├── .gitignore
├── LICENSE        # MIT license
└── README.md
```

## Troubleshooting

- **`node` is not recognized**: install Node.js and reopen your terminal.
- **Usage message appears**: check the notation has no spaces, for example `2d6+3` and not `2d6 + 3`.
- **A `temp.txt` file appears in the repo**: it is a leftover test file and is not used by the program.

## License

Released under the [MIT License](LICENSE).
