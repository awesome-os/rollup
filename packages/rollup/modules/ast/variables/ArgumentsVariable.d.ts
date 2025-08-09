import type { AstContext } from '../../Module';
import type { InclusionContext } from '@rollup/types';
import type { NodeInteraction } from '../NodeInteractions';
import type { ExpressionEntity } from '../nodes/shared/Expression';
import type { ObjectPath } from '../utils/PathTracker';
import LocalVariable from './LocalVariable';
export default class ArgumentsVariable extends LocalVariable {
    deoptimizedArguments?: ExpressionEntity[];
    constructor(context: AstContext);
    addArgumentToBeDeoptimized(_argument: ExpressionEntity): void;
    addReference(): void;
    hasEffectsOnInteractionAtPath(path: ObjectPath, { type }: NodeInteraction): boolean;
    includePath(path: ObjectPath, context: InclusionContext): void;
}
