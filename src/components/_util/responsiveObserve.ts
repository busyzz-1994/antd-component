/*
 * @Author: busyzz
 * @Date: 2019-11-11 11:09:33
 * @Description:
 */
export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type BreakpointMapBase<T> = Partial<Record<Breakpoint, T>>;
export type BreakpointMap = Partial<Record<Breakpoint, number>>;
export type BreakpointMapString = Partial<Record<Breakpoint, string>>;
export const responsiveList: Array<Breakpoint> = [
  'xxl',
  'xl',
  'lg',
  'md',
  'sm',
  'xs'
];
export const responsiveMap: BreakpointMapString = {
  xs: '(max-width: 575px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
  xxl: '(min-width: 1600px)'
};
let enquire: any;
if (typeof window !== 'undefined') {
  const matchMediaPolyfill = (mediaQuery: string) => {
    return {
      media: mediaQuery,
      matches: false,
      addListener() {},
      removeListener() {}
    };
  };
  //@ts-ignore
  window.matchMedia = window.matchMedia || matchMediaPolyfill;
  enquire = require('enquire.js');
}
type SubscribeFunc = (screens: BreakpointMapString) => void;
let subscribers: Array<{
  token: number;
  func: SubscribeFunc;
}> = [];
let subUid = -1;
let screens = {};
const responsiveObserve = {
  dispatch(pointMap) {
    screens = pointMap;
    if (subscribers.length < 1) {
      return false;
    }
    subscribers.forEach(item => {
      item.func(screens);
    });
    return true;
  },
  subscribe(func) {
    if (subscribers.length === 0) {
      this.register();
    }
    let token = ++subUid;
    subscribers.push({
      token,
      func
    });
    func(screens);
    return token;
  },
  unsubscribe(token: number) {
    subscribers = subscribers.filter(item => item.token !== token);
    if (subscribers.length === 0) {
      this.unregister();
    }
  },
  unregister() {
    Object.keys(responsiveMap).map((screen: Breakpoint) =>
      enquire.unregister(responsiveMap[screen])
    );
  },
  register() {
    Object.keys(responsiveMap).forEach(item => {
      enquire.register(responsiveMap[item], {
        match: () => {
          const pointMap = {
            ...screens,
            [item]: true
          };
          this.dispatch(pointMap);
        },
        unmatch: () => {
          const pointMap = {
            ...screens,
            [item]: false
          };
          this.dispatch(pointMap);
        }
      });
    });
  }
};
export default responsiveObserve;
