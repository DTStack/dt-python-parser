import { lexer } from '../../src/utils';
import { TokenType } from '../../src/utils/token';

describe('Python Lexer utils tests', () => {

    test('single comment', () => {
        const comment = `# hi`
        const commentTokens = lexer(comment);
        expect(commentTokens[0].type).toBe(TokenType.Comment);
    });

    test('single statementTerminator', () => {
        const statementTerminator = `print('hello world!');`
        const statementTerminatorTokens = lexer(statementTerminator);
        expect(statementTerminatorTokens[0].type).toBe(TokenType.StatementTerminator);
    });

    test('comment and statementTerminator', () => {
        const code = 
`# start
print('hello world!');
# end 
`
        const mixedTokens = lexer(code);
        expect(mixedTokens.length).toBe(3);
        expect(mixedTokens[0].type === TokenType.Comment);
        expect(mixedTokens[1].type === TokenType.StatementTerminator);
        expect(mixedTokens[2].type === TokenType.Comment);
    })
});