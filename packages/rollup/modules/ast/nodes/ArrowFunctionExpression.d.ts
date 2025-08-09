import type { ExpressionNode, IncludeChildren } from '@rollup/types';
import type { HasEffectsContext, InclusionContext } from '../ExecutionContext';
import type { NodeInteraction } from '../NodeInteractions';
import type ChildScope from '../scopes/ChildScope';
import ReturnValueScope from '../scopes/ReturnValueScope';
import { type ObjectPath } from '../utils/PathTracker';
import type BlockStatement from './BlockStatement';
import * as NodeType from './NodeType';
import FunctionBase from './shared/FunctionBase';
import { ObjectEntity } from './shared/ObjectEntity';
import type { DeclarationPatternNode } from './shared/Pattern';
export default class ArrowFunctionExpression extends FunctionBase {
    body: BlockStatement | ExpressionNode;
    params: DeclarationPatternNode[];
    preventChildBlockScope: true;
    scope: ReturnValueScope;
    type: NodeType.tArrowFunctionExpression;
    protected objectEntity: ObjectEntity | null;
    get expression(): boolean;
    set expression(value: boolean);
    createScope(parentScope: ChildScope): void;
    hasEffects(): boolean;
    hasEffectsOnInteractionAtPath(path: ObjectPath, interaction: NodeInteraction, context: HasEffectsContext): boolean;
    protected onlyFunctionCallUsed(): boolean;
    include(context: InclusionContext, includeChildrenRecursively: IncludeChildren): void;
    includeNode(context: InclusionContext): void;
    protected getObjectEntity(): ObjectEntity;
}
