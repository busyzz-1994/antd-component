export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export const tuple = <T extends string[]>(...args: T) => args;
export const tuple_num = <T extends number[]>(...args: T) => args;
export const getPrefix = type => {
  return 'busyzz-' + type;
};
//获取dom元素 距离文档顶部的距离
export const getElePageX = dom => {
  try {
    let scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    let top = dom.getBoundingClientRect().top;
    return scrollTop + top;
  } catch (e) {
    return 0;
  }
};
// 节流函数
export const throttle = (fn, time = 200) => {
  let startTime = Date.now();
  return function() {
    let currentTime = Date.now();
    let diffTime = currentTime - startTime;
    if (diffTime >= 200) {
      startTime = currentTime;
      fn();
    }
  };
};
