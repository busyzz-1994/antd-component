import request from 'utils/request';

export default {
  login(username: string, password: string) {
    return request('/user/login', { username, password });
  }
};
