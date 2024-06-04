/**
 * 对象类型合并
 *
 * @example
 * MergeType<
 *   {
 *     a: number
 *     b: { c: number }
 *   },
 *   {
 *     a: string
 *     b: number
 *   }
 * >; // { a: number | string; b: number | { c: number } }
 * MergeType<
 *   {
 *     a: number
 *     b: { c: number }
 *   },
 *   {
 *     a: string
 *     b: { d: number }
 *   }
 * >; // { a: number | string; b: { c: number; d: number } }
 */
export type MergeType<T, S> = {
  [P in keyof (T & S)]: P extends keyof T
    ? // key在T中
      P extends keyof S
      ? // key在T和S中
        T[P] extends Record<string, any>
        ? // T[P]为对象
          S[P] extends Record<string, any>
          ? // T[P]和S[P]都为对象，则合并对象属性
            MergeType<T[P], S[P]>
          : // 否则为联合类型
            T[P] | S[P]
        : // 否则为联合类型
          T[P] | S[P]
      : // key在T中不在S中，直接返回T[P]类型
        T[P]
    : // key不在T中
      P extends keyof S
      ? S[P]
      : never
}
