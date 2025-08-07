
export interface CommandConfigObject {
	[key: string]: unknown;
	external: (string | RegExp)[];
	globals: Record<string, string> | undefined;
}
