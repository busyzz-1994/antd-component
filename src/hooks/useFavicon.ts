/*
 * @Author: busyzz
 * @Date: 2020-01-17 16:04:02
 * @Description:
 */
import { useEffect } from 'react';
const useFavicon = (href: string) => {
  useEffect(() => {
    let linkDom: HTMLLinkElement =
      document.querySelector('link[rel*="icon"]') ||
      document.createElement('link');
    linkDom.type = 'image/x-icon';
    linkDom.rel = 'shortcut icon';
    linkDom.href = href;
    document.getElementsByTagName('head')[0].appendChild(linkDom);
  }, [href]);
};
export default useFavicon;
