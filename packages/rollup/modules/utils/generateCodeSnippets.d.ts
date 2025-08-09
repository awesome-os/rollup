import type { NormalizedOutputOptions } from 'rollup';
export interface GenerateCodeSnippets {
    _: string;
    cnst: string;
    n: string;
    s: string;
    getDirectReturnFunction(parameters: string[], options: {
        functionReturn: boolean;
        lineBreakIndent: {
            base: string;
            t: string;
        } | null;
        name: string | null;
    }): [left: string, right: string];
    getDirectReturnIifeLeft(parameters: string[], returned: string, options: {
        needsArrowReturnParens: boolean | undefined;
        needsWrappedFunction: boolean | undefined;
    }): string;
    getFunctionIntro(parameters: string[], options: {
        isAsync: boolean;
        name: string | null;
    }): string;
    getNonArrowFunctionIntro(parameters: string[], options: {
        isAsync: boolean;
        name: string | null;
    }): string;
    getObject(fields: [key: string | null, value: string][], options: {
        lineBreakIndent: {
            base: string;
            t: string;
        } | null;
    }): string;
    getPropertyAccess(name: string): string;
}
export declare function getGenerateCodeSnippets({ compact, generatedCode: { arrowFunctions, constBindings, objectShorthand, reservedNamesAsProps } }: NormalizedOutputOptions): GenerateCodeSnippets;
