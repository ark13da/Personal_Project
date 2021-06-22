import React from 'react';
import "./portfolio.scss"
import voizyimg from "../../assets/voizy.png";
import arcadeImg from "../../assets/arcade.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const techSkills = [
    {
        name: "Voizy chat",
        desc: "Is basically a twitter for voice.",
        details: "The app is written with React.js and Node.js and is hosted on Google Firebase.",
        resp: "This project was a team effort and I was mainly focused on developing the back-end with Node.js (Express), designing the database structure, providing front-end team with REST APIs and deploying the app with Firebase admin SDK.",
        appRef: "https://voizy-chat.web.app/",
        gitRef: "https://github.com/orgs/bch-voizy-chat",
        imgRef: voizyimg
    },
    {
        name: "Arcade center",
        desc: "Is a collection of browser based mini arcade video games.",
        details: "The app is written with vinalla javascript, HTNL and CSS.",
        resp: "This project was a team effort and I was in charge of developing the games' logic and the Arcade's app's logic with Javascript.",
        appRef: "https://bch-group-project-arcade-center.github.io/",
        gitRef: "https://github.com/bch-group-project-arcade-center/bch-group-project-arcade-center.github.io",
        imgRef: arcadeImg
    },
    {
        name: "Recipe App",
        desc: "Allows you to add a food recipe and browse all the recipes that have been entered before.",
        details: "The front-end of the app is written with React.js and the back-end is constructed with PHP and Symfony and utilizes Pstgres for data storage and is hosted on Heroku.",
        resp: "I have developed the entire app myself.",
        appRef: "https://bch-group-project-arcade-center.github.io/",
        gitRef: "https://github.com/bch-group-project-arcade-center/bch-group-project-arcade-center.github.io",
        imgRef: voizyimg
    }
];


const Projects = () => {
    return (
        <div>
            {
                techSkills.map(i => {
                    let background: string = (techSkills.indexOf(i) % 2 == 0 ? "darkBack" : "lightBack");
                   
                        return (
                            <div key={i.name} className={background}>
                                <div className="aboutContainer">
                                    <div className="aboutMe">
                                        <p className="aboutMeTitle">{i.name}</p>
                                        <p >{i.desc}</p>
                                        <p >{i.details}</p>
                                        <p >{i.resp}</p>
                                        <a href={i.appRef} target="blank"><p> Visit the app</p></a>
                                        <a href={i.gitRef} target="blank"><FontAwesomeIcon icon={faGithub} size={"lg"} /></a>
                                    </div>
                                    <img className="demoImg" src={i.imgRef} alt="app img" />
                                </div>
                            </div>
                        )
                    
                })
            }
        </div>
    );
};

export default Projects;