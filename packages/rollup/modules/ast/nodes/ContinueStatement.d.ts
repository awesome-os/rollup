import { type HasEffectsContext, type InclusionContext } from '../ExecutionContext';
import type Identifier from './Identifier';
import type * as NodeType from './NodeType';
import { StatementBase } from './shared/Node';
import { type IncludeChildren } from '@rollup/types';
export default class ContinueStatement extends StatementBase {
    label: Identifier | null;
    type: NodeType.tContinueStatement;
    hasEffects(context: HasEffectsContext): boolean;
    include(context: InclusionContext, includeChildrenRecursively: IncludeChildren): void;
}
