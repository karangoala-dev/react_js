import useFetch from "../hooks/useFetch";

const UseFetchComponent = () => {
    const[data, loading, error] = useFetch('https://dummyjson.com/products/categories');
    return(
    <div>
        <h1>UseFetchComponent</h1>
        {loading ? 'Loading...' : 
        <>
            {error ? (<><h2>Error occured :</h2> check console {console.log(error)}</> ):( <><h2>data fetched :</h2> {JSON.stringify(data)}</>)}
        </>}
    </div>);
}

export default UseFetchComponent;