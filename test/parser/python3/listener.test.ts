import Python3Parser, { Python3Listener } from '../../../src/parser/python3';

describe('Python3 Listener Tests', () => {
  const example = `for i in range(5):\n    print(i)`;
  const parser = new Python3Parser();

  const parserTree = parser.parse(example);

test('Listener enterWhile', async () => {
    let result = '';
    class MyListener extends Python3Listener {
      enterFor_stmt(ctx): void {
        result = ctx.getText().toLowerCase();
      }
    }
    const listenIfName: any = new MyListener();

    await parser.listen(listenIfName, parserTree);
    expect(result).toBe(`foriinrange(5):     print(i)))`);
  });
});
