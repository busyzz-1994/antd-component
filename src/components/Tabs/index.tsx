import React, { Component } from 'react';
import { getPrefix } from '../_util';
import './style/index.scss';
import classNames from 'classnames';
import TabPane from './TabPane';
import { findDOMNode } from 'react-dom';
const prefixCls = getPrefix('tabs');
interface ITabs {
  activePage?: number;
  activeIndex?: number;
  defaultIndex?: number;
  onChange?: (activeIndex?: number) => void;
  animated?: boolean;
  children?: any;
  showContent?: boolean;
}
interface IState {
  activeIndex: number;
}
export default class extends Component<ITabs, IState> {
  static TabPane = TabPane;
  static defaultProps = {
    defaultIndex: 0,
    animated: true,
    showContent: true
  };
  static getDerivedStateFromProps = nextProps => {
    if ('activeIndex' in nextProps) {
      return { activeIndex: nextProps.activeIndex };
    }
    return null;
  };
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: props.activeIndex ? props.activeIndex : props.defaultIndex
    };
  }
  tabsDesc = [];
  saved = false;
  content = React.createRef<HTMLDivElement>();
  saveRef = index => dom => {
    const { children } = this.props;
    dom = findDOMNode(dom);
    const childLen = React.Children.count(children);
    //只保存一次
    if (!this.saved) {
      let rect = dom.getBoundingClientRect();
      let width = rect.width;
      this.tabsDesc.push(width);
      if (index === childLen - 1) {
        this.saved = true;
        this.forceUpdate();
      }
    }
  };
  computedInkPosition = index => {
    let arr = this.tabsDesc.slice(0, index);
    return arr.reduce((prev, current) => prev + 32 + current, 0);
  };
  getInkWidth = index => {
    return this.tabsDesc[index] || 0;
  };
  changeTab = index => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(index);
    } else {
      this.setState({ activeIndex: index });
    }
  };
  getContentItemWidth = () => {
    if (this.content.current) {
      return this.content.current.offsetWidth;
    }
  };
  render() {
    let { activeIndex } = this.state;
    //tabBar 当前页
    let { activePage, animated, children, showContent } = this.props;
    let navStyle = {
      marginLeft: `-${activePage}00%`
    };
    let contentWrapperStyle = {
      marginLeft: `-${activeIndex}00%`,
      transition: animated ? 'all 0.3s' : 'none'
    };
    let inkPost = this.computedInkPosition(activeIndex);
    let inkWidth = this.getInkWidth(activeIndex);
    let inkStyle = {
      transform: `translate(${inkPost}px)`,
      width: inkWidth
    } as React.CSSProperties;
    let contentItemWidth = this.getContentItemWidth();

    return (
      <div className={prefixCls}>
        <div className={prefixCls + '-bar'}>
          <div className={prefixCls + '-nav-wrapper'}>
            <div className={prefixCls + '-nav-scroll'}>
              <div className={prefixCls + '-nav-box'}>
                <div style={navStyle} className={prefixCls + '-nav'}>
                  {React.Children.map(children, (item, index) => {
                    let tab = item.props.tab;
                    return React.cloneElement(item as React.ReactElement, {
                      key: index,
                      className: classNames(prefixCls + '-nav-tabPane', {
                        active: index === activeIndex
                      }),
                      onClick: () => this.changeTab(index),
                      children: tab,
                      ref: this.saveRef(index)
                    });
                  })}
                </div>
                <div style={inkStyle} className={prefixCls + '-nav-ink'}></div>
              </div>
            </div>
          </div>
        </div>
        {showContent && (
          <div ref={this.content} className={prefixCls + '-content'}>
            <div
              style={contentWrapperStyle}
              className={prefixCls + '-content-wrapper'}
            >
              {React.Children.map(children, (item, index) => {
                return (
                  <div
                    style={{ width: contentItemWidth }}
                    key={index}
                    className={classNames(prefixCls + '-content-item', {
                      active: index === activeIndex
                    })}
                  >
                    {item.props.children}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}
