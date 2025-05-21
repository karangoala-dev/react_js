/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import json from '../data.json';
import Restaurant from './Restaurant';

const Body = () => {
    const[searchKey, setSearchKey] = useState("");
    const[data, setData] = useState(json);

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () => {
        const promise = await fetch('https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.9715987&lng=77.5945627&str=Biryani&trackingId=4b1f8833-85ab-ba8b-069a-82535f1a7b46&submitAction=ENTER&queryUniqueId=56eac245-bd21-54c4-c0ef-cd0c908082d7');
        const response = await promise.json();
        console.log(response);
    }

    const useTopRated = function(){
        setData(data.filter((item) => item.rating > 4.0));
    }

    return (
        <div className="body">
            <div className="search">
                <input type="text" placeholder="Search restaurant, dish, anything ..." value={searchKey} onChange={(e)=>setSearchKey(e.target.value)}></input>
                <button className="filter-btn" onClick={useTopRated}>Top rated</button>
            </div>
            <div className="restaurant-container">
                {
                    data && data.map((item) => <Restaurant key={item.id} pic={item.pic} title={item.title} rating={item.rating} priceForTwo={item.priceForTwo} cuisine={item.cuisine}/>)
                }
            </div>
        </div>
    );
}

export default Body;