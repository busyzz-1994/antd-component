import React, { Component } from 'react';
import { getPrefix, getElePageX } from '../_util';
import classNames from 'classnames';
import './style/index.scss';
interface AffixProps {
  offsetTop?: number;
  onChange?: (affixed: boolean) => void;
}
interface AffixState {
  status: boolean;
  pageTop: number;
}
export default class extends Component<AffixProps, AffixState> {
  state: AffixState = {
    status: false,
    pageTop: 0
  };
  affixDom = React.createRef<HTMLDivElement>();
  componentDidMount() {
    let pageTop = getElePageX(this.affixDom.current);
    this.setState({ pageTop }, () => {
      window.addEventListener('scroll', this.scrollHandler);
    });
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandler);
  }
  scrollHandler = () => {
    let { offsetTop, onChange } = this.props;
    let { status: oldStatus } = this.state;
    if (offsetTop !== undefined) {
      try {
        let { pageTop } = this.state;
        let scrollTop = this.getScrollTop();
        if (pageTop <= scrollTop + offsetTop) {
          this.setState({ status: true }, () => {
            oldStatus === false && onChange && onChange(true);
          });
        } else {
          this.setState({ status: false }, () => {
            oldStatus === true && onChange && onChange(false);
          });
        }
      } catch (e) {}
    }
  };

  getScrollTop = () => {
    return document.documentElement.scrollTop || document.body.scrollTop;
  };
  render() {
    let { children, offsetTop } = this.props;
    let { status } = this.state;
    let prefixCls = getPrefix('affix');
    let classes = classNames(prefixCls, {
      [`${prefixCls}-fixed`]: status
    });
    return (
      <div ref={this.affixDom} className={classes} style={{ top: offsetTop }}>
        {children}
      </div>
    );
  }
}
