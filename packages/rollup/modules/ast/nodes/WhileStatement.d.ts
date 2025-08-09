import type { HasEffectsContext, InclusionContext } from '../ExecutionContext';
import type * as NodeType from './NodeType';
import { type ExpressionNode, type IncludeChildren, StatementBase, type StatementNode } from './shared/Node';
export default class WhileStatement extends StatementBase {
    body: StatementNode;
    test: ExpressionNode;
    type: NodeType.tWhileStatement;
    hasEffects(context: HasEffectsContext): boolean;
    include(context: InclusionContext, includeChildrenRecursively: IncludeChildren): void;
}
