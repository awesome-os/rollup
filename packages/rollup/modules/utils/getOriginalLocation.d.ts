import type { DecodedSourceMapOrMissing } from 'rollup';
export declare function getOriginalLocation(sourcemapChain: readonly DecodedSourceMapOrMissing[], location: {
    column: number;
    line: number;
}): {
    column: number;
    line: number;
};
