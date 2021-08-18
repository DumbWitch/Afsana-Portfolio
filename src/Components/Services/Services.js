import React from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCrosshairs,faDraftingCompass } from '@fortawesome/free-solid-svg-icons';
const Services = () => {
    return (
        <div className="services-area">
            <div className="services-header">
                <h1>My services</h1>
                <p>what i provide</p>
            </div>
            <div className="services-content">
                <div className="services-card">
                    <p className="icon-style"><FontAwesomeIcon icon={faCrosshairs} /></p>
                    <h1>Machine Learning</h1>
                    <br />
                    <p className="service-cd">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, perspiciatis? Lorem ipsum .</p>
                </div>
                <div className="services-card">
                    <p className="icon-style"><FontAwesomeIcon icon={faCode} /></p>
                    <h1>Web Development</h1>
                    <br />
                    <p className="service-cd">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, perspiciatis? Lorem ipsum .</p>
                </div>
                <div className="services-card">
                    <p className="icon-style"><FontAwesomeIcon icon={faDraftingCompass} /></p>
                    <h1>Web Design</h1>
                    <br />
                    <p className="service-cd">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, perspiciatis? Lorem ipsum .</p>
                </div>
            </div>
        </div>
    );
};

export default Services;