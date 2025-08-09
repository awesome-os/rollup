import type { Node, NodeRenderOptions, RenderOptions, StatementNode } from '@rollup/types';
import type MagicString from 'magic-string';
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
