import type * as estree from 'estree';
import type { RollupAstNode } from '@rollup/types';
import type { RollupAnnotation } from '@rollup/types';
import { ANNOTATION_KEY, INVALID_ANNOTATION_KEY } from './astConverterHelpers';
import type { AstBuffer } from './getAstBuffer';
export declare function convertProgram(buffer: AstBuffer): ProgramNode;
export type PanicErrorNode = RollupAstNode<{
    type: 'PanicError';
    message: string;
}>;
export type ParseErrorNode = RollupAstNode<{
    type: 'ParseError';
    message: string;
}>;
export type ArrayExpressionNode = RollupAstNode<estree.ArrayExpression>;
export type ArrayPatternNode = RollupAstNode<estree.ArrayPattern>;
export type ArrowFunctionExpressionNode = RollupAstNode<estree.ArrowFunctionExpression> & {
    [ANNOTATION_KEY]?: readonly RollupAnnotation[];
    id: null;
};
export type AssignmentExpressionNode = RollupAstNode<estree.AssignmentExpression>;
export type AssignmentPatternNode = RollupAstNode<estree.AssignmentPattern>;
export type AwaitExpressionNode = RollupAstNode<estree.AwaitExpression>;
export type BinaryExpressionNode = RollupAstNode<estree.BinaryExpression>;
export type BlockStatementNode = RollupAstNode<estree.BlockStatement>;
export type BreakStatementNode = RollupAstNode<estree.BreakStatement>;
export type CallExpressionNode = RollupAstNode<estree.SimpleCallExpression> & {
    [ANNOTATION_KEY]?: readonly RollupAnnotation[];
};
export type CatchClauseNode = RollupAstNode<estree.CatchClause>;
export type ChainExpressionNode = RollupAstNode<estree.ChainExpression>;
export type ClassBodyNode = RollupAstNode<estree.ClassBody>;
export type ClassDeclarationNode = RollupAstNode<estree.ClassDeclaration>;
export type ClassExpressionNode = RollupAstNode<estree.ClassExpression>;
export type ConditionalExpressionNode = RollupAstNode<estree.ConditionalExpression>;
export type ContinueStatementNode = RollupAstNode<estree.ContinueStatement>;
export type DebuggerStatementNode = RollupAstNode<estree.DebuggerStatement>;
export type DecoratorNode = RollupAstNode<estree.Decorator>;
export type DirectiveNode = RollupAstNode<estree.Directive>;
export type DoWhileStatementNode = RollupAstNode<estree.DoWhileStatement>;
export type EmptyStatementNode = RollupAstNode<estree.EmptyStatement>;
export type ExportAllDeclarationNode = RollupAstNode<estree.ExportAllDeclaration & {
    attributes: ImportAttributeNode[];
}>;
export type ExportDefaultDeclarationNode = RollupAstNode<estree.ExportDefaultDeclaration>;
export type ExportNamedDeclarationNode = RollupAstNode<estree.ExportNamedDeclaration & {
    attributes: ImportAttributeNode[];
}>;
export type ExportSpecifierNode = RollupAstNode<estree.ExportSpecifier>;
export type ExpressionStatementNode = RollupAstNode<estree.ExpressionStatement>;
export type ForInStatementNode = RollupAstNode<estree.ForInStatement>;
export type ForOfStatementNode = RollupAstNode<estree.ForOfStatement>;
export type ForStatementNode = RollupAstNode<estree.ForStatement>;
export type FunctionDeclarationNode = RollupAstNode<estree.FunctionDeclaration> & {
    [ANNOTATION_KEY]?: readonly RollupAnnotation[];
    expression: false;
};
export type FunctionExpressionNode = RollupAstNode<estree.FunctionExpression> & {
    [ANNOTATION_KEY]?: readonly RollupAnnotation[];
    expression: false;
};
export type IdentifierNode = RollupAstNode<estree.Identifier>;
export type IfStatementNode = RollupAstNode<estree.IfStatement>;
export type ImportAttributeNode = RollupAstNode<{
    key: estree.Identifier | estree.Literal;
    type: 'ImportAttribute';
    value: estree.Literal;
}>;
export type ImportDeclarationNode = RollupAstNode<estree.ImportDeclaration & {
    attributes: ImportAttributeNode[];
}>;
export type ImportDefaultSpecifierNode = RollupAstNode<estree.ImportDefaultSpecifier>;
export type ImportExpressionNode = RollupAstNode<estree.ImportExpression & {
    options: estree.Expression | null;
}>;
export type ImportNamespaceSpecifierNode = RollupAstNode<estree.ImportNamespaceSpecifier>;
export type ImportSpecifierNode = RollupAstNode<estree.ImportSpecifier>;
export type JSXAttributeNode = RollupAstNode<any>;
export type JSXClosingElementNode = RollupAstNode<any>;
export type JSXClosingFragmentNode = RollupAstNode<any>;
export type JSXElementNode = RollupAstNode<any>;
export type JSXEmptyExpressionNode = RollupAstNode<any>;
export type JSXExpressionContainerNode = RollupAstNode<any>;
export type JSXFragmentNode = RollupAstNode<any>;
export type JSXIdentifierNode = RollupAstNode<any>;
export type JSXMemberExpressionNode = RollupAstNode<any>;
export type JSXNamespacedNameNode = RollupAstNode<any>;
export type JSXOpeningElementNode = RollupAstNode<any>;
export type JSXOpeningFragmentNode = RollupAstNode<any>;
export type JSXSpreadAttributeNode = RollupAstNode<any>;
export type JSXSpreadChildNode = RollupAstNode<any>;
export type JSXTextNode = RollupAstNode<any>;
export type LabeledStatementNode = RollupAstNode<estree.LabeledStatement>;
export type LiteralBigIntNode = RollupAstNode<estree.BigIntLiteral>;
export type LiteralBooleanNode = RollupAstNode<estree.SimpleLiteral & {
    value: boolean;
}>;
export type LiteralNullNode = RollupAstNode<estree.SimpleLiteral & {
    value: null;
}> & {
    raw: 'null';
};
export type LiteralNumberNode = RollupAstNode<estree.SimpleLiteral & {
    value: number;
}>;
export type LiteralRegExpNode = RollupAstNode<estree.RegExpLiteral>;
export type LiteralStringNode = RollupAstNode<estree.SimpleLiteral & {
    value: string;
}>;
export type LogicalExpressionNode = RollupAstNode<estree.LogicalExpression>;
export type MemberExpressionNode = RollupAstNode<estree.MemberExpression>;
export type MetaPropertyNode = RollupAstNode<estree.MetaProperty>;
export type MethodDefinitionNode = RollupAstNode<estree.MethodDefinition>;
export type NewExpressionNode = RollupAstNode<estree.NewExpression> & {
    [ANNOTATION_KEY]?: readonly RollupAnnotation[];
};
export type ObjectExpressionNode = RollupAstNode<estree.ObjectExpression>;
export type ObjectPatternNode = RollupAstNode<estree.ObjectPattern>;
export type PrivateIdentifierNode = RollupAstNode<estree.PrivateIdentifier>;
export type ProgramNode = RollupAstNode<estree.Program> & {
    [INVALID_ANNOTATION_KEY]?: readonly RollupAnnotation[];
    sourceType: 'module';
};
export type PropertyNode = RollupAstNode<estree.Property>;
export type PropertyDefinitionNode = RollupAstNode<estree.PropertyDefinition>;
export type RestElementNode = RollupAstNode<estree.RestElement>;
export type ReturnStatementNode = RollupAstNode<estree.ReturnStatement>;
export type SequenceExpressionNode = RollupAstNode<estree.SequenceExpression>;
export type SpreadElementNode = RollupAstNode<estree.SpreadElement>;
export type StaticBlockNode = RollupAstNode<estree.StaticBlock>;
export type SuperElementNode = RollupAstNode<estree.Super>;
export type SwitchCaseNode = RollupAstNode<estree.SwitchCase>;
export type SwitchStatementNode = RollupAstNode<estree.SwitchStatement>;
export type TaggedTemplateExpressionNode = RollupAstNode<estree.TaggedTemplateExpression>;
export type TemplateElementNode = RollupAstNode<estree.TemplateElement>;
export type TemplateLiteralNode = RollupAstNode<estree.TemplateLiteral>;
export type ThisExpressionNode = RollupAstNode<estree.ThisExpression>;
export type ThrowStatementNode = RollupAstNode<estree.ThrowStatement>;
export type TryStatementNode = RollupAstNode<estree.TryStatement>;
export type UnaryExpressionNode = RollupAstNode<estree.UnaryExpression> & {
    prefix: true;
};
export type UpdateExpressionNode = RollupAstNode<estree.UpdateExpression>;
export type VariableDeclarationNode = RollupAstNode<estree.VariableDeclaration>;
export type VariableDeclaratorNode = RollupAstNode<estree.VariableDeclarator>;
export type WhileStatementNode = RollupAstNode<estree.WhileStatement>;
export type YieldExpressionNode = RollupAstNode<estree.YieldExpression>;
export declare function convertNode(position: number, buffer: AstBuffer): any;
