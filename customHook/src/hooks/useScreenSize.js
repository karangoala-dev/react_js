import { useEffect, useState } from "react";

const useScreenSize = function(){
    const[size, setSize] = useState([0, 0]);

    function updateScreenSize(){
        let width = window.innerWidth;
        let height = window.innerHeight;
        setSize([width, height]);
    }

    useEffect(()=>{
        
        window.addEventListener('resize', updateScreenSize);
        updateScreenSize();

        return () => window.removeEventListener('resize', updateScreenSize);
    }, []);

    return size;
};

export default useScreenSize;