import type { HasEffectsContext } from '@rollup/types';
import type { NodeInteractionCalled } from '../../NodeInteractions';
import type { ObjectPath } from '../../utils/PathTracker';
import type { LiteralValueOrUnknown } from '@rollup/types';
interface ValueDescription {
    deoptimizeArgumentsOnCall(interaction: NodeInteractionCalled): void;
    getLiteralValue(): LiteralValueOrUnknown;
    hasEffectsWhenCalled(interaction: NodeInteractionCalled, context: HasEffectsContext): boolean;
}
export declare function getGlobalAtPath(path: ObjectPath): ValueDescription | null;
export {};
