import type { HasEffectsContext } from '../../ExecutionContext';
import type { NodeInteractionCalled } from '../../NodeInteractions';
import type { ObjectPath } from '../../utils/PathTracker';
import type { LiteralValueOrUnknown } from './Expression';
interface ValueDescription {
    deoptimizeArgumentsOnCall(interaction: NodeInteractionCalled): void;
    getLiteralValue(): LiteralValueOrUnknown;
    hasEffectsWhenCalled(interaction: NodeInteractionCalled, context: HasEffectsContext): boolean;
}
export declare function getGlobalAtPath(path: ObjectPath): ValueDescription | null;
export {};
