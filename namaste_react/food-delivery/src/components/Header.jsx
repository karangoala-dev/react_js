const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img id="logo" src="https://cdn-icons-png.flaticon.com/512/2771/2771401.png" alt="logo.png"/>
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