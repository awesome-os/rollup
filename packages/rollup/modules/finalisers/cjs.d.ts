import type { Bundle as MagicStringBundle } from 'magic-string';
import type { NormalizedOutputOptions } from '@rollup/types';
import type { FinaliserOptions } from './index';
export default function cjs(magicString: MagicStringBundle, { accessedGlobals, dependencies, exports, hasDefaultExport, hasExports, indent: t, intro, isEntryFacade, isModuleFacade, namedExportsMode, outro, snippets }: FinaliserOptions, { compact, esModule, externalLiveBindings, freeze, interop, generatedCode: { symbols }, reexportProtoFromExternal, strict }: NormalizedOutputOptions): void;
