import type * as NodeType from './NodeType';
import { NodeBase } from './shared/Node';
import { type GenericEsTreeNode } from '@rollup/types';
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
