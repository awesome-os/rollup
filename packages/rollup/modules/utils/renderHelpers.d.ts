import type MagicString from 'magic-string';
import type { Node, StatementNode } from '../ast/nodes/shared/Node';
import type Variable from '../ast/variables/Variable';
import type { ImportAttributesKey, InternalModuleFormat } from 'rollup';
import type { GenerateCodeSnippets } from './generateCodeSnippets';
import type { PluginDriver } from './PluginDriver';
export interface RenderOptions {
    accessedDocumentCurrentScript: boolean;
    exportNamesByVariable: Map<Variable, string[]>;
    format: InternalModuleFormat;
    freeze: boolean;
    indent: string;
    importAttributesKey: ImportAttributesKey;
    pluginDriver: PluginDriver;
    snippets: GenerateCodeSnippets;
    symbols: boolean;
    useOriginalName: ((variable: Variable) => boolean) | null;
}
export interface NodeRenderOptions {
    end?: number;
    isCalleeOfRenderedParent?: boolean;
    isNoStatement?: boolean;
    isShorthandProperty?: boolean;
    jsxMode?: 'preserve' | 'classic' | 'automatic';
    preventASI?: boolean;
    renderedParentType?: string;
    renderedSurroundingElement?: string;
    start?: number;
}
export declare const NO_SEMICOLON: NodeRenderOptions;
export declare function findFirstOccurrenceOutsideComment(code: string, searchString: string, start?: number): number;
export declare function findNonWhiteSpace(code: string, index: number): number;
export declare function findLastWhiteSpaceReverse(code: string, start: number, end: number): number;
export declare function findFirstLineBreakOutsideComment(code: string): [number, number];
export declare function renderStatementList(statements: readonly StatementNode[], code: MagicString, start: number, end: number, options: RenderOptions): void;
export declare function getCommaSeparatedNodesWithBoundaries<N extends Node>(nodes: readonly N[], code: MagicString, start: number, end: number): {
    contentEnd: number;
    end: number;
    node: N;
    separator: number | null;
    start: number;
}[];
export declare function removeLineBreaks(code: MagicString, start: number, end: number): void;
