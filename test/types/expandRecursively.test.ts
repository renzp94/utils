import type { ExpandRecursively } from '../../src'

interface Obj1 {
  a: string
  b: string
}

interface Obj2 {
  c: Obj1
  d: string
}

type cases = {
  /**
   * 悬停展示
   * (property) _a: Obj2
   */
  _a: Obj2
  /**
   * 悬停展示
   * (property) a: {
   *     c: {
   *         a: string;
   *         b: string;
   *     };
   *     d: string;
   * }
   */
  a: ExpandRecursively<Obj2>
}
