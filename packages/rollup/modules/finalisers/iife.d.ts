import type { Bundle as MagicStringBundle } from 'magic-string';
import type { NormalizedOutputOptions } from 'rollup';
import type { FinaliserOptions } from './index';
export default function iife(magicString: MagicStringBundle, { accessedGlobals, dependencies, exports, hasDefaultExport, hasExports, indent: t, intro, namedExportsMode, log, outro, snippets }: FinaliserOptions, { compact, esModule, extend, freeze, externalLiveBindings, reexportProtoFromExternal, globals, interop, name, generatedCode: { symbols }, strict }: NormalizedOutputOptions): void;
