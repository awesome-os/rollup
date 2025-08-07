import type {
	NormalizedGeneratedCodeOptions,
	NormalizedJsxOptions,
	NormalizedTreeshakingOptions
} from '../src/rollup/types';

export type ObjectOptionWithPresets =
	| Partial<NormalizedTreeshakingOptions>
	| Partial<NormalizedGeneratedCodeOptions>
	| Partial<NormalizedJsxOptions>;
