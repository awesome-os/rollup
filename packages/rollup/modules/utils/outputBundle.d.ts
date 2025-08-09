import type { OutputAsset, OutputBundle, OutputChunk } from '@rollup/types';
export declare const lowercaseBundleKeys: unique symbol;
export declare const FILE_PLACEHOLDER: {
    type: "placeholder";
};
export interface OutputBundleWithPlaceholders {
    [fileName: string]: OutputAsset | OutputChunk | typeof FILE_PLACEHOLDER;
    [lowercaseBundleKeys]: Set<string>;
}
export declare const getOutputBundle: (outputBundleBase: OutputBundle) => OutputBundleWithPlaceholders;
export declare const removeUnreferencedAssets: (outputBundle: OutputBundleWithPlaceholders) => void;
