import request from '../utils/request';

export default {
  login(username, password) {
    return request('/user/login', { username, password });
  }
};
