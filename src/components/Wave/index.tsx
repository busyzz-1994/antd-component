import React, { Component } from 'react';
import classNames from 'classnames';
import './style/index.scss';
import { findDOMNode } from 'react-dom';
export default class extends Component {
  state = {
    clicked: false
  };
  targetNode: HTMLElement;
  extra = React.createRef<HTMLDivElement>();
  componentDidMount() {
    let dom = findDOMNode(this);
    this.targetNode = dom.firstChild as HTMLElement;
    if (this.targetNode.nodeType !== 1) return;
    this.setWaveColor(this.targetNode);
  }
  isNotGrey(color: string) {
    const match = (color || '').match(
      /rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/
    );
    if (match && match[1] && match[2] && match[3]) {
      return !(match[1] === match[2] && match[2] === match[3]);
    }
    return true;
  }
  setWaveColor = node => {
    let radius = getComputedStyle(node).getPropertyValue('border-radius');
    let waveColor = this.getWaveColor(node);
    if (waveColor) {
      this.extra.current.style.borderColor = waveColor;
      this.extra.current.style.borderRadius = radius;
    }
  };
  getWaveColor = node => {
    let colors = [
      //firefox 兼容问题
      getComputedStyle(node).getPropertyValue('border-top-color'),
      getComputedStyle(node).getPropertyValue('border-color'),
      getComputedStyle(node).getPropertyValue('background-color')
    ];
    let waveColor = colors.find(color => {
      if (
        color &&
        color !== '#ffffff' &&
        color !== 'rgb(255, 255, 255)' &&
        this.isNotGrey(color) &&
        !/rgba\(\d*, \d*, \d*, 0\)/.test(color) &&
        color !== 'transparent'
      )
        return true;
    });
    return waveColor;
  };
  makeWave = () => {
    this.setState({ clicked: true });
    setTimeout(() => {
      this.setState({ clicked: false });
    }, 300);
  };
  render() {
    const { clicked } = this.state;
    return (
      <span onClick={this.makeWave} className="waved">
        {this.props.children}
        <div
          ref={this.extra}
          className={classNames('waved-extra', { active: clicked })}
        ></div>
      </span>
    );
  }
}
