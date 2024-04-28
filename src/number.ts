import { isNumber } from './is'

export interface NumberSeparateOptions {
  // 分割位数
  digit?: number
  // 分割符
  separate?: string
  // 是否处理小数
  isDealDecimal?: boolean
}

/**
 * 分割数字
 *
 * 默认为3位一分割(千分位分割)，分割符为,
 *
 * @param v 要分割的数字
 * @param options 分割配置
 * @returns 如果是数字则返回分割后的字符串，否则原样返回
 *
 * @example
 * numberSeparate(1234); // 123,4
 * numberSeparate(123456789.123456); // 123,456,789.123456
 * numberSeparate(123456789.123456, { isDealDecimal: true }); // 123,456,789.123,456
 * numberSeparate(12345, { digit: 2 }); // '1,23,45
 * numberSeparate(12345, { digit: 2, separate: '$' }); // 1$23$45
 */
export const numberSeparate = (
  v: number,
  options?: NumberSeparateOptions,
): string | number => {
  const { digit = 3, separate = ',', isDealDecimal } = options ?? {}
  if (isNumber(v) && digit > 0) {
    const values = v.toString()?.split('.')
    const reg = new RegExp(`\\B(?=(\\d{${digit}})+(?!\\d))`, 'g')
    values[0] = values[0].replace(reg, separate)
    if (isDealDecimal && values?.[1]) {
      values[1] = values[1].replace(reg, separate)
    }
    return values.join('.')
  }

  return v
}
