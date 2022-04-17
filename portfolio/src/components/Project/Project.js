import React from "react";
import './Project.css';
import {ProjectItems} from './ProjectItems';

function Project () {
    return(
        <div className="p" id='project'>
            <h2>My Recent Project</h2>
            <div className="container p-container" >
                {ProjectItems.map((item, index) => {
                    return (
                    <article className="p-item" key={index}>
                        <div className="p-item-img">
                            <img src={item.img} width="100%"/>
                        </div>
                        <h3>{item.title}</h3>
                        <div className="p-item-cta">
                            <a href={item.github}><button  className="btn" target='_blank'>Github</button></a>
                            <a href={item.liveDemo}><button  className="btn btn-primary" target='_blank'>Live Demo</button></a>
                        </div>
                    </article>
                )
                })}
            </div>
        </div>
    )
}

export default Project;