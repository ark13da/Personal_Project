import React from 'react';
import "./portfolio.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faSymfony,faHtml5,faCss3,faSass,faDrupal,faPhp,faJs,faFigma,faReact,faGoogle,faNodeJs,faGit,faYarn,faNpm } from '@fortawesome/free-brands-svg-icons';
import { faUserTie,faLaptopCode,faChartBar,faTable,faDatabase,faBuilding,faGraduationCap } from '@fortawesome/free-solid-svg-icons';
//Technical skills: SQL, nosql,  HTML ,Css, scss, Javascript, React.js, Typescript, Node js , express js, PHP, symfony, Git, Firebase, GCP 
const profSkills = [
    {
        ico: faLaptopCode,
        name: "Full stack web development"
    },
    {
        ico: faUserTie,
        name: "professional consultancy"
    },
    {
        ico: faTable,
        name: "Data engineering"
    },
    {
        ico: faChartBar,
        name: "Business intelligence development"
    },
];
const techSkills = [
    {
        ico: faHtml5,
        name: "HTML"
    },
    {
        ico: faCss3,
        name: "CSS"
    },
    {
        ico: faSass,
        name: "SCSS(SASS)"
    },
    {
        ico: faFigma,
        name: "Figma"
    },
    {
        ico: faJs,
        name: "JavaScript & TypeScript"
    },
    {
        ico: faReact,
        name: "React.js"
    },
    {
        ico: faNodeJs,
        name: "Node.js"
    },
    {
        ico: faPhp,
        name: "PHP"
    },
    {
        ico: faSymfony,
        name: "Symfony"
    },
    {
        ico: faDrupal,
        name: "Drupal"
    },
    {
        ico: faDatabase,
        name: "Databses(SQL and NoSQL)"
    },
    {
        ico: faGoogle,
        name: "Google cloud platform"
    },
    {
        ico: faGit,
        name: "Git"
    },
    {
        ico: faNpm,
        name: "NPM"
    },
    {
        ico: faYarn,
        name: "Yarn"
    }
]


const Resume = () => {
    return (
        <div>
            <div className="darkBack resumeSec">
                <h3 className="hTitle">Professional skills</h3>
                <div className="contentGrid2">
                    {
                        profSkills.map(i => {
                            return <p key={ i.name} className="contentGridItem"><FontAwesomeIcon className={"icon"} icon={i.ico} size={"lg"} /> {i.name}</p>
                        })
                    }
                </div>
            </div>
            <div className="lightBack resumeSec">
                <h3 className="hTitle">Technical skills</h3>
                <div className="contentGrid3">
                    {
                        techSkills.map(i => {
                            return <p key={i.name} className="contentGridItem"><FontAwesomeIcon className={"icon"} icon={i.ico} size={"lg"} /> {i.name}</p>
                        })
                    }
                </div>
            </div>
            <div className="darkBack">work history</div>
            <div className="lightBack">Education</div>
        </div>
    );
};

export default Resume;