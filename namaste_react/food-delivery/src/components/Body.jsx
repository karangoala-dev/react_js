/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import json from '../data.json';
import Restaurant from './Restaurant';
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import EnhancedRestaurantCard from "./EnhancedRestaurantCard";

const Body = () => {
    const[searchKey, setSearchKey] = useState("");
    const[data, setData] = useState(json);
    const[filteredData, setFilteredData] = useState(json);
    const[dataLoaded, setDataLoaded] = useState(false);

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () => {
        //Here I am not actually using the api response for rendering data on screen just using the api call delay to test shimmer ui
        const promise = await fetch('https://dummyjson.com/test');
        const response = await promise.json();
        setDataLoaded(true);
        console.log(response);
    }

    const useTopRated = function(){
        setData(data.filter((item) => item.rating > 4.0));
    }

    const search = ()=>{
        const result = data.filter((restaurant) => restaurant.title.toLowerCase().includes(searchKey.toLowerCase()));
        setFilteredData(result);
    }

    //using the higher order component (HOC)
    const WithHighlyRatedLabel = EnhancedRestaurantCard(Restaurant);
    
    //Conditional rendering
    return !dataLoaded ? <Shimmer/> : (
        <div className="body">
            <div className="search">
                <input type="text" placeholder="Search restaurant, dish, anything ..." value={searchKey} onChange={(e)=>setSearchKey(e.target.value)}></input>
                <button className="filter-btn" onClick={search}>Search</button>
                <button className="filter-btn" onClick={useTopRated}>Top rated</button>
            </div>
            <div className="restaurant-container">
                {
                    filteredData && filteredData.map((item) => <WithHighlyRatedLabel id = {item.id} highlyRated = {item.highlyRated} pic={item.pic} title={item.title} rating={item.rating} priceForTwo={item.priceForTwo} cuisine={item.cuisine}/>)
                }
            </div>
        </div>
    );
}

export default Body;