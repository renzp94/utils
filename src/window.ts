/**
 * 复制文本
 *
 * 此方法优先使用`navigator.clipboard.writeText`，如果不可用则降级为`document.execCommand`
 *
 * @param text 要复制的文本
 * @returns 如果复制成功则返回true，否则返回false
 *
 * @example
 * const status = await copyText('复制文本'); // true
 * const text = await navigator.clipboard.readText();
 * console.log(text); // 复制文本
 */
export const copyText = async (text: string) => {
  try {
    // navigator.clipboard只能用于https或者localhost。
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(text)
      return true
    }
    const input = document.createElement('input')
    document.body.appendChild(input)
    input.value = text
    input.select()
    document.execCommand('copy')
    document.body.removeChild(input)
    return Promise.resolve(true)
  } catch {
    return false
  }
}
