import { type HasEffectsContext, type InclusionContext } from '@rollup/types';
import type { NodeInteraction } from '../../NodeInteractions';
import type ChildScope from '../../scopes/ChildScope';
import FunctionScope from '../../scopes/FunctionScope';
import { type EntityPathTracker, type ObjectPath } from '../../utils/PathTracker';
import type BlockStatement from '../BlockStatement';
import { type IdentifierWithVariable } from '../Identifier';
import FunctionBase from './FunctionBase';
import { type IncludeChildren } from '@rollup/types';
import { ObjectEntity } from './ObjectEntity';
import type { DeclarationPatternNode } from './Pattern';
export default class FunctionNode extends FunctionBase {
    body: BlockStatement;
    id: IdentifierWithVariable | null;
    params: DeclarationPatternNode[];
    preventChildBlockScope: true;
    scope: FunctionScope;
    protected objectEntity: ObjectEntity | null;
    private constructedEntity;
    createScope(parentScope: ChildScope): void;
    deoptimizeArgumentsOnInteractionAtPath(interaction: NodeInteraction, path: ObjectPath, recursionTracker: EntityPathTracker): void;
    hasEffects(context: HasEffectsContext): boolean;
    hasEffectsOnInteractionAtPath(path: ObjectPath, interaction: NodeInteraction, context: HasEffectsContext): boolean;
    include(context: InclusionContext, includeChildrenRecursively: IncludeChildren): void;
    includeNode(context: InclusionContext): void;
    initialise(): void;
    protected getObjectEntity(): ObjectEntity;
}
