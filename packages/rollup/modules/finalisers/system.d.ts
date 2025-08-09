import type { Bundle as MagicStringBundle } from 'magic-string';
import type { NormalizedOutputOptions } from '@rollup/types';
import type { FinaliserOptions } from './index';
export default function system(magicString: MagicStringBundle, { accessedGlobals, dependencies, exports, hasExports, indent: t, intro, snippets, outro, usesTopLevelAwait }: FinaliserOptions, { externalLiveBindings, freeze, name, generatedCode: { symbols }, strict, systemNullSetters }: NormalizedOutputOptions): void;
