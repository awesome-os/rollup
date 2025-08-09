import type { HasEffectsContext, InclusionContext } from '../../ExecutionContext';
import type { StatementNode } from './Node';
export declare function hasLoopBodyEffects(context: HasEffectsContext, body: StatementNode): boolean;
export declare function includeLoopBody(context: InclusionContext, body: StatementNode, includeChildrenRecursively: boolean | 'variables'): void;
