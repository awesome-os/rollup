import type { InclusionContext } from '../ExecutionContext';
import type { ObjectPath } from '../utils/PathTracker';
import type JSXIdentifier from './JSXIdentifier';
import type * as NodeType from './NodeType';
import { NodeBase } from './shared/Node';
export default class JSXMemberExpression extends NodeBase {
    type: NodeType.tJSXMemberExpression;
    object: JSXMemberExpression | JSXIdentifier;
    property: JSXIdentifier;
    includeNode(context: InclusionContext): void;
    includePath(path: ObjectPath, context: InclusionContext): void;
}
