#!/usr/bin/env node
import help from 'help.md';
import process from 'node:process';
import { VERSION } from 'rollup/version';
import argParser from 'yargs-parser';
import { commandAliases } from '../src/utils/options/mergeOptions';
import run from './run/index';

const command = argParser(process.argv.slice(2), {
	alias: commandAliases,
	configuration: { 'camel-case-expansion': false }
});

if (command.help || (process.argv.length <= 2 && process.stdin.isTTY)) {
	console.log(`\n${help.replace('__VERSION__', VERSION)}\n`);
} else if (command.version) {
	console.log(`rollup v${VERSION}`);
} else {
	try {
		// eslint-disable-next-line @typescript-eslint/no-require-imports
		require('source-map-support').install();
	} catch {
		// do nothing
	}

	const promise = run(command);
	if (command.forceExit) {
		promise.then(() => process.exit());
	}
}
