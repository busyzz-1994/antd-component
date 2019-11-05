import React, { Component } from 'react';
import BScroll from 'better-scroll';
import styles from './index.module.scss';
interface IProps {
  direction: 'vertical' | 'horizontal';
  refresh?: boolean;
  onScroll?: (scroll) => void;
}
export default class extends Component<IProps> {
  static defaultProps = {
    direction: 'vertical'
  };
  scroll = React.createRef<HTMLDivElement>();
  scrollDom: BScroll = null;
  componentDidMount() {
    if (!this.scrollDom) {
      this.scrollDom = new BScroll(this.scroll.current, {
        scrollX: this.props.direction === 'horizontal',
        scrollY: this.props.direction === 'vertical',
        probeType: 3
      });
    }
    if (this.props.onScroll) {
      this.scrollDom.on('scroll', scroll => {
        console.log(this.scrollDom);
        this.props.onScroll(scroll);
      });
    }
  }
  componentWillUnmount() {
    this.scrollDom.off('scroll', this.props.onScroll);
    this.scrollDom = null;
  }
  componentDidUpdate() {
    if (this.scrollDom && this.props.refresh) {
      this.refresh();
    }
  }
  refresh = () => {
    this.scrollDom && this.scrollDom.refresh();
  };
  render() {
    return (
      <div className={styles.scrollView} ref={this.scroll}>
        {this.props.children}
      </div>
    );
  }
}
