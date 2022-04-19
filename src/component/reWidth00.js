import React, { useEffect, useState } from 'react'

function Sample01(){
  const [width,setWidth] = useState(window.innerWidth)
  useEffect(()=>{
  const onResize = ()=> setWidth(window.innerWidth)

    window.addEventListener('resize',onResize);
    return () => {
      window.removeEventListener('resize',onResize)
    }
  })
return (
  <div>
   {width}
  </div>
)
}


export default Sample01