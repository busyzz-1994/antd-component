import React, { Component } from 'react';
import './index.scss';
import 'antd/dist/antd.css';
import { Button, Rate } from 'antd';
import 'components/style/motion/index';
import TransitionEvents from 'css-animation/lib/Event';
import classNames from 'classnames';
import MRate from 'components/Rate';
import MSelect from 'components/Select';
import Hook from './hook';
import { Link } from 'react-router-dom';
import store from '../reduxStore';
// import store from 'mRedux';
interface Per {
  name: string;
  age: number;
}
export const PerContext = React.createContext<Per>({ name: 'qzz', age: 23 });
// const { Option } = Select;
const { Option } = MSelect;
function increment() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: 'add' });
    }, 2000);
  };
}
export default class extends Component<any, any> {
  state = {
    tagVisible: true,
    visible: true,
    index: 0,
    activePage: 0,
    activeKey: ['1', '2'],
    marginTop: 100,
    checked: true,
    move: false,
    startValue: 3,
    list: [],
    number: 0,
  };
  dom = React.createRef<HTMLDivElement>();
  en = React.createRef<HTMLDivElement>();
  componentDidMount() {
    // TransitionEvents.addEndEventListener(this.dom.current, () => {
    //   console.log('oooo');()
    // });
    // TransitionEvents.addStartEventListener(this.dom.current, () => {
    //   console.log('start');
    // });

    store.subscribe(() => {
      this.forceUpdate();
    });
  }
  collapseChange = (activeKey) => {
    this.setState({
      activeKey,
    });
  };
  change = (checked) => {
    console.log(checked);
    this.setState({ checked });
  };
  move = () => {
    this.setState({ move: true });
  };
  mouseMove = (e) => {
    let dom = this.en.current;
  };
  startChange = (val) => {
    this.setState({
      startValue: val,
    });
  };
  handleChange = (val) => {
    // console.log('onchange', val);
  };
  onSearch = (val) => {
    // console.log('search:', val);
  };
  onSelect = (val) => {
    // console.log('select:', val);
  };
  push = () => {
    window.history.replaceState(null, null, '/hh');
  };
  render() {
    const { startValue, move, number } = this.state;
    return (
      <div>
        <div style={{ marginBottom: 100 }}>
          <div
            ref={this.dom}
            onClick={this.move}
            className={classNames('transition', { active: move })}
          ></div>
          {store.getState().count}
          <Button onClick={() => store.dispatch(increment())}>add</Button>
          <Button onClick={() => store.dispatch({ type: 'reduce' })}>
            reduce
          </Button>
          {number}
          <Button onClick={() => this.setState({ number: number + 1 })}>
            ++++
          </Button>
          <Link to="/list">list</Link>
        </div>
      </div>
    );
  }
}
