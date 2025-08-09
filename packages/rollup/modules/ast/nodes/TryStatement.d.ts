import type { HasEffectsContext, InclusionContext } from '../ExecutionContext';
import type BlockStatement from './BlockStatement';
import type CatchClause from './CatchClause';
import type * as NodeType from './NodeType';
import { StatementBase } from './shared/Node';
import { type IncludeChildren } from '@rollup/types';
export default class TryStatement extends StatementBase {
    block: BlockStatement;
    finalizer: BlockStatement | null;
    handler: CatchClause | null;
    type: NodeType.tTryStatement;
    private directlyIncluded;
    private includedLabelsAfterBlock;
    hasEffects(context: HasEffectsContext): boolean;
    include(context: InclusionContext, includeChildrenRecursively: IncludeChildren): void;
}
