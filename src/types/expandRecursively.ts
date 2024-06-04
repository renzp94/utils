/**
 * vscode中的类型悬停信息类型全部展开
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
 * //     c: {
 * //         a: string;
 * //         b: string;
 * //     };
 * //     d: string;
 * // }
 * const a: ExpandRecursively<Obj2>;
 */
export type ExpandRecursively<T> = T extends object
  ? T extends infer O
    ? { [K in keyof O]: ExpandRecursively<O[K]> }
    : never
  : T
