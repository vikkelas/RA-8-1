import {useEffect, useState} from "react";

const useFetch= (url, initialData)=>{

    const [data, setData] = useState(initialData)
    const[load, setLoad] = useState(false)

    useEffect(()=>{
       setLoad(true);
       fetch(url)
           .then(response=> response.json())
           .then(resArr=>setData(resArr))
           .then(()=>setLoad(false))
    },[url])
    return [{data, load}]
}
export default useFetch;