import Python3Parser from '../../../src/parser/python3';

describe('Python3 Lexer tests', () => {
  const parser = new Python3Parser();
  // select id,name,sex from user1;
  const sql = 'print("a比5大")';
  const tokens = parser.getAllTokens(sql);
test('token counts', () => {
    expect(tokens.length).toBe(4);
  });
});
