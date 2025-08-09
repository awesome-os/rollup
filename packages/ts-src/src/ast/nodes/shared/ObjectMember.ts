import type { HasEffectsContext } from '@rollup/types';
import type { DeoptimizableEntity } from '@rollup/types';
import type { NodeInteraction, NodeInteractionCalled } from '../../NodeInteractions';
import type { EntityPathTracker, ObjectPath } from '../../utils/PathTracker';
import { ExpressionEntity } from './Expression';
import { type LiteralValueOrUnknown } from '@rollup/types';

export class ObjectMember extends ExpressionEntity {
	private readonly object: ExpressionEntity;
	private readonly path: ObjectPath;

	constructor(object: ExpressionEntity, path: ObjectPath) {
		super();
		this.object = object;
		this.path = path;
	}

	deoptimizeArgumentsOnInteractionAtPath(
		interaction: NodeInteraction,
		path: ObjectPath,
		recursionTracker: EntityPathTracker
	): void {
		this.object.deoptimizeArgumentsOnInteractionAtPath(
			interaction,
			[...this.path, ...path],
			recursionTracker
		);
	}

	deoptimizePath(path: ObjectPath): void {
		this.object.deoptimizePath([...this.path, ...path]);
	}

	getLiteralValueAtPath(
		path: ObjectPath,
		recursionTracker: EntityPathTracker,
		origin: DeoptimizableEntity
	): LiteralValueOrUnknown {
		return this.object.getLiteralValueAtPath([...this.path, ...path], recursionTracker, origin);
	}

	getReturnExpressionWhenCalledAtPath(
		path: ObjectPath,
		interaction: NodeInteractionCalled,
		recursionTracker: EntityPathTracker,
		origin: DeoptimizableEntity
	): [expression: ExpressionEntity, isPure: boolean] {
		return this.object.getReturnExpressionWhenCalledAtPath(
			[...this.path, ...path],
			interaction,
			recursionTracker,
			origin
		);
	}

	hasEffectsOnInteractionAtPath(
		path: ObjectPath,
		interaction: NodeInteraction,
		context: HasEffectsContext
	): boolean {
		return this.object.hasEffectsOnInteractionAtPath([...this.path, ...path], interaction, context);
	}
}
