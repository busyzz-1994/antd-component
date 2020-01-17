/*
 * @Author: busyzz
 * @Date: 2020-01-17 10:58:49
 * @Description:
 */
import { useState, RefObject, useEffect } from 'react';
const useHover = (ref: RefObject<HTMLElement>) => {
  const [hovered, setHoverd] = useState(false);
  useEffect(() => {
    const _setHoverd = hovered => {
      setHoverd(hovered);
    };
    let dom = ref.current;
    if (dom) {
      dom.addEventListener('mouseenter', _setHoverd.bind(null, true));
      dom.addEventListener('mouseleave', _setHoverd.bind(null, false));
    }
    return () => {
      if (dom) {
        dom.removeEventListener('mouseenter', _setHoverd.bind(null, true));
        dom.removeEventListener('mouseleave', _setHoverd.bind(null, false));
      }
    };
  });
  return hovered;
};
export default useHover;
