import { Link } from 'react-router-dom';

const EnhancedRestaurantCard = (Restaurant) => {
    return (props)=>{
        return (
            <div className='outer-card'>
                {props.highlyRated && <span>Highly Rated</span>}
                <Link  key={props.id} to={`/restaurant/${props.id}`}>
                    <Restaurant {...props}/>
                </Link>
            </div>
        )
    }
}

export default EnhancedRestaurantCard;