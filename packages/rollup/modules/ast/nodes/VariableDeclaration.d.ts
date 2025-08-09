import type { IncludeChildren, NodeRenderOptions, RenderOptions } from '@rollup/types';
import type MagicString from 'magic-string';
import type { InclusionContext } from '@rollup/types';
import * as NodeType from './NodeType';
import type { InclusionOptions } from '@rollup/types';
import { NodeBase } from './shared/Node';
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
