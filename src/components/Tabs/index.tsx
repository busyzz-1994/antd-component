import React, { Component } from 'react';
import { getPrefix } from '../_util';
import './style/index.scss';
const prefixCls = getPrefix('tabs');
interface ITabs {
  activePage?: number;
  activeIndex?: number;
}
export default class extends Component<ITabs> {
  tabsDesc = [];
  saved = false;
  saveRef = index => dom => {
    //只保存一次
    if (!this.saved) {
      let rect = dom.getBoundingClientRect();
      let width = rect.width;
      this.tabsDesc.push(width);
      if (index === 3) {
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
  render() {
    let { activeIndex, activePage } = this.props;
    let navStyle = {
      marginLeft: `-${activePage}00%`
    };
    let inkPost = this.computedInkPosition(activeIndex);
    let inkWidth = this.getInkWidth(activeIndex);
    console.log(inkPost);
    let inkStyle = {
      transform: `translate(${inkPost}px)`,
      width: inkWidth
    } as React.CSSProperties;
    return (
      <div className={prefixCls}>
        <div className={prefixCls + '-bar'}>
          <div className={prefixCls + '-nav-wrapper'}>
            <div className={prefixCls + '-nav-scroll'}>
              <div className={prefixCls + '-nav-box'}>
                <div style={navStyle} className={prefixCls + '-nav'}>
                  {['tab1', 'tab_2', '这是一条神奇的天路', 'tab_4'].map(
                    (item, index) => {
                      return (
                        <div
                          key={item}
                          ref={this.saveRef(index)}
                          className={prefixCls + '-nav-tabPane'}
                        >
                          {item}
                        </div>
                      );
                    }
                  )}
                </div>
                <div style={inkStyle} className={prefixCls + '-nav-ink'}></div>
              </div>
            </div>
          </div>
        </div>
        <div className={prefixCls + '-content'}>content</div>
      </div>
    );
  }
}
