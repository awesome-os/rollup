export declare const MAX_HASH_SIZE = 21;
export declare const DEFAULT_HASH_SIZE = 8;
export declare const getHashPlaceholderGenerator: () => (optionName?: string, hashSize?: number) => string;
export type HashPlaceholderGenerator = ReturnType<typeof getHashPlaceholderGenerator>;
export declare const replacePlaceholders: (code: string, hashesByPlaceholder: Map<string, string>) => string;
export declare const replaceSinglePlaceholder: (code: string, placeholder: string, value: string) => string;
export declare const replacePlaceholdersWithDefaultAndGetContainedPlaceholders: (code: string, placeholders: Set<string>) => {
    containedPlaceholders: Set<string>;
    transformedCode: string;
};
