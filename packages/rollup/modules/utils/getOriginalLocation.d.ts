import type { DecodedSourceMapOrMissing } from '@rollup/types';
export declare function getOriginalLocation(sourcemapChain: readonly DecodedSourceMapOrMissing[], location: {
    column: number;
    line: number;
}): {
    column: number;
    line: number;
};
