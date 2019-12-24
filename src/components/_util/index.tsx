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
//获取滚动条的长度
export const getScroll = (
  node: HTMLElement | Window = window,
  top: boolean = true
) => {
  return node[`page${top ? 'Y' : 'X'}Offset`];
};
//获取元素到文档的 上下偏移量
export const getOffset = (node: Element): { top: number; left: number } => {
  let rect = node.getBoundingClientRect();
  let res = {
    top: 0,
    left: 0
  };
  res.top = rect.top + getScroll();
  res.left = rect.left + getScroll(undefined, false);
  return res;
};
export function setTransform(
  node: HTMLElement,
  value: string,
  name: string = ''
) {
  const style = node.style;
  ['Webkit', 'Moz', 'Ms', 'ms', 'O'].forEach(prefix => {
    style[`${prefix}Transform${name}`] = value;
  });
  style[`transform${name}`] = value;
}
export function toggleArray(arr: Array<any>, target) {
  let index = arr.indexOf(target);
  if (index === -1) {
    return [...arr, target];
  }
  let newArr = [...arr];
  newArr.splice(index, 1);
  return newArr;
}
