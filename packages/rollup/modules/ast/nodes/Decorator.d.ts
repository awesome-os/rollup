import type { HasEffectsContext } from '../ExecutionContext';
import type * as NodeType from './NodeType';
import { type ExpressionNode, NodeBase } from './shared/Node';
export default class Decorator extends NodeBase {
    type: NodeType.tDecorator;
    expression: ExpressionNode;
    hasEffects(context: HasEffectsContext): boolean;
}
