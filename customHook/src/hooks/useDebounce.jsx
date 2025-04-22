import { useEffect } from 'react';
import { useRef } from 'react';

const useDebounce = (callbackFn, delay) => {
    //we need a useref to store timerId and not cause re-render
    const timerId = useRef(null);

    //we need a useEffect to clear timeout when component is unmounted
    //the component where this hook is used
    useEffect(()=>{
        return ()=>{
            if(timerId.current){
                clearTimeout(timerId.current);
            }
        }
    }, [])

    //this fn is returned which clears previous timer if any
    //and then calls the callbackFn using setTimeout
    const debouncedFn = (...args)=>{
        if(timerId.current){
            clearTimeout(timerId.current);
        }

        timerId.current = setTimeout(()=>{
            callbackFn(...args);
        }, delay);
    }

    return debouncedFn;
}

export default useDebounce;