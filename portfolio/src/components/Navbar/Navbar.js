import React, {useState} from "react";
import {MenuItems} from './MenuItems';
import './Navbar.css';

function Navbar() {
    const [state,setState] = useState(false);

    const handleClick = () => {
        setState(!state);
    }

    return (
        <nav className="NavbarItems">
            <h1 className="navbar-logo">CHONTICHA</h1>
            <div className="menu-icon" onClick={handleClick}>
                <i className={state ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={state ? 'nav-menu active' : 'nav-menu'} onClick={handleClick}>
                {MenuItems.map((item, index) => {
                    return(
                        <li key={index}>
                           
                                <a className={item.cName} href={item.link}>
                                    {item.title} 
                                </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
}

export default Navbar;