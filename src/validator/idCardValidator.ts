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
