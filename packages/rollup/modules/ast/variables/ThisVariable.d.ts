import type { AstContext } from '../../Module';
import type { HasEffectsContext } from '@rollup/types';
import type { NodeInteraction } from '../NodeInteractions';
import { type ObjectPath } from '../utils/PathTracker';
import ParameterVariable from './ParameterVariable';
export default class ThisVariable extends ParameterVariable {
    constructor(context: AstContext);
    hasEffectsOnInteractionAtPath(path: ObjectPath, interaction: NodeInteraction, context: HasEffectsContext): boolean;
}
