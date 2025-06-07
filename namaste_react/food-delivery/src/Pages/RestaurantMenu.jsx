import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Shimmer from '../components/Shimmer';

const RestaurantMenu = () => {
    const[data, setData] = useState(null);
    const{resId} = useParams();
    useEffect(()=>{
        const fetchRecipe = async ()=>{
            //just randomly find a recipe data for display, (ik it should be a restaurant)
            const promise = await fetch(`https://dummyjson.com/recipes/${Number(resId) + 10}`);
            const response = await promise.json();
            setData(response);
        }
        fetchRecipe();
    }, []);

  return !data ? <Shimmer/> : (
    <div>
        <h1>Special Dish : {data.name}</h1>
    </div>
  )
}

export default RestaurantMenu;