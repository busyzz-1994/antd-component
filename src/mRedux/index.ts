interface Action {
  type: string;
  [propNames: string]: any;
}
interface Store<S, A> {
  dispatch: Dispatch<A>;
  getState: () => S;
  subscribe: (func: ListenItem) => UnSubscribe;
}
type Dispatch<A> = (action: A) => A;
type Reducer<S, A> = (state: S, action: A) => S;
type ListenItem = () => void;
type UnSubscribe = () => void;
const initState = {
  count: 0
};
const reducer = (state = initState, action) => {
  let type = action.type;
  switch (type) {
    case 'add':
      return { ...state, count: ++state.count };
    case 'reduce':
      return { ...state, count: --state.count };
    default:
      return state;
  }
};
function createStore<S, A extends Action>(
  reducer: Reducer<S, A>,
  preState?: S
): Store<S, A> {
  let currentState: S = preState;
  let listeners: Array<ListenItem> = [];
  const dispatch: Dispatch<A> = (action: A) => {
    currentState = reducer(currentState, action);
    listeners.forEach(func => func());
    return action;
  };
  const getState = () => {
    return currentState;
  };
  const subscribe = (func: ListenItem): UnSubscribe => {
    listeners.push(func);
    return () => {
      let index = listeners.indexOf(func);
      listeners.splice(index, 1);
    };
  };
  dispatch({ type: '@@init' } as A);
  return {
    dispatch,
    getState,
    subscribe
  };
}
let store = createStore(reducer, { count: 123 });
export default store;
