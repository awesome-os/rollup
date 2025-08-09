import type MagicString from 'magic-string';
import type { RenderOptions } from '../../utils/renderHelpers';
import type { InclusionContext } from '../ExecutionContext';
import type JSXClosingFragment from './JSXClosingFragment';
import type JSXOpeningFragment from './JSXOpeningFragment';
import type * as NodeType from './NodeType';
import JSXElementBase from './shared/JSXElementBase';
import type { JSXChild } from './shared/jsxHelpers';
import type { IncludeChildren } from './shared/Node';
export default class JSXFragment extends JSXElementBase {
    type: NodeType.tJSXElement;
    openingFragment: JSXOpeningFragment;
    children: JSXChild[];
    closingFragment: JSXClosingFragment;
    include(context: InclusionContext, includeChildrenRecursively: IncludeChildren): void;
    render(code: MagicString, options: RenderOptions): void;
    private renderClassicMode;
    private renderAutomaticMode;
}
