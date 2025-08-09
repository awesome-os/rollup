import type { LogHandler, LogLevelOption, Plugin } from 'rollup';
export declare function getLogger(plugins: Plugin[], onLog: LogHandler, watchMode: boolean, logLevel: LogLevelOption): LogHandler;
