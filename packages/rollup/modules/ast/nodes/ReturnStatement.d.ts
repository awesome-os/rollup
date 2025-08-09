import type MagicString from 'magic-string';
import type { RenderOptions } from '../../utils/renderHelpers';
import { type HasEffectsContext, type InclusionContext } from '../ExecutionContext';
import type * as NodeType from './NodeType';
import { StatementBase } from './shared/Node';
import { type ExpressionNode, type IncludeChildren } from '@rollup/types';
export default class ReturnStatement extends StatementBase {
    argument: ExpressionNode | null;
    type: NodeType.tReturnStatement;
    hasEffects(context: HasEffectsContext): boolean;
    include(context: InclusionContext, includeChildrenRecursively: IncludeChildren): void;
    includeNode(context: InclusionContext): void;
    initialise(): void;
    render(code: MagicString, options: RenderOptions): void;
}
