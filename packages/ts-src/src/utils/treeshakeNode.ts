import type MagicString from 'magic-string';
import type { Node } from '@rollup/types';

export function treeshakeNode(node: Node, code: MagicString, start: number, end: number): void {
	code.remove(start, end);
	node.removeAnnotations(code);
}
