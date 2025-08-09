import { type DecodedSourceMap, SourceMap } from 'magic-string';
import type Module from '../Module';
import type { DecodedSourceMapOrMissing, ExistingDecodedSourceMap, LogHandler } from 'rollup';
export declare function collapseSourcemaps(file: string, map: Omit<DecodedSourceMap, 'sourcesContent'> & {
    sourcesContent: (string | null)[];
}, modules: readonly Module[], bundleSourcemapChain: readonly DecodedSourceMapOrMissing[], excludeContent: boolean | undefined, log: LogHandler): SourceMap;
export declare function collapseSourcemap(id: string, originalCode: string, originalSourcemap: ExistingDecodedSourceMap | null, sourcemapChain: readonly DecodedSourceMapOrMissing[], log: LogHandler): ExistingDecodedSourceMap | null;
