const EnhancedRestaurantCard = (RestaurantCard) => {
    return ()=>{
        return (
            <div>
                <span>Highly Rated</span>
                <RestaurantCard/>
            </div>
        )
    }
}

export default EnhancedRestaurantCard;