import { type Location } from 'locate-character';
import type MagicString from 'magic-string';
import type { RollupAnnotation } from "../../../rollup/types";
import type { AstContext } from '../../../Module';
import type { AstNode } from 'rollup';
import type { NodeRenderOptions, RenderOptions } from '../../../utils/renderHelpers';
import type { DeoptimizableEntity } from '../../DeoptimizableEntity';
import type { Entity } from '../../Entity';
import { type HasEffectsContext, type InclusionContext } from '../../ExecutionContext';
import type { NodeInteractionAssigned } from '../../NodeInteractions';
import type ChildScope from '../../scopes/ChildScope';
import { type EntityPathTracker, type ObjectPath } from '../../utils/PathTracker';
import type Variable from '../../variables/Variable';
import type * as NodeType from '../NodeType';
import type { InclusionOptions, LiteralValueOrUnknown } from './Expression';
import { ExpressionEntity } from './Expression';
export type GenericEsTreeNode = {
    [key: string]: any;
} & AstNode;
export declare const INCLUDE_PARAMETERS: "variables";
export type IncludeChildren = boolean | typeof INCLUDE_PARAMETERS;
export type Node = {
    annotations?: readonly RollupAnnotation[];
    end: number;
    included: boolean;
    needsBoundaries?: boolean;
    parent: Node | {
        type?: string;
    };
    scope: ChildScope;
    preventChildBlockScope?: boolean;
    start: number;
    type: string;
    variable?: Variable | null;
    addExportedVariables(variables: readonly Variable[], exportNamesByVariable: ReadonlyMap<Variable, readonly string[]>): void;
    /**
     * Called once all nodes have been initialised and the scopes have been
     * populated.
     */
    bind(): void;
    /**
     * Determine if this Node would have an effect on the bundle. This is usually
     * true for already included nodes. Exceptions are e.g. break statements which
     * only have an effect if their surrounding loop or switch statement is
     * included.
     * The options pass on information like this about the current execution path.
     */
    hasEffects(context: HasEffectsContext): boolean;
    /**
     * Special version of hasEffects for assignment left-hand sides which ensures
     * that accessor effects are checked as well. This is necessary to do from the
     * child so that member expressions can use the correct this value.
     * setAssignedValue needs to be called during initialise to use this.
     */
    hasEffectsAsAssignmentTarget(context: HasEffectsContext, checkAccess: boolean): boolean;
    /**
     * Includes the node in the bundle. If the flag is not set, children are
     * usually included if they are necessary for this node (e.g. a function body)
     * or if they have effects. Necessary variables need to be included as well.
     * This is called repeatedly for each tree-shaking pass.
     */
    include(context: InclusionContext, includeChildrenRecursively: IncludeChildren, options?: InclusionOptions): void;
    /**
     * Includes this node for the first time in the bundle and ensures that all
     * paths that this node relies on are included as well. Does not include
     * child nodes by default, though.
     */
    includeNode(context: InclusionContext): void;
    /**
     * Explicitly include a path of this Node.
     */
    includePath(path: ObjectPath, context: InclusionContext): void;
    /**
     * Special version of include for assignment left-hand sides which ensures
     * that accessors are handled correctly. This is necessary to do from the
     * child so that member expressions can use the correct this value.
     * setAssignedValue needs to be called during initialise to use this.
     */
    includeAsAssignmentTarget(context: InclusionContext, includeChildrenRecursively: IncludeChildren, deoptimizeAccess: boolean): void;
    removeAnnotations(code: MagicString): void;
    render(code: MagicString, options: RenderOptions, nodeRenderOptions?: NodeRenderOptions): void;
    /**
     * Sets the assigned value e.g. for assignment expression left. This must be
     * called during initialise in case hasEffects/includeAsAssignmentTarget are
     * used.
     */
    setAssignedValue(value: ExpressionEntity): void;
    /**
     * Start a new execution path to determine if this node has an effect on the
     * bundle and should therefore be included. Included nodes should always be
     * included again in subsequent visits as the inclusion of additional
     * variables may require the inclusion of more child nodes in e.g. block
     * statements.
     */
    shouldBeIncluded(context: InclusionContext): boolean;
} & Entity;
export type StatementNode = Node;
export declare const IS_SKIPPED_CHAIN: unique symbol;
export type SkippedChain = typeof IS_SKIPPED_CHAIN;
export type ExpressionNode = {} & ExpressionEntity & Node & Partial<ChainElement>;
export type ChainElement = {
    getLiteralValueAtPathAsChainElement(path: ObjectPath, recursionTracker: EntityPathTracker, origin: DeoptimizableEntity): LiteralValueOrUnknown | SkippedChain;
    hasEffectsAsChainElement(context: HasEffectsContext): boolean | SkippedChain;
};
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
