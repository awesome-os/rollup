import type {
	ExpressionNode,
	GenericEsTreeNode,
	IncludeChildren,
	Node,
	RenderOptions,
	RollupAnnotation
} from '@rollup/types';
import { locate, type Location } from 'locate-character';
import type MagicString from 'magic-string';
import type { AstContext } from '../../../Module';
import { type HasEffectsContext, type InclusionContext } from '@rollup/types';
import { ANNOTATION_KEY, INVALID_ANNOTATION_KEY } from '../../../utils/astConverterHelpers';
import { childNodeKeys } from '../../childNodeKeys';
import { createHasEffectsContext } from '../../ExecutionContext';
import type { NodeInteractionAssigned } from '../../NodeInteractions';
import { INTERACTION_ASSIGNED } from '../../NodeInteractions';
import type ChildScope from '../../scopes/ChildScope';
import { EMPTY_PATH, UNKNOWN_PATH } from '../../utils/PathTracker';
import type { Variable } from '../../variables/Variable';
import type * as NodeType from '../NodeType';
import type Program from '../Program';
import { Flag, isFlagSet, setFlag } from './BitFlags';
import type { InclusionOptions } from '@rollup/types';
import { ExpressionEntity } from './Expression';

export class NodeBase extends ExpressionEntity implements ExpressionNode {
	declare annotations?: readonly RollupAnnotation[];
	declare end: number;
	parent: Node | { context: AstContext; type: string };
	declare scope: ChildScope;
	declare start: number;
	declare type: keyof typeof NodeType;
	/**
	 * This will be populated during initialise if setAssignedValue is called.
	 */
	declare protected assignmentInteraction: NodeInteractionAssigned;

	/**
	 * Nodes can apply custom deoptimizations once they become part of the
	 * executed code. To do this, they must initialize this as false, implement
	 * applyDeoptimizations and call this from include and hasEffects if they have
	 * custom handlers
	 */
	protected get deoptimized(): boolean {
		return isFlagSet(this.flags, Flag.deoptimized);
	}

	protected set deoptimized(value: boolean) {
		this.flags = setFlag(this.flags, Flag.deoptimized, value);
	}

	constructor(parent: Node | { context: AstContext; type: string }, parentScope: ChildScope) {
		super();
		this.parent = parent;
		this.scope = parentScope;
		this.createScope(parentScope);
	}

	addExportedVariables(
		_variables: readonly Variable[],
		_exportNamesByVariable: ReadonlyMap<Variable, readonly string[]>
	): void {}

	/**
	 * Override this to bind assignments to variables and do any initialisations
	 * that require the scopes to be populated with variables.
	 */
	bind(): void {
		for (const key of childNodeKeys[this.type]) {
			const value = (this as GenericEsTreeNode)[key];
			if (Array.isArray(value)) {
				for (const child of value) {
					child?.bind();
				}
			} else if (value) {
				value.bind();
			}
		}
	}

	/**
	 * Override if this node should receive a different scope than the parent
	 * scope.
	 */
	createScope(parentScope: ChildScope): void {
		this.scope = parentScope;
	}

	hasEffects(context: HasEffectsContext): boolean {
		if (!this.deoptimized) this.applyDeoptimizations();
		for (const key of childNodeKeys[this.type]) {
			const value = (this as GenericEsTreeNode)[key];
			if (value === null) continue;
			if (Array.isArray(value)) {
				for (const child of value) {
					if (child?.hasEffects(context)) return true;
				}
			} else if (value.hasEffects(context)) return true;
		}
		return false;
	}

	hasEffectsAsAssignmentTarget(context: HasEffectsContext, _checkAccess: boolean): boolean {
		return (
			this.hasEffects(context) ||
			this.hasEffectsOnInteractionAtPath(EMPTY_PATH, this.assignmentInteraction, context)
		);
	}

	include(
		context: InclusionContext,
		includeChildrenRecursively: IncludeChildren,
		_options?: InclusionOptions
	): void {
		if (!this.included) this.includeNode(context);
		for (const key of childNodeKeys[this.type]) {
			const value = (this as GenericEsTreeNode)[key];
			if (value === null) continue;
			if (Array.isArray(value)) {
				for (const child of value) {
					child?.include(context, includeChildrenRecursively);
				}
			} else {
				value.include(context, includeChildrenRecursively);
			}
		}
	}

	includeNode(context: InclusionContext) {
		this.included = true;
		if (!this.deoptimized) this.applyDeoptimizations();
		for (const key of childNodeKeys[this.type]) {
			const value = (this as GenericEsTreeNode)[key];
			if (value === null) continue;
			if (Array.isArray(value)) {
				for (const child of value) {
					child?.includePath(UNKNOWN_PATH, context);
				}
			} else {
				value.includePath(UNKNOWN_PATH, context);
			}
		}
	}

	includeAsAssignmentTarget(
		context: InclusionContext,
		includeChildrenRecursively: IncludeChildren,
		_deoptimizeAccess: boolean
	) {
		this.include(context, includeChildrenRecursively);
	}

	/**
	 * Override to perform special initialisation steps after the scope is
	 * initialised
	 */
	initialise(): void {
		this.scope.context.magicString.addSourcemapLocation(this.start);
		this.scope.context.magicString.addSourcemapLocation(this.end);
	}

	parseNode(esTreeNode: GenericEsTreeNode): this {
		for (const [key, value] of Object.entries(esTreeNode)) {
			// Skip properties defined on the class already.
			// This way, we can override this function to add custom initialisation and then call super.parseNode
			// Note: this doesn't skip properties with defined getters/setters which we use to pack wrap booleans
			// in bitfields. Those are still assigned from the value in the esTreeNode.
			if (this.hasOwnProperty(key)) continue;

			if (key.charCodeAt(0) === 95 /* _ */) {
				if (key === ANNOTATION_KEY) {
					this.annotations = value as RollupAnnotation[];
				} else if (key === INVALID_ANNOTATION_KEY) {
					(this as unknown as Program).invalidAnnotations = value as RollupAnnotation[];
				}
			} else if (typeof value !== 'object' || value === null) {
				(this as GenericEsTreeNode)[key] = value;
			} else if (Array.isArray(value)) {
				(this as GenericEsTreeNode)[key] = new Array(value.length);
				let index = 0;
				for (const child of value) {
					(this as GenericEsTreeNode)[key][index++] =
						child === null
							? null
							: new (this.scope.context.getNodeConstructor(child.type))(this, this.scope).parseNode(
									child
								);
				}
			} else {
				(this as GenericEsTreeNode)[key] = new (this.scope.context.getNodeConstructor(value.type))(
					this,
					this.scope
				).parseNode(value);
			}
		}
		// extend child keys for unknown node types
		childNodeKeys[esTreeNode.type] ||= createChildNodeKeysForNode(esTreeNode);
		this.initialise();
		return this;
	}

	removeAnnotations(code: MagicString): void {
		if (this.annotations) {
			for (const annotation of this.annotations) {
				code.remove(annotation.start, annotation.end);
			}
		}
	}

	render(code: MagicString, options: RenderOptions): void {
		for (const key of childNodeKeys[this.type]) {
			const value = (this as GenericEsTreeNode)[key];
			if (value === null) continue;
			if (Array.isArray(value)) {
				for (const child of value) {
					child?.render(code, options);
				}
			} else {
				value.render(code, options);
			}
		}
	}

	setAssignedValue(value: ExpressionEntity): void {
		this.assignmentInteraction = { args: [null, value], type: INTERACTION_ASSIGNED };
	}

	shouldBeIncluded(context: InclusionContext): boolean {
		return this.included || (!context.brokenFlow && this.hasEffects(createHasEffectsContext()));
	}

	/**
	 * Just deoptimize everything by default so that when e.g. we do not track
	 * something properly, it is deoptimized.
	 * @protected
	 */
	applyDeoptimizations() {
		this.deoptimized = true;
		for (const key of childNodeKeys[this.type]) {
			const value = (this as GenericEsTreeNode)[key];
			if (value === null) continue;
			if (Array.isArray(value)) {
				for (const child of value) {
					child?.deoptimizePath(UNKNOWN_PATH);
				}
			} else {
				value.deoptimizePath(UNKNOWN_PATH);
			}
		}
		this.scope.context.requestTreeshakingPass();
	}
}

export { NodeBase as StatementBase };

function createChildNodeKeysForNode(esTreeNode: GenericEsTreeNode): string[] {
	return Object.keys(esTreeNode).filter(
		key => typeof esTreeNode[key] === 'object' && key.charCodeAt(0) !== 95 /* _ */
	);
}

export function locateNode(node: Node): Location & { file: string } {
	const {
		start,
		scope: {
			context: { code, fileName }
		}
	} = node;
	const location = locate(code, start, { offsetLine: 1 }) as Location & {
		file: string;
	};
	location.file = fileName;
	location.toString = () => JSON.stringify(location);

	return location;
}

export function logNode(node: Node | ExpressionEntity): string {
	if ('scope' in node) {
		return node.scope.context.code.slice(node.start, node.end);
	}
	return node.constructor.name;
}

export function onlyIncludeSelf(this: NodeBase) {
	this.included = true;
	if (!this.deoptimized) this.applyDeoptimizations();
}

export function onlyIncludeSelfNoDeoptimize(this: NodeBase) {
	this.included = true;
}

export function doNotDeoptimize(this: NodeBase) {
	this.deoptimized = true;
}
export const INCLUDE_PARAMETERS = 'variables' as const;
