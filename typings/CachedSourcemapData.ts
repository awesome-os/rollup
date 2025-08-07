import type { SourceMapInput, ExistingDecodedSourceMap } from '../rollup/types';

// While the types for SourceMapInput are what we expect to recieve from plugins, there are cases
// in the wild where plugins return `{mappings: null}`, so we want this function to be a little more
// permissive on the input end so that we can normalize the output when creating the decoded sourcemap.

export type UnexpectedInput = {
	mappings: null | undefined;
};

export type Input = SourceMapInput | UnexpectedInput | ExistingDecodedSourceMap | undefined;

export type CachedSourcemapData = {
	encodedMappings?: string | undefined;
	decodedMappings?: ExistingDecodedSourceMap['mappings'] | undefined;
};
