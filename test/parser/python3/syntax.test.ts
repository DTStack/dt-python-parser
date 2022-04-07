import Python3Parser from '../../../src/parser/python3';

describe('Python3 Syntax Tests', () => {
    const parser = new Python3Parser();
    test('the print right example', () => {
        const example = `print('abc')\nprint('abc')\n`;
        const result = parser.validate(example);
        expect(result.length).toBe(0);
    });
    test('the print wrong example', () => {
        const example = `! print('abc')`;
        const result = parser.validate(example);
        expect(result.length).toBe(1);
    });

    test('the first right example', () => {
        const example = `! a = 10\nif a > 5:\n    print("a bigger than 5")\nelse:\n    print("a smaller than 5")`;
        const result = parser.validate(example);
        expect(result.length).toBe(1);
    });
    test('python3 for example', () => {
        const example = `import sys\nfor i in sys.argv:\n    print(i)`;
        const result = parser.validate(example);
        expect(result.length).toBe(0);
    });
    test('python3 while example', () => {
        const example = `sum = 0\nnum = 1\nwhile num <= 100:\n    sum += num\n    num += 1`;
        const result = parser.validate(example);
        expect(result.length).toBe(0);
    });
    test('python3 wrong example', () => {
        const example = `print('abc')`;
        const result = parser.validate(example);
        expect(result.length).toBe(0);
    });
    test('python3 wrong example', () => {
        const example = `print('abc'`;
        const result = parser.validate(example);
        expect(result.length).toBe(1);
        expect(result?.[0]?.message).toBe(`no viable alternative at input 'print('abc''`);
    });

    test('python3 function statement example', () => {
        const example = `def my_function():
            print("Hello from a function")
        `;
        const result = parser.validate(example);
        expect(result.length).toBe(0);
    });

    test('python3 async function statement example', () => {
        const example = `async def my_function():
            print("Hello from a function")
        `;
        const result = parser.validate(example);
        expect(result.length).toBe(0);
    });

    test('python3 await statement example', () => {
        const example = `async def say_after(delay, what):
            await asyncio.sleep(delay)
            print(what)`;
        const result = parser.validate(example);
        expect(result.length).toBe(0);
    });
});
