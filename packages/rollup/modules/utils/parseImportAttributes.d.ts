import type ImportAttribute from '../ast/nodes/ImportAttribute';
import type ImportExpression from '../ast/nodes/ImportExpression';
export declare function getAttributesFromImportExpression(node: ImportExpression): Record<string, string>;
export declare function getAttributesFromImportExportDeclaration(attributes: ImportAttribute[]): Record<string, string>;
export declare function doAttributesDiffer(assertionA: Record<string, string>, assertionB: Record<string, string>): boolean;
