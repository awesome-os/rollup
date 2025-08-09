import type MagicString from 'magic-string';
import type { InternalModuleFormat } from '@rollup/types';
import type { PluginDriver } from '../../utils/PluginDriver';
import type { RenderOptions } from '@rollup/types';
import type { NodeInteraction } from '../NodeInteractions';
import type ChildScope from '../scopes/ChildScope';
import type { ObjectPath } from '../utils/PathTracker';
import type Identifier from './Identifier';
import type * as NodeType from './NodeType';
import { NodeBase } from './shared/Node';
export default class MetaProperty extends NodeBase {
    meta: Identifier;
    property: Identifier;
    type: NodeType.tMetaProperty;
    private metaProperty;
    private preliminaryChunkId;
    private referenceId;
    getReferencedFileName(outputPluginDriver: PluginDriver): string | null;
    hasEffects(): boolean;
    hasEffectsOnInteractionAtPath(path: ObjectPath, { type }: NodeInteraction): boolean;
    include(): void;
    includeNode(): void;
    render(code: MagicString, renderOptions: RenderOptions): void;
    setResolution(format: InternalModuleFormat, accessedGlobalsByScope: Map<ChildScope, Set<string>>, preliminaryChunkId: string): void;
}
export declare const formatsMaybeAccessDocumentCurrentScript: string[];
