import React from "react";
import './About.css';

function About() {
    return (
        <div className="a" id="about-me">
            <div className="a-wrapper">
                <div className="a-title">
                    <h1>About me</h1>
                    <div className="i-title-line">dd</div>
                </div>
                <div className="a-subtitle">
                    <div>
                        <p>I'm a junior software developer in training with the goal of utilizing my knowledge and abilities in programming languages to solve every problem. I used to work as a control systems officer, helping create automation systems. Through that work, I have developed skills in planning, persistence, and logical thinking. My strengths from working with many people are also in communication skills and quick adaptation to new challenges. To be successful in future tasks, I enjoy working with a team, have always been a good team member, and I love working with others to deliver great projects.</p>
                    </div>
                </div>
                <div className="line">dd</div>
                <div className="a-ele a-uni">
                    <div className="title">
                        <p>University</p>
                    </div>
                    <div className="des">
                        <h4>Department of Control System and Instrumentation Engineering</h4>
                        <p>KMUTT</p>
                    </div>
                    <div className="img">
                        <img src="./uni.jpg"/>
                    </div>
                </div>
                <div className="line">dd</div>
                <div className="a-ele a-gen">
                    <div className="title">
                        <p>Camp</p>
                    </div>
                    <div className="des">
                        <h4>Junior Software Developer</h4>
                        <p>Generation Thailand</p>
                    </div>
                    <div className="img">
                        <img src="./Gen.jpg" />
                    </div>
                </div>
                <div className="line">dd</div>
            </div>
        </div>
    )
}

export default About;