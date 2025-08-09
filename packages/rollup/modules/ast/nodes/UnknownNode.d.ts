import type { InclusionContext } from '../ExecutionContext';
import { NodeBase } from './shared/Node';
export default class UnknownNode extends NodeBase {
    hasEffects(): boolean;
    include(context: InclusionContext): void;
}
