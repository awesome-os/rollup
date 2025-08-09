import type MagicString from 'magic-string';
import type { DeoptimizableEntity } from '../DeoptimizableEntity';
import type { HasEffectsContext, InclusionContext } from '../ExecutionContext';
import type { EntityPathTracker, ObjectPath } from '../utils/PathTracker';
import type CallExpression from './CallExpression';
import type MemberExpression from './MemberExpression';
import type * as NodeType from './NodeType';
import type { LiteralValueOrUnknown } from './shared/Expression';
import { NodeBase } from './shared/Node';
export default class ChainExpression extends NodeBase implements DeoptimizableEntity {
    expression: CallExpression | MemberExpression;
    type: NodeType.tChainExpression;
    deoptimizeCache(): void;
    getLiteralValueAtPath(path: ObjectPath, recursionTracker: EntityPathTracker, origin: DeoptimizableEntity): LiteralValueOrUnknown;
    hasEffects(context: HasEffectsContext): boolean;
    includePath(path: ObjectPath, context: InclusionContext): void;
    removeAnnotations(code: MagicString): void;
}
