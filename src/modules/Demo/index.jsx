/**
 * Created by Vincent on 2018/8/6.
 */
import React, {Component} from 'react';
import TodoList from './components/TodoList';
import TodoListModel from './models/TodoListModel';

const store = new TodoListModel();
// playing around in the console
window.store = store;

class Demo extends Component {
  componentDidMount(){
    store.addTodo("Get Coffee");
    store.addTodo("Write simpler code");
    store.todos[0].finished = true;

    setTimeout(() => {
      store.addTodo("Get a cookie as well");
    }, 2000);
  }
  render() {
    return (
      <div className="Demo">
        <TodoList store={store} />
      </div>
    );
  }
}

export default Demo;
