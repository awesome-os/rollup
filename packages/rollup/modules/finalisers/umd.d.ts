import type { Bundle as MagicStringBundle } from 'magic-string';
import type { NormalizedOutputOptions } from '@rollup/types';
import type { FinaliserOptions } from './index';
export default function umd(magicString: MagicStringBundle, { accessedGlobals, dependencies, exports, hasDefaultExport, hasExports, id, indent: t, intro, namedExportsMode, log, outro, snippets }: FinaliserOptions, { amd, compact, esModule, extend, externalLiveBindings, freeze, interop, name, generatedCode: { symbols }, globals, noConflict, reexportProtoFromExternal, strict }: NormalizedOutputOptions): void;
