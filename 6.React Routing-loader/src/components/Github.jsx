import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

const Github = () => {
    const [info, setInfo] = useState({});
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hitesh%20choudhary').then(async(res)=>{
    //         const data=await res.json();
    //         setData(data);
    //     })
    // },[])
    const data = useLoaderData();
    useEffect(() => {
        setInfo(data);
        console.log(data);
    }, [])

    return (
        <div>
            Welcome to the Github page!
            {Object.entries(info).map(([key,value])=>{
                return(
                    <div key={key}>key:{key} value:{value}</div>
                )
            })}
        </div>
    )
}

export default Github

export const getData = async function () {
    console.log(`fn running`);
    try {
        const res = await fetch('https://api.github.com/users/hitesh%20choudhary');
        const data = await res.json();
        console.log(data);
        return data;
    } catch (e) {
        return null;
    }
}
