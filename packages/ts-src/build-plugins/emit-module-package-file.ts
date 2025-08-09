import type { Plugin } from '@rollup/types';

export default function emitModulePackageFile(): Plugin {
	return {
		generateBundle() {
			this.emitFile({ fileName: 'package.json', source: `{"type":"module"}`, type: 'asset' });
		},
		name: 'emit-module-package-file'
	};
}
