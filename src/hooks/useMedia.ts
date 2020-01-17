/*
 * @Author: busyzz
 * @Date: 2020-01-17 14:51:17
 * @Description:
 */
import { useEffect, useState } from 'react';

const useMedia = (query: string) => {
  const [state, setState] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    let mounted = true;
    const mql = window.matchMedia(query);
    const onChange = () => {
      if (!mounted) {
        return;
      }
      setState(!!mql.matches);
    };

    mql.addListener(onChange);
    setState(mql.matches);

    return () => {
      mounted = false;
      mql.removeListener(onChange);
    };
  }, [query]);

  return state;
};

export default useMedia;
