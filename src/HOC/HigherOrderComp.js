import { useEffect, useState } from "react"

const withSubscription = (WrappedComponent, selectData)=>{
    return (props) =>{
        const [data, setData] = useState([]);

        useEffect(() => {
            const handleChange = () =>{
                const newData = selectData(DataSource, props);
                setData(newData)
            }
            DataSource.addListener(handleChange)
            return () => {
                DataSource.removeListener(handleChange)
            };
        }, [])
        return <WrappedComponent data={data} {...props}/>
    }
}


// usage

const LiveOrdersListWithSubscription = withSubscription(
    UserList, 
    ()=>DataSource.getOrders()
);

const UserSubscribedListWithSubscription = withSubscription(
    UserList, 
    ()=>DataSource.getSubcribers()
);