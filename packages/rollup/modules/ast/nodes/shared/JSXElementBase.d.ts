import type MagicString from 'magic-string';
import type { IncludeChildren } from '@rollup/types';
import type { RenderOptions } from '../../../utils/renderHelpers';
import type { InclusionContext } from '../../ExecutionContext';
import type { Variable } from '../../variables/Variable';
import type { JSXChild, JsxMode } from './jsxHelpers';
import { NodeBase } from './Node';
export default class JSXElementBase extends NodeBase {
    children: JSXChild[];
    protected factoryVariable: Variable | null;
    protected factory: string | null;
    protected jsxMode: JsxMode;
    initialise(): void;
    include(context: InclusionContext, includeChildrenRecursively: IncludeChildren): void;
    includeNode(context: InclusionContext): void;
    protected getRenderingMode(): JsxMode;
    protected renderChildren(code: MagicString, options: RenderOptions, openingEnd: number): {
        childrenEnd: number;
        firstChild: JSXChild | null;
        hasMultipleChildren: boolean;
    };
}
