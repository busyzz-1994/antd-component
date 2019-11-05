/**
 * Created by Vincent on 2018/8/6.
 */
import React, { Component, Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './index.module.scss';
import Scroll from 'components/Scroll';
import Promise from './promise';
import { resolve } from 'q';
const audioSrc =
  'http://dl.stream.qqmusic.qq.com/C4000020VnHM0U9uNh.m4a?vkey=13CE733B01FBA84612189CDA5651B044F6379F20C04C69E565D877BA3C101C747060974DC6A9F107185749ABDD712E68C1C58515C904F930&guid=3655047200&fromtag=66';
interface Istate {
  show: boolean;
  refresh: boolean;
}
export default class Demo extends Component<any, Istate> {
  state = {
    show: false,
    refresh: false
  };
  audioEle = React.createRef<HTMLAudioElement>();
  tagWrapper = React.createRef<HTMLDivElement>();
  testDOM = React.createRef<HTMLDivElement>();
  componentDidMount() {
    let p = new Promise((resolve, reject) => {
      resolve('success');
    });
    p.then(res => {
      return new Promise((resolve, reject) => {
        resolve('sc');
      });
    }).then(res => {
      console.log(res);
    });
  }
  handleClick = () => {
    console.log('okkk');
    this.setState(prevState => ({
      show: !prevState.show
    }));
    // let audio = this.audioEle.current;
    // audio.currentTime = 100;
  };
  onScroll = Scroll => {
    console.log(Scroll);
  };
  render() {
    let { show } = this.state;
    console.log(show);
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <button onClick={this.handleClick}>dianji</button>
        </div>
        <div className={styles.middle}>
          <Scroll
            refresh={this.state.refresh}
            onScroll={this.onScroll}
            direction="horizontal"
          >
            <div ref={this.tagWrapper} className={styles.tagWrapper}>
              <div className={styles.testWrapper}>
                <CSSTransition
                  timeout={400}
                  in={show}
                  classNames="trans"
                  onEnter={() => {
                    this.testDOM.current.style.display = 'block';
                  }}
                  onExited={() => {
                    this.testDOM.current.style.display = 'none';
                  }}
                >
                  <div ref={this.testDOM} className={styles.testDOM}>
                    1212
                  </div>
                </CSSTransition>
              </div>
            </div>
          </Scroll>
        </div>
        <div className={styles.bottom}>bottom</div>
        <div className={styles.bg} />

        <audio src={audioSrc} ref={this.audioEle} />
      </div>
    );
  }
}
