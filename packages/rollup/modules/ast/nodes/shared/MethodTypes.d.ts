import type { HasEffectsContext } from '../../ExecutionContext';
import type { NodeInteraction, NodeInteractionCalled } from '../../NodeInteractions';
import { type ObjectPath } from '../../utils/PathTracker';
import { ExpressionEntity } from './Expression';
type MethodDescription = {
    callsArgs: number[] | null;
    mutatesSelfAsArray: boolean | 'deopt-only';
    mutatesArgs: boolean;
} & ({
    returns: 'self' | (() => ExpressionEntity);
    returnsPrimitive: null;
} | {
    returns: null;
    returnsPrimitive: ExpressionEntity;
});
export declare class Method extends ExpressionEntity {
    private readonly description;
    constructor(description: MethodDescription);
    deoptimizeArgumentsOnInteractionAtPath({ args, type }: NodeInteraction, path: ObjectPath): void;
    getReturnExpressionWhenCalledAtPath(path: ObjectPath, { args }: NodeInteractionCalled): [expression: ExpressionEntity, isPure: boolean];
    hasEffectsOnInteractionAtPath(path: ObjectPath, { args, type }: NodeInteraction, context: HasEffectsContext): boolean;
}
export declare const METHOD_RETURNS_BOOLEAN: Method[];
export declare const METHOD_RETURNS_STRING: Method[];
export declare const METHOD_RETURNS_NUMBER: Method[];
export declare const METHOD_RETURNS_UNKNOWN: Method[];
export {};
