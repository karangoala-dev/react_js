import { useState } from 'react';
import {HEADER_LOGO} from '../utils/constants';

const Header = () => {
    const[loggedIn, setLoggedIn] = useState(false);

    return (
        <div className="header">
            <div className="logo">
                <img id="logo" src={HEADER_LOGO} alt="logo.png"/>
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={()=>setLoggedIn(!loggedIn)}>{loggedIn ? 'Logout' : 'Login'}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;