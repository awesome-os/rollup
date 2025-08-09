import type MagicString from 'magic-string';
import type Variable from '../ast/variables/Variable';
import type { RenderOptions } from './renderHelpers';
export declare function getSystemExportStatement(exportedVariables: readonly Variable[], { exportNamesByVariable, snippets: { _, getObject, getPropertyAccess } }: RenderOptions, modifier?: string): string;
export declare function renderSystemExportExpression(exportedVariable: Variable, expressionStart: number, expressionEnd: number, code: MagicString, { exportNamesByVariable, snippets: { _ } }: RenderOptions): void;
export declare function renderSystemExportFunction(exportedVariables: readonly Variable[], expressionStart: number, expressionEnd: number, needsParens: boolean | undefined, code: MagicString, options: RenderOptions): void;
export declare function renderSystemExportSequenceAfterExpression(exportedVariable: Variable, expressionStart: number, expressionEnd: number, needsParens: boolean | undefined, code: MagicString, options: RenderOptions): void;
export declare function renderSystemExportSequenceBeforeExpression(exportedVariable: Variable, expressionStart: number, expressionEnd: number, needsParens: boolean | undefined, code: MagicString, options: RenderOptions, modifier: string): void;
