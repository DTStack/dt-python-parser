import Python2Parser, { Python2Visitor } from '../../../src/parser/python2'

describe('Generic SQL Visitor Tests', () => {
//   const expectTableName = 'user1';
  const example = `\nflag = False\nname = 'luren'\nif name == 'python':\n    flag = True\n    print 'welcome boss'\nelse:\n    print name `;
  const parser = new Python2Parser();

  const parserTree = parser.parse(example, (error) => {
      console.log('Parse error:', error);
  });

  test('Visitor visitTableName', () => {
      let result = '';
      class MyVisitor extends Python2Visitor {
        visitPrint_stmt(ctx): void {
              result = ctx.getText().toLowerCase();
              super.visitPrint_stmt(ctx);
          }
      }
      const visitor: any = new MyVisitor();
      visitor.visit(parserTree);

      expect(result).toBe("printname");
  });
});