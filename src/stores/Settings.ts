/**
 * 一些开发过程中的设置，可以在 http://localhost:3000//settings 中查看和设置
 */
import debounce from 'lodash/debounce';
import { observable, observe, toJS } from 'mobx';
import localStorage from 'utils/localStorage';

export default class Settings {
  /**
   * 服务端 ip 地址 用于拼接 api
   */
  @observable
  apiServer = '';
  @observable
  debug = process.env.NODE_ENV === 'development';
  @observable
  release = process.env.NODE_ENV === 'production';

  constructor() {
    const settingsCache = localStorage.getItem('//settings');
    if (settingsCache) {
      Object.assign(this, settingsCache);
    }
    observe(
      this,
      debounce(() => {
        const settingsCache = toJS(this);
        localStorage.setItem('//settings', settingsCache);
      })
    );
  }
  clear() {
    localStorage.removeItem('//settings');
  }
}
