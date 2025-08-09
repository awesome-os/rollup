import type MagicString from 'magic-string';
import type { RenderOptions } from '../../utils/renderHelpers';
import type { DeoptimizableEntity } from '../DeoptimizableEntity';
import { type HasEffectsContext, type InclusionContext } from '../ExecutionContext';
import TrackingScope from '../scopes/TrackingScope';
import * as NodeType from './NodeType';
import { StatementBase } from './shared/Node';
import { type ExpressionNode, type GenericEsTreeNode, type IncludeChildren, type StatementNode } from '@rollup/types';
export default class IfStatement extends StatementBase implements DeoptimizableEntity {
    alternate: StatementNode | null;
    consequent: StatementNode;
    test: ExpressionNode;
    type: NodeType.tIfStatement;
    alternateScope?: TrackingScope;
    consequentScope: TrackingScope;
    private testValue;
    deoptimizeCache(): void;
    hasEffects(context: HasEffectsContext): boolean;
    include(context: InclusionContext, includeChildrenRecursively: IncludeChildren): void;
    parseNode(esTreeNode: GenericEsTreeNode): this;
    render(code: MagicString, options: RenderOptions): void;
    private getTestValue;
    private includeKnownTest;
    private includeRecursively;
    private includeUnknownTest;
    private renderHoistedDeclarations;
    private shouldKeepAlternateBranch;
}
