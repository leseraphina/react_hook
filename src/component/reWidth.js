import React, { useEffect, useState } from 'react'

function Sample01(){
  const [width,setWidth] = useState(window.innerWidth)
  useEffect(()=>{
    window.addEventListener('resize',()=>{
      setWidth(window.innerWidth)
    })
  })
return (
  <div>
   {width}
  </div>
)
}


export default Sample01