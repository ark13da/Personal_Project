import React from 'react';
import { NavLink } from 'react-router-dom';
import './skeleton.scss'
import logo from "../../assets/logo.svg";

//src="../../assets/ARK_logo.png" 

const Header = () => {
    return (
        <div className="nav">
            <div className="logo">
                <NavLink to="/">
                   
                    
                </NavLink>
                <img className="logo" src={logo} alt="logo" />
            </div>
            <div className="navContent">
                <ul className="topNav">
                    <li className="navLinkNorm">
                        <NavLink to="/">Intro</NavLink>
                    </li>
                    <li>
                        <NavLink to="/resume">Resume</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects">Projects</NavLink>
                    </li>
                    <li>
                        <NavLink to="/hobbies">Hobbies</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                    
                </ul>
            </div>
        </div>
    );
};

export default Header;