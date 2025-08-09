import type { InclusionContext } from '../../ExecutionContext';
import type Variable from '../../variables/Variable';
import type JSXElement from '../JSXElement';
import type JSXExpressionContainer from '../JSXExpressionContainer';
import type JSXFragment from '../JSXFragment';
import type JSXOpeningElement from '../JSXOpeningElement';
import type JSXOpeningFragment from '../JSXOpeningFragment';
import type JSXSpreadChild from '../JSXSpreadChild';
import type JSXText from '../JSXText';
import type JSXElementBase from './JSXElementBase';
export type JsxMode = {
    mode: 'preserve' | 'classic';
    factory: string | null;
    importSource: string | null;
} | {
    mode: 'automatic';
    factory: string;
    importSource: string;
};
export type JSXChild = JSXText | JSXExpressionContainer | JSXElement | JSXFragment | JSXSpreadChild;
export declare function getAndIncludeFactoryVariable(factory: string, preserve: boolean, importSource: string | null, node: JSXElementBase | JSXOpeningElement | JSXOpeningFragment, context: InclusionContext): Variable;
