// 合并对象属性
export type MergeType<T, S> = (Omit<T, keyof S> & S) | (Omit<S, keyof T> & T)
