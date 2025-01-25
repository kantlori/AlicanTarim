import React from 'react';
import { NavLink } from 'react-router-dom';
import "./css/Header.css";

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
                    <li><NavLink to="/works" activeClassName="active">Works</NavLink></li>
                    <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
