# dt-python-parser
![NPM version](https://img.shields.io/badge/npm-v0.8.0-blue) ![Build Status](https://img.shields.io/badge/build-passing-brightgreen) ![License Status](https://img.shields.io/badge/license-MIT-lightgrey)  
This project is unified based on antlr4 for processing Python grammar, provide users with instantiation permissions, flexible use of grammar verification, lexer mode, visitor mode and listener mode. It is currently recommended to use with web-worker to improve performance

## Installation

```javascript
// use npm
npm i dt-python-parser --save

// use yarn
yarn add dt-python-parser
```

## Usage

You have instantiation permission, so you can choose the functions you need. Here are a few examples

### Syntax detection

```javascript
import { Python3 } from 'dt-python-parser';

// Grammar Check
export const ParserPython3 = (inputBlock: string | string[]) => {
    try {
        let resultArray;
        const Python3Parser = new Python3();
        if (Array.isArray(inputBlock)) {
            resultArray = inputBlock.join('');
        } else {
            resultArray = inputBlock;
        }
        const result = Python3Parser.validate(resultArray);
        return result[0];
    } catch (e) {
        return e;
    }
};
```

### Listener mode

```javascript
import { Python3, Python3Listner } from 'dt-python-parser';

// Grammar Check
export const ParserPython3 = (inputBlock: string | string[]) => {
    try {
        let resultArray = [],
            rersult = '';
        const Python3Parser = new Python3();
        if (Array.isArray(inputBlock)) {
            resultArray = inputBlock.join('');
        } else {
            resultArray = inputBlock;
        }

        class MyListener extends Python3Listener {
            enterFor_stmt(ctx): void {
                result = ctx.getText().toLowerCase();
            }
        }

        const [listenIfName, parserTree] = [new MyListener(), Python3Parser.parse(resultArray)];
        Python3Parser.listen(listenIfName, parserTree);
        return result;
    } catch (e) {
        return e;
    }
};
```

## Roadmap

- add auto suggestion or autocomplete function
- support parsers of other languages, upgrade to a collection of language parsers

## License

[MIT](./LICENSE)