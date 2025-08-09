import { error, logNoFileSystemInBrowser } from '../utils/logs';

export const throwNoFileSystem = (method: string) => (): never =>
	error(logNoFileSystemInBrowser(method));
