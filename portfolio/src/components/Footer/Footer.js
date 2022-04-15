import React from "react";
import './Footer.css';


function Footer () {
    return(
        <footer id='f'>
           <a href="#" className="f-logo">CHONTICHA</a>
           <ul className="permalinks">
            <li><a href="#">Home</a></li>
            <li><a href="#">About me</a></li>
            <li><a href="#">Experience</a></li>
            <li><a href="#">Project</a></li>
            <li><a href="#">Contacts</a></li>
            <li><a href="#"><i className="fa-brands fa-github"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
           </ul>
           <div className="f-copyright">
               <small>&copy; CHONTICHA. All rights reserved.</small>
           </div>
        </footer>
    )
}

export default Footer;