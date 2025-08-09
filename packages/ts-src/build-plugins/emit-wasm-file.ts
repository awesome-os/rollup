import type { Plugin } from '@rollup/types';
import { readFile } from 'node:fs/promises';

export default function emitWasmFile(): Plugin {
	return {
		async generateBundle() {
			this.emitFile({
				fileName: 'bindings_wasm_bg.wasm',
				source: await readFile('wasm/bindings_wasm_bg.wasm'),
				type: 'asset'
			});
		},
		name: 'emit-wasm-file'
	};
}
