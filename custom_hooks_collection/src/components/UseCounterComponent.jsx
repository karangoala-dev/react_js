import useCounter from "../hooks/useCounter";

const UseCounterComponent = () => {
    const {value, increment} = useCounter(0);
    return (
    <div>
        <div>
            UseCounterComponent
        </div>
        <div>
            <h2>{value}</h2>
            <button onClick={()=>increment()}>increment</button>
        </div>
    </div>);
}

export default UseCounterComponent;