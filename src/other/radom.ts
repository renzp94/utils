/**
 * 生成指定范围的随机数
 * @param min 最小范围
 * @param max 最大范围
 * @param precision 精度(最大为12)
 * @returns 返回生成的随机数
 *
 * @example
 * radom(100, 10000); // 9059.655590156493
 * radom(100, 10000, 0); // 9059
 */
export const radom = (min: number, max: number, precision = 12): number => {
  let v = Math.random() * (max - min + 1) + min
  v = v > max ? v - 1 : v

  return Number(v.toFixed(precision))
}
