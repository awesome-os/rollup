import type { Entity } from './Entity';
import type { ExpressionEntity } from './nodes/shared/Expression';
import { DiscriminatedPathTracker, EntityPathTracker } from './utils/PathTracker';
import type ThisVariable from './variables/ThisVariable';
interface ExecutionContextIgnore {
    breaks: boolean;
    continues: boolean;
    labels: Set<string>;
    returnYield: boolean;
    this: boolean;
}
interface ControlFlowContext {
    brokenFlow: boolean;
    hasBreak: boolean;
    hasContinue: boolean;
    includedLabels: Set<string>;
}
export interface InclusionContext extends ControlFlowContext {
    includedCallArguments: Set<Entity>;
}
export interface HasEffectsContext extends ControlFlowContext {
    accessed: EntityPathTracker;
    assigned: EntityPathTracker;
    brokenFlow: boolean;
    called: DiscriminatedPathTracker;
    ignore: ExecutionContextIgnore;
    instantiated: DiscriminatedPathTracker;
    replacedVariableInits: Map<ThisVariable, ExpressionEntity>;
}
export declare function createInclusionContext(): InclusionContext;
export declare function createHasEffectsContext(): HasEffectsContext;
export {};
