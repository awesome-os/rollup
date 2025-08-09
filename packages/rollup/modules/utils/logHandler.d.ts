import type { LoggingFunctionWithPosition, LogHandler, LogLevel, LogLevelOption } from 'rollup';
export declare function getLogHandler(level: LogLevel, code: string, logger: LogHandler, pluginName: string, logLevel: LogLevelOption): LoggingFunctionWithPosition;
