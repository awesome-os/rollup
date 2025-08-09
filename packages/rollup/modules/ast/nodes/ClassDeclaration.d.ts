import type MagicString from 'magic-string';
import type { GenericEsTreeNode } from '@rollup/types';
import type { RenderOptions } from '../../utils/renderHelpers';
import { type IdentifierWithVariable } from './Identifier';
import type * as NodeType from './NodeType';
import ClassNode from './shared/ClassNode';
export declare class ClassDeclaration extends ClassNode {
    id: IdentifierWithVariable | null;
    type: NodeType.tClassDeclaration;
    initialise(): void;
    parseNode(esTreeNode: GenericEsTreeNode): this;
    render(code: MagicString, options: RenderOptions): void;
    applyDeoptimizations(): void;
}
