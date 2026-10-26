import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="menu">
            {/* Logo Section */}
            <Link to="/" className="logo-container">
                <span className="logo-text">Dhanush</span>
            </Link>

            {/* Navigation Links */}
            <div className="nav-links">
                <Link to="/" className="nav-link">
                    Home
                </Link>

                <Link to="/about" className="nav-link">
                    About
                </Link>

                <Link to="/contact" className="nav-link">
                    Contact us
                </Link>

                <Link to="/login" className="nav-link">
                    Login
                </Link>

                <Link to="/Layout" className="nav-link">
                    Layout
                </Link>
                <Link to="/Layout1" className="nav-link">
                    Layout1
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;