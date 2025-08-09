import { isFlagSet, setFlag } from './shared/BitFlags';
import { Flag } from "./shared/BitFlags";
import { NodeBase, onlyIncludeSelf } from './shared/Node';
import {} from '@rollup/types';
export default class TemplateElement extends NodeBase {
    get tail() {
        return isFlagSet(this.flags, Flag.tail);
    }
    set tail(value) {
        this.flags = setFlag(this.flags, Flag.tail, value);
    }
    // Do not try to bind value
    bind() { }
    hasEffects() {
        return false;
    }
    parseNode(esTreeNode) {
        this.value = esTreeNode.value;
        return super.parseNode(esTreeNode);
    }
    render() { }
}
TemplateElement.prototype.includeNode = onlyIncludeSelf;
