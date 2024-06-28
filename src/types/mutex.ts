export type Mutex<
  T extends Record<string, any>,
  U extends Record<string, any>,
> =
  | ({ [TK in keyof T]: T[TK] } & { [UK in keyof U]?: never })
  | ({ [UK in keyof U]: U[UK] } & { [TK in keyof T]?: never })
