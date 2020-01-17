/*
 * @Author: busyzz
 * @Date: 2020-01-17 14:59:41
 * @Description:
 */
import { scrollbarWidth } from '@xobotyi/scrollbar-width';
import { useEffect, useState } from 'react';

function useScrollbarWidth(): number | undefined {
  const [sbw, setSbw] = useState(scrollbarWidth());
  useEffect(() => {
    if (typeof sbw !== 'undefined') {
      return;
    }
    const raf = requestAnimationFrame(() => {
      setSbw(scrollbarWidth());
    });

    return () => cancelAnimationFrame(raf);
  }, []);
  return sbw;
}
export default useScrollbarWidth;
