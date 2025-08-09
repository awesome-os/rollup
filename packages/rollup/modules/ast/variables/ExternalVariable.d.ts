import type ExternalModule from '../../ExternalModule';
import type { InclusionContext } from '../ExecutionContext';
import type { NodeInteraction } from '../NodeInteractions';
import type IdentifierBase from '../nodes/shared/IdentifierBase';
import { type ObjectPath } from '../utils/PathTracker';
import Variable from './Variable';
export default class ExternalVariable extends Variable {
    readonly isNamespace: boolean;
    readonly module: ExternalModule;
    referenced: boolean;
    constructor(module: ExternalModule, name: string);
    addReference(identifier: IdentifierBase): void;
    hasEffectsOnInteractionAtPath(path: ObjectPath, { type }: NodeInteraction): boolean;
    includePath(path: ObjectPath, context: InclusionContext): void;
}
