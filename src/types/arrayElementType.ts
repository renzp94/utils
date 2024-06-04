/**
 * 获取数组中的元素类型
 *
 * @example
 * ArrayElementType<string[]>; // string
 * ArrayElementType<[string,number]>; // string | number
 */
export type ArrayElementType<T> = T extends (infer K)[] ? K : never
