import type MagicString from 'magic-string';
import type { HasEffectsContext, InclusionContext } from '@rollup/types';
import type { DeoptimizableEntity } from '@rollup/types';
import type { EntityPathTracker, ObjectPath } from '../utils/PathTracker';
import type CallExpression from './CallExpression';
import type MemberExpression from './MemberExpression';
import type * as NodeType from './NodeType';
import type { LiteralValueOrUnknown } from '@rollup/types';
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
