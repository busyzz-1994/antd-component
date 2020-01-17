/*
 * @Author: busyzz
 * @Date: 2020-01-16 15:53:08
 * @Description:
 */
import { useState, useEffect, useCallback } from 'react';
function getParams(string, name) {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  let result = string.substring(1).match(reg);
  return result ? decodeURIComponent(result[2]) : null;
}
export default (p: string[]) => {
  const getParamsQueue = useCallback(() => {
    const searchString = window.location.search;
    const val = p.map(name => {
      return getParams(searchString, name);
    });
    return val;
  }, []);
  const [params, setParams] = useState<string[]>(getParamsQueue);
  useEffect(() => {
    const onChange = () => {
      let val = getParamsQueue();
      setParams(val);
    };
    window.addEventListener('popstate', onChange);
    window.addEventListener('pushstate', onChange);
    window.addEventListener('replacestate', onChange);
    return () => {
      window.removeEventListener('popstate', onChange);
      window.removeEventListener('pushstate', onChange);
      window.removeEventListener('replacestate', onChange);
    };
  }, []);
  return params;
};
