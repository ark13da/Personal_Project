import React from 'react';
import "./portfolio.scss"
import voizyimg from "../../assets/voizy.png";
import arcadeImg from "../../assets/arcade.png";
import hoxImg from "../../assets/hox.png";
import portfolio from "../../assets/portfolioImg.png";
import recipeImg from "../../assets/recipe.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const projects: { name: string, desc: string, details: string, resp: string, appRef: string, gitRef: string, imgRef: any }[] = [
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
        resp: "This project was a team effort and I was in charge of developing the games' logic and the Arcade app's logic with Javascript.",
        appRef: "https://bch-group-project-arcade-center.github.io/",
        gitRef: "https://github.com/bch-group-project-arcade-center/bch-group-project-arcade-center.github.io",
        imgRef: arcadeImg
    },
    {
        name: "Hoxhunter's hero cards",
        desc: "Are basically cards displaying information about Hoxhunting heros.",
        details: "The front-end of the app is written with React.js (TypeScript) and styled components. The back-end's database layer / persistance layer is done with Typeorm, GraphQL Schema and resolvers are implemented with TypeGraphQL.",
        resp: "This was the coding exercise for fornt-end developer position (Summer job) at HoxHunt. My task was to use the data fetched by GraphQL query and design and render a set of cards to diplay information about heros.",
        appRef: "https://github.com/ark13da/Personal_Project/tree/main/hunters-assignment_",
        gitRef: "https://github.com/ark13da/Personal_Project/tree/main/hunters-assignment_",
        imgRef: hoxImg
    },
    {
        name: "Recipe app",
        desc: "Is an application that accepts food recipe as input and displays the recorded recipes.",
        details: "The front-end of the app is written with React.js and the back-end is written with PHP using Symfony and utilizing Postgres for data storage. the client side of the app is hosted on Netlifly and the server side is on Heroku.",
        resp: "This project was a school homework to access our capabilities in using React.js and PHP(Symfony). I designed and developed the entire app.",
        appRef: "https://serene-bose-500921.netlify.app/",
        gitRef: "https://github.com/ark13da/BC_School_Project/tree/main/React%20basics/week5/functional_recipe",
        imgRef: recipeImg
    },
    {
        name: "Personal portfolio",
        desc: "Is the page you are browsing right now.",
        details: "The front-end of the app is written with React.js (TypeScript) and SCSS.",
        resp: "I created this portfolio so it would be easier to display my capabilities.Everything you can see here, including page and logo design, is done by me.",
        appRef: "https://github.com/ark13da/Personal_Project/tree/main/portfolio",
        gitRef: "https://github.com/ark13da/Personal_Project/tree/main/portfolio",
        imgRef: portfolio
    }
];


const Projects = () => {
    return (
        <div>
            {
                projects.map(i => {
                    let background: string = (projects.indexOf(i) % 2 === 0 ? "darkBack" : "lightBack");
                   
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