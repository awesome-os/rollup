import type { Bundle as MagicStringBundle } from 'magic-string';
import type { NormalizedOutputOptions } from '@rollup/types';
import type { FinaliserOptions } from './index';
export default function amd(magicString: MagicStringBundle, { accessedGlobals, dependencies, exports, hasDefaultExport, hasExports, id, indent: t, intro, isEntryFacade, isModuleFacade, namedExportsMode, log, outro, snippets }: FinaliserOptions, { amd, esModule, externalLiveBindings, freeze, generatedCode: { symbols }, interop, reexportProtoFromExternal, strict }: NormalizedOutputOptions): void;
