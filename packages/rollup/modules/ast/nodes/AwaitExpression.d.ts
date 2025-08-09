import type { InclusionContext } from '../ExecutionContext';
import type { ObjectPath } from '../utils/PathTracker';
import type * as NodeType from './NodeType';
import { type ExpressionNode, type IncludeChildren, NodeBase } from './shared/Node';
export default class AwaitExpression extends NodeBase {
    argument: ExpressionNode;
    type: NodeType.tAwaitExpression;
    hasEffects(): boolean;
    initialise(): void;
    include(context: InclusionContext, includeChildrenRecursively: IncludeChildren): void;
    includeNode(context: InclusionContext): void;
    includePath(path: ObjectPath, context: InclusionContext): void;
}
