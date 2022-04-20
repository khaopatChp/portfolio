import React from "react";
import './Home.css';

function Home() {
    return (
        <div className="i" id="home">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Chonticha Pongjit</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <a  href="https://drive.google.com/file/d/1LPlURUmVX0RTF-AS3RciCPaAQ1vi4-rn/view?usp=sharing" download >
                                <button className="i-title-bt" >
                                    <div className="i-title-bt-icon">
                                        Get a resume
                                    </div>
                                </button>
                            </a>
                        </div>
                    </div>   
                    
                </div>
            </div>
            <div className="i-right">
                <img src="./me.jpg" className="i-img" width="100%"></img>
            </div>
        </div>
    )
}

export default Home;