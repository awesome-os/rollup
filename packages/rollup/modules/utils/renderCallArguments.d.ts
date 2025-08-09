import type MagicString from 'magic-string';
import type CallExpression from '../ast/nodes/CallExpression';
import type NewExpression from '../ast/nodes/NewExpression';
import type { RenderOptions } from '@rollup/types';
export declare function renderCallArguments(code: MagicString, options: RenderOptions, node: CallExpression | NewExpression): void;
