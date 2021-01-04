import { cleanPython, lexer } from '../../../src/utils';

describe('Python3 clean tests', () => {
    test('clear # comments', () => {
        const sql = `#it is for test\nfor i in range(5):\n    print(i)`;
        const tokens = cleanPython(sql);
        expect(tokens.length).toBe(31);
    });
    test('clear """ comments', () => {
        const sql = `"""it is for test"""\nvar1 = "Hello World!"\nfor i in range(5):\n    print(i)`;
        const tokens = cleanPython(sql);
        expect(tokens.length).toBe(53);
    });
    test('get # comments', () => {
        const sql = `#it is for test\nfor i in range(5):\n    print(i)`;
        const tokens = lexer(sql);
        expect(tokens?.[0]?.value).toBe('#it is for test');
    });
    test('get """ comments', () => {
        const sql = `"""it is for test"""\nvar1 = "Hello World!"\nfor i in range(5):\n    print(i)`;
        const tokens = lexer(sql);
        expect(tokens?.[0]?.value).toBe('"""it is for test"""');
    });
});
