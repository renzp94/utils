/**
 * 邮箱验证
 *
 * 邮箱格式为：`username@domain.tld`。
 * - `username`是用户名。由英文字母、数字、下划线、点和中划线组成，但不能包含空格或其他特殊字符。
 * - `@`是分隔符
 * - `domain`是域名
 * - `.tld`是顶级域名
 *
 * @param v 验证的字符串
 * @returns 如果是邮箱格式则返回true，否则返回false
 *
 * @example
 * emailValidator('lisi@qq.com'); // true
 * emailValidator('wangwu@163.com'); // true
 * emailValidator('xiaoli@gmail.com'); // true
 * emailValidator('lisi@qq'); // false
 */
export const emailValidator = (v: string): boolean =>
  /^[a-zA-Z0-9_\.\-\+]+@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/.test(v)
