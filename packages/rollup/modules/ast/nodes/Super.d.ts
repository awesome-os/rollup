import type { InclusionContext } from '@rollup/types';
import type { NodeInteraction } from '../NodeInteractions';
import type { EntityPathTracker, ObjectPath } from '../utils/PathTracker';
import type { Variable } from '../variables/Variable';
import type * as NodeType from './NodeType';
import { NodeBase } from './shared/Node';
export default class Super extends NodeBase {
    type: NodeType.tSuper;
    variable: Variable;
    bind(): void;
    deoptimizeArgumentsOnInteractionAtPath(interaction: NodeInteraction, path: ObjectPath, recursionTracker: EntityPathTracker): void;
    deoptimizePath(path: ObjectPath): void;
    include(context: InclusionContext): void;
    includeNode(context: InclusionContext): void;
}
