// / <reference types="./declarations" />
// / <reference types="./fsevents" />
/* eslint-disable @typescript-eslint/no-empty-object-type */
import type * as estree from 'estree';
import type MagicString from 'magic-string';
import type { FunctionPluginHooks } from 'rollup';
import type { NodeInteractionAssigned } from '../ts-src/src/ast/NodeInteractions.ts';
import type { LiteralValue } from '../ts-src/src/ast/nodes/Literal.ts';
import type {
	ExpressionEntity,
	UnknownFalsyValue,
	UnknownTruthyValue,
	UnknownValue
} from '../ts-src/src/ast/nodes/shared/Expression.ts';
import type ChildScope from '../ts-src/src/ast/scopes/ChildScope.ts';
import type {
	DiscriminatedPathTracker,
	EntityPathTracker,
	ObjectPath,
	SymbolToStringTag
} from '../ts-src/src/ast/utils/PathTracker.ts';
import type ThisVariable from '../ts-src/src/ast/variables/ThisVariable.ts';
import type { Variable } from '../ts-src/src/ast/variables/Variable.ts';
import type Chunk from '../ts-src/src/Chunk.ts';
import type ExternalChunk from '../ts-src/src/ExternalChunk.ts';
import type Module from '../ts-src/src/Module.ts';
import type { DynamicImport } from '../ts-src/src/Module.ts';
import type { IS_SKIPPED_CHAIN } from '../ts-src/src/rollup/IS_SKIPPED_CHAIN.ts';
import type { PluginDriver } from '../ts-src/src/utils/PluginDriver.ts';
import './declarations';
import './fsevents';

export type RenderOptions = {
	accessedDocumentCurrentScript: boolean;
	exportNamesByVariable: Map<Variable, string[]>;
	format: InternalModuleFormat;
	freeze: boolean;
	indent: string;
	importAttributesKey: ImportAttributesKey;
	pluginDriver: PluginDriver;
	snippets: GenerateCodeSnippets;
	symbols: boolean;
	useOriginalName: ((variable: Variable) => boolean) | null;
};

export type NodeRenderOptions = {
	end?: number;
	isCalleeOfRenderedParent?: boolean;
	isNoStatement?: boolean;
	isShorthandProperty?: boolean;
	jsxMode?: 'preserve' | 'classic' | 'automatic';
	preventASI?: boolean;
	/* Indicates if the direct parent of an element changed.
	Necessary for determining the "this" context of callees. */
	renderedParentType?: string;
	/* Indicates if the parent or ancestor surrounding an element has changed and what it changed to.
	Necessary for adding parentheses. */
	renderedSurroundingElement?: string;
	start?: number;
};

type ExecutionContextIgnore = {
	breaks: boolean;
	continues: boolean;
	labels: Set<string>;
	returnYield: boolean;
	this: boolean;
};
type ControlFlowContext = {
	brokenFlow: boolean;
	hasBreak: boolean;
	hasContinue: boolean;
	includedLabels: Set<string>;
};

export type InclusionContext = {
	includedCallArguments: Set<Entity>;
} & ControlFlowContext;

export type HasEffectsContext = {
	accessed: EntityPathTracker;
	assigned: EntityPathTracker;
	brokenFlow: boolean;
	called: DiscriminatedPathTracker;
	ignore: ExecutionContextIgnore;
	instantiated: DiscriminatedPathTracker;
	replacedVariableInits: Map<ThisVariable, ExpressionEntity>;
} & ControlFlowContext;
export type DeoptimizableEntity = {
	deoptimizeCache(): void;
};

export type Entity = object;

export type WritableEntity = {
	/**
	 * Reassign a given path of an object.
	 * E.g., node.deoptimizePath(['x', 'y']) is called when something
	 * is assigned to node.x.y. If the path is [UnknownKey], then the return
	 * expression of this node is reassigned as well.
	 */
	deoptimizePath(path: ObjectPath): void;

	hasEffectsOnInteractionAtPath(
		path: ObjectPath,
		interaction: NodeInteractionAssigned,
		context: HasEffectsContext
	): boolean;
} & Entity;
export type LiteralValueOrUnknown =
	| LiteralValue
	| typeof UnknownValue
	| typeof UnknownTruthyValue
	| typeof UnknownFalsyValue
	| typeof SymbolToStringTag;

export type InclusionOptions = {
	/**
	 * Include the id of a declarator even if unused to ensure it is a valid
	 * statement.
	 */
	asSingleStatement?: boolean;
}; /**
 * Coerce a promise union to always be a promise.
 * @example EnsurePromise<string | Promise<string>> -> Promise<string>
 */
export type EnsurePromise<T> = Promise<Awaited<T>>;
/**
 * Get the type of the first argument in a function.
 * @example Arg0<(a: string, b: number) => void> -> string
 */
export type Argument0<H extends keyof FunctionPluginHooks> = Parameters<FunctionPluginHooks[H]>[0];

export type GenerateCodeSnippets = {
	_: string;
	cnst: string;
	n: string;
	s: string;
	getDirectReturnFunction(
		parameters: string[],
		options: {
			functionReturn: boolean;
			lineBreakIndent: { base: string; t: string } | null;
			name: string | null;
		}
	): [left: string, right: string];
	getDirectReturnIifeLeft(
		parameters: string[],
		returned: string,
		options: {
			needsArrowReturnParens: boolean | undefined;
			needsWrappedFunction: boolean | undefined;
		}
	): string;
	getFunctionIntro(
		parameters: string[],
		options: { isAsync: boolean; name: string | null }
	): string;
	getNonArrowFunctionIntro(
		parameters: string[],
		options: { isAsync: boolean; name: string | null }
	): string;
	getObject(
		fields: [key: string | null, value: string][],
		options: { lineBreakIndent: { base: string; t: string } | null }
	): string;
	getPropertyAccess(name: string): string;
};

export type * from '../ts-src/src/rollup/rollup';
declare module 'estree' {
	export type Decorator = {
		type: 'Decorator';
		expression: estree.Expression;
	} & estree.BaseNode;
	type PropertyDefinition = {
		decorators: estree.Decorator[];
	};
	type MethodDefinition = {
		decorators: estree.Decorator[];
	};
	type BaseClass = {
		decorators: estree.Decorator[];
	};
}

export const VERSION: string;
// utils
export type NullValue = null | undefined | void;
export type MaybeArray<T> = T | T[];
export type MaybePromise<T> = T | Promise<T>;
export type PartialNull<T> = {
	[P in keyof T]: T[P] | null;
};

export type RollupError = RollupLog & {
	name?: string;
	stack?: string;
	watchFiles?: string[];
};

export type RollupLog = {
	binding?: string;
	cause?: unknown;
	code?: string;
	exporter?: string;
	frame?: string;
	hook?: string;
	id?: string;
	ids?: string[];
	loc?: {
		column: number;
		file?: string;
		line: number;
	};
	message: string;
	meta?: any;
	names?: string[];
	plugin?: string;
	pluginCode?: unknown;
	pos?: number;
	reexporter?: string;
	stack?: string;
	url?: string;
};

export type LogLevel = 'warn' | 'info' | 'debug';
export type LogLevelOption = LogLevel | 'silent';

export type SourceMapSegment =
	| [number]
	| [number, number, number, number]
	| [number, number, number, number, number];

export type ExistingSourceMap = {
	file?: string;
	readonly mappings: SourceMapSegment[][] | string;
	names: string[];
	sourceRoot?: string;
	sources: string[];
	sourcesContent?: string[];
	version: number;
	x_google_ignoreList?: number[];
};

export type ExistingDecodedSourceMap = Omit<ExistingSourceMap, 'mappings'> & {
	readonly mappings: SourceMapSegment[][];
};

export type ExistingEncodedSourceMap = Omit<ExistingSourceMap, 'mappings'> & {
	mappings: string;
};

export type ExistingRawSourceMap = ExistingEncodedSourceMap;

export type DecodedSourceMapOrMissing =
	| {
			missing: true;
			plugin: string;
	  }
	| (ExistingDecodedSourceMap & { missing?: false });

export type SourceMap = {
	file: string;
	mappings: string;
	names: string[];
	sources: string[];
	sourcesContent?: string[];
	version: number;
	debugId?: string;
	toString(): string;
	toUrl(): string;
};

export type SourceMapInput = ExistingRawSourceMap | string | null | { mappings: '' };

export type ModuleOptions = {
	attributes: Record<string, string>;
	meta: CustomPluginOptions;
	moduleSideEffects: boolean | 'no-treeshake';
	syntheticNamedExports: boolean | string;
};

export type SourceDescription = Partial<PartialNull<ModuleOptions>> & {
	ast?: ProgramNode;
	code: string;
	map?: SourceMapInput;
};

export type TransformModuleJSON = {
	ast?: ProgramNode;
	code: string;
	// note if plugins use new this.cache to opt-out auto transform cache
	customTransformCache: boolean;
	originalCode: string;
	originalSourcemap: ExistingDecodedSourceMap | null;
	sourcemapChain: DecodedSourceMapOrMissing[];
	transformDependencies: string[];
};

export type ModuleJSON = TransformModuleJSON &
	ModuleOptions & {
		ast: ProgramNode;
		dependencies: string[];
		id: string;
		resolvedIds: ResolvedIdMap;
		transformFiles: EmittedFile[] | undefined;
	};

export type PluginCache = {
	delete(id: string): boolean;
	get<T = any>(id: string): T;
	has(id: string): boolean;
	set<T = any>(id: string, value: T): void;
};

export type LoggingFunction = (log: RollupLog | string | (() => RollupLog | string)) => void;

export type MinimalPluginContext = {
	debug: LoggingFunction;
	error: (error: RollupError | string) => never;
	info: LoggingFunction;
	meta: PluginContextMeta;
	warn: LoggingFunction;
};

export type EmittedAsset = {
	fileName?: string;
	name?: string;
	needsCodeReference?: boolean;
	originalFileName?: string | null;
	source?: string | Uint8Array;
	type: 'asset';
};

export type EmittedChunk = {
	fileName?: string;
	id: string;
	implicitlyLoadedAfterOneOf?: string[];
	importer?: string;
	name?: string;
	preserveSignature?: PreserveEntrySignaturesOption;
	type: 'chunk';
};

export type EmittedPrebuiltChunk = {
	code: string;
	exports?: string[];
	fileName: string;
	map?: SourceMap;
	sourcemapFileName?: string;
	type: 'prebuilt-chunk';
};

export type EmittedFile = EmittedAsset | EmittedChunk | EmittedPrebuiltChunk;

export type EmitFile = (emittedFile: EmittedFile) => string;

export type ModuleInfo = {
	ast: ProgramNode | null;
	code: string | null;
	dynamicImporters: readonly string[];
	dynamicallyImportedIdResolutions: readonly ResolvedId[];
	dynamicallyImportedIds: readonly string[];
	exportedBindings: Record<string, string[]> | null;
	exports: string[] | null;
	hasDefaultExport: boolean | null;
	id: string;
	implicitlyLoadedAfterOneOf: readonly string[];
	implicitlyLoadedBefore: readonly string[];
	importedIdResolutions: readonly ResolvedId[];
	importedIds: readonly string[];
	importers: readonly string[];
	isEntry: boolean;
	isExternal: boolean;
	isIncluded: boolean | null;
} & ModuleOptions;

export type GetModuleInfo = (moduleId: string) => ModuleInfo | null;

export type CustomPluginOptions = Record<string, any>;

export type LoggingFunctionWithPosition = (
	log: RollupLog | string | (() => RollupLog | string),
	pos?: number | { column: number; line: number }
) => void;

export type ParseAst = (
	input: string,
	options?: { allowReturnOutsideFunction?: boolean; jsx?: boolean }
) => ProgramNode;
// TODO: This should get removed no global declarations anymore!
// // declare AbortSignal here for environments without DOM lib or @types/node
// declare global {
// 	// eslint-disable-next-line @typescript-eslint/no-empty-object-type
// 	interface AbortSignal {}
// }

export type ParseAstAsync = (
	input: string,
	options?: { allowReturnOutsideFunction?: boolean; jsx?: boolean; signal?: AbortSignal }
) => Promise<ProgramNode>;

export type PluginContext = MinimalPluginContext & {
	addWatchFile: (id: string) => void;
	cache: PluginCache;
	debug: LoggingFunction;
	emitFile: EmitFile;
	error: (error: RollupError | string) => never;
	fs: RollupFsModule;
	getFileName: (fileReferenceId: string) => string;
	getModuleIds: () => IterableIterator<string>;
	getModuleInfo: GetModuleInfo;
	getWatchFiles: () => string[];
	info: LoggingFunction;
	load: (
		options: { id: string; resolveDependencies?: boolean } & Partial<PartialNull<ModuleOptions>>
	) => Promise<ModuleInfo>;
	parse: ParseAst;
	resolve: (
		source: string,
		importer?: string,
		options?: {
			attributes?: Record<string, string>;
			custom?: CustomPluginOptions;
			isEntry?: boolean;
			skipSelf?: boolean;
		}
	) => Promise<ResolvedId | null>;
	setAssetSource: (assetReferenceId: string, source: string | Uint8Array) => void;
	warn: LoggingFunction;
};

export type PluginContextMeta = {
	rollupVersion: string;
	watchMode: boolean;
};

export type StringOrRegExp = string | RegExp;

export type StringFilter<Value = StringOrRegExp> =
	| MaybeArray<Value>
	| {
			include?: MaybeArray<Value>;
			exclude?: MaybeArray<Value>;
	  };

export type HookFilter = {
	id?: StringFilter;
	code?: StringFilter;
};

export type ResolvedId = ModuleOptions & {
	external: boolean | 'absolute';
	id: string;
	resolvedBy: string;
};

export type ResolvedIdMap = Record<string, ResolvedId>;

export type PartialResolvedId = Partial<PartialNull<ModuleOptions>> & {
	external?: boolean | 'absolute' | 'relative';
	id: string;
	resolvedBy?: string;
};

export type ResolveIdResult = string | NullValue | false | PartialResolvedId;

export type ResolveIdResultWithoutNullValue = string | false | PartialResolvedId;

export type ResolveIdHook = (
	this: PluginContext,
	source: string,
	importer: string | undefined,
	options: { attributes: Record<string, string>; custom?: CustomPluginOptions; isEntry: boolean }
) => ResolveIdResult;

export type ShouldTransformCachedModuleHook = (
	this: PluginContext,
	options: {
		ast: ProgramNode;
		code: string;
		id: string;
		meta: CustomPluginOptions;
		moduleSideEffects: boolean | 'no-treeshake';
		resolvedSources: ResolvedIdMap;
		syntheticNamedExports: boolean | string;
	}
) => boolean | NullValue;

export type IsExternal = (
	source: string,
	importer: string | undefined,
	isResolved: boolean
) => boolean;

export type HasModuleSideEffects = (id: string, external: boolean) => boolean;

export type LoadResult = SourceDescription | string | NullValue;

export type LoadHook = (this: PluginContext, id: string) => LoadResult;

export type TransformPluginContext = PluginContext & {
	debug: LoggingFunctionWithPosition;
	error: (error: RollupError | string, pos?: number | { column: number; line: number }) => never;
	getCombinedSourcemap: () => SourceMap;
	info: LoggingFunctionWithPosition;
	warn: LoggingFunctionWithPosition;
};

export type TransformResult = string | NullValue | Partial<SourceDescription>;

export type TransformHook = (
	this: TransformPluginContext,
	code: string,
	id: string
) => TransformResult;

export type ModuleParsedHook = (this: PluginContext, info: ModuleInfo) => void;

export type RenderChunkHook = (
	this: PluginContext,
	code: string,
	chunk: RenderedChunk,
	options: NormalizedOutputOptions,
	meta: { chunks: Record<string, RenderedChunk> }
) => { code: string; map?: SourceMapInput } | string | NullValue;

export type ResolveDynamicImportHook = (
	this: PluginContext,
	specifier: string | AstNode,
	importer: string,
	options: { attributes: Record<string, string> }
) => ResolveIdResult;

export type ResolveImportMetaHook = (
	this: PluginContext,
	property: string | null,
	options: { chunkId: string; format: InternalModuleFormat; moduleId: string }
) => string | NullValue;

export type ResolveFileUrlHook = (
	this: PluginContext,
	options: {
		chunkId: string;
		fileName: string;
		format: InternalModuleFormat;
		moduleId: string;
		referenceId: string;
		relativePath: string;
	}
) => string | NullValue;

export type AddonHookFunction = (
	this: PluginContext,
	chunk: RenderedChunk
) => string | Promise<string>;
export type AddonHook = string | AddonHookFunction;

export type ChangeEvent = 'create' | 'update' | 'delete';
export type WatchChangeHook = (
	this: PluginContext,
	id: string,
	change: { event: ChangeEvent }
) => void;
/**
 * use this type for plugin annotation
 * @example
 * ```ts
 * interface Options {
 * ...
 * }
 * const myPlugin: PluginImpl<Options> = (options = {}) => { ... }
 * ```
 */

export type PluginImpl<O extends object = object, A = any> = (options?: O) => Plugin<A>;

export type OutputBundle = Record<string, OutputAsset | OutputChunk>;

export type PreRenderedChunkWithFileName = PreRenderedChunk & { fileName: string };

export type ImportedInternalChunk = {
	type: 'internal';
	fileName: string;
	resolvedImportPath: string;
	chunk: PreRenderedChunk;
};

export type ImportedExternalChunk = {
	type: 'external';
	fileName: string;
	resolvedImportPath: string;
};

export type DynamicImportTargetChunk = ImportedInternalChunk | ImportedExternalChunk;

export type FunctionPluginHooks = {
	augmentChunkHash: (this: PluginContext, chunk: RenderedChunk) => string | void;
	buildEnd: (this: PluginContext, error?: Error) => void;
	buildStart: (this: PluginContext, options: NormalizedInputOptions) => void;
	closeBundle: (this: PluginContext, error?: Error) => void;
	closeWatcher: (this: PluginContext) => void;
	generateBundle: (
		this: PluginContext,
		options: NormalizedOutputOptions,
		bundle: OutputBundle,
		isWrite: boolean
	) => void;
	load: LoadHook;
	moduleParsed: ModuleParsedHook;
	onLog: (this: MinimalPluginContext, level: LogLevel, log: RollupLog) => boolean | NullValue;
	options: (this: MinimalPluginContext, options: InputOptions) => InputOptions | NullValue;
	outputOptions: (this: PluginContext, options: OutputOptions) => OutputOptions | NullValue;
	renderChunk: RenderChunkHook;
	renderDynamicImport: (
		this: PluginContext,
		options: {
			customResolution: string | null;
			format: InternalModuleFormat;
			moduleId: string;
			targetModuleId: string | null;
			chunk: PreRenderedChunkWithFileName;
			targetChunk: PreRenderedChunkWithFileName | null;
			getTargetChunkImports: () => DynamicImportTargetChunk[] | null;
		}
	) => { left: string; right: string } | NullValue;
	renderError: (this: PluginContext, error?: Error) => void;
	renderStart: (
		this: PluginContext,
		outputOptions: NormalizedOutputOptions,
		inputOptions: NormalizedInputOptions
	) => void;
	resolveDynamicImport: ResolveDynamicImportHook;
	resolveFileUrl: ResolveFileUrlHook;
	resolveId: ResolveIdHook;
	resolveImportMeta: ResolveImportMetaHook;
	shouldTransformCachedModule: ShouldTransformCachedModuleHook;
	transform: TransformHook;
	watchChange: WatchChangeHook;
	writeBundle: (
		this: PluginContext,
		options: NormalizedOutputOptions,
		bundle: OutputBundle
	) => void;
};

export type OutputPluginHooks =
	| 'augmentChunkHash'
	| 'generateBundle'
	| 'outputOptions'
	| 'renderChunk'
	| 'renderDynamicImport'
	| 'renderError'
	| 'renderStart'
	| 'resolveFileUrl'
	| 'resolveImportMeta'
	| 'writeBundle';

export type InputPluginHooks = Exclude<keyof FunctionPluginHooks, OutputPluginHooks>;

export type SyncPluginHooks =
	| 'augmentChunkHash'
	| 'onLog'
	| 'outputOptions'
	| 'renderDynamicImport'
	| 'resolveFileUrl'
	| 'resolveImportMeta';

export type AsyncPluginHooks = Exclude<keyof FunctionPluginHooks, SyncPluginHooks>;

export type FirstPluginHooks =
	| 'load'
	| 'renderDynamicImport'
	| 'resolveDynamicImport'
	| 'resolveFileUrl'
	| 'resolveId'
	| 'resolveImportMeta'
	| 'shouldTransformCachedModule';

export type SequentialPluginHooks =
	| 'augmentChunkHash'
	| 'generateBundle'
	| 'onLog'
	| 'options'
	| 'outputOptions'
	| 'renderChunk'
	| 'transform';

export type ParallelPluginHooks = Exclude<
	keyof FunctionPluginHooks | AddonHooks,
	FirstPluginHooks | SequentialPluginHooks
>;

export type AddonHooks = 'banner' | 'footer' | 'intro' | 'outro';
type MakeAsync<Function_> = Function_ extends (
	this: infer This,
	...parameters: infer Arguments
) => infer Return
	? (this: This, ...parameters: Arguments) => Return | Promise<Return>
	: never;

export type ObjectHook<T, O = {}> = T | ({ handler: T; order?: 'pre' | 'post' | null } & O);

export type HookFilterExtension<K extends keyof FunctionPluginHooks> = K extends 'transform'
	? { filter?: HookFilter }
	: K extends 'load'
		? { filter?: Pick<HookFilter, 'id'> }
		: K extends 'resolveId'
			? { filter?: { id?: StringFilter<RegExp> } }
			: {};

export type PluginHooks = {
	[K in keyof FunctionPluginHooks]: ObjectHook<
		K extends AsyncPluginHooks ? MakeAsync<FunctionPluginHooks[K]> : FunctionPluginHooks[K],
		HookFilterExtension<K> & (K extends ParallelPluginHooks ? { sequential?: boolean } : {})
	>;
};

export type OutputPlugin = {
	cacheKey?: string;
	name: string;
	version?: string;
} & Partial<{
	[K in OutputPluginHooks]: PluginHooks[K];
}> &
	Partial<Record<AddonHooks, ObjectHook<AddonHook>>>;

export type Plugin<A = any> = {
	// for inter-plugin communication
	api?: A;
} & OutputPlugin &
	Partial<PluginHooks>;

export type JsxPreset = 'react' | 'react-jsx' | 'preserve' | 'preserve-react';

export type NormalizedJsxOptions =
	| NormalizedJsxPreserveOptions
	| NormalizedJsxClassicOptions
	| NormalizedJsxAutomaticOptions;
type NormalizedJsxPreserveOptions = {
	factory: string | null;
	fragment: string | null;
	importSource: string | null;
	mode: 'preserve';
};
type NormalizedJsxClassicOptions = {
	factory: string;
	fragment: string;
	importSource: string | null;
	mode: 'classic';
};
type NormalizedJsxAutomaticOptions = {
	factory: string;
	importSource: string | null;
	jsxImportSource: string;
	mode: 'automatic';
};

export type JsxOptions = Partial<NormalizedJsxOptions> & {
	preset?: JsxPreset;
};

export type TreeshakingPreset = 'smallest' | 'safest' | 'recommended';

export type NormalizedTreeshakingOptions = {
	annotations: boolean;
	correctVarValueBeforeDeclaration: boolean;
	manualPureFunctions: readonly string[];
	moduleSideEffects: HasModuleSideEffects;
	propertyReadSideEffects: boolean | 'always';
	tryCatchDeoptimization: boolean;
	unknownGlobalSideEffects: boolean;
};

export type TreeshakingOptions = Partial<
	Omit<NormalizedTreeshakingOptions, 'moduleSideEffects'>
> & {
	moduleSideEffects?: ModuleSideEffectsOption;
	preset?: TreeshakingPreset;
};

export type ManualChunkMeta = {
	getModuleIds: () => IterableIterator<string>;
	getModuleInfo: GetModuleInfo;
};

export type GetManualChunk = (id: string, meta: ManualChunkMeta) => string | NullValue;

export type ExternalOption =
	| (string | RegExp)[]
	| string
	| RegExp
	| ((source: string, importer: string | undefined, isResolved: boolean) => boolean | NullValue);

export type GlobalsOption = Record<string, string> | ((name: string) => string);

export type InputOption = string | string[] | Record<string, string>;

export type ManualChunksOption = Record<string, string[]> | GetManualChunk;

export type LogHandlerWithDefault = (
	level: LogLevel,
	log: RollupLog,
	defaultHandler: LogOrStringHandler
) => void;

export type LogOrStringHandler = (level: LogLevel | 'error', log: RollupLog | string) => void;

export type LogHandler = (level: LogLevel, log: RollupLog) => void;

export type ModuleSideEffectsOption = boolean | 'no-external' | string[] | HasModuleSideEffects;

export type PreserveEntrySignaturesOption = false | 'strict' | 'allow-extension' | 'exports-only';

export type SourcemapPathTransformOption = (
	relativeSourcePath: string,
	sourcemapPath: string
) => string;

export type SourcemapIgnoreListOption = (
	relativeSourcePath: string,
	sourcemapPath: string
) => boolean;

export type InputPluginOption = MaybePromise<Plugin | NullValue | false | InputPluginOption[]>;

export type InputOptions = {
	cache?: boolean | RollupCache;
	context?: string;
	experimentalCacheExpiry?: number;
	experimentalLogSideEffects?: boolean;
	external?: ExternalOption;
	fs?: RollupFsModule;
	input?: InputOption;
	jsx?: false | JsxPreset | JsxOptions;
	logLevel?: LogLevelOption;
	makeAbsoluteExternalsRelative?: boolean | 'ifRelativeSource';
	maxParallelFileOps?: number;
	moduleContext?: ((id: string) => string | NullValue) | Record<string, string>;
	onLog?: LogHandlerWithDefault;
	onwarn?: WarningHandlerWithDefault;
	perf?: boolean;
	plugins?: InputPluginOption;
	preserveEntrySignatures?: PreserveEntrySignaturesOption;
	preserveSymlinks?: boolean;
	shimMissingExports?: boolean;
	strictDeprecations?: boolean;
	treeshake?: boolean | TreeshakingPreset | TreeshakingOptions;
	watch?: WatcherOptions | false;
};

export type NormalizedInputOptions = {
	cache: false | undefined | RollupCache;
	context: string;
	experimentalCacheExpiry: number;
	experimentalLogSideEffects: boolean;
	external: IsExternal;
	fs: RollupFsModule;
	input: string[] | Record<string, string>;
	jsx: false | NormalizedJsxOptions;
	logLevel: LogLevelOption;
	makeAbsoluteExternalsRelative: boolean | 'ifRelativeSource';
	maxParallelFileOps: number;
	moduleContext: (id: string) => string;
	onLog: LogHandler;
	perf: boolean;
	plugins: Plugin[];
	preserveEntrySignatures: PreserveEntrySignaturesOption;
	preserveSymlinks: boolean;
	shimMissingExports: boolean;
	strictDeprecations: boolean;
	treeshake: false | NormalizedTreeshakingOptions;
};

export type InternalModuleFormat = 'amd' | 'cjs' | 'es' | 'iife' | 'system' | 'umd';
export type ImportAttributesKey = 'with' | 'assert';

export type ModuleFormat = InternalModuleFormat | 'commonjs' | 'esm' | 'module' | 'systemjs';
type GeneratedCodePreset = 'es5' | 'es2015';
type NormalizedGeneratedCodeOptions = {
	arrowFunctions: boolean;
	constBindings: boolean;
	objectShorthand: boolean;
	reservedNamesAsProps: boolean;
	symbols: boolean;
};
type GeneratedCodeOptions = {
	preset?: GeneratedCodePreset;
} & Partial<NormalizedGeneratedCodeOptions>;

export type OptionsPaths = Record<string, string> | ((id: string) => string);

export type InteropType = 'compat' | 'auto' | 'esModule' | 'default' | 'defaultOnly';

export type GetInterop = (id: string | null) => InteropType;

export type AmdOptions = (
	| {
			autoId?: false;
			id: string;
	  }
	| {
			autoId: true;
			basePath?: string;
			id?: undefined;
	  }
	| {
			autoId?: false;
			id?: undefined;
	  }
) & {
	define?: string;
	forceJsExtensionForImports?: boolean;
};

export type NormalizedAmdOptions = (
	| {
			autoId: false;
			id?: string;
	  }
	| {
			autoId: true;
			basePath: string;
	  }
) & {
	define: string;
	forceJsExtensionForImports: boolean;
};

export type AddonFunction = (chunk: RenderedChunk) => string | Promise<string>;

export type OutputPluginOption = MaybePromise<
	OutputPlugin | NullValue | false | OutputPluginOption[]
>;

export type HashCharacters = 'base64' | 'base36' | 'hex';

export type OutputOptions = {
	amd?: AmdOptions;
	assetFileNames?: string | ((chunkInfo: PreRenderedAsset) => string);
	banner?: string | AddonFunction;
	chunkFileNames?: string | ((chunkInfo: PreRenderedChunk) => string);
	compact?: boolean;
	// only required for bundle.write
	dir?: string;
	dynamicImportInCjs?: boolean;
	entryFileNames?: string | ((chunkInfo: PreRenderedChunk) => string);
	esModule?: boolean | 'if-default-prop';
	experimentalMinChunkSize?: number;
	exports?: 'default' | 'named' | 'none' | 'auto';
	extend?: boolean;
	/** @deprecated Use "externalImportAttributes" instead. */
	externalImportAssertions?: boolean;
	externalImportAttributes?: boolean;
	externalLiveBindings?: boolean;
	// only required for bundle.write
	file?: string;
	footer?: string | AddonFunction;
	format?: ModuleFormat;
	freeze?: boolean;
	generatedCode?: GeneratedCodePreset | GeneratedCodeOptions;
	globals?: GlobalsOption;
	hashCharacters?: HashCharacters;
	hoistTransitiveImports?: boolean;
	importAttributesKey?: ImportAttributesKey;
	indent?: string | boolean;
	inlineDynamicImports?: boolean;
	interop?: InteropType | GetInterop;
	intro?: string | AddonFunction;
	manualChunks?: ManualChunksOption;
	minifyInternalExports?: boolean;
	name?: string;
	noConflict?: boolean;
	outro?: string | AddonFunction;
	paths?: OptionsPaths;
	plugins?: OutputPluginOption;
	preserveModules?: boolean;
	preserveModulesRoot?: string;
	reexportProtoFromExternal?: boolean;
	sanitizeFileName?: boolean | ((fileName: string) => string);
	sourcemap?: boolean | 'inline' | 'hidden';
	sourcemapBaseUrl?: string;
	sourcemapExcludeSources?: boolean;
	sourcemapFile?: string;
	sourcemapFileNames?: string | ((chunkInfo: PreRenderedChunk) => string);
	sourcemapIgnoreList?: boolean | SourcemapIgnoreListOption;
	sourcemapPathTransform?: SourcemapPathTransformOption;
	sourcemapDebugIds?: boolean;
	strict?: boolean;
	systemNullSetters?: boolean;
	validate?: boolean;
	virtualDirname?: string;
};

export type NormalizedOutputOptions = {
	amd: NormalizedAmdOptions;
	assetFileNames: string | ((chunkInfo: PreRenderedAsset) => string);
	banner: AddonFunction;
	chunkFileNames: string | ((chunkInfo: PreRenderedChunk) => string);
	compact: boolean;
	dir: string | undefined;
	dynamicImportInCjs: boolean;
	entryFileNames: string | ((chunkInfo: PreRenderedChunk) => string);
	esModule: boolean | 'if-default-prop';
	experimentalMinChunkSize: number;
	exports: 'default' | 'named' | 'none' | 'auto';
	extend: boolean;
	/** @deprecated Use "externalImportAttributes" instead. */
	externalImportAssertions: boolean;
	externalImportAttributes: boolean;
	externalLiveBindings: boolean;
	file: string | undefined;
	footer: AddonFunction;
	format: InternalModuleFormat;
	freeze: boolean;
	generatedCode: NormalizedGeneratedCodeOptions;
	globals: GlobalsOption;
	hashCharacters: HashCharacters;
	hoistTransitiveImports: boolean;
	importAttributesKey: ImportAttributesKey;
	indent: true | string;
	inlineDynamicImports: boolean;
	interop: GetInterop;
	intro: AddonFunction;
	manualChunks: ManualChunksOption;
	minifyInternalExports: boolean;
	name: string | undefined;
	noConflict: boolean;
	outro: AddonFunction;
	paths: OptionsPaths;
	plugins: OutputPlugin[];
	preserveModules: boolean;
	preserveModulesRoot: string | undefined;
	reexportProtoFromExternal: boolean;
	sanitizeFileName: (fileName: string) => string;
	sourcemap: boolean | 'inline' | 'hidden';
	sourcemapBaseUrl: string | undefined;
	sourcemapExcludeSources: boolean;
	sourcemapFile: string | undefined;
	sourcemapFileNames: string | ((chunkInfo: PreRenderedChunk) => string) | undefined;
	sourcemapIgnoreList: SourcemapIgnoreListOption;
	sourcemapPathTransform: SourcemapPathTransformOption | undefined;
	sourcemapDebugIds: boolean;
	strict: boolean;
	systemNullSetters: boolean;
	validate: boolean;
	virtualDirname: string;
};

export type WarningHandlerWithDefault = (
	warning: RollupLog,
	defaultHandler: LoggingFunction
) => void;

export type SerializedTimings = Record<string, [number, number, number]>;

export type PreRenderedAsset = {
	/** @deprecated Use "names" instead. */
	name: string | undefined;
	names: string[];
	/** @deprecated Use "originalFileNames" instead. */
	originalFileName: string | null;
	originalFileNames: string[];
	source: string | Uint8Array;
	type: 'asset';
};

export type OutputAsset = PreRenderedAsset & {
	fileName: string;
	needsCodeReference: boolean;
};

export type RenderedModule = {
	readonly code: string | null;
	originalLength: number;
	removedExports: string[];
	renderedExports: string[];
	renderedLength: number;
};

export type PreRenderedChunk = {
	exports: string[];
	facadeModuleId: string | null;
	isDynamicEntry: boolean;
	isEntry: boolean;
	isImplicitEntry: boolean;
	moduleIds: string[];
	name: string;
	type: 'chunk';
};

export type RenderedChunk = PreRenderedChunk & {
	dynamicImports: string[];
	fileName: string;
	implicitlyLoadedBefore: string[];
	importedBindings: Record<string, string[]>;
	imports: string[];
	modules: Record<string, RenderedModule>;
	referencedFiles: string[];
};

export type OutputChunk = RenderedChunk & {
	code: string;
	map: SourceMap | null;
	sourcemapFileName: string | null;
	preliminaryFileName: string;
};

export type SerializablePluginCache = Record<string, [number, any]>;

export type RollupCache = {
	modules: ModuleJSON[];
	plugins?: Record<string, SerializablePluginCache>;
};

export type RollupOutput = {
	output: [OutputChunk, ...(OutputChunk | OutputAsset)[]];
};

export type RollupBuild = {
	cache: RollupCache | undefined;
	close: () => Promise<void>;
	closed: boolean;
	[Symbol.asyncDispose](): Promise<void>;
	generate: (outputOptions: OutputOptions) => Promise<RollupOutput>;
	getTimings?: () => SerializedTimings;
	watchFiles: string[];
	write: (options: OutputOptions) => Promise<RollupOutput>;
};

export type RollupOptions = InputOptions & {
	// This is included for compatibility with config files but ignored by rollup.rollup
	output?: OutputOptions | OutputOptions[];
};

export type InputOptionsWithPlugins = InputOptions & {
	plugins: Plugin[];
};

export type MergedRollupOptions = InputOptions & {
	plugins: Plugin[];
} & {
	output: OutputOptions[];
};

export type ChokidarOptions = {
	alwaysStat?: boolean;
	atomic?: boolean | number;
	awaitWriteFinish?:
		| {
				pollInterval?: number;
				stabilityThreshold?: number;
		  }
		| boolean;
	binaryInterval?: number;
	cwd?: string;
	depth?: number;
	disableGlobbing?: boolean;
	followSymlinks?: boolean;
	ignoreInitial?: boolean;
	ignorePermissionErrors?: boolean;
	ignored?: any;
	interval?: number;
	persistent?: boolean;
	useFsEvents?: boolean;
	usePolling?: boolean;
};

export type RollupWatchHooks = 'onError' | 'onStart' | 'onBundleStart' | 'onBundleEnd' | 'onEnd';

export type WatcherOptions = {
	allowInputInsideOutputPath?: boolean;
	buildDelay?: number;
	chokidar?: ChokidarOptions;
	clearScreen?: boolean;
	exclude?: string | RegExp | (string | RegExp)[];
	include?: string | RegExp | (string | RegExp)[];
	skipWrite?: boolean;
	onInvalidate?: (id: string) => void;
};

export type RollupWatchOptions = InputOptions & {
	output?: OutputOptions | OutputOptions[];
	watch?: WatcherOptions | false;
};

export type AwaitedEventListener<
	T extends Record<string, (...parameters: any) => any>,
	K extends keyof T
> = (...parameters: Parameters<T[K]>) => void | Promise<void>;

export type AwaitingEventEmitter<T extends Record<string, (...parameters: any) => any>> = {
	close(): Promise<void>;
	emit<K extends keyof T>(event: K, ...parameters: Parameters<T[K]>): Promise<unknown>;
	/**
	 * Removes an event listener.
	 */
	off<K extends keyof T>(event: K, listener: AwaitedEventListener<T, K>): this;
	/**
	 * Registers an event listener that will be awaited before Rollup continues.
	 * All listeners will be awaited in parallel while rejections are tracked via
	 * Promise.all.
	 */
	on<K extends keyof T>(event: K, listener: AwaitedEventListener<T, K>): this;
	/**
	 * Registers an event listener that will be awaited before Rollup continues.
	 * All listeners will be awaited in parallel while rejections are tracked via
	 * Promise.all.
	 * Listeners are removed automatically when removeListenersForCurrentRun is
	 * called, which happens automatically after each run.
	 */
	onCurrentRun<K extends keyof T>(
		event: K,
		listener: (...parameters: Parameters<T[K]>) => Promise<ReturnType<T[K]>>
	): this;
	removeAllListeners(): this;
	removeListenersForCurrentRun(): this;
};

export type RollupWatcherEvent =
	| { code: 'START' }
	| { code: 'BUNDLE_START'; input?: InputOption; output: readonly string[] }
	| {
			code: 'BUNDLE_END';
			duration: number;
			input?: InputOption;
			output: readonly string[];
			result: RollupBuild;
	  }
	| { code: 'END' }
	| { code: 'ERROR'; error: RollupError; result: RollupBuild | null };

export type RollupWatcher = AwaitingEventEmitter<{
	change: (id: string, change: { event: ChangeEvent }) => void;
	close: () => void;
	event: (event: RollupWatcherEvent) => void;
	restart: () => void;
}>;

export function watch(config: RollupWatchOptions | RollupWatchOptions[]): RollupWatcher;

export type AstNodeLocation = {
	end: number;
	start: number;
};

export type OmittedEstreeKeys =
	| 'loc'
	| 'range'
	| 'leadingComments'
	| 'trailingComments'
	| 'innerComments'
	| 'comments';
export type RollupAstNode<T> = Omit<T, OmittedEstreeKeys> & AstNodeLocation;

export type ProgramNode = RollupAstNode<estree.Program>;
export type AstNode = RollupAstNode<estree.Node>;
// export function defineConfig(options: RollupOptions): RollupOptions;
// export function defineConfig(options: RollupOptions[]): RollupOptions[];
// export function defineConfig(optionsFunction: RollupOptionsFunction): RollupOptionsFunction;

export type RollupOptionsFunction = (
	commandLineArguments: Record<string, any>
) => MaybePromise<RollupOptions | RollupOptions[]>;

export type RollupFsModule = {
	appendFile(
		path: string,
		data: string | Uint8Array,
		options?: { encoding?: BufferEncoding | null; mode?: string | number; flag?: string | number }
	): Promise<void>;

	copyFile(source: string, destination: string, mode?: string | number): Promise<void>;

	mkdir(path: string, options?: { recursive?: boolean; mode?: string | number }): Promise<void>;

	mkdtemp(prefix: string): Promise<string>;

	readdir(path: string, options?: { withFileTypes?: false }): Promise<string[]>;
	readdir(path: string, options?: { withFileTypes: true }): Promise<RollupDirectoryEntry[]>;

	readFile(
		path: string,
		options?: { encoding?: null; flag?: string | number; signal?: AbortSignal }
	): Promise<Uint8Array>;
	readFile(
		path: string,
		options?: { encoding: BufferEncoding; flag?: string | number; signal?: AbortSignal }
	): Promise<string>;

	realpath(path: string): Promise<string>;

	rename(oldPath: string, newPath: string): Promise<void>;

	rmdir(path: string, options?: { recursive?: boolean }): Promise<void>;

	stat(path: string): Promise<RollupFileStats>;

	lstat(path: string): Promise<RollupFileStats>;

	unlink(path: string): Promise<void>;

	writeFile(
		path: string,
		data: string | Uint8Array,
		options?: { encoding?: BufferEncoding | null; mode?: string | number; flag?: string | number }
	): Promise<void>;
};

export type BufferEncoding =
	| 'ascii'
	| 'utf8'
	| 'utf16le'
	| 'ucs2'
	| 'base64'
	| 'base64url'
	| 'latin1'
	| 'binary'
	| 'hex';

export type RollupDirectoryEntry = {
	isFile(): boolean;
	isDirectory(): boolean;
	isSymbolicLink(): boolean;
	name: string;
};

export type RollupFileStats = {
	isFile(): boolean;
	isDirectory(): boolean;
	isSymbolicLink(): boolean;
	size: number;
	mtime: Date;
	ctime: Date;
	atime: Date;
	birthtime: Date;
};

export type Addons = {
	banner: string;
	footer: string;
	intro: string;
	outro: string;
};
export type ChunkDefinitions = { alias: string | null; modules: Module[] }[];
export type ModulesWithDependentEntries = {
	/**
	 * The indices of the entries depending on this chunk
	 */
	dependentEntries: Set<number>;
	modules: Module[];
};
export type ChunkDescription = {
	/**
	 * These are the atoms (=initial chunks) that are contained in this chunk
	 */
	containedAtoms: bigint;
	/**
	 * The signatures of all atoms that are included in or loaded with this
	 * chunk. This is the intersection of all dependent entry modules. As chunks
	 * are merged, these sets are intersected.
	 */
	correlatedAtoms: bigint;
	dependencies: Set<ChunkDescription>;
	dependentChunks: Set<ChunkDescription>;
	pure: boolean;
	size: number;
} & ModulesWithDependentEntries;
export type ChunkPartition = {
	big: Set<ChunkDescription>;
	small: Set<ChunkDescription>;
}; // While the types for SourceMapInput are what we expect to recieve from plugins, there are cases
// in the wild where plugins return `{mappings: null}`, so we want this function to be a little more
// permissive on the input end so that we can normalize the output when creating the decoded sourcemap.

export type UnexpectedInput = {
	mappings: null | undefined;
};

export type Input = SourceMapInput | UnexpectedInput | ExistingDecodedSourceMap | undefined;

export type CachedSourcemapData = {
	encodedMappings?: string | undefined;
	decodedMappings?: ExistingDecodedSourceMap['mappings'] | undefined;
};
export type DependenciesToBeDeconflicted = {
	deconflictedDefault: ReadonlySet<ExternalChunk>;
	deconflictedNamespace: ReadonlySet<Chunk | ExternalChunk>;
	dependencies: ReadonlySet<Chunk | ExternalChunk>;
};
export type UnresolvedModule = {
	fileName: string | null;
	id: string;
	importer: string | undefined;
	name: string | null;
};

export type ModuleLoaderResolveId = (
	source: string,
	importer: string | undefined,
	customOptions: CustomPluginOptions | undefined,
	isEntry: boolean | undefined,
	attributes: Record<string, string>,
	skip?: readonly { importer: string | undefined; plugin: Plugin; source: string }[] | null
) => Promise<ResolvedId | null>;
export type NormalizedResolveIdWithoutDefaults = Partial<PartialNull<ModuleOptions>> & {
	external?: boolean | 'absolute';
	id: string;
	resolvedBy?: string;
};
export type ResolveStaticDependencyPromise = Promise<
	readonly [source: string, resolvedId: ResolvedId]
>;
export type ResolveDynamicDependencyPromise = Promise<
	readonly [dynamicImport: DynamicImport, resolvedId: ResolvedId | string | null]
>;
export type LoadModulePromise = Promise<
	[
		resolveStaticDependencies: ResolveStaticDependencyPromise[],
		resolveDynamicDependencies: ResolveDynamicDependencyPromise[],
		loadAndResolveDependencies: Promise<void>
	]
>;

export type PreloadType = boolean | 'resolveDependencies';
export type GenericConfigObject = Record<string, unknown>;
export type CommandConfigObject = {
	[key: string]: unknown;
	external: (string | RegExp)[];
	globals: Record<string, string> | undefined;
};
export type AnnotationType = 'pure' | 'noSideEffects';

export type RollupAnnotation = {
	start: number;
	end: number;
	type: AnnotationType;
};
export type OrderedExecutionUnit = {
	execIndex: number;
};
export type ObjectValue<Base> = Base extends Record<string, any> ? Base : never;
export type ObjectOptionWithPresets =
	| Partial<NormalizedTreeshakingOptions>
	| Partial<NormalizedGeneratedCodeOptions>
	| Partial<NormalizedJsxOptions>;
export type ReplaceContext = (context: PluginContext, plugin: Plugin) => PluginContext;

export type HookAction = [plugin: string, hook: string, args: unknown[]];
export type GetHash = (input: string | Uint8Array) => string;
export declare const INCLUDE_PARAMETERS: 'variables';
// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
export type GenericEsTreeNode = {
	[key: string]: any;
} & AstNode;

export type IncludeChildren = boolean | typeof INCLUDE_PARAMETERS;

export type Node = {
	annotations?: readonly RollupAnnotation[];
	end: number;
	included: boolean;
	needsBoundaries?: boolean;
	parent: Node | { type?: string };
	scope: ChildScope;
	preventChildBlockScope?: boolean;
	start: number;
	type: string;
	variable?: Variable | null;

	addExportedVariables(
		variables: readonly Variable[],
		exportNamesByVariable: ReadonlyMap<Variable, readonly string[]>
	): void;

	/**
	 * Called once all nodes have been initialised and the scopes have been
	 * populated.
	 */
	bind(): void;

	/**
	 * Determine if this Node would have an effect on the bundle. This is usually
	 * true for already included nodes. Exceptions are e.g. break statements which
	 * only have an effect if their surrounding loop or switch statement is
	 * included.
	 * The options pass on information like this about the current execution path.
	 */
	hasEffects(context: HasEffectsContext): boolean;

	/**
	 * Special version of hasEffects for assignment left-hand sides which ensures
	 * that accessor effects are checked as well. This is necessary to do from the
	 * child so that member expressions can use the correct this value.
	 * setAssignedValue needs to be called during initialise to use this.
	 */
	hasEffectsAsAssignmentTarget(context: HasEffectsContext, checkAccess: boolean): boolean;

	/**
	 * Includes the node in the bundle. If the flag is not set, children are
	 * usually included if they are necessary for this node (e.g. a function body)
	 * or if they have effects. Necessary variables need to be included as well.
	 * This is called repeatedly for each tree-shaking pass.
	 */
	include(
		context: InclusionContext,
		includeChildrenRecursively: IncludeChildren,
		options?: InclusionOptions
	): void;

	/**
	 * Includes this node for the first time in the bundle and ensures that all
	 * paths that this node relies on are included as well. Does not include
	 * child nodes by default, though.
	 */
	includeNode(context: InclusionContext): void;

	/**
	 * Explicitly include a path of this Node.
	 */
	includePath(path: ObjectPath, context: InclusionContext): void;

	/**
	 * Special version of include for assignment left-hand sides which ensures
	 * that accessors are handled correctly. This is necessary to do from the
	 * child so that member expressions can use the correct this value.
	 * setAssignedValue needs to be called during initialise to use this.
	 */
	includeAsAssignmentTarget(
		context: InclusionContext,
		includeChildrenRecursively: IncludeChildren,
		deoptimizeAccess: boolean
	): void;

	removeAnnotations(code: MagicString): void;

	render(code: MagicString, options: RenderOptions, nodeRenderOptions?: NodeRenderOptions): void;

	/**
	 * Sets the assigned value e.g. for assignment expression left. This must be
	 * called during initialise in case hasEffects/includeAsAssignmentTarget are
	 * used.
	 */
	setAssignedValue(value: ExpressionEntity): void;

	/**
	 * Start a new execution path to determine if this node has an effect on the
	 * bundle and should therefore be included. Included nodes should always be
	 * included again in subsequent visits as the inclusion of additional
	 * variables may require the inclusion of more child nodes in e.g. block
	 * statements.
	 */
	shouldBeIncluded(context: InclusionContext): boolean;
} & Entity;

export type StatementNode = Node;

export type SkippedChain = typeof IS_SKIPPED_CHAIN;

export type ExpressionNode = {} & ExpressionEntity & Node & Partial<ChainElement>;

export type ChainElement = {
	getLiteralValueAtPathAsChainElement(
		path: ObjectPath,
		recursionTracker: EntityPathTracker,
		origin: DeoptimizableEntity
	): LiteralValueOrUnknown | SkippedChain;
	hasEffectsAsChainElement(context: HasEffectsContext): boolean | SkippedChain;
};
