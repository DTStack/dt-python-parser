import Python2Parser from '../../../src/parser/python2'

describe('Python2 Syntax Tests', () => {
    const parser = new Python2Parser();
    test('the first right example', () => {
        const example=`\ndef printme( str ):\n  print str;\n  return;\nprintme("hello world");\nprintme("hello world");`;
        const result = parser.validate(example);
        expect(result.length).toBe(0);
    });
    
    test('the second right example', () => {
      const example = `\nflag = False\nname = 'luren'\nif name == 'python':\n    flag = True\n    print 'welcome boss'\nelse:\n    print name `
      const result = parser.validate(example);
      expect(result.length).toBe(0);
  });
    test('the woring example', () => {
      const example=`\ndef printme( str ):\n  print str;\n  return;\nprintme("hello world");\nprintme("hello world";`;
      const result = parser.validate(example);
      expect(result.length).toBe(1);
      expect(result?.[0]?.message).toBe(`no viable alternative at input 'printme("hello world";'`)
  });
});
