import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <div className="skills-area">
            <div className="skills-header">
                <h1>My Skills</h1>
                <p>what i know</p>
            </div>
            <div className="skills-content">
                <div className="about-skills">
                    <h3>My creative skills & experiences.</h3>
                    <p>I'm about to graduate in computer science and Engineering, and with this, I have completed a six-month course on web development. <br /><br /> I have no industrial experience yet. But I always wanted to work for an IT firm, and want to improve my skills.</p>

                    <button><a href="https://github.com/DumbWitch">Explore Me</a></button>
                </div>
                <div className="skill-info">
                    <h1>Skills bar</h1>
                    <p>HTML, CSS</p>
                    <div class="container">
                        <div class="skills html">90%</div>
                    </div>

                    <p>JavaScript</p>
                    <div class="container">
                        <div class="skills js">85%</div>
                    </div>

                    <p>React</p>
                    <div class="container">
                        <div class="skills react">80%</div>
                    </div>

                    <p>PHP</p>
                    <div class="container">
                        <div class="skills php">80%</div>
                    </div>
                     <p>MySQL</p>
                    <div class="container">
                        <div class="skills sql">85%</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;