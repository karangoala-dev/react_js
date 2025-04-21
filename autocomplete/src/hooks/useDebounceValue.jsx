import React, { useEffect, useState } from 'react'

//This hook with debounce the setting of the value
const useDebounceValue = (value, delay) => {
    const[debouncedValue, setDebouncedValue] = useState(value);

    useEffect(()=>{
        const timerId = setTimeout(() => {
            setDebouncedValue(value)
        }
        , delay);

        return () => {
            clearTimeout(timerId);
        }
    }, [value, delay]);

    return debouncedValue;
}

export default useDebounceValue;