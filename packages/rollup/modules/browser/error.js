import { error, logNoFileSystemInBrowser } from '../utils/logs';
export const throwNoFileSystem = (method) => () => error(logNoFileSystemInBrowser(method));
