import type * as NodeType from './NodeType';
import { isFlagSet, setFlag } from './shared/BitFlags';
import { Flag } from "./shared/BitFlags";
import { NodeBase, onlyIncludeSelf } from './shared/Node';
import { type GenericEsTreeNode } from '@rollup/types';

export default class TemplateElement extends NodeBase {
	declare type: NodeType.tTemplateElement;
	declare value: {
		cooked: string | undefined;
		raw: string;
	};

	get tail(): boolean {
		return isFlagSet(this.flags, Flag.tail);
	}
	set tail(value: boolean) {
		this.flags = setFlag(this.flags, Flag.tail, value);
	}

	// Do not try to bind value
	bind(): void {}

	hasEffects(): boolean {
		return false;
	}

	parseNode(esTreeNode: GenericEsTreeNode): this {
		this.value = esTreeNode.value;
		return super.parseNode(esTreeNode);
	}

	render(): void {}
}

TemplateElement.prototype.includeNode = onlyIncludeSelf;
