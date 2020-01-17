/*
 * @Author: busyzz
 * @Date: 2020-01-17 10:42:40
 * @Description:
 */
import { RefObject, useEffect } from 'react';
function isRef(target): target is RefObject<HTMLElement> {
  return !!target.current;
}
const useEvent = (
  eventType: string,
  handler?: (e) => void,
  target: Window | RefObject<HTMLElement> = window
) => {
  useEffect(() => {
    let dom = null as HTMLElement | Window;
    if (isRef(target)) {
      dom = target.current;
    } else {
      dom = target;
    }
    dom.addEventListener(eventType, handler);
    return () => [dom.removeEventListener(eventType, handler)];
  }, []);
};
export default useEvent;
