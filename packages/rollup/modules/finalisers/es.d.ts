import type { Bundle as MagicStringBundle } from 'magic-string';
import type { NormalizedOutputOptions } from 'rollup';
import type { FinaliserOptions } from './index';
export default function es(magicString: MagicStringBundle, { accessedGlobals, indent: t, intro, outro, dependencies, exports, snippets }: FinaliserOptions, { externalLiveBindings, freeze, generatedCode: { symbols }, importAttributesKey }: NormalizedOutputOptions): void;
