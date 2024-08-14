import { createArray } from '../array'
import { radom } from '../number/radom'

/**
 * 生成UUID
 * @param hasUppercase 是否含有大写字母
 * @returns 返回生成8-4-4-4-12格式的UUID
 *
 * @example
 * uuid(); // nlcvepvq-w764-vtn5-ut6t-13r7tyn0j8hb
 * uuid(true); // 4EbKOG6X-k6DJ-I5AJ-41FM-mP5At4u8D25G
 */
export const uuid = (hasUppercase = false): string => {
  // 随机字符组
  let chars = [
    ...createArray(26, (i) => String.fromCharCode(97 + i)),
    ...createArray(10, (i) => i),
  ]
  // 假如大写字母
  if (hasUppercase) {
    chars = chars.concat(createArray(26, (i) => String.fromCharCode(65 + i)))
  }
  // 随机数：时间戳 + 随机数
  const radomValue = `${Date.now()}${radom(
    10 ** 18,
    Number(createArray(19, 9).join('')),
  )}`
  // 根据随机数再随机生成随机字符
  const radomChars = Array.prototype.map.call(radomValue, (v) => {
    const index = radom(Number(v), chars.length - 2, 0)
    return chars[index]
  })

  return [
    radomChars.slice(0, 8),
    radomChars.slice(8, 12),
    radomChars.slice(12, 16),
    radomChars.slice(16, 20),
    radomChars.slice(20, 32),
  ]
    .join('-')
    .replaceAll(',', '')
}
