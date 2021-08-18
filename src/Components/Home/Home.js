import React from 'react';
import './Home.css';
import homeImg from "../../images/img-1.jpg";

const Home = () => {
    return (
        <div className="home-content">
            <div className="home-info">
                <h4>Hello, my name is</h4>
                <h1>Afsana Hossain </h1>
                <h2>And I'm a <span>Developer</span></h2>

                <button>Hire me</button>
            </div>
            <div className="home-img">
                <img src={homeImg} alt="img" />
            </div>
        </div>
    );
};

export default Home;