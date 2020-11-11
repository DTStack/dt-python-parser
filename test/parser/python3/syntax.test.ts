import Python3Parser from '../../../src/parser/python3';

describe('Python3 Syntax Tests', () => {
  const parser = new Python3Parser();
  test('the print right example', () => {
    const example = `print('abc')\nprint('abc')\n`;
    const result = parser.validate(example);
    expect(result.length).toBe(0);
  });
  test('the print wrong example', () => {
    const example=`print 'abc'`; 
    const result = parser.validate(example);
    expect(result.length).toBe(1);
    });

test('the first right example', () => {
    const example = `a = 10\nif a > 5:\n    print("a比5大")\nelse:\n    print("a比5小")`;
    const result = parser.validate(example);
    expect(result.length).toBe(0);
  });
test('python3 for example', () => {
    const example = `for i in range(5):\n    print(i)`;
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
});
