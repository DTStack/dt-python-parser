// Generated from /Users/libowen/Desktop/Code/gitlab.prod.dtstack.cn/dt-insight-front/infrastructure/dt-python-parser/src/grammar/python2/Python2.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by Python2Parser.

function Python2Visitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

Python2Visitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
Python2Visitor.prototype.constructor = Python2Visitor;

// Visit a parse tree produced by Python2Parser#program.
Python2Visitor.prototype.visitProgram = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#single_input.
Python2Visitor.prototype.visitSingle_input = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#file_input.
Python2Visitor.prototype.visitFile_input = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#eval_input.
Python2Visitor.prototype.visitEval_input = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#decorator.
Python2Visitor.prototype.visitDecorator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#decorators.
Python2Visitor.prototype.visitDecorators = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#decorated.
Python2Visitor.prototype.visitDecorated = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#funcdef.
Python2Visitor.prototype.visitFuncdef = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#parameters.
Python2Visitor.prototype.visitParameters = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#varargslist.
Python2Visitor.prototype.visitVarargslist = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#fpdef.
Python2Visitor.prototype.visitFpdef = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#fplist.
Python2Visitor.prototype.visitFplist = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#stmt.
Python2Visitor.prototype.visitStmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#simple_stmt.
Python2Visitor.prototype.visitSimple_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#small_stmt.
Python2Visitor.prototype.visitSmall_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#expr_stmt.
Python2Visitor.prototype.visitExpr_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#augassign.
Python2Visitor.prototype.visitAugassign = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#print_stmt.
Python2Visitor.prototype.visitPrint_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#del_stmt.
Python2Visitor.prototype.visitDel_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#pass_stmt.
Python2Visitor.prototype.visitPass_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#flow_stmt.
Python2Visitor.prototype.visitFlow_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#break_stmt.
Python2Visitor.prototype.visitBreak_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#continue_stmt.
Python2Visitor.prototype.visitContinue_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#return_stmt.
Python2Visitor.prototype.visitReturn_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#yield_stmt.
Python2Visitor.prototype.visitYield_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#raise_stmt.
Python2Visitor.prototype.visitRaise_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#import_stmt.
Python2Visitor.prototype.visitImport_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#import_name.
Python2Visitor.prototype.visitImport_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#import_from.
Python2Visitor.prototype.visitImport_from = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#import_as_name.
Python2Visitor.prototype.visitImport_as_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#dotted_as_name.
Python2Visitor.prototype.visitDotted_as_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#import_as_names.
Python2Visitor.prototype.visitImport_as_names = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#dotted_as_names.
Python2Visitor.prototype.visitDotted_as_names = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#dotted_name.
Python2Visitor.prototype.visitDotted_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#global_stmt.
Python2Visitor.prototype.visitGlobal_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#exec_stmt.
Python2Visitor.prototype.visitExec_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#assert_stmt.
Python2Visitor.prototype.visitAssert_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#compound_stmt.
Python2Visitor.prototype.visitCompound_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#if_stmt.
Python2Visitor.prototype.visitIf_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#while_stmt.
Python2Visitor.prototype.visitWhile_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#for_stmt.
Python2Visitor.prototype.visitFor_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#try_stmt.
Python2Visitor.prototype.visitTry_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#with_stmt.
Python2Visitor.prototype.visitWith_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#with_item.
Python2Visitor.prototype.visitWith_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#except_clause.
Python2Visitor.prototype.visitExcept_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#suite.
Python2Visitor.prototype.visitSuite = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#testlist_safe.
Python2Visitor.prototype.visitTestlist_safe = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#old_test.
Python2Visitor.prototype.visitOld_test = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#old_lambdef.
Python2Visitor.prototype.visitOld_lambdef = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#test.
Python2Visitor.prototype.visitTest = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#or_test.
Python2Visitor.prototype.visitOr_test = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#and_test.
Python2Visitor.prototype.visitAnd_test = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#not_test.
Python2Visitor.prototype.visitNot_test = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#comparison.
Python2Visitor.prototype.visitComparison = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#comp_op.
Python2Visitor.prototype.visitComp_op = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#expr.
Python2Visitor.prototype.visitExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#xor_expr.
Python2Visitor.prototype.visitXor_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#and_expr.
Python2Visitor.prototype.visitAnd_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#shift_expr.
Python2Visitor.prototype.visitShift_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#arith_expr.
Python2Visitor.prototype.visitArith_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#term.
Python2Visitor.prototype.visitTerm = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#factor.
Python2Visitor.prototype.visitFactor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#power.
Python2Visitor.prototype.visitPower = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#atom.
Python2Visitor.prototype.visitAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#listmaker.
Python2Visitor.prototype.visitListmaker = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#testlist_comp.
Python2Visitor.prototype.visitTestlist_comp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#lambdef.
Python2Visitor.prototype.visitLambdef = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#trailer.
Python2Visitor.prototype.visitTrailer = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#subscriptlist.
Python2Visitor.prototype.visitSubscriptlist = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#subscript.
Python2Visitor.prototype.visitSubscript = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#sliceop.
Python2Visitor.prototype.visitSliceop = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#exprlist.
Python2Visitor.prototype.visitExprlist = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#testlist.
Python2Visitor.prototype.visitTestlist = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#dictorsetmaker.
Python2Visitor.prototype.visitDictorsetmaker = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#classdef.
Python2Visitor.prototype.visitClassdef = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#arglist.
Python2Visitor.prototype.visitArglist = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#argument.
Python2Visitor.prototype.visitArgument = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#list_iter.
Python2Visitor.prototype.visitList_iter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#list_for.
Python2Visitor.prototype.visitList_for = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#list_if.
Python2Visitor.prototype.visitList_if = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#comp_iter.
Python2Visitor.prototype.visitComp_iter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#comp_for.
Python2Visitor.prototype.visitComp_for = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#comp_if.
Python2Visitor.prototype.visitComp_if = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#testlist1.
Python2Visitor.prototype.visitTestlist1 = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#encoding_decl.
Python2Visitor.prototype.visitEncoding_decl = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python2Parser#yield_expr.
Python2Visitor.prototype.visitYield_expr = function(ctx) {
  return this.visitChildren(ctx);
};



exports.Python2Visitor = Python2Visitor;