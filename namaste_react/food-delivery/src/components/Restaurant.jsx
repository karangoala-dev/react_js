const Restaurant = ({ pic, title, rating, priceForTwo, cuisine }) => {
    return (
        <div className="restaurant-card">
            <img className="restaurant-image" src={pic} alt={title}/>
            <div className="details">
                <div className="upper">
                    <span>{title}</span>
                    <span>{rating}</span>
                </div>
                <div className="lower">
                    <span>{cuisine}</span>
                    <span>{priceForTwo}</span>
                </div>
            </div>
        </div>
    )
}

export default Restaurant;