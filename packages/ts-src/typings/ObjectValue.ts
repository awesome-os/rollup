export type ObjectValue<Base> = Base extends Record<string, any> ? Base : never;
