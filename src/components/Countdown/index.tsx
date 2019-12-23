import React, { Component } from 'react';
interface IProps {
  value: number;
}
interface IState {
  value: number;
  desc: string;
  initValue: number;
}
export default class extends Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      desc: '',
      initValue: props.value
    };
  }
  timer = null;
  componentDidMount() {
    this.startTimer();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.initValue) {
      this.setState({ value: nextProps.value }, this.startTimer);
    }
  }
  startTimer = () => {
    this.endTimer();
    this.timer = setInterval(() => {
      let { value } = this.state;
      value = value - 100;
      this.setState({ value }, this.getDesc);
    }, 100);
  };
  getDesc = () => {
    let { value } = this.state;
    let date = new Date(value);
    let day = date.getDay();
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    this.setState({
      desc: `${day}天 ${hours}:${min}:${sec}`
    });
  };
  endTimer = () => {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  };
  componentWillUnmount() {
    this.endTimer();
  }
  render() {
    const { desc } = this.state;
    return <div>{desc}</div>;
  }
}
