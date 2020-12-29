import Python3Parser, { Python3Listener } from '../../../src/parser/python3';

describe('Python3 Listener Tests', (): void => {
    const example = `import sys\nfor i in sys.argv:\n    print(i)`;
    const parser = new Python3Parser();

    const parserTree = parser.parse(example);

    test('Listener enterWhile', async () => {
        let result = '';
        class MyListener extends Python3Listener {
            enterImport_name(ctx): void {
                result = ctx
                    .getText()
                    .toLowerCase()
                    .match(/(?<=import).+/)?.[0];
            }
        }
        const listenIfName: any = new MyListener();

        await parser.listen(listenIfName, parserTree);
        expect(result).toBe(`sys`);
    });
});
