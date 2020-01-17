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
interface Per {
  name: string;
  age: number;
}
export const PerContext = React.createContext<Per>({ name: 'qzz', age: 23 });
// const { Option } = Select;
const { Option } = MSelect;
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
    list: []
  };
  dom = React.createRef<HTMLDivElement>();
  en = React.createRef<HTMLDivElement>();
  componentDidMount() {
    TransitionEvents.addEndEventListener(this.dom.current, () => {
      console.log('oooo');
    });
    TransitionEvents.addStartEventListener(this.dom.current, () => {
      console.log('start');
    });
  }
  collapseChange = activeKey => {
    this.setState({
      activeKey
    });
  };
  change = checked => {
    console.log(checked);
    this.setState({ checked });
  };
  move = () => {
    this.setState({ move: true });
  };
  mouseMove = e => {
    let dom = this.en.current;
  };
  startChange = val => {
    this.setState({
      startValue: val
    });
  };
  handleChange = val => {
    // console.log('onchange', val);
  };
  onSearch = val => {
    // console.log('search:', val);
  };
  onSelect = val => {
    // console.log('select:', val);
  };
  push = () => {
    const { list } = this.state;
    this.setState({ list: [...list, 'php'] });
    // this.setState(prevState => ({ list: [prevState.list] }));
  };
  render() {
    const { startValue, move } = this.state;
    return (
      <div>
        <div style={{ marginBottom: 100 }}>
          <div
            ref={this.dom}
            onClick={this.move}
            className={classNames('transition', { active: move })}
          ></div>
          <Rate allowHalf={true} value={startValue} character="M" />
          <div style={{ marginTop: 100 }}>
            <MRate
              allowHalf={true}
              onChange={this.startChange}
              value={startValue}
              count={8}
            />
          </div>
          <div style={{ marginTop: 50 }}>
            <div style={{ marginTop: 200 }}>
              <Button onClick={this.push}>push</Button>
              <PerContext.Provider value={{ name: 'ooz', age: 999 }}>
                <Hook />
              </PerContext.Provider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
