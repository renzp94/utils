/**
 * 座机号码验证
 *
 * 中国大陆座机号码由`区号 + 电话号码`。区号由`3~4`位组成且第一位是`0`，电话号码由`7~8`位组成。格式有：`区号-电话号码`、`(区号)电话号码`、`电话号码`
 *
 * @param v 验证的字符串
 * @returns 如果是座机号码格式则返回true，否则返回false
 *
 * @example
 * telValidator('010-12345678'); // true
 * telValidator('(010)88050109'); // true
 * telValidator('12345678'); // true
 * telValidator('01100-62770334'); // false
 */
export const telValidator = (v: string): boolean =>
  /^(0\d{2,3}-)?\d{7,8}$/.test(v) || /^(\(0\d{2,3}\))?\d{7,8}$/.test(v)
