import React, { Component } from 'react';
import { getPrefix } from '../_util';
import './style/index.scss';
import classNames from 'classnames';
const prefixCls = getPrefix('carousel');
interface IProps {
  autoplay?: boolean;
}
export default class extends Component<IProps> {
  static defaultProps = {
    autoplay: false
  };
  state = {
    scrollWidth: 0,
    activeIndex: 0
  };
  componentDidMount() {
    this.setScrollWidth();
    this.start();
  }
  componentDidUpdate(prevProps, prevState) {
    let scrollWidth = this.getScrollWidth();
    if (prevState.scrollWidth !== scrollWidth) {
      this.setScrollWidth();
    }
  }
  scrollDom = React.createRef<HTMLDivElement>();
  setScrollWidth = () => {
    let scrollWidth = this.getScrollWidth();
    this.setState({ scrollWidth });
  };
  getScrollWidth = () => {
    return this.scrollDom.current.offsetWidth;
  };
  changePage = index => {
    this.setState({ activeIndex: index });
  };
  timer = null;
  start = () => {
    let { autoplay } = this.props;
    if (!autoplay) return;
    if (this.timer) this.end();
    this.timer = setInterval(() => {
      this.next();
    }, 3000);
  };
  end = () => {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  };
  next = () => {
    let childLen = this.getChildLength();
    let { activeIndex } = this.state;
    //最后一条
    if (activeIndex >= childLen - 1) {
      activeIndex = 0;
    } else {
      activeIndex = activeIndex + 1;
    }
    this.setState({ activeIndex });
  };
  getChildLength = () => {
    let { children } = this.props;
    return React.Children.count(children);
  };
  render() {
    const { scrollWidth, activeIndex } = this.state;
    const { children } = this.props;
    const s = `translateX(-${scrollWidth * activeIndex}px)`;
    const wrapperStyle: React.CSSProperties = {
      transform: s,
      msTransform: s,
      WebkitTransform: s
    };
    const childrenArray = React.Children.toArray(children);
    return (
      <div className={prefixCls}>
        <div
          onMouseEnter={this.end}
          onMouseLeave={this.start}
          ref={this.scrollDom}
          className={prefixCls + '-scroll'}
        >
          <div style={wrapperStyle} className={prefixCls + '-wrapper'}>
            {childrenArray.map((item, index) => (
              <div
                key={index}
                style={{ width: scrollWidth }}
                className={classNames(prefixCls + '-item')}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className={prefixCls + '-dot'}>
          {childrenArray.map((item, index) => (
            <div
              className={classNames({ active: index === activeIndex })}
              key={index}
              onClick={() => this.changePage(index)}
            ></div>
          ))}
        </div>
      </div>
    );
  }
}
