import React, { useState } from 'react'

const HookUseState = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
        <button  onClick={()=>setCount((prev=> prev + 1))}>add</button>
        <button onClick={()=>setCount((prev=> prev + 1))}>subtract</button>

        <p>{count}</p>
      
    </div>
  )
}

export default HookUseState
