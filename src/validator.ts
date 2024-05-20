import { isNumber } from './is'

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

/**
 * 身份证验证
 *
 * 身份证组成：
 *  - 前6位为省市区代码，1～2为省，3～4为市，5～6为区县
 *  - 7～14位为出生年月日
 *  - 15～17位为同一地址码所标示的区域范围内对同年同月同日生人编订的顺序码。第17位表示性别，奇数为男，偶数为女
 *  - 18位为校验码
 *
 * @param v 验证的字符串
 * @returns 如果是身份证格式则返回true，否则返回false
 *
 * @example
 * idCardValidator('34052419800101001X'); // true
 * idCardValidator('620102195603025028'); // true
 * idCardValidator('620102195603025026'); // false
 * idCardValidator('abc123456789012343'); // false
 */
export const idCardValidator = (v: string): boolean => {
  // 验证基本格式规则
  if (!/^[1-9]\d{16}(\d|X|x)$/.test(v)) {
    return false
  }
  // 验证有效年月日
  const year = Number(v.slice(6, 10))
  const month = Number(v.slice(10, 12))
  const day = Number(v.slice(12, 14))
  const date = new Date(`${year}/${month}/${day}`)
  if (
    date.getFullYear() !== year ||
    date.getMonth() + 1 !== month ||
    date.getDate() !== day
  ) {
    return false
  }
  // 验证校验码是否正确
  const A = v.slice(0, 17)
  // 1～17位系数
  const W = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
  // S = sum(A[i] * W[i])
  const S = A.split('').reduce((prev, curr, i) => prev + Number(curr) * W[i], 0)
  const M = S % 11
  // 校验码
  const codes = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2]
  // 由于最后一位可能是x或X，校验码中的是X，所以转大写再比较
  return `${A}${codes[M]}` === v.toUpperCase()
}

/**
 * 数字验证
 *
 * @param v 验证的字符串
 * @returns 如果是纯数字则返回true，否则返回false
 *
 * @example
 * numberValidator('1'); // true
 * numberValidator('1.1'); // true
 * numberValidator('1.1.1'); // false
 * numberValidator('.1'); // false
 * numberValidator('1.'); // false
 * numberValidator('-1'); // true
 * numberValidator('12e2'); // true
 */
export const numberValidator = (v: string) => {
  const hasE = /e/i.test(v)
  // 科学计数法
  const eReg = /^[-+]?\d+(?:\.\d+)?(?:e[+-]?|E[+-]?)\d+?$/
  // 非科学计数法
  const reg = /^[-+]?\d+?(?:\.\d+|\d?)$/

  return hasE ? eReg.test(v) : reg.test(v)
}

/**
 * 手机号验证
 *
 * 中国大陆手机号由11位数字组成，第1-3位为网络识别号；第4-7位为地区编码；第8-11位为用户号码
 *
 * @param v 验证的字符串
 * @returns 如果是手机号格式则返回true，否则返回false
 *
 * @example
 *
 * phoneValidator('13311111111'); // true
 * phoneValidator('12000000000'); // false
 */
export const phoneValidator = (v: string): boolean => /^1[3-9]\d{9}$/.test(v)

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

export enum ZH_MATCH {
  // 匹配中文标点符号
  S = 'symbol',
  // 匹配汉字
  W = 'word',
  // 匹配汉字和中文标点符号
  W_S = 'word_symbol',
}

/**
 * 是否为中文，默认匹配汉字和中文标点符号
 *
 * @param v 验证的字符串
 * @param match 匹配模式：ZH_MATCH.W(只匹配汉字)、ZH_MATCH.S(只匹配中文标点符号)、ZH_MATCH.W_S(匹配汉字和标点符号)
 * @returns 如果是汉字则返回true，否则返回false
 *
 * @example
 * zhValidator('这是一段中文文字，还有中文标点符号。'); // true
 * zhValidator('这是一段中文文字', ZH_MATCH.W); // true
 * zhValidator('这是一段中文文字，还有中文标点符号。', ZH_MATCH.W); // false
 * zhValidator('这是一段含有英文符号的字符串.'); // false
 * zhValidator('《》（）', ZH_MATCH.S); // true
 */
export const zhValidator = (v: string, match = ZH_MATCH.W_S): boolean => {
  const regexps = {
    [ZH_MATCH.S]: /^[，。？！：；、“”【】（）《》]{0,}$/,
    [ZH_MATCH.W]: /^[\u4e00-\u9fa5]{0,}$/,
    [ZH_MATCH.W_S]: /^[\u4e00-\u9fa5，。？！：；、“”【】（）《》]{0,}$/,
  }

  return regexps[match].test(v)
}
