/**
 * This file is ahead of the typescript src file!!!!
 */
/* eslint-disable sort-keys */
import addCliEntry from '@rollup/build-plugins/add-cli-entry';
import { moduleAliases } from '@rollup/build-plugins/aliases';
import cleanBeforeWrite from '@rollup/build-plugins/clean-before-write';
import { copyBrowserTypes, copyNodeTypes } from '@rollup/build-plugins/copy-types';
import emitModulePackageFile from '@rollup/build-plugins/emit-module-package-file';
import { emitNativeEntry } from '@rollup/build-plugins/emit-native-entry';
import emitWasmFile from '@rollup/build-plugins/emit-wasm-file';
import esmDynamicImport from '@rollup/build-plugins/esm-dynamic-import';
import { externalNativeImport } from '@rollup/build-plugins/external-native-import';
import { fsEventsReplacement } from '@rollup/build-plugins/fs-events-replacement';
import getLicenseHandler from '@rollup/build-plugins/generate-license-file';
import getBanner from '@rollup/build-plugins/get-banner';
import replaceBrowserModules from '@rollup/build-plugins/replace-browser-modules';
import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
// import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import '@rollup/types/declarations';
import { fileURLToPath } from 'node:url';
import { string } from 'rollup-plugin-string';
const onwarn = warning => {
	console.error(
		'Building Rollup produced warnings that need to be resolved. ' +
			'Please keep in mind that the browser build may never have external dependencies!'
	);
	throw Object.assign(new Error(), warning);
};
const treeshake = {
	moduleSideEffects: false,
	propertyReadSideEffects: false,
	tryCatchDeoptimization: false
};
const nodePlugins = [
	replace(fsEventsReplacement),
	alias(moduleAliases),
	nodeResolve({ preferBuiltins: true }),
	json(),
	string({ include: '**/*.md' }),
	commonjs({
		ignoreTryCatch: false,
		include: 'node_modules/**'
	}),
	typescript(),
	cleanBeforeWrite('dist'),
	externalNativeImport()
];
export const { collectLicenses, writeLicense } = getLicenseHandler(
	fileURLToPath(new URL('.', import.meta.url))
);

export const { collectLicenses: collectLicensesBrowser, writeLicense: writeLicenseBrowser } =
	getLicenseHandler(fileURLToPath(new URL('browser', import.meta.url)));
export const browserBuilds = {
	input: 'src/browser-entry.ts',
	onwarn,
	output: [
		{
			banner: getBanner,
			file: 'browser/dist/rollup.browser.js',
			format: 'umd',
			name: 'rollup',
			plugins: [copyBrowserTypes()],
			sourcemap: true
		},
		{
			banner: getBanner,
			file: 'browser/dist/es/rollup.browser.js',
			format: 'es',
			plugins: [emitModulePackageFile()]
		}
	],
	plugins: [
		replaceBrowserModules(),
		alias(moduleAliases),
		nodeResolve({ browser: true }),
		json(),
		//commonjs(),
		//typescript(),
		//terser({ module: true, output: { comments: 'some' } }),
		collectLicensesBrowser(),
		writeLicenseBrowser(),
		cleanBeforeWrite('browser/dist'),
		emitWasmFile()
	],
	strictDeprecations: true,
	treeshake
};

// TODO: at present the cjs build builds the cli which is not needed anymore.
export default async function getConfig(command) {
	const cjsOutputConfig = {
		banner: getBanner,
		chunkFileNames: 'shared/[name].js',
		dir: 'dist',
		entryFileNames: '[name]',
		exports: 'named',
		externalLiveBindings: false,
		format: 'cjs',
		freeze: false,
		generatedCode: 'es2015',
		interop: 'default',
		sourcemap: true
	};
	const commonJSBuild = {
		input: {
			'getLogFilter.js': 'src/utils/getLogFilter.ts',
			'loadConfigFile.js': 'cli/run/loadConfigFile.ts',
			'parseAst.js': 'src/utils/parseAst.ts',
			'rollup.js': 'src/node-entry.ts'
		},
		output: cjsOutputConfig,
		// 'fsevents' is a dependency of 'chokidar' that cannot be bundled as it contains binary code
		external: ['fsevents'],
		onwarn,
		plugins: [
			...nodePlugins,
			emitNativeEntry(),
			addCliEntry(),
			esmDynamicImport(),
			!command.configTest && collectLicenses(),
			copyNodeTypes()
		],
		strictDeprecations: true,
		treeshake
	};
	const esmBuild = {
		...commonJSBuild,
		input: {
			'getLogFilter.js': 'src/utils/getLogFilter.ts',
			'parseAst.js': 'src/utils/parseAst.ts',
			'rollup.js': 'src/node-entry.ts'
		},
		output: {
			...commonJSBuild.output,
			dir: 'dist/es',
			format: 'es',
			minifyInternalExports: false,
			sourcemap: false
		},
		plugins: [...nodePlugins, emitModulePackageFile(), collectLicenses(), writeLicense()]
	};
	if (command.configIsBuildNode) {
		return [commonJSBuild, esmBuild];
	}

	return [
		esmBuild
		// TODO: Enable Browser build maybe later
		//	browserBuilds
	];
}
