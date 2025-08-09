import type { Plugin } from '@rollup/types';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

function copyRollupType(
	fileName: string,
	inputFile = 'src/rollup/types.d.ts',
	rollupImportPath?: string
): Plugin {
	return {
		async generateBundle(_options, _bundle, isWrite) {
			if (isWrite) {
				let source = await readFile(resolve(inputFile), 'utf8');
				if (rollupImportPath) {
					source = source.replace(rollupImportPath, './rollup');
				}
				this.emitFile({ fileName, source, type: 'asset' });
			}
		},
		name: 'copy-rollup-type'
	};
}

export function copyBrowserTypes(): Plugin {
	return copyRollupType('rollup.browser.d.ts');
}

export function copyNodeTypes(): Plugin[] {
	return [
		copyRollupType('rollup.d.ts'),
		copyRollupType(
			'loadConfigFile.d.ts',
			'cli/run/loadConfigFileType.d.ts',
			'@rollup/types'
		),
		copyRollupType('getLogFilter.d.ts', 'src/utils/getLogFilterType.d.ts', '../rollup/types'),
		copyRollupType('parseAst.d.ts', 'src/utils/parseAstType.d.ts', '../rollup/types')
	];
}
