import React from 'react';
import "./portfolio.scss"
import alirezaImg from "../../assets/2021.jpg";

const Intro = () => {
    return (
        <div> 
            <div className="lightBack">
                <div className="aboutContainer">
                    <div className="aboutMe">
                        <p className="aboutMeHi" >Hi! I am</p>
                        <p className="aboutMeName">Alireza Keshmiry</p>
                        <p className="aboutMeTitle">Full stack web developer</p>
                        <p className="aboutMeText">Welcome to my portfolio</p>
                    </div>
                    <img className="demoImg" src={alirezaImg} alt=" img" />
                </div>
            </div>
        </div>
    );
};

export default Intro;