/**
 * Created by Vincent on 2018/8/7.
 */
import { computed, flow, observable } from 'mobx';
// import api from 'api';

export default class UserModel {
  @observable
  info = null;
  @computed
  get loggedIn() {
    return this.info && this.info.token != null;
  }
  login = flow(function*(username, password) {
    // const data = yield api.user.login(username, password);
    // this.info = data.result;

    // mock data
    const data = {
      result: {
        token: '@#$%^&*$%^&*(',
        name: 'Admin',
        age: 30
      }
    };
    this.info = data.result;
    yield void 0;
  });
  logout = flow(function*() {
    this.info = null;
    yield void 0;
  });
}
