import package_ from './package.json' with { type: 'json' };
export const VERSION = package_.version;
export const version = package_.version;
export const rollupVersion = package_.version;
