# npm-packages

{ "name": "@rollup/cli", "main": "./cli.js", "exports": {
    ".": "./cli.js",
    "./*": "./*"
}}

console.log(import.meta.resolve('@rollup/cli/run'));

  "exports": {
    "./*.js": "./*.js",
    "./*": "./*.js"
  }

you can only default to a single extension per rule as the * is a string replacement pattern. 1 to 1 relation.

This is usefull to know when resolution in TypeScript is Bundler or NodeNext you can with this behavior mock types.

## Conclusion
you can use import.meta.resolve in combination with a real or virtual npm-package structure and do clean path rewrites and module inharitance.

Setting conditions to use
So now that you set the conditions and entry points for your package, how do you toggle them on the user side? It depends on who’s resolving the imports.

If you’re using Node.js, you can specify the condition with the --conditions, -C flag. For example, this will load file-a.js because we’re specifying condition-a:

Terminal
$ node --conditions=condition-a ./load-pkg-a.js
If you’re using a bundler, you can pass in conditions in the configuration. For example, with Vite, you can pass it in resolve.conditions (there’s a list of docs for tools that support conditions below).

If no condition is provided, this will fail to resolve and throw an error, as no default condition is defined.

Default conditions
Each runtime/resolver typically sets their own default conditions (these are not in order):

Node.js: node, import, require, default, module-sync
Vite: import, require, default, module, browser, production or development
esbuild: import, require, default, browser, node, module
Syntax

module-sync is ESM/CJS Compatible Require import if no toplevel await is used in ESM.

/// <reference path="./Chunk.d.ts" />
// @ts-check

on top of the files does not need to get transpiled away unlessh