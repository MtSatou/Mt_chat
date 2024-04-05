/**
 * 获取今天已流逝的毫秒数
 * @returns number
 */
export const getElapsedMillisecondsToday = () => {
  const now = new Date();
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return now.getTime() - startOfDay.getTime();
}