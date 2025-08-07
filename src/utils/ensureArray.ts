export function ensureArray<T>(items: T | T[]) {
	return ([] as T[]).concat(items).filter(Boolean as any) as NonNullable<T>[];
}
