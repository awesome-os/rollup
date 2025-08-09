/**
 * This file is copyed out of scripts because we use it directly to generate the type out
 * of the src we do not care for the rust part the rust part needs to add code
 * to extract the types or use the types from this project.
 */
/**
 * This file contains the AST node descriptions for the ESTree AST.
 * From this file, "npm run build:ast-converters" will generate
 * - /rust/parse_ast/src/convert_ast/converter/ast_constants.rs:
 *   Constants that describe how the AST nodes are encoded in Rust.
 * - /src/utils/bufferToAst.ts:
 *   Helper functions that are used by this.parse in plugins to convert a buffer
 *   to a JSON AST.
 * - /src/ast/bufferParsers.ts
 *   Helper functions that are used by Module.ts to convert a buffer to an
 *   internal Rollup AST. While this uses roughly the same AST format, it
 *   instantiates the classes in /src/ast/nodes instead.
 * - /src/ast/childNodeKeys.ts
 *   A list of which AST nodes keys represent child nodes. This is used by the
 *   legacy parser to instantiate a Rollup AST from a JSON AST.
 *
 * JavaScript AST nodes follow the ESTree format specified here
 * https://github.com/estree/estree. While the binary buffer format could
 * theoretically deviate from this, it should be either a one-to-one or a
 * many-to-one mapping (Example: All Literal* nodes in the buffer are encoded
 * as "type: Literal" in the JSON AST).
 *
 * For encoded non-JavaScript AST nodes like TypeScript or JSX, we try to follow
 * the format of typescript-eslint, which can be derived from their playground
 * https://typescript-eslint.io/play/#showAST=es&fileType=.tsx
 * For JSX, see also https://github.com/facebook/jsx/blob/main/AST.md
 */
/** @typedef {"Node"|"OptionalNode"|"NodeList"|"Annotations"|"InvalidAnnotations"|"String"|"FixedString"|"OptionalString"|"Float"} FieldType */
type FieldType = 'Node' | 'OptionalNode' | 'NodeList' | 'Annotations' | 'InvalidAnnotations' | 'String' | 'FixedString' | 'OptionalString' | 'Float';
/** @typedef {[name:string, type:FieldType]} FieldWithType */
type FieldWithType = [name: string, type: FieldType];
/** @typedef {{
 *    astType?: string; // If several converters produce the same type, specify the actual type here
 *    estreeType?: string, // If the extended ESTree type is different from the AST type
 *    hasSameFieldsAs?: string, // If this node uses the same Rust converter as another one, specify the name here. This will skip Rust field constant generation.
 *    fields?: FieldWithType[],  // The non-boolean fields of the node, sorted by parse order
 *    flags?: string[], // The boolean fields of the node
 *    fixed?: Record<string,unknown>, // Any fields with fixed values
 *    fieldTypes?: Record<string,string>, // Add a type cast to a field
 *    additionalFields?: Record<string,string>, // Derived fields can be specified as arbitrary strings here
 *    baseForAdditionalFields?: string[], // Fields needed to define additional fields
 *    hiddenFields?: string[], // Fields that are added in Rust but are not part of the AST, usually together with additionalFields
 *    optionalFallback?: Record<string,string> // If an optional variable should not have "null" as fallback, but the value of another field,
 *    postProcessFields?: Record<string,[variableName:string, code:string]>, // If this is specified, the field will be extracted into a variable and this code is injected after the field is assigned
 *    scopes?: Record<string, string> // If the field gets a parent scope other than node.scope
 *    scriptedFields?: Record<string,string> // If fields are parsed via custom logic, $position references the node position. $typeFoo is replaced with the numeric code for Foo
 *    useMacro?: boolean // Generate a Rust macro instead of separate constants
 *  }} NodeDescription */
type NodeDescription = {
    astType?: string;
    estreeType?: string;
    hasSameFieldsAs?: string;
    fields?: FieldWithType[];
    flags?: string[];
    fixed?: Record<string, unknown>;
    fieldTypes?: Record<string, string>;
    additionalFields?: Record<string, string>;
    baseForAdditionalFields?: string[];
    hiddenFields?: string[];
    optionalFallback?: Record<string, string>;
    postProcessFields?: Record<string, [variableName: string, code: string]>;
    scopes?: Record<string, string>;
    scriptedFields?: Record<string, string>;
    useMacro?: boolean;
};
/** @type {Record<string, NodeDescription>} */
export declare const AST_NODES: Record<string, NodeDescription>;
/** @type { {name: string; fields: FieldWithType[]; node: NodeDescription; originalNode: NodeDescription;}[] } */
export declare const astNodeNamesWithFieldOrder: {
    name: string;
    fields: FieldWithType[];
    node: NodeDescription;
    originalNode: NodeDescription;
}[];
export {};
