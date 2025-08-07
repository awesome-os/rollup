import type { NormalizedTreeshakingOptions, NormalizedGeneratedCodeOptions, NormalizedJsxOptions } from '../../rollup/types';

export type ObjectOptionWithPresets = Partial<NormalizedTreeshakingOptions> |
	Partial<NormalizedGeneratedCodeOptions> |
	Partial<NormalizedJsxOptions>;
