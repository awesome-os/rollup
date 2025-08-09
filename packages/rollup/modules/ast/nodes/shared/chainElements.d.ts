import type { ExpressionNode, SkippedChain } from '@rollup/types';
import type { DeoptimizableEntity } from '@rollup/types';
import type { EntityPathTracker, ObjectPath } from '../../utils/PathTracker';
import type CallExpression from '../CallExpression';
import type MemberExpression from '../MemberExpression';
import type { LiteralValueOrUnknown } from '@rollup/types';
export declare function getChainElementLiteralValueAtPath(element: CallExpression | MemberExpression, object: ExpressionNode, path: ObjectPath, recursionTracker: EntityPathTracker, origin: DeoptimizableEntity): LiteralValueOrUnknown | SkippedChain;
