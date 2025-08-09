import { type HasEffectsContext, type InclusionContext } from '@rollup/types';
import type Identifier from './Identifier';
import type * as NodeType from './NodeType';
import { StatementBase } from './shared/Node';
import { type IncludeChildren } from '@rollup/types';
export default class BreakStatement extends StatementBase {
    label: Identifier | null;
    type: NodeType.tBreakStatement;
    hasEffects(context: HasEffectsContext): boolean;
    include(context: InclusionContext, includeChildrenRecursively: IncludeChildren): void;
}
