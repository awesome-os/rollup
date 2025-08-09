import type MagicString from 'magic-string';
import type { RenderOptions } from '@rollup/types';
import type { InclusionContext } from '@rollup/types';
import type JSXClosingElement from './JSXClosingElement';
import type JSXOpeningElement from './JSXOpeningElement';
import type * as NodeType from './NodeType';
import JSXElementBase from './shared/JSXElementBase';
import type { JSXChild, JsxMode } from './shared/jsxHelpers';
import type { IncludeChildren } from '@rollup/types';
export default class JSXElement extends JSXElementBase {
    type: NodeType.tJSXElement;
    openingElement: JSXOpeningElement;
    closingElement: JSXClosingElement | null;
    children: JSXChild[];
    include(context: InclusionContext, includeChildrenRecursively: IncludeChildren): void;
    render(code: MagicString, options: RenderOptions): void;
    protected getRenderingMode(): JsxMode;
    private renderClassicMode;
    private renderAutomaticMode;
    private renderAttributes;
    private wrapAttributes;
}
