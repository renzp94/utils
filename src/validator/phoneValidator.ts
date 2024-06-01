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
