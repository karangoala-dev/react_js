import React from 'react'
import useOnlineStatus from '../hooks/useOnlineStatus';

const UseOnlineStatusComponent = () => {
    const status = useOnlineStatus();

  return (
    <div>
        UseOnlineStatusComponent
        <br/>
        {status ? "✅ Online" : "❌ Offline"}
    </div>
  )
}

export default UseOnlineStatusComponent;