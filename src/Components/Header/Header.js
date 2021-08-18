import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header-content">
            <div className="header-logo">
                <h1>Portfo<span className="text-highlighter">lio.</span></h1>
            </div>
            <div className="header-list">
                <a href="Home">Home</a>
                <a href="About">About</a>
                <a href="Services">Services</a>
                <a href="Skills">Skills</a>
                <a href="Teams">Projects</a>
                <a href="Contact">Contact</a>
            </div>
        </div>
    );
};

export default Header;