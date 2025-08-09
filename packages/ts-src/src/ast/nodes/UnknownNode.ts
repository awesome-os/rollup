import type { InclusionContext } from '@rollup/types';
import { NodeBase } from './shared/Node';

export default class UnknownNode extends NodeBase {
	hasEffects(): boolean {
		return true;
	}

	include(context: InclusionContext): void {
		super.include(context, true);
	}
}
