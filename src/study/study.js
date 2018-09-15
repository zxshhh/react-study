import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Study extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTime: new Date()
    }
  }
  componentDidMount() {
    this.update();
    this.removal();
  }
  // 延迟
 /*delay() {
    const sleep = (delay) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, delay)
      })
    }
    (async () => {
      console.log('hello');
      await sleep(1000);
      console.log('world');
    })()
  }*/
  //过滤数据
  update() {
    const ary = [{ a: 6 }, { a: 1 }, { a: 5 }, { a: 2 }];
    const filterMap = (ary) => {
      return ary.filter(item => item.a > 1)
        .map(item => item.a)
        .sort((a, b) => a - b).join('')
    }
    console.log(filterMap(ary))
  }
  // 去重
  removal() {
    const array = ['a', 'b', 'c', 'a', 'b', 'c', 'a', 'b', 'c'];
    const remove = (ary) => {
      return [...new Set(ary)]
    }
    /*//等价于 
      const remove1 = (ary) => {
        return Array.from(new Set(ary));
      }
      console.log(remove1(array));
    */
    console.log(remove(array))
  }
  render() {
    return (
      <Timer time={this.state.newTime.toLocaleDateString()} />
    )
  }
}

class Timer extends Component {
  render() {
    return (
      <h2 className="top">现在的时间是：{this.props.time}</h2>
    )
  }
}

ReactDOM.render(
  <Study />,
  document.getElementById("app")
)