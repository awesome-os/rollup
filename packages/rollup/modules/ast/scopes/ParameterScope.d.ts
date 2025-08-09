import type { InclusionContext } from '@rollup/types';
import type { NodeInteractionCalled } from '../NodeInteractions';
import type Identifier from '../nodes/Identifier';
import type { ObjectPath } from '../utils/PathTracker';
import ParameterVariable from '../variables/ParameterVariable';
import ChildScope from './ChildScope';
export default class ParameterScope extends ChildScope {
    readonly bodyScope: ChildScope;
    protected hasRest: boolean;
    protected parameters: readonly ParameterVariable[][];
    constructor(parent: ChildScope, isCatchScope: boolean);
    /**
     * Adds a parameter to this scope. Parameters must be added in the correct
     * order, i.e. from left to right.
     */
    addParameterDeclaration(identifier: Identifier, argumentPath: ObjectPath): ParameterVariable;
    addParameterVariables(parameters: ParameterVariable[][], hasRest: boolean): void;
    includeCallArguments({ args }: NodeInteractionCalled, context: InclusionContext): void;
}
