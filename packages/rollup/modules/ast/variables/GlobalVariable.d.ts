import type { DeoptimizableEntity } from '@rollup/types';
import type { HasEffectsContext } from '@rollup/types';
import type { NodeInteraction } from '../NodeInteractions';
import type { LiteralValueOrUnknown } from '@rollup/types';
import { type EntityPathTracker, type ObjectPath } from '../utils/PathTracker';
import { Variable } from './Variable';
export default class GlobalVariable extends Variable {
    constructor(name: string);
    deoptimizeArgumentsOnInteractionAtPath(interaction: NodeInteraction, path: ObjectPath, recursionTracker: EntityPathTracker): void;
    getLiteralValueAtPath(path: ObjectPath, _recursionTracker: EntityPathTracker, _origin: DeoptimizableEntity): LiteralValueOrUnknown;
    hasEffectsOnInteractionAtPath(path: ObjectPath, interaction: NodeInteraction, context: HasEffectsContext): boolean;
}
