import React from "react";
import './Experience.css';
import {BsFillPatchCheckFill} from 'react-icons/bs';

function Experience (){
    return(
        <div className='e' id="experience">
            <h5>The Skills I Have</h5>
            <h2 className="e-title">My Experience</h2>
            <div className="e-wrapper">
                
                    <div className="e-left">
                        <h3>Frontend Development</h3>
                        <div className="e-info-item">
                            <article className="e-details">
                                <BsFillPatchCheckFill className="e-icon"/>
                                <div>
                                    <h4>HTML</h4>
                                    <small className="text-light">Experienced</small>
                                </div>
                            </article>
                            <article className="e-details">
                                <BsFillPatchCheckFill className="e-icon"/>
                                <div>
                                    <h4>CSS</h4>
                                    <small className="text-light">Experienced</small>
                                </div>
                            </article>
                            <article className="e-details">
                                <BsFillPatchCheckFill className="e-icon"/>
                                <div>
                                    <h4>JavaScript</h4>
                                    <small className="text-light">Experienced</small>
                                </div>
                            </article>
                            <article className="e-details">
                                <BsFillPatchCheckFill className="e-icon"/>
                                <div>
                                    <h4>Bootstrap</h4>
                                    <small className="text-light">Experienced</small>
                                </div>
                            </article>
                            <article className="e-details">
                                <BsFillPatchCheckFill className="e-icon"/>
                                <div>
                                    <h4>React</h4>
                                    <small className="text-light">Experienced</small>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className="e-center">
                        <h3>Backend Development</h3>
                        <div className="e-info-item">
                        <article className="e-details">
                                <BsFillPatchCheckFill className="e-icon"/>
                                <div>
                                    <h4>Node JS</h4>
                                    <small className="text-light">Experienced</small>
                                </div>
                            </article>
                            <article className="e-details">
                                <BsFillPatchCheckFill className="e-icon"/>
                                <div>
                                    <h4>MongoDB</h4>
                                    <small className="text-light">Experienced</small>
                                </div>
                            </article>
                            <article className="e-details">
                                <BsFillPatchCheckFill className="e-icon"/>
                                <div>
                                    <h4>Express</h4>
                                    <small className="text-light">Experienced</small>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className="e-right">
                        <h3>Tool</h3>
                        <div className="e-info-item">
                        <article className="e-details">
                                <BsFillPatchCheckFill className="e-icon"/>
                                <div>
                                    <h4>VS code</h4>
                                    <small className="text-light">Experienced</small>
                                </div>
                            </article>
                            <article className="e-details">
                                <BsFillPatchCheckFill className="e-icon"/>
                                <div>
                                    <h4>Figma</h4>
                                    <small className="text-light">Experienced</small>
                                </div>
                            </article>
                            <article className="e-details">
                                <BsFillPatchCheckFill className="e-icon"/>
                                <div>
                                    <h4>vercel</h4>
                                    <small className="text-light">Experienced</small>
                                </div>
                            </article>
                            
                            
                        </div>
                    </div>
               
            </div>
        </div>
    )
}

export default Experience;