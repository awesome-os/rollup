import type { HasEffectsContext } from '@rollup/types';
import type { NodeBase } from '../nodes/shared/Node';

export function checkEffectForNodes(nodes: NodeBase[], context: HasEffectsContext): boolean {
	for (const node of nodes) {
		if (node.hasEffects(context)) {
			return true;
		}
	}
	return false;
}
