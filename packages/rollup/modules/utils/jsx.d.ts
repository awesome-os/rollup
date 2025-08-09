import type JSXElement from '../ast/nodes/JSXElement';
import JSXExpressionContainer from '../ast/nodes/JSXExpressionContainer';
import type JSXFragment from '../ast/nodes/JSXFragment';
import type JSXSpreadChild from '../ast/nodes/JSXSpreadChild';
import type JSXText from '../ast/nodes/JSXText';
export declare function getRenderedJsxChildren(children: (JSXText | JSXExpressionContainer | JSXElement | JSXFragment | JSXSpreadChild)[]): number;
