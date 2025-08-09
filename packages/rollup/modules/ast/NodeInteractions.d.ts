import type SpreadElement from './nodes/SpreadElement';
import type { ExpressionEntity } from './nodes/shared/Expression';
export declare const INTERACTION_ACCESSED = 0;
export declare const INTERACTION_ASSIGNED = 1;
export declare const INTERACTION_CALLED = 2;
export interface NodeInteractionAccessed {
    args: readonly [ExpressionEntity | null];
    type: typeof INTERACTION_ACCESSED;
}
export declare const NODE_INTERACTION_UNKNOWN_ACCESS: NodeInteractionAccessed;
export interface NodeInteractionAssigned {
    args: readonly [ExpressionEntity | null, ExpressionEntity];
    type: typeof INTERACTION_ASSIGNED;
}
export declare const NODE_INTERACTION_UNKNOWN_ASSIGNMENT: NodeInteractionAssigned;
export interface NodeInteractionCalled {
    args: readonly [ExpressionEntity | null, ...(ExpressionEntity | SpreadElement)[]];
    type: typeof INTERACTION_CALLED;
    withNew: boolean;
}
export declare const NODE_INTERACTION_UNKNOWN_CALL: NodeInteractionCalled;
export type NodeInteraction = NodeInteractionAccessed | NodeInteractionAssigned | NodeInteractionCalled;
