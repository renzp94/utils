import type { Expand } from '../../src'

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
   *  e: Obj2;
   *  f: Obj1;
   *  g: string;
   * }
   */
  a: Expand<Obj2>
}
