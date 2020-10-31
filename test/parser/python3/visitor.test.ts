import Python3Parser, { Python3Visitor } from '../../../src/parser/python3';

describe('Generic SQL Visitor Tests', () => {
  //   const expectTableName = 'user1';
  const example = `for i in range(5):\n    print(i)`;
  const parser = new Python3Parser();

  const parserTree = parser.parse(example, error => {
    console.log('Parse error:', error);
  });

test('Visitor visitTableName', () => {
    let result = '';
    class MyVisitor extends Python3Visitor {
      visitFor_stmt(ctx): void {
        result = ctx.getText().toLowerCase();
        super.visitFor_stmt(ctx);
      }
    }
    const visitor: any = new MyVisitor();
    visitor.visit(parserTree);

    expect(result).toBe('foriinrange(5):     print(i)))');
  });
});
