import type MagicString from 'magic-string';
import type { RenderOptions } from '@rollup/types';
import type { InclusionContext } from '@rollup/types';
import type * as NodeType from './NodeType';
import { NodeBase } from './shared/Node';
export default class JSXOpeningFragment extends NodeBase {
    type: NodeType.tJSXOpeningElement;
    attributes: never[];
    selfClosing: false;
    private fragment;
    private fragmentVariable;
    includeNode(context: InclusionContext): void;
    render(code: MagicString, options: RenderOptions): void;
}
