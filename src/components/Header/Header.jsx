import "./Header.scss";

import { Link, useLocation, useNavigate } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <Link to="/" className="header__title">
                PewPew Sherif
            </Link>
        </header>
    );
}

export default Header;