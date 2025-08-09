import { type HasEffectsContext, type InclusionContext } from '../ExecutionContext';
import type Identifier from './Identifier';
import type * as NodeType from './NodeType';
import { type IncludeChildren, StatementBase } from './shared/Node';
export default class BreakStatement extends StatementBase {
    label: Identifier | null;
    type: NodeType.tBreakStatement;
    hasEffects(context: HasEffectsContext): boolean;
    include(context: InclusionContext, includeChildrenRecursively: IncludeChildren): void;
}
