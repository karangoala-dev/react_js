import React from 'react'
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();
    console.log(error);
  return (
    <div>
        <h1>Error : {error.error.message}</h1>
        An error occured, please check url
    </div>
  )
}

export default Error;