/**
 * vscode中的类型悬停信息类型展开(只展开一层)
 *
 * @example
 * interface Obj1 {
 *   a: string
 *   b: string
 * }
 *
 * interface Obj2 {
 *   c: Obj1
 *   d: string
 * }
 * // 悬停展示
 * // (property) _a: Obj2
 * const _a: Obj2;
 * // 悬停展示
 * // (property) a: {
 * //  e: Obj2;
 * //  f: Obj1;
 * //  g: string;
 * // }
 * const a: Expand<Obj2>;
 */
export type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never
