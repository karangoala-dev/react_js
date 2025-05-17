/* eslint-disable no-unused-vars */
import { useState } from "react";
import json from '../data.json';
import Restaurant from './Restaurant';

const Body = () => {
    const[searchKey, setSearchKey] = useState("");
    const[data, setData] = useState(json);
    return (
        <div className="body">
            <div className="search">
                <input type="text" placeholder="Search restaurant, dish, anything ..." value={searchKey} onChange={(e)=>setSearchKey(e.target.value)}></input>
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