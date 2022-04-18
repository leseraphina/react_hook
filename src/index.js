import React from 'react';
import ReactDOM from 'react-dom/client';
import Sample01 from './component/effect01'
import Sample02 from './component/effect02'
import Sample03 from './component/effect03'



function Com(){
return (
  <div>
    <Sample01 />
    <Sample02 />
    <Sample03 />
  </div>
)
}
const root = document.querySelector('#root');
ReactDOM.createRoot(root).render(
<Com />
)