import React from 'react';

export default class Sample01 extends React.Component{
  state = {count : 0}

  render(){
    const {count} = this.state;
    //  render 되는 시점이  mount  이다.
    return (
      <div>
        <h1>시점을 알아보기</h1>∂\
        <p> count 변경보기  :{count}</p>
        <button onClick={this.click}>click</button>
        </div>
    )
  }
  click= () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  componentDidMount(){
    console.log('componentDidMount',this.state.count);
  }
  componentDidUpdate(){
    console.log('componentDidUpdate',this.state.count);
  }
}