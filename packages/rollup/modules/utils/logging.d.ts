import type { LogLevel, LogLevelOption } from '@rollup/types';
export declare const LOGLEVEL_SILENT: LogLevelOption;
export declare const LOGLEVEL_ERROR = "error";
export declare const LOGLEVEL_WARN: LogLevel;
export declare const LOGLEVEL_INFO: LogLevel;
export declare const LOGLEVEL_DEBUG: LogLevel;
export declare const logLevelPriority: Record<LogLevelOption, number>;
