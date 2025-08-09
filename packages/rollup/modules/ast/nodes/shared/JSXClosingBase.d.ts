import type MagicString from 'magic-string';
import type { RenderOptions } from '../../../utils/renderHelpers';
import { NodeBase } from './Node';
export default class JSXClosingBase extends NodeBase {
    render(code: MagicString, options: RenderOptions): void;
}
