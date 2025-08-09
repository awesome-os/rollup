import type MagicString from 'magic-string';
import { type NodeRenderOptions, type RenderOptions } from '../../utils/renderHelpers';
import type { InclusionContext } from '../ExecutionContext';
import * as NodeType from './NodeType';
import type { InclusionOptions } from './shared/Expression';
import { type IncludeChildren, NodeBase } from './shared/Node';
import type { VariableDeclarationKind } from './shared/VariableKinds';
import type VariableDeclarator from './VariableDeclarator';
export default class VariableDeclaration extends NodeBase {
    declarations: readonly VariableDeclarator[];
    kind: VariableDeclarationKind;
    type: NodeType.tVariableDeclaration;
    isUsingDeclaration: boolean;
    deoptimizePath(): void;
    hasEffectsOnInteractionAtPath(): boolean;
    include(context: InclusionContext, includeChildrenRecursively: IncludeChildren, { asSingleStatement }?: InclusionOptions): void;
    initialise(): void;
    removeAnnotations(code: MagicString): void;
    render(code: MagicString, options: RenderOptions, nodeRenderOptions?: NodeRenderOptions): void;
    private renderDeclarationEnd;
    private renderReplacedDeclarations;
}
