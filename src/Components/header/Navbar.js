import React from 'react';
import './Navbar.css';
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
