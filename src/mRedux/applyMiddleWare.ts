export const logger = api => {
  return next => {
    return action => {
      console.log('enter');
      next();
      console.log('leave');
    };
  };
};
export const applyMiddleWare = (...middleWares: Array<any>) => {
  return () => {
    let index = 0;
    let currentState = {
      count: 1
    };
    let store = {
      dispatch: () => {
        currentState.count = ++currentState.count;
      },
      getState: () => {
        return currentState;
      }
    };
    let dispatch;
    let funcs = middleWares.map(func => func(store));
    // 如果只有2个
    let first = funcs[0],
      seconed = funcs[1];
    dispatch = first(seconed(store.dispatch));
    return {
      ...store,
      dispatch
    };
  };
};

export default {};
