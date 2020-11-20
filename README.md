# dt-python-parser

This project is unified based on antlr4 for processing Python grammar, can verify Python2, Python3 grammar, and give error messages. It is currently recommended to use with web-worker to improve performance

## Installation

```javascript
// use npm
npm i dt-python-parser --save

// use yarn
yarn add dt-python-parser
```

## Usage

```javascript
import { ParserPython2, ParserPython3 } from 'dt-python-parser';

// use Python2 parser
const py2Result = ParserPython2((data: string | string[]));

// use Python3 parser
const py3Result = ParserPython3((data: string | string[]));
```

## Roadmap

- add auto suggestion or autocomplete function
- support parsers of other languages, upgrade to a collection of language parsers

## License

[MIT](./LICENSE)
