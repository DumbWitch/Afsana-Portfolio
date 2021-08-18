import React from 'react';
import './Projects.css';
import project1 from "../../images/ecommerce.jpg";
import teamMaker from "../../images/online-exam.png";
import mess from "../../images/lights.jpg";

const Projects = () => {
    return (
        <div className="projects-area">
            <div className="projects-header">
                <h1>My projects</h1>
                <p>what i provide</p>
            </div>
            <div className="projects-content">
                <div className="projects-card">
                    <img src={mess} alt="" />
                    <h1>Traffic Signal prediction</h1>
                    <p>Python , algorithm CNN</p>

                    <button><a href="https://github.com/DumbWitch/Traffic-Signs-Prediction.git">Github Code</a></button>
                </div>
                <div className="projects-card">
                <img src={project1} alt="" />
                    <h1>SuperShop</h1>
                    <p>HTML, CSS,  PHP, MySQL</p>

                    <button><a href="https://github.com/DumbWitch/Supershop.git">Github Code</a></button>

                </div>
                <div className="projects-card">
                <img src={teamMaker} alt="" />
                    <h1>Online Examination System</h1>
                    <p>Java,MySqL,HTML,CSS</p>

                    <div className="card-btn">
                        <button><a href="https://github.com/DumbWitch/Online-Examination-System.git" >Github Code</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;