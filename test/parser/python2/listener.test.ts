import Python2Parser, { Python2Listener } from '../../../src/parser/python2';

describe('Python2 Listener Tests', () => {
  const example = `while (count < 9):`;
  const parser = new Python2Parser();

  const parserTree = parser.parse(example);

  test('Listener enterWhile', async () => {
    let result = '';
    class MyListener extends Python2Listener {
      enterWhile_stmt(ctx): void {
        result = ctx.getText().toLowerCase();
      }
    }
    const listenIfName: any = new MyListener();

    await parser.listen(listenIfName, parserTree);
    expect(result).toBe("while(count<9):newline");
  });
});
