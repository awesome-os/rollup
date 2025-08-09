import type { HasEffectsContext } from '@rollup/types';
import { checkEffectForNodes } from '../utils/checkEffectForNodes';
import type Decorator from './Decorator';
import type FunctionExpression from './FunctionExpression';
import type * as NodeType from './NodeType';
import type PrivateIdentifier from './PrivateIdentifier';
import MethodBase from './shared/MethodBase';
import type { ExpressionNode } from '@rollup/types';

export default class MethodDefinition extends MethodBase {
	declare key: ExpressionNode | PrivateIdentifier;
	declare kind: 'constructor' | 'method' | 'get' | 'set';
	declare static: boolean;
	declare type: NodeType.tMethodDefinition;
	declare value: FunctionExpression;
	declare decorators: Decorator[];

	hasEffects(context: HasEffectsContext): boolean {
		return super.hasEffects(context) || checkEffectForNodes(this.decorators, context);
	}
}
