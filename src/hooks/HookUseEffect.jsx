import React, { useEffect, useState } from 'react'

const HookUseEffect = () => {

  const [data, setData] = useState([])
  const [rerun, setRerun] = useState(false)
  const [fetching, setFetching] = useState(false)

  useEffect(() => {
    setFetching(true)
    fetch('https://api.coingecko.com/api/v3/coins/list')
    .then(res => res.json())
    .then(data => {
      setData(data)
      setFetching(false)
    })

 }, [rerun])
 
  return (
    <div>
      {
        data.length === 0 || fetching ?
        <>Loading....</> 
        :
        <div>
            <p>Loaded</p>  
            <button onClick={()=>setRerun(!rerun)} >Rerun</button>
          </div>
      }
    </div>
  )
}

export default HookUseEffect
