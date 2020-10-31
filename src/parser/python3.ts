import { InputStream, CommonTokenStream, Lexer } from 'antlr4';
import { Python3Lexer } from '../lib/python3/python3Lexer';
import { Python3Parser } from '../lib/python3/python3Parser';
export * from '../lib/python3/python3Listener';
export * from '../lib/python3/python3Visitor';

import BasicParser from './common/BasicParser';

export default class Python extends BasicParser {
  public createLexer(input: string): Lexer {
    const chars = new InputStream(input);
    const lexer = (<unknown>new Python3Lexer(chars)) as Lexer;
    return lexer;
  }

  public createParserFromLexer(lexer: Lexer) {
    const tokens = new CommonTokenStream(lexer);
    return new Python3Parser(tokens);
  }
}
