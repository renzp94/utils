/**
 * 休眠
 * @param time 等待时间(毫秒)
 *
 * @example
 * console.log('start');
 * await sleep(2000); // 等待2000毫秒
 * console.log('end');
 */
export const sleep = async (time: number): Promise<void> =>
  new Promise<void>((resolve) => setTimeout(resolve, time))
