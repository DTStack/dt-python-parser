import { InputStream, CommonTokenStream, Lexer } from 'antlr4';
import { Python2Lexer } from '../lib/python2/Python2Lexer';
import { Python2Parser } from '../lib/python2/Python2Parser';
export * from '../lib/python2/Python2Listener';
export * from '../lib/python2/Python2Visitor';

import BasicParser from './common/BasicParser';

export default class Python extends BasicParser {
  public createLexer(input: string): Lexer {
    const chars = new InputStream(input);
    const lexer = (<unknown>new Python2Lexer(chars)) as Lexer;
    return lexer;
  }

  public createParserFromLexer(lexer: Lexer) {
    const tokens = new CommonTokenStream(lexer);
    return new Python2Parser(tokens);
  }
}
