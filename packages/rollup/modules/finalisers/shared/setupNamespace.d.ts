import type { LogHandler } from '@rollup/types';
import type { GlobalsOption } from '@rollup/types';
import type { GenerateCodeSnippets } from "@rollup/types";
export default function setupNamespace(name: string, root: string, globals: GlobalsOption, { _, getPropertyAccess, s }: GenerateCodeSnippets, compact: boolean | undefined, log?: LogHandler): string;
export declare function assignToDeepVariable(deepName: string, root: string, globals: GlobalsOption, assignment: string, { _, getPropertyAccess }: GenerateCodeSnippets, log?: LogHandler): string;
