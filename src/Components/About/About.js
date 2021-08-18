import React from 'react';
import './About.css';
import aboutImg from "../../images/img-1.jpg";

const About = () => {
    return (
        <div className="about-area">
            <div className="about-header">
                <h1>About</h1>
                <p>who i am</p>
            </div>
            <div className="about-content">
                <div className="about-img">
                    <img src={aboutImg} alt="img" />
                </div>
                <div className="about-description">
                    <h1>I'm Afsana and I'm a <span>Web application Developer,data analyzer and penetration tester  </span></h1>
                    <br />
                    <p> I want to utilize my knowledge by working in any sector of computer science and engineering field.I want to explore more and want to develop my intelligency by working in a critical situation. <br /><br /> I am a graduate of computer science and Engineering, apart from this, I did several courses regarding this field. <br /><br />
                    I have no industrial experience yet. But I always wanted to work for an IT sector, and want to improve my skills.</p>
                </div>
            </div>
        </div>
    );
};

export default About;