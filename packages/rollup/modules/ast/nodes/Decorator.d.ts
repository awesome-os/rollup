import type { HasEffectsContext } from '@rollup/types';
import type * as NodeType from './NodeType';
import { NodeBase } from './shared/Node';
import { type ExpressionNode } from '@rollup/types';
export default class Decorator extends NodeBase {
    type: NodeType.tDecorator;
    expression: ExpressionNode;
    hasEffects(context: HasEffectsContext): boolean;
}
