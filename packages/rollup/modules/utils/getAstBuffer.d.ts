export type AstBuffer = Uint32Array & {
    convertString: (position: number) => string;
};
export declare function getAstBuffer(astBuffer: Buffer | Uint8Array): AstBuffer;
