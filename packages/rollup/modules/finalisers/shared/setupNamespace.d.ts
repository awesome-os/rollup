import type { LogHandler } from 'rollup';
import type { GlobalsOption } from 'rollup';
import type { GenerateCodeSnippets } from '../../utils/generateCodeSnippets';
export default function setupNamespace(name: string, root: string, globals: GlobalsOption, { _, getPropertyAccess, s }: GenerateCodeSnippets, compact: boolean | undefined, log?: LogHandler): string;
export declare function assignToDeepVariable(deepName: string, root: string, globals: GlobalsOption, assignment: string, { _, getPropertyAccess }: GenerateCodeSnippets, log?: LogHandler): string;
