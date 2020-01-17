/*
 * @Author: busyzz
 * @Date: 2020-01-17 14:41:31
 * @Description:
 */
import { useState } from 'react';
function useFetch(): [boolean, (fn) => Promise<any>] {
  const [loading, setLoading] = useState(false);
  function dispatch(fn) {
    return new Promise(async resolve => {
      setLoading(true);
      let { code, data } = await fn();
      setLoading(false);
      resolve({ code, data });
    });
  }
  return [loading, dispatch];
}
export default useFetch;
