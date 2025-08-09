import type { ExpressionNode, HasEffectsContext, InclusionContext } from '@rollup/types';
import type { NodeInteraction } from '../NodeInteractions';
import { type EntityPathTracker, type ObjectPath } from '../utils/PathTracker';
import type * as NodeType from './NodeType';
import { NodeBase } from './shared/Node';
export default class SpreadElement extends NodeBase {
    argument: ExpressionNode;
    type: NodeType.tSpreadElement;
    deoptimizeArgumentsOnInteractionAtPath(interaction: NodeInteraction, path: ObjectPath, recursionTracker: EntityPathTracker): void;
    hasEffects(context: HasEffectsContext): boolean;
    includeNode(context: InclusionContext): void;
    applyDeoptimizations(): void;
}
