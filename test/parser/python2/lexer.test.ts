import Python2Parser from '../../../src/parser/python2';

describe('Python2 Lexer tests', () => {
    const parser = new Python2Parser();
    // select id,name,sex from user1;
    const sql = 'print("Hello, World!")';
    const tokens = parser.getAllTokens(sql);
    test('token counts', () => {
        expect(tokens.length).toBe(6);
    });
});
