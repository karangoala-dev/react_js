import { useEffect } from "react";
import { useState } from "react";

const useFetch = (url) => {
    const[data, setData] = useState(null);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(false);

    useEffect(()=>{
        const fetchData = async() => {
            try{
                const promise = await fetch(url);
                const res = await promise.json();
                setData(res);
            }
            catch(e){
                setError(e);
            }
            finally{
                setLoading(false);
            }
        }
        fetchData();
    }, [url]);

    return [data, loading, error];
}

export default useFetch;