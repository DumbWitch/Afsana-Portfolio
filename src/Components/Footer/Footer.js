import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className="footer-content">
            <p>Created By <span>Afsana</span> | <FontAwesomeIcon icon={faCopyright} /> 2021 All rights reserved.</p>
        </div>
    );
};

export default Footer;