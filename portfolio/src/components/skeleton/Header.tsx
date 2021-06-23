import React from 'react';
import { NavLink } from 'react-router-dom';
import './skeleton.scss'
import logo from "../../assets/logo.svg";



const Header = () => {
    return (
        <div className="nav">
            <div className="logo">
                <NavLink to="/">
                    <img className="logo" src={logo} alt="logo"  />
                </NavLink>
            </div>
            <div className="navContent">
                <ul className="topNav">
                    <li>
                        <NavLink to="/resume">Resume</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects">Projects</NavLink>
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