import React from 'react';
import "./portfolio.scss"

const Intro = () => {
    return (
        <div> 
            <div className="lightBack">
                <div className="aboutContainer">
                    <div className="aboutMe">
                        <p className="aboutMeHi" >Hi! I am</p>
                        <p className="aboutMeName">Alireza Keshmiry</p>
                        <p className="aboutMeTitle">Full stack web developer</p>
                        <p className="aboutMeText">Feel free to browse my page and learn more about me personaly and professionally</p>
                    </div>
                    <div>img</div>
                </div>
            </div>
        </div>
    );
};

export default Intro;