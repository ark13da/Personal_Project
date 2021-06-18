import React from 'react';
import "./portfolio.scss"
import voizyimg from "../../assets/voizy.png";
import logo from "../../assets/logo.svg";

const Projects = () => {
    return (
        <div>
            <div className="darkBack">
                <div className="aboutContainer">
                    <div className="aboutMe">
                        <a href="https://voizy-chat.web.app/" target="blank"><p className="aboutMeTitle">Voizy chat</p></a>
                        <p className="aboutMeText">Is basically a twitter for voice.</p>
                        <p className="aboutMeText">The app is written with React.js and Node.js and is hosted on Google Firebase.</p>
                        <p className="aboutMeText">I was mainly focused on developing the back-end with Node.js (Express), designing the database structure, providing front-end team with REST APIs and deploying the app with Firebase admin SDK.</p>
                    </div>
                    <img className="demoImg" src={voizyimg} alt="voizy img" />
                </div>
            </div>
            <div className="lightBack">
                <div className="aboutContainer">

                </div>
            </div>
        </div>
    );
};

export default Projects;