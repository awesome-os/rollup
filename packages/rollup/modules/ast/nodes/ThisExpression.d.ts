import type MagicString from 'magic-string';
import type { HasEffectsContext, InclusionContext } from '../ExecutionContext';
import type { NodeInteraction } from '../NodeInteractions';
import type { EntityPathTracker, ObjectPath } from '../utils/PathTracker';
import type Variable from '../variables/Variable';
import type * as NodeType from './NodeType';
import { NodeBase } from './shared/Node';
export default class ThisExpression extends NodeBase {
    type: NodeType.tThisExpression;
    variable: Variable;
    private alias;
    bind(): void;
    deoptimizeArgumentsOnInteractionAtPath(interaction: NodeInteraction, path: ObjectPath, recursionTracker: EntityPathTracker): void;
    deoptimizePath(path: ObjectPath): void;
    hasEffectsOnInteractionAtPath(path: ObjectPath, interaction: NodeInteraction, context: HasEffectsContext): boolean;
    include(context: InclusionContext): void;
    includeNode(context: InclusionContext): void;
    includePath(path: ObjectPath, context: InclusionContext): void;
    initialise(): void;
    render(code: MagicString): void;
}
