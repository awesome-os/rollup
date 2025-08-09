import type * as NodeType from './NodeType';
import { type GenericEsTreeNode, NodeBase } from './shared/Node';
export default class TemplateElement extends NodeBase {
    type: NodeType.tTemplateElement;
    value: {
        cooked: string | undefined;
        raw: string;
    };
    get tail(): boolean;
    set tail(value: boolean);
    bind(): void;
    hasEffects(): boolean;
    parseNode(esTreeNode: GenericEsTreeNode): this;
    render(): void;
}
