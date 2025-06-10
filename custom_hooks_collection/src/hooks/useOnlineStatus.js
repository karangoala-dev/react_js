import { useEffect } from "react";
import { useState } from "react";

const useOnlineStatus = () => {
    const[status, setStatus] = useState(true);

    useEffect(()=>{
        const handleOnline = () => {
            console.log("Hello");
            setStatus(true);
        }
        const handleOffline = () => {
            setStatus(false);
        }

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        }
    }, []);

    return status;
}

export default useOnlineStatus;