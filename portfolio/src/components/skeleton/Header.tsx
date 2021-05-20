import React from 'react';
import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="nav">
            <div className="logo">
                <NavLink to="/">
                  <h4>ARK</h4>  
                </NavLink>
                
            </div>
            <div className="navContent">
                <ul className="topNav">
                    <li className="navLinkNorm">
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/experience">Experience</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects">Projects</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;