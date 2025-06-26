import { useState, useContext } from 'react';
import {HEADER_LOGO} from '../utils/constants';
import {Link} from 'react-router-dom';
import UserContext from '../context/UserContext';

const Header = () => {
    const[loggedIn, setLoggedIn] = useState(false);
    const {loggedInUser, setLoggedInUser} = useContext(UserContext);
    return (
        <div className="header">
            <div className="logo">
                <img id="logo" src={HEADER_LOGO} alt="logo.png"/>
                <span>Hi, {loggedInUser}</span>
            </div>
            <div>
                Not {loggedInUser}?
                <input type='text' value={loggedInUser} onChange={(e)=>setLoggedInUser(e.target.value)}></input> 
            </div>

            <div className="nav-items">
                <ul>
                    <li>
                        <Link to ='/'>Home</Link>
                    </li>
                    <li>
                        <Link to ='/about'>About us</Link>    
                    </li>
                    <li>
                        <Link to ='/cart'>Cart</Link>    
                    </li>
                    <li>
                        <Link to = '/instamart'>Instamart</Link>
                    </li>
                    <button className="login-btn" onClick={()=>setLoggedIn(!loggedIn)}>{loggedIn ? 'Logout' : 'Login'}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;