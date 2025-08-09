import type MagicString from 'magic-string';
import type Chunk from '../../Chunk';
import ExternalModule from '../../ExternalModule';
import type Module from '../../Module';
import type { AstNode, NormalizedOutputOptions } from 'rollup';
import type { GenerateCodeSnippets } from "@rollup/types";
import type { PluginDriver } from '../../utils/PluginDriver';
import { type RenderOptions } from '@rollup/types';
import type { InclusionContext } from '@rollup/types';
import type ChildScope from '../scopes/ChildScope';
import type { ObjectPath } from '../utils/PathTracker';
import type NamespaceVariable from '../variables/NamespaceVariable';
import type * as NodeType from './NodeType';
import { NodeBase } from './shared/Node';
import { type ExpressionNode, type GenericEsTreeNode, type IncludeChildren } from '@rollup/types';
export default class ImportExpression extends NodeBase {
    options: ExpressionNode | null;
    inlineNamespace: NamespaceVariable | null;
    source: ExpressionNode;
    type: NodeType.tImportExpression;
    sourceAstNode: AstNode;
    private hasUnknownAccessedKey;
    private accessedPropKey;
    private attributes;
    private mechanism;
    private namespaceExportName;
    private resolution;
    private resolutionString;
    get withinTopLevelAwait(): boolean;
    set withinTopLevelAwait(value: boolean);
    bind(): void;
    /**
     * Get imported variables for deterministic usage, valid cases are:
     *
     * 1. `const { foo } = await import('bar')`.
     * 2. `(await import('bar')).foo`
     * 3. `import('bar').then(({ foo }) => {})`
     *
     * Returns empty array if it's side-effect only import.
     * Returns undefined if it's not fully deterministic.
     */
    getDeterministicImportedNames(): readonly string[] | undefined;
    hasEffects(): boolean;
    include(context: InclusionContext, includeChildrenRecursively: IncludeChildren): void;
    includeNode(): void;
    includePath(path: ObjectPath): void;
    initialise(): void;
    parseNode(esTreeNode: GenericEsTreeNode): this;
    render(code: MagicString, options: RenderOptions): void;
    setExternalResolution(exportMode: 'none' | 'named' | 'default' | 'external', resolution: Module | ExternalModule | string | null, options: NormalizedOutputOptions, snippets: GenerateCodeSnippets, pluginDriver: PluginDriver, accessedGlobalsByScope: Map<ChildScope, Set<string>>, resolutionString: string, namespaceExportName: string | false | undefined, attributes: string | null | true, ownChunk: Chunk, targetChunk: Chunk | null): void;
    setInternalResolution(inlineNamespace: NamespaceVariable): void;
    private getDynamicImportMechanismAndHelper;
}
