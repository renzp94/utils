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
export const numberValidator = (v: string): boolean => {
  const hasE = /e/i.test(v)
  // 科学计数法
  const eReg = /^[-+]?\d+(?:\.\d+)?(?:e[+-]?|E[+-]?)\d+?$/
  // 非科学计数法
  const reg = /^[-+]?\d+?(?:\.\d+|\d?)$/

  return hasE ? eReg.test(v) : reg.test(v)
}
