import type { InclusionContext } from '@rollup/types';
import type { ObjectPath } from '../utils/PathTracker';
import type * as NodeType from './NodeType';
import { NodeBase } from './shared/Node';
import { type ExpressionNode, type IncludeChildren } from '@rollup/types';
export default class AwaitExpression extends NodeBase {
    argument: ExpressionNode;
    type: NodeType.tAwaitExpression;
    hasEffects(): boolean;
    initialise(): void;
    include(context: InclusionContext, includeChildrenRecursively: IncludeChildren): void;
    includeNode(context: InclusionContext): void;
    includePath(path: ObjectPath, context: InclusionContext): void;
}
