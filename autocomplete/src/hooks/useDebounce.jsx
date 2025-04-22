import { useEffect, useRef } from "react";

const useDebounce = (callBackFn, delay)=>{
    const timerId = useRef(null);

    useEffect(() => {
        //Clear timeout is required when component where this hook will be used is unmounted
        return ()=>{
            if(timerId.current){
                clearTimeout(timerId.current);
            }
        }
    }, []);

    const debouncedFunction = function(...args){
        if(timerId.current){
            //if timerId exists from before, clear it
            clearTimeout(timerId.current);
        }

        timerId.current = setTimeout(()=>{
            callBackFn(...args);
        }, delay)
    }

    return debouncedFunction;
}

export default useDebounce;