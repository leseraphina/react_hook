import React , {useState} from 'react'

function Sample02(){
  // sate ={count : 0}
  // ???->  배열이다.
  // const ??? = React.userState(0);
  // 첫번째  인덱스 초기값, 두번째 인덱스는  바뀌는 값
  const [count , setCount] = useState(0);

  function click(){
    setCount(count + 1);
  }
  return (
    <div>
       <h1> 기본 함수 방식</h1>
      <p> sample02 : {count}</p>
      <button onClick={click}>click</button>
    </div>
  )
}

export default Sample02;

