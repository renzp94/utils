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
