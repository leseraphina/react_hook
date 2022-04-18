import React,{useState} from 'react'

function Sample03(){
const [count,setCount] = useState(0);
// useEffect는 여러개가 사용가능하다.
//  defendent  리스트: 최초에만 실행된다. [] -> 어떤거가 있어야 실행이 된다.
// React.useEffect(()=> {},[])
React.useEffect(()=>{
  console.log('effectstart : ',count);
},[]);
React.useEffect(()=>{
  console.log('effect upDate : ',count);
},[count]);
return (
  <div>
    <h1>여러 effect 사용하기</h1>
    <p> count 변경보기  :{count}</p>
    <button onClick={click}>click</button>
    </div>
)
function click(){
  setCount(count + 1);
}
}


export default Sample03