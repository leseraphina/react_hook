import React from 'react';

export default class Sample01 extends React.Component{
  state = { 
    count: 0
  }

  render(){
    // const { count } = this.state;
    return (
      <div>
        <h1> 기존 class 방식</h1>
        <p> sample01 : {this.state.count}</p>
        <button onClick={this.click}>click</button>
      </div>
    )
  }
  click= () => {
    this.setState({
      count : this.state.count + 1
    })
  }
}




