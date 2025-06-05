import { useState } from "react";

const useCounter = function(initialValue){
    const [value, setValue] = useState(initialValue);

    const increment = () => {
        setValue(value + 1);
    }

    return { value, increment };
}

export default useCounter;