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
                        <p>I'm a recent control system engineering living in Bangkok, who want to be Software Developer. Therefore, I decided to join an intense boot camp to be there.</p>
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