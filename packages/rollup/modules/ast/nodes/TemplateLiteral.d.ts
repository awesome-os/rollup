import type MagicString from 'magic-string';
import type { RenderOptions } from '@rollup/types';
import type { HasEffectsContext, InclusionContext } from '@rollup/types';
import type { NodeInteraction } from '../NodeInteractions';
import type { ObjectPath } from '../utils/PathTracker';
import type * as NodeType from './NodeType';
import type { ExpressionEntity } from './shared/Expression';
import type { LiteralValueOrUnknown } from '@rollup/types';
import { NodeBase } from './shared/Node';
import { type ExpressionNode } from '@rollup/types';
import type TemplateElement from './TemplateElement';
export default class TemplateLiteral extends NodeBase {
    expressions: ExpressionNode[];
    quasis: TemplateElement[];
    type: NodeType.tTemplateLiteral;
    deoptimizeArgumentsOnInteractionAtPath(): void;
    getLiteralValueAtPath(path: ObjectPath): LiteralValueOrUnknown;
    getReturnExpressionWhenCalledAtPath(path: ObjectPath): [expression: ExpressionEntity, isPure: boolean];
    hasEffectsOnInteractionAtPath(path: ObjectPath, interaction: NodeInteraction, context: HasEffectsContext): boolean;
    includeNode(context: InclusionContext): void;
    render(code: MagicString, options: RenderOptions): void;
}
