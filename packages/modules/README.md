# Rollup / ESM Build
Clean ESM Build fully ECMA Compilant while the rollup npm package is not ecma compilant because it is missing file extensions and uses package.json
exports field to add the extensions. The Extensionless Version should not get used it is only there because it is a code migration artifact
it is in fact the compilation result of the tsc source.