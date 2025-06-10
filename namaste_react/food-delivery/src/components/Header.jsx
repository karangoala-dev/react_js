import { useState } from 'react';
import {HEADER_LOGO} from '../utils/constants';
import {Link} from 'react-router-dom';

const Header = () => {
    const[loggedIn, setLoggedIn] = useState(false);

    return (
        <div className="header">
            <div className="logo">
                <img id="logo" src={HEADER_LOGO} alt="logo.png"/>
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