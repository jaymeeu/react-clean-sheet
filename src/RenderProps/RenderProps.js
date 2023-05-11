import React, { useEffect, useState } from 'react'

const DataFetcher = ({render, url})=>{
    const [data, setData] = useState([])

    useEffect(() => {
     if(url.includes("desserts")){
        setData(['cake', 'ice cream', 'pie', 'brownie'])
     }
     else{
        setData(['water', 'soad', "juice"])
     }
    }, [])

    return render(data);
}

const DessertsCount = ()=>{
    return(
        <DataFetcher
            url="https://lityle/desserts"
            render={(data)=><p>{data.length} desserts</p>}
        />
    )
}


const DrinksCount = ()=>{
    return(
        <DataFetcher
            url="https://lityle/drinks"
            render={(data)=><p>{data.length} drinks</p>}
        />
    )
}

const RenderProps = () => {
  return (
    <div>
      <DessertsCount/>
      <DrinksCount/>
    </div>
  )
}

export default RenderProps
