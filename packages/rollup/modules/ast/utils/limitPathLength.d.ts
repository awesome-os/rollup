import type { ObjectPath } from './PathTracker';
export declare const MAX_PATH_DEPTH = 6;
export declare const limitPathDepth: (path: ObjectPath) => ObjectPath;
export declare const limitConcatenatedPathDepth: (path1: ObjectPath, path2: ObjectPath) => ObjectPath;
