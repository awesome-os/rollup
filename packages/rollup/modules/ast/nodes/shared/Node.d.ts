import type { ExpressionNode, GenericEsTreeNode, IncludeChildren, Node, RenderOptions, RollupAnnotation } from '@rollup/types';
import { type Location } from 'locate-character';
import type MagicString from 'magic-string';
import type { AstContext } from '../../../Module';
import { type HasEffectsContext, type InclusionContext } from '@rollup/types';
import type { NodeInteractionAssigned } from '../../NodeInteractions';
import type ChildScope from '../../scopes/ChildScope';
import type { Variable } from '../../variables/Variable';
import type * as NodeType from '../NodeType';
import type { InclusionOptions } from '@rollup/types';
import { ExpressionEntity } from './Expression';
export declare class NodeBase extends ExpressionEntity implements ExpressionNode {
    annotations?: readonly RollupAnnotation[];
    end: number;
    parent: Node | {
        context: AstContext;
        type: string;
    };
    scope: ChildScope;
    start: number;
    type: keyof typeof NodeType;
    /**
     * This will be populated during initialise if setAssignedValue is called.
     */
    protected assignmentInteraction: NodeInteractionAssigned;
    /**
     * Nodes can apply custom deoptimizations once they become part of the
     * executed code. To do this, they must initialize this as false, implement
     * applyDeoptimizations and call this from include and hasEffects if they have
     * custom handlers
     */
    protected get deoptimized(): boolean;
    protected set deoptimized(value: boolean);
    constructor(parent: Node | {
        context: AstContext;
        type: string;
    }, parentScope: ChildScope);
    addExportedVariables(_variables: readonly Variable[], _exportNamesByVariable: ReadonlyMap<Variable, readonly string[]>): void;
    /**
     * Override this to bind assignments to variables and do any initialisations
     * that require the scopes to be populated with variables.
     */
    bind(): void;
    /**
     * Override if this node should receive a different scope than the parent
     * scope.
     */
    createScope(parentScope: ChildScope): void;
    hasEffects(context: HasEffectsContext): boolean;
    hasEffectsAsAssignmentTarget(context: HasEffectsContext, _checkAccess: boolean): boolean;
    include(context: InclusionContext, includeChildrenRecursively: IncludeChildren, _options?: InclusionOptions): void;
    includeNode(context: InclusionContext): void;
    includeAsAssignmentTarget(context: InclusionContext, includeChildrenRecursively: IncludeChildren, _deoptimizeAccess: boolean): void;
    /**
     * Override to perform special initialisation steps after the scope is
     * initialised
     */
    initialise(): void;
    parseNode(esTreeNode: GenericEsTreeNode): this;
    removeAnnotations(code: MagicString): void;
    render(code: MagicString, options: RenderOptions): void;
    setAssignedValue(value: ExpressionEntity): void;
    shouldBeIncluded(context: InclusionContext): boolean;
    /**
     * Just deoptimize everything by default so that when e.g. we do not track
     * something properly, it is deoptimized.
     * @protected
     */
    applyDeoptimizations(): void;
}
export { NodeBase as StatementBase };
export declare function locateNode(node: Node): Location & {
    file: string;
};
export declare function logNode(node: Node | ExpressionEntity): string;
export declare function onlyIncludeSelf(this: NodeBase): void;
export declare function onlyIncludeSelfNoDeoptimize(this: NodeBase): void;
export declare function doNotDeoptimize(this: NodeBase): void;
export declare const INCLUDE_PARAMETERS: "variables";
