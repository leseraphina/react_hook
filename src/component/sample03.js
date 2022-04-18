import React from 'react'

// useState 객체화 하여 한번에 정리하는 방법이다.
//  useState => count
// useState => {count : 0}
function Sample03(){
  // const [count,setCount] = React.useState({coaunt:0})
  const [state,setState] = React.useState({count:0})
  function click(){
    // 1.  객체 형식으로 하기
    setState({count: state.count + 1})
  }
return (
  <div>
    <h1> state 방식으로 객체화 하기</h1>
    <p> sample03 : {state.count}</p>
    <button onClick = {click}>click</button>
  </div>
)
}

export default Sample03