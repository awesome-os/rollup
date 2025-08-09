import type { DeoptimizableEntity } from '../../DeoptimizableEntity';
import type { EntityPathTracker, ObjectPath } from '../../utils/PathTracker';
import type CallExpression from '../CallExpression';
import type MemberExpression from '../MemberExpression';
import type { LiteralValueOrUnknown } from './Expression';
import type { ExpressionNode, SkippedChain } from './Node';
export declare function getChainElementLiteralValueAtPath(element: CallExpression | MemberExpression, object: ExpressionNode, path: ObjectPath, recursionTracker: EntityPathTracker, origin: DeoptimizableEntity): LiteralValueOrUnknown | SkippedChain;
