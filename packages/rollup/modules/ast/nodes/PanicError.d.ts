import type * as NodeType from './NodeType';
import { NodeBase } from './shared/Node';
export default class PanicError extends NodeBase {
    type: NodeType.tPanicError;
    message: string;
    initialise(): never;
}
