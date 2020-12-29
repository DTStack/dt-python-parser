import { cleanPython } from '../../../src/utils';

describe('Python3 clean tests', () => {
    test('token counts', () => {
        const sql = `#it is for test\nfor i in range(5):\n    print(i)`;
        const tokens = cleanPython(sql);
        expect(tokens.length).toBe(31);
    });
    test('token counts', () => {
        const sql = `"""it is for test"""\nvar1 = "Hello World!"\nfor i in range(5):\n    print(i)`;
        const tokens = cleanPython(sql);
        expect(tokens.length).toBe(53);
    });
});
