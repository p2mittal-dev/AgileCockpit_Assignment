import React from "react";
import {Link} from "react-router-dom";
const navbar = () => {
    return(
        <nav className="navbar navbarBg">
            <Link className="navbar-brand" to="/">School Management</Link>
            <ul className="nav justify-content-end navUl">
                <li className="nav-item"> <a className="nav-link" href="#">Login</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Register</a></li>
            </ul>
        </nav>
    )
}
export default navbar;
