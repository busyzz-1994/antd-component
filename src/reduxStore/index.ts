import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
let state = {
  count: 0,
};
const reducer = (s = state, action) => {
  let type = action.type;
  switch (type) {
    case 'add':
      return { ...s, count: ++s.count };
    case 'reduce':
      return { ...s, count: --s.count };
    default:
      return s;
  }
};
const middleware_1 = ({ dispatch, getState }) => (next) => (action) => {
  console.log('1');
  let result = next(action);
  console.log('2');
  return result;
};
const middleware_2 = ({ dispatch, getState }) => (next) => (action) => {
  console.log('3');
  let result = next(action);
  console.log('4');
  return result;
};
let store = createStore(reducer, applyMiddleware(middleware_1, middleware_2));

export default store;
