import {HEADER_LOGO} from '../utils/constants';

const Header = () => {
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
                </ul>
            </div>
        </div>
    )
}

export default Header;