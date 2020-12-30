# dt-python-parser

[![NPM version][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/dt-python-parser.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/dt-python-parser

English | [简体中文](./README-zh_CN.md)

dt-python-parser is a **Python Parser** project based on [ANTLR4](https://github.com/antlr/antlr4) for the big data field. Through [ANTLR4](https://github.com/antlr/antlr4) the default generated Parser, Visitor and Listener objects, we can easily achieve the **Syntax Validation** (Syntax Validation), ** of Python statements Lexical analysis** (Tokenizer), **traverse AST** nodes and other functions. In addition, several auxiliary methods are provided, for example, to filter comments of type `#` and `"""` in Python statements.

Supported Python syntax version:

- Python2
- Python3

> Tip: The current Parser is the `Javascript` language version, if necessary, you can try to compile the Grammar file to other target languages

## Installation

```bash
// use npm
npm i dt-python-parser --save

// use yarn
yarn add dt-python-parser
```

## Use

### Syntax Validation

First, you need to declare the corresponding Parser object. Different Python syntax versions need to introduce different Parser object processing. For example, if it is for **Python2**, you need to introduce **Python2** Parser separately, here we use **Python3** As an example:

```javascript
import {Python3Parser} from'dt-python-parser';

const parser = new Python3Parser();

const correctPython = `print('abc')\nprint('abc')\n`;
const errors = parser.validate(correctPython);
console.log(errors);
```

Output:

```javascript
/*
[]
*/
```

Example of verification failure:

```javascript
const incorrectPython =
    '! a = 10\nif a> 5:\n print("a bigger than 5")\nelse:\n print("a smaller than 5")';
const errors = parser.validate(incorrectPython);
console.log(errors);
```

Output:

```javascript
/*
    [
      {
        startLine: 1,
        endLine: 1,
        startCol: 0,
        endCol: 1,
        message: "extraneous input'!' expecting {<EOF>,'def','return','raise','from','import','import','global','nonlocal','assert', 'if','while','for','try','with','lambda','not','None','True','False','class','yield','yield ','del','pass','continue','break','break', NEWLINE, NAME, STRING_LITERAL, BYTES_LITERAL, DECIMAL_INTEGER, OCT_INTEGER, HEX_INTEGER, BIN_INTEGER, FLOAT_NUMBER, IMAG_NUMBER, DECIMAL_INTEGER, HCTEXGER, HCTEXGER, FLOAT_NUMBER, IMAG_NUMBER,'...','*','(','[','+','-','~','{','@'}"
      }
    ]
*/
```

First instantiate the Parser object, and then use the `validate` method to verify the Python statement. If the verification fails, an array containing the `error` information is returned.

### Lexical Analysis (Tokenizer)

In necessary scenarios, you can perform lexical analysis on Python sentences separately to obtain all Tokens objects:

```javascript
import {Python3Parser} from'dt-python-parser';

const parser = new Python3Parser();
const python ='for i in range(5):\n print(i)';
const tokens = parser.getAllTokens(python);
console.log(tokens);

/*
[
      CommonToken {
        source: [[Python3Lexer], [InputStream] ],
        type: 14,
        channel: 0,
        start: 0,
        stop: 2,
        tokenIndex: -1,
        line: 1,
        column: 0,
        _text: null
      },
    ...
]
*/
```

### Visitor mode (Visitor)

Use Visitor mode to visit the specified node in the AST

```javascript
import {Python3Parser, Python3Visitor} from'dt-python-parser';

const parser = new Python3Parser();
const python = `import sys\nfor i in sys.argv:\n print(i)`;
// parseTree
const tree = parser.parse(python);
class MyVisitor extends Python3Visitor {
    // Override visitImport_name method
    visitImport_name(ctx): void {
        let importName = ctx
            .getText()
            .toLowerCase()
            .match(/(?<=import).+/)?.[0];
        console.log('ImportName', importName);
    }
}
const visitor = new MyVisitor();
visitor.visit(tree);

/*
ImportName sys
*/
```

> Tip: When using Visitor mode, the method name of the node can be found in the Visitor file in the corresponding Python directory

### Listener

In Listener mode, use the ParseTreeWalker object provided by [ANTLR4](https://github.com/antlr/antlr4) to traverse the AST and call the corresponding method when entering each node.

```javascript
import {Python3Parser, Python3Listener} from'dt-python-parser';

const parser = new Python3Parser();
const python ='import sys\nfor i in sys.argv:\n print(i)';
// parseTree
const tree = parser.parse(python);
class MyListener extends Python3Listener {
    enterImport_name(ctx): void {
        let importName = ctx
            .getText()
            .toLowerCase()
            .match(/(?<=import).+/)?.[0];
        console.log('ImportName', importName);
    }
}
const listenTableName = new MyListener();
parser.listen(listenTableName, tree);

/*
ImportName sys
*/
```

> Tip: When using Listener mode, the method name of the node can be found in the Listener file in the corresponding Python directory

### Clean up comment content

Clear comments and leading and trailing spaces

```javascript
import {cleanPython} from'dt-python-parser';

const python = `#it is for test\nfor i in range(5):\n print(i)`;
const cleanedPython = cleanPython(python);
console.log(cleanedPython);

/*
    for i in range(5):
        print(i)
*/
```


### Get comment content

Get comments of type `#` or `"""`

```javascript
import { lexer } from 'dt-python-parser';

const python = `"""it is for test"""\nvar1 = "Hello World!"\nfor i in range(5):\n    print(i)`;
const commentTokens = lexer(python);
console.log(commentTokens);

/*
    [
      {
        type: 'Comment',
        value: '"""it is for test"""',
        start: 0,
        lineNumber: 1,
        end: 20
      }
    ]
*/
```

### Other API

- parserTreeToString (input: string):
Parse Python into `List-like` style tree string, generally used for testing

## Roadmap

- Auto-complete
- Code formatting
- Grammar structure optimization
- Execution efficiency optimization

## License

[MIT](./LICENSE)