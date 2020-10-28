// Generated from /Users/libowen/Desktop/Code/gitlab.prod.dtstack.cn/dt-insight-front/infrastructure/dt-python-parser/src/grammar/python/PythonParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by PythonParser.
function PythonParserListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

PythonParserListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
PythonParserListener.prototype.constructor = PythonParserListener;

// Enter a parse tree produced by PythonParser#root.
PythonParserListener.prototype.enterRoot = function(ctx) {
};

// Exit a parse tree produced by PythonParser#root.
PythonParserListener.prototype.exitRoot = function(ctx) {
};


// Enter a parse tree produced by PythonParser#single_input.
PythonParserListener.prototype.enterSingle_input = function(ctx) {
};

// Exit a parse tree produced by PythonParser#single_input.
PythonParserListener.prototype.exitSingle_input = function(ctx) {
};


// Enter a parse tree produced by PythonParser#file_input.
PythonParserListener.prototype.enterFile_input = function(ctx) {
};

// Exit a parse tree produced by PythonParser#file_input.
PythonParserListener.prototype.exitFile_input = function(ctx) {
};


// Enter a parse tree produced by PythonParser#eval_input.
PythonParserListener.prototype.enterEval_input = function(ctx) {
};

// Exit a parse tree produced by PythonParser#eval_input.
PythonParserListener.prototype.exitEval_input = function(ctx) {
};


// Enter a parse tree produced by PythonParser#stmt.
PythonParserListener.prototype.enterStmt = function(ctx) {
};

// Exit a parse tree produced by PythonParser#stmt.
PythonParserListener.prototype.exitStmt = function(ctx) {
};


// Enter a parse tree produced by PythonParser#if_stmt.
PythonParserListener.prototype.enterIf_stmt = function(ctx) {
};

// Exit a parse tree produced by PythonParser#if_stmt.
PythonParserListener.prototype.exitIf_stmt = function(ctx) {
};


// Enter a parse tree produced by PythonParser#while_stmt.
PythonParserListener.prototype.enterWhile_stmt = function(ctx) {
};

// Exit a parse tree produced by PythonParser#while_stmt.
PythonParserListener.prototype.exitWhile_stmt = function(ctx) {
};


// Enter a parse tree produced by PythonParser#for_stmt.
PythonParserListener.prototype.enterFor_stmt = function(ctx) {
};

// Exit a parse tree produced by PythonParser#for_stmt.
PythonParserListener.prototype.exitFor_stmt = function(ctx) {
};


// Enter a parse tree produced by PythonParser#try_stmt.
PythonParserListener.prototype.enterTry_stmt = function(ctx) {
};

// Exit a parse tree produced by PythonParser#try_stmt.
PythonParserListener.prototype.exitTry_stmt = function(ctx) {
};


// Enter a parse tree produced by PythonParser#with_stmt.
PythonParserListener.prototype.enterWith_stmt = function(ctx) {
};

// Exit a parse tree produced by PythonParser#with_stmt.
PythonParserListener.prototype.exitWith_stmt = function(ctx) {
};


// Enter a parse tree produced by PythonParser#class_or_func_def_stmt.
PythonParserListener.prototype.enterClass_or_func_def_stmt = function(ctx) {
};

// Exit a parse tree produced by PythonParser#class_or_func_def_stmt.
PythonParserListener.prototype.exitClass_or_func_def_stmt = function(ctx) {
};


// Enter a parse tree produced by PythonParser#suite.
PythonParserListener.prototype.enterSuite = function(ctx) {
};

// Exit a parse tree produced by PythonParser#suite.
PythonParserListener.prototype.exitSuite = function(ctx) {
};


// Enter a parse tree produced by PythonParser#decorator.
PythonParserListener.prototype.enterDecorator = function(ctx) {
};

// Exit a parse tree produced by PythonParser#decorator.
PythonParserListener.prototype.exitDecorator = function(ctx) {
};


// Enter a parse tree produced by PythonParser#elif_clause.
PythonParserListener.prototype.enterElif_clause = function(ctx) {
};

// Exit a parse tree produced by PythonParser#elif_clause.
PythonParserListener.prototype.exitElif_clause = function(ctx) {
};


// Enter a parse tree produced by PythonParser#else_clause.
PythonParserListener.prototype.enterElse_clause = function(ctx) {
};

// Exit a parse tree produced by PythonParser#else_clause.
PythonParserListener.prototype.exitElse_clause = function(ctx) {
};


// Enter a parse tree produced by PythonParser#finally_clause.
PythonParserListener.prototype.enterFinally_clause = function(ctx) {
};

// Exit a parse tree produced by PythonParser#finally_clause.
PythonParserListener.prototype.exitFinally_clause = function(ctx) {
};


// Enter a parse tree produced by PythonParser#with_item.
PythonParserListener.prototype.enterWith_item = function(ctx) {
};

// Exit a parse tree produced by PythonParser#with_item.
PythonParserListener.prototype.exitWith_item = function(ctx) {
};


// Enter a parse tree produced by PythonParser#except_clause.
PythonParserListener.prototype.enterExcept_clause = function(ctx) {
};

// Exit a parse tree produced by PythonParser#except_clause.
PythonParserListener.prototype.exitExcept_clause = function(ctx) {
};


// Enter a parse tree produced by PythonParser#classdef.
PythonParserListener.prototype.enterClassdef = function(ctx) {
};

// Exit a parse tree produced by PythonParser#classdef.
PythonParserListener.prototype.exitClassdef = function(ctx) {
};


// Enter a parse tree produced by PythonParser#funcdef.
PythonParserListener.prototype.enterFuncdef = function(ctx) {
};

// Exit a parse tree produced by PythonParser#funcdef.
PythonParserListener.prototype.exitFuncdef = function(ctx) {
};


// Enter a parse tree produced by PythonParser#typedargslist.
PythonParserListener.prototype.enterTypedargslist = function(ctx) {
};

// Exit a parse tree produced by PythonParser#typedargslist.
PythonParserListener.prototype.exitTypedargslist = function(ctx) {
};


// Enter a parse tree produced by PythonParser#args.
PythonParserListener.prototype.enterArgs = function(ctx) {
};

// Exit a parse tree produced by PythonParser#args.
PythonParserListener.prototype.exitArgs = function(ctx) {
};


// Enter a parse tree produced by PythonParser#kwargs.
PythonParserListener.prototype.enterKwargs = function(ctx) {
};

// Exit a parse tree produced by PythonParser#kwargs.
PythonParserListener.prototype.exitKwargs = function(ctx) {
};


// Enter a parse tree produced by PythonParser#def_parameters.
PythonParserListener.prototype.enterDef_parameters = function(ctx) {
};

// Exit a parse tree produced by PythonParser#def_parameters.
PythonParserListener.prototype.exitDef_parameters = function(ctx) {
};


// Enter a parse tree produced by PythonParser#def_parameter.
PythonParserListener.prototype.enterDef_parameter = function(ctx) {
};

// Exit a parse tree produced by PythonParser#def_parameter.
PythonParserListener.prototype.exitDef_parameter = function(ctx) {
};


// Enter a parse tree produced by PythonParser#named_parameter.
PythonParserListener.prototype.enterNamed_parameter = function(ctx) {
};

// Exit a parse tree produced by PythonParser#named_parameter.
PythonParserListener.prototype.exitNamed_parameter = function(ctx) {
};


// Enter a parse tree produced by PythonParser#simple_stmt.
PythonParserListener.prototype.enterSimple_stmt = function(ctx) {
};

// Exit a parse tree produced by PythonParser#simple_stmt.
PythonParserListener.prototype.exitSimple_stmt = function(ctx) {
};


// Enter a parse tree produced by PythonParser#expr_stmt.
PythonParserListener.prototype.enterExpr_stmt = function(ctx) {
};

// Exit a parse tree produced by PythonParser#expr_stmt.
PythonParserListener.prototype.exitExpr_stmt = function(ctx) {
};


// Enter a parse tree produced by PythonParser#print_stmt.
PythonParserListener.prototype.enterPrint_stmt = function(ctx) {
};

// Exit a parse tree produced by PythonParser#print_stmt.
PythonParserListener.prototype.exitPrint_stmt = function(ctx) {
};


// Enter a parse tree produced by PythonParser#del_stmt.
PythonParserListener.prototype.enterDel_stmt = function(ctx) {
};

// Exit a parse tree produced by PythonParser#del_stmt.
PythonParserListener.prototype.exitDel_stmt = function(ctx) {
};


// Enter a parse tree produced by PythonParser#pass_stmt.
PythonParserListener.prototype.enterPass_stmt = function(ctx) {
};

// Exit a parse tree produced by PythonParser#pass_stmt.
PythonParserListener.prototype.exitPass_stmt = function(ctx) {
};


// Enter a parse tree produced by PythonParser#break_stmt.
PythonParserListener.prototype.enterBreak_stmt = function(ctx) {
};

// Exit a parse tree produced by PythonParser#break_stmt.
PythonParserListener.prototype.exitBreak_stmt = function(ctx) {
};


// Enter a parse tree produced by PythonParser#continue_stmt.
PythonParserListener.prototype.enterContinue_stmt = function(ctx) {
};

// Exit a parse tree produced by PythonParser#continue_stmt.
PythonParserListener.prototype.exitContinue_stmt = function(ctx) {
};


// Enter a parse tree produced by PythonParser#return_stmt.
PythonParserListener.prototype.enterReturn_stmt = function(ctx) {
};

// Exit a parse tree produced by PythonParser#return_stmt.
PythonParserListener.prototype.exitReturn_stmt = function(ctx) {
};


// Enter a parse tree produced by PythonParser#raise_stmt.
PythonParserListener.prototype.enterRaise_stmt = function(ctx) {
};

// Exit a parse tree produced by PythonParser#raise_stmt.
PythonParserListener.prototype.exitRaise_stmt = function(ctx) {
};


// Enter a parse tree produced by PythonParser#yield_stmt.
PythonParserListener.prototype.enterYield_stmt = function(ctx) {
};

// Exit a parse tree produced by PythonParser#yield_stmt.
PythonParserListener.prototype.exitYield_stmt = function(ctx) {
};


// Enter a parse tree produced by PythonParser#import_stmt.
PythonParserListener.prototype.enterImport_stmt = function(ctx) {
};

// Exit a parse tree produced by PythonParser#import_stmt.
PythonParserListener.prototype.exitImport_stmt = function(ctx) {
};


// Enter a parse tree produced by PythonParser#from_stmt.
PythonParserListener.prototype.enterFrom_stmt = function(ctx) {
};

// Exit a parse tree produced by PythonParser#from_stmt.
PythonParserListener.prototype.exitFrom_stmt = function(ctx) {
};


// Enter a parse tree produced by PythonParser#global_stmt.
PythonParserListener.prototype.enterGlobal_stmt = function(ctx) {
};

// Exit a parse tree produced by PythonParser#global_stmt.
PythonParserListener.prototype.exitGlobal_stmt = function(ctx) {
};


// Enter a parse tree produced by PythonParser#exec_stmt.
PythonParserListener.prototype.enterExec_stmt = function(ctx) {
};

// Exit a parse tree produced by PythonParser#exec_stmt.
PythonParserListener.prototype.exitExec_stmt = function(ctx) {
};


// Enter a parse tree produced by PythonParser#assert_stmt.
PythonParserListener.prototype.enterAssert_stmt = function(ctx) {
};

// Exit a parse tree produced by PythonParser#assert_stmt.
PythonParserListener.prototype.exitAssert_stmt = function(ctx) {
};


// Enter a parse tree produced by PythonParser#nonlocal_stmt.
PythonParserListener.prototype.enterNonlocal_stmt = function(ctx) {
};

// Exit a parse tree produced by PythonParser#nonlocal_stmt.
PythonParserListener.prototype.exitNonlocal_stmt = function(ctx) {
};


// Enter a parse tree produced by PythonParser#testlist_star_expr.
PythonParserListener.prototype.enterTestlist_star_expr = function(ctx) {
};

// Exit a parse tree produced by PythonParser#testlist_star_expr.
PythonParserListener.prototype.exitTestlist_star_expr = function(ctx) {
};


// Enter a parse tree produced by PythonParser#star_expr.
PythonParserListener.prototype.enterStar_expr = function(ctx) {
};

// Exit a parse tree produced by PythonParser#star_expr.
PythonParserListener.prototype.exitStar_expr = function(ctx) {
};


// Enter a parse tree produced by PythonParser#assign_part.
PythonParserListener.prototype.enterAssign_part = function(ctx) {
};

// Exit a parse tree produced by PythonParser#assign_part.
PythonParserListener.prototype.exitAssign_part = function(ctx) {
};


// Enter a parse tree produced by PythonParser#exprlist.
PythonParserListener.prototype.enterExprlist = function(ctx) {
};

// Exit a parse tree produced by PythonParser#exprlist.
PythonParserListener.prototype.exitExprlist = function(ctx) {
};


// Enter a parse tree produced by PythonParser#import_as_names.
PythonParserListener.prototype.enterImport_as_names = function(ctx) {
};

// Exit a parse tree produced by PythonParser#import_as_names.
PythonParserListener.prototype.exitImport_as_names = function(ctx) {
};


// Enter a parse tree produced by PythonParser#import_as_name.
PythonParserListener.prototype.enterImport_as_name = function(ctx) {
};

// Exit a parse tree produced by PythonParser#import_as_name.
PythonParserListener.prototype.exitImport_as_name = function(ctx) {
};


// Enter a parse tree produced by PythonParser#dotted_as_names.
PythonParserListener.prototype.enterDotted_as_names = function(ctx) {
};

// Exit a parse tree produced by PythonParser#dotted_as_names.
PythonParserListener.prototype.exitDotted_as_names = function(ctx) {
};


// Enter a parse tree produced by PythonParser#dotted_as_name.
PythonParserListener.prototype.enterDotted_as_name = function(ctx) {
};

// Exit a parse tree produced by PythonParser#dotted_as_name.
PythonParserListener.prototype.exitDotted_as_name = function(ctx) {
};


// Enter a parse tree produced by PythonParser#test.
PythonParserListener.prototype.enterTest = function(ctx) {
};

// Exit a parse tree produced by PythonParser#test.
PythonParserListener.prototype.exitTest = function(ctx) {
};


// Enter a parse tree produced by PythonParser#varargslist.
PythonParserListener.prototype.enterVarargslist = function(ctx) {
};

// Exit a parse tree produced by PythonParser#varargslist.
PythonParserListener.prototype.exitVarargslist = function(ctx) {
};


// Enter a parse tree produced by PythonParser#vardef_parameters.
PythonParserListener.prototype.enterVardef_parameters = function(ctx) {
};

// Exit a parse tree produced by PythonParser#vardef_parameters.
PythonParserListener.prototype.exitVardef_parameters = function(ctx) {
};


// Enter a parse tree produced by PythonParser#vardef_parameter.
PythonParserListener.prototype.enterVardef_parameter = function(ctx) {
};

// Exit a parse tree produced by PythonParser#vardef_parameter.
PythonParserListener.prototype.exitVardef_parameter = function(ctx) {
};


// Enter a parse tree produced by PythonParser#varargs.
PythonParserListener.prototype.enterVarargs = function(ctx) {
};

// Exit a parse tree produced by PythonParser#varargs.
PythonParserListener.prototype.exitVarargs = function(ctx) {
};


// Enter a parse tree produced by PythonParser#varkwargs.
PythonParserListener.prototype.enterVarkwargs = function(ctx) {
};

// Exit a parse tree produced by PythonParser#varkwargs.
PythonParserListener.prototype.exitVarkwargs = function(ctx) {
};


// Enter a parse tree produced by PythonParser#logical_test.
PythonParserListener.prototype.enterLogical_test = function(ctx) {
};

// Exit a parse tree produced by PythonParser#logical_test.
PythonParserListener.prototype.exitLogical_test = function(ctx) {
};


// Enter a parse tree produced by PythonParser#comparison.
PythonParserListener.prototype.enterComparison = function(ctx) {
};

// Exit a parse tree produced by PythonParser#comparison.
PythonParserListener.prototype.exitComparison = function(ctx) {
};


// Enter a parse tree produced by PythonParser#expr.
PythonParserListener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by PythonParser#expr.
PythonParserListener.prototype.exitExpr = function(ctx) {
};


// Enter a parse tree produced by PythonParser#atom.
PythonParserListener.prototype.enterAtom = function(ctx) {
};

// Exit a parse tree produced by PythonParser#atom.
PythonParserListener.prototype.exitAtom = function(ctx) {
};


// Enter a parse tree produced by PythonParser#dictorsetmaker.
PythonParserListener.prototype.enterDictorsetmaker = function(ctx) {
};

// Exit a parse tree produced by PythonParser#dictorsetmaker.
PythonParserListener.prototype.exitDictorsetmaker = function(ctx) {
};


// Enter a parse tree produced by PythonParser#testlist_comp.
PythonParserListener.prototype.enterTestlist_comp = function(ctx) {
};

// Exit a parse tree produced by PythonParser#testlist_comp.
PythonParserListener.prototype.exitTestlist_comp = function(ctx) {
};


// Enter a parse tree produced by PythonParser#testlist.
PythonParserListener.prototype.enterTestlist = function(ctx) {
};

// Exit a parse tree produced by PythonParser#testlist.
PythonParserListener.prototype.exitTestlist = function(ctx) {
};


// Enter a parse tree produced by PythonParser#dotted_name.
PythonParserListener.prototype.enterDotted_name = function(ctx) {
};

// Exit a parse tree produced by PythonParser#dotted_name.
PythonParserListener.prototype.exitDotted_name = function(ctx) {
};


// Enter a parse tree produced by PythonParser#name.
PythonParserListener.prototype.enterName = function(ctx) {
};

// Exit a parse tree produced by PythonParser#name.
PythonParserListener.prototype.exitName = function(ctx) {
};


// Enter a parse tree produced by PythonParser#number.
PythonParserListener.prototype.enterNumber = function(ctx) {
};

// Exit a parse tree produced by PythonParser#number.
PythonParserListener.prototype.exitNumber = function(ctx) {
};


// Enter a parse tree produced by PythonParser#integer.
PythonParserListener.prototype.enterInteger = function(ctx) {
};

// Exit a parse tree produced by PythonParser#integer.
PythonParserListener.prototype.exitInteger = function(ctx) {
};


// Enter a parse tree produced by PythonParser#yield_expr.
PythonParserListener.prototype.enterYield_expr = function(ctx) {
};

// Exit a parse tree produced by PythonParser#yield_expr.
PythonParserListener.prototype.exitYield_expr = function(ctx) {
};


// Enter a parse tree produced by PythonParser#yield_arg.
PythonParserListener.prototype.enterYield_arg = function(ctx) {
};

// Exit a parse tree produced by PythonParser#yield_arg.
PythonParserListener.prototype.exitYield_arg = function(ctx) {
};


// Enter a parse tree produced by PythonParser#trailer.
PythonParserListener.prototype.enterTrailer = function(ctx) {
};

// Exit a parse tree produced by PythonParser#trailer.
PythonParserListener.prototype.exitTrailer = function(ctx) {
};


// Enter a parse tree produced by PythonParser#arguments.
PythonParserListener.prototype.enterArguments = function(ctx) {
};

// Exit a parse tree produced by PythonParser#arguments.
PythonParserListener.prototype.exitArguments = function(ctx) {
};


// Enter a parse tree produced by PythonParser#arglist.
PythonParserListener.prototype.enterArglist = function(ctx) {
};

// Exit a parse tree produced by PythonParser#arglist.
PythonParserListener.prototype.exitArglist = function(ctx) {
};


// Enter a parse tree produced by PythonParser#argument.
PythonParserListener.prototype.enterArgument = function(ctx) {
};

// Exit a parse tree produced by PythonParser#argument.
PythonParserListener.prototype.exitArgument = function(ctx) {
};


// Enter a parse tree produced by PythonParser#subscriptlist.
PythonParserListener.prototype.enterSubscriptlist = function(ctx) {
};

// Exit a parse tree produced by PythonParser#subscriptlist.
PythonParserListener.prototype.exitSubscriptlist = function(ctx) {
};


// Enter a parse tree produced by PythonParser#subscript.
PythonParserListener.prototype.enterSubscript = function(ctx) {
};

// Exit a parse tree produced by PythonParser#subscript.
PythonParserListener.prototype.exitSubscript = function(ctx) {
};


// Enter a parse tree produced by PythonParser#sliceop.
PythonParserListener.prototype.enterSliceop = function(ctx) {
};

// Exit a parse tree produced by PythonParser#sliceop.
PythonParserListener.prototype.exitSliceop = function(ctx) {
};


// Enter a parse tree produced by PythonParser#comp_for.
PythonParserListener.prototype.enterComp_for = function(ctx) {
};

// Exit a parse tree produced by PythonParser#comp_for.
PythonParserListener.prototype.exitComp_for = function(ctx) {
};


// Enter a parse tree produced by PythonParser#comp_iter.
PythonParserListener.prototype.enterComp_iter = function(ctx) {
};

// Exit a parse tree produced by PythonParser#comp_iter.
PythonParserListener.prototype.exitComp_iter = function(ctx) {
};



exports.PythonParserListener = PythonParserListener;