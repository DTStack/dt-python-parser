// Generated from /Users/libowen/Desktop/Code/gitlab.prod.dtstack.cn/dt-insight-front/infrastructure/dt-python-parser/src/grammar/python/PythonParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by PythonParser.

function PythonParserVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

PythonParserVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
PythonParserVisitor.prototype.constructor = PythonParserVisitor;

// Visit a parse tree produced by PythonParser#root.
PythonParserVisitor.prototype.visitRoot = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#single_input.
PythonParserVisitor.prototype.visitSingle_input = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#file_input.
PythonParserVisitor.prototype.visitFile_input = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#eval_input.
PythonParserVisitor.prototype.visitEval_input = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#stmt.
PythonParserVisitor.prototype.visitStmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#if_stmt.
PythonParserVisitor.prototype.visitIf_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#while_stmt.
PythonParserVisitor.prototype.visitWhile_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#for_stmt.
PythonParserVisitor.prototype.visitFor_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#try_stmt.
PythonParserVisitor.prototype.visitTry_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#with_stmt.
PythonParserVisitor.prototype.visitWith_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#class_or_func_def_stmt.
PythonParserVisitor.prototype.visitClass_or_func_def_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#suite.
PythonParserVisitor.prototype.visitSuite = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#decorator.
PythonParserVisitor.prototype.visitDecorator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#elif_clause.
PythonParserVisitor.prototype.visitElif_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#else_clause.
PythonParserVisitor.prototype.visitElse_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#finally_clause.
PythonParserVisitor.prototype.visitFinally_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#with_item.
PythonParserVisitor.prototype.visitWith_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#except_clause.
PythonParserVisitor.prototype.visitExcept_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#classdef.
PythonParserVisitor.prototype.visitClassdef = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#funcdef.
PythonParserVisitor.prototype.visitFuncdef = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#typedargslist.
PythonParserVisitor.prototype.visitTypedargslist = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#args.
PythonParserVisitor.prototype.visitArgs = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#kwargs.
PythonParserVisitor.prototype.visitKwargs = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#def_parameters.
PythonParserVisitor.prototype.visitDef_parameters = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#def_parameter.
PythonParserVisitor.prototype.visitDef_parameter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#named_parameter.
PythonParserVisitor.prototype.visitNamed_parameter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#simple_stmt.
PythonParserVisitor.prototype.visitSimple_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#expr_stmt.
PythonParserVisitor.prototype.visitExpr_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#print_stmt.
PythonParserVisitor.prototype.visitPrint_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#del_stmt.
PythonParserVisitor.prototype.visitDel_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#pass_stmt.
PythonParserVisitor.prototype.visitPass_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#break_stmt.
PythonParserVisitor.prototype.visitBreak_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#continue_stmt.
PythonParserVisitor.prototype.visitContinue_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#return_stmt.
PythonParserVisitor.prototype.visitReturn_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#raise_stmt.
PythonParserVisitor.prototype.visitRaise_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#yield_stmt.
PythonParserVisitor.prototype.visitYield_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#import_stmt.
PythonParserVisitor.prototype.visitImport_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#from_stmt.
PythonParserVisitor.prototype.visitFrom_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#global_stmt.
PythonParserVisitor.prototype.visitGlobal_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#exec_stmt.
PythonParserVisitor.prototype.visitExec_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#assert_stmt.
PythonParserVisitor.prototype.visitAssert_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#nonlocal_stmt.
PythonParserVisitor.prototype.visitNonlocal_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#testlist_star_expr.
PythonParserVisitor.prototype.visitTestlist_star_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#star_expr.
PythonParserVisitor.prototype.visitStar_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#assign_part.
PythonParserVisitor.prototype.visitAssign_part = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#exprlist.
PythonParserVisitor.prototype.visitExprlist = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#import_as_names.
PythonParserVisitor.prototype.visitImport_as_names = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#import_as_name.
PythonParserVisitor.prototype.visitImport_as_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#dotted_as_names.
PythonParserVisitor.prototype.visitDotted_as_names = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#dotted_as_name.
PythonParserVisitor.prototype.visitDotted_as_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#test.
PythonParserVisitor.prototype.visitTest = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#varargslist.
PythonParserVisitor.prototype.visitVarargslist = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#vardef_parameters.
PythonParserVisitor.prototype.visitVardef_parameters = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#vardef_parameter.
PythonParserVisitor.prototype.visitVardef_parameter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#varargs.
PythonParserVisitor.prototype.visitVarargs = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#varkwargs.
PythonParserVisitor.prototype.visitVarkwargs = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#logical_test.
PythonParserVisitor.prototype.visitLogical_test = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#comparison.
PythonParserVisitor.prototype.visitComparison = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#expr.
PythonParserVisitor.prototype.visitExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#atom.
PythonParserVisitor.prototype.visitAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#dictorsetmaker.
PythonParserVisitor.prototype.visitDictorsetmaker = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#testlist_comp.
PythonParserVisitor.prototype.visitTestlist_comp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#testlist.
PythonParserVisitor.prototype.visitTestlist = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#dotted_name.
PythonParserVisitor.prototype.visitDotted_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#name.
PythonParserVisitor.prototype.visitName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#number.
PythonParserVisitor.prototype.visitNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#integer.
PythonParserVisitor.prototype.visitInteger = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#yield_expr.
PythonParserVisitor.prototype.visitYield_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#yield_arg.
PythonParserVisitor.prototype.visitYield_arg = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#trailer.
PythonParserVisitor.prototype.visitTrailer = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#arguments.
PythonParserVisitor.prototype.visitArguments = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#arglist.
PythonParserVisitor.prototype.visitArglist = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#argument.
PythonParserVisitor.prototype.visitArgument = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#subscriptlist.
PythonParserVisitor.prototype.visitSubscriptlist = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#subscript.
PythonParserVisitor.prototype.visitSubscript = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#sliceop.
PythonParserVisitor.prototype.visitSliceop = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#comp_for.
PythonParserVisitor.prototype.visitComp_for = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonParser#comp_iter.
PythonParserVisitor.prototype.visitComp_iter = function(ctx) {
  return this.visitChildren(ctx);
};



exports.PythonParserVisitor = PythonParserVisitor;