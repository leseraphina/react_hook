import React,{useState} from 'react'

function Sample02(){
const [count,setCount] = useState(0);
React.useEffect(()=>{
  console.log('effect시작과 업데이트 : ',count);
});

return (
  <div>
    <h1>effect 기본보기</h1>
    <p> count 변경보기  :{count}</p>
    <button onClick={click}>click</button>
    </div>
)
function click(){
  setCount(count + 1);
}
}


export default Sample02