import React from 'react';
import ReactDOM from 'react-dom/client';
import Sample01 from './component/sample01'
import Sample02 from './component/sample02'
import Sample03 from './component/sample03'
import Sample04 from './component/sample04'


function Com(){
return (
  <div>
    <Sample01 />
    <Sample02 />
    <Sample03 />
    <Sample04 />
  </div>
)
}
const root = document.querySelector('#root');
ReactDOM.createRoot(root).render(
<Com />
)