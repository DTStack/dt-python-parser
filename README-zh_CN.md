# dt-python-parser

[![NPM version][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/dt-python-parser.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/dt-python-parser

[English](./README.md) | 简体中文

dt-python-parser 是一个基于 [ANTLR4](https://github.com/antlr/antlr4) 开发的， 针对大数据领域的 **Python Parser** 项目。通过[ANTLR4](https://github.com/antlr/antlr4) 默认生成的 Parser、Visitor 和 Listener 对象，我们可以轻松的做到对 Python 语句的**语法检查**（Syntax Validation）、**词法分析**（Tokenizer)、 **遍历 AST** 节点等功能。此外，还提供了几个辅助方法, 例如 过滤 Python 语句中的 `#` 和 `"""` 类型的注释。

已支持的 Python 语法版本：

-   Python2
-   Python3

> 提示：当前的 Parser 是 `Javascript` 语言版本，如果有必要，可以尝试编译 Grammar 文件到其他目标语言

## 安装

```bash
// use npm
npm i dt-python-parser --save

// use yarn
yarn add dt-python-parser
```

## 使用

### 语法校验（Syntax Validation）

首先需要声明相应的 Parser 对象，不同的 Python 语法版本需要引入不同的 Parser 对象处理，例如如果是针对 **Python2**，则需要单独引入 **Python2** Parser，这里我们使用 **Python3** 作为示例：

```javascript
import { Python3Parser } from 'dt-python-parser';

const parser = new Python3Parser();

const correctPython = `print('abc')\nprint('abc')\n`;
const errors = parser.validate(correctPython);
console.log(errors);
```

输出：

```javascript
/*
[]
*/
```

校验失败示例：

```javascript
const incorrectPython =
    '! a = 10\nif a > 5:\n    print("a bigger than 5")\nelse:\n    print("a smaller than 5")';
const errors = parser.validate(incorrectPython);
console.log(errors);
```

输出：

```javascript
/*
    [
      {
        startLine: 1,
        endLine: 1,
        startCol: 0,
        endCol: 1,
        message: "extraneous input '!' expecting {<EOF>, 'def', 'return', 'raise', 'from', 'import', 'import', 'global', 'nonlocal', 'assert', 'if', 'while', 'for', 'try', 'with', 'lambda', 'not', 'None', 'True', 'False', 'class', 'yield', 'yield', 'del', 'pass', 'continue', 'break', 'break', NEWLINE, NAME, STRING_LITERAL, BYTES_LITERAL, DECIMAL_INTEGER, OCT_INTEGER, HEX_INTEGER, BIN_INTEGER, FLOAT_NUMBER, IMAG_NUMBER, DECIMAL_INTEGER, OCT_INTEGER, HEX_INTEGER, BIN_INTEGER, FLOAT_NUMBER, IMAG_NUMBER, '...', '*', '(', '[', '+', '-', '~', '{', '@'}"
      }
    ]
*/
```

先实例化 Parser 对象，然后使用 `validate` 方法对 Python 语句进行校验，如果校验失败，则返回一个包含 `error` 信息的数组。

### 词法分析（Tokenizer）

必要场景下，可单独对 Python 语句进行词法分析，获取所有的 Tokens 对象：

```javascript
import { Python3Parser } from 'dt-python-parser';

const parser = new Python3Parser();
const python = 'for i in range(5):\n    print(i)';
const tokens = parser.getAllTokens(python);
console.log(tokens);

/*
[
      CommonToken {
        source: [ [Python3Lexer], [InputStream] ],
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

### 访问者模式（Visitor）

使用 Visitor 模式访问 AST 中的指定节点

```javascript
import { Python3Parser, Python3Visitor } from 'dt-python-parser';

const parser = new Python3Parser();
const python = `import sys\nfor i in sys.argv:\n    print(i)`;
// parseTree
const tree = parser.parse(python);
class MyVisitor extends Python3Visitor {
    // 重写 visitImport_name 方法
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

> 提示：使用 Visitor 模式时，节点的方法名称可以在对应 Python 目录下的 Visitor 文件中查找

### 监听器（Listener）

Listener 模式，利用 [ANTLR4](https://github.com/antlr/antlr4) 提供的 ParseTreeWalker 对象遍历 AST，进入各个节点时调用对应的方法。

```javascript
import { Python3Parser, Python3Listener } from 'dt-python-parser';

const parser = new Python3Parser();
const python = 'import sys\nfor i in sys.argv:\n    print(i)';
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

> 提示：使用 Listener 模式时，节点的方法名称可以在对应 Python 目录下的 Listener 文件中查找

### 清理注释内容

清除注释和前后空格

```javascript
import { cleanPython } from 'dt-python-parser';

const python = `#it is for test\nfor i in range(5):\n    print(i)`;
const cleanedPython = cleanPython(python);
console.log(cleanedPython);

/*
    for i in range(5):
        print(i)
*/
```

### 获取注释内容

获取 `#` 或 `"""` 类型的注释

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

### 其他 API

- parserTreeToString (input: string)
： 将 Python 解析成 `List-like` 风格的树形字符串， 一般用于测试

## 路线图

- Auto-complete
- Code formatting
- Grammar structure optimization
- Execution efficiency optimization

## 许可证

[MIT](./LICENSE)
