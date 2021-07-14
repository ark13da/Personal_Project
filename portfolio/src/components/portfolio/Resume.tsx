import React from 'react';
import "./portfolio.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSymfony,faHtml5,faCss3,faSass,faDrupal,faPhp,faJs,faFigma,faReact,faGoogle,faNodeJs,faGit,faYarn,faNpm, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faUserTie,faLaptopCode,faChartBar,faTable,faDatabase,faBuilding,faGraduationCap, faTools } from '@fortawesome/free-solid-svg-icons';
//Technical skills: SQL, nosql,  HTML ,Css, scss, Javascript, React.js, Typescript, Node js , express js, PHP, symfony, Git, Firebase, GCP 
const profSkills: {ico: any, name: string}[] = [
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
const techSkills: { ico: any, name: string }[] = [
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
        ico: faTools,
        name: "Redux"
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
    },
    {
        ico: faBootstrap,
        name: "Twitter Bootsrap"
    },
    {
        ico: faTools,
        name: "D3.js"
    },
    {
        ico: faTools,
        name: "Qlik Sense"
    },
    {
        ico: faTools,
        name: "Qlik View"
    },
    {
        ico: faTools,
        name: "Power BI"
    }
]


const Resume = () => {
    return (
        <div>
            <div className="darkBack resumeSec">
                <h2 className="hTitle">Professional skills</h2>
                <div className="contentGrid2">
                    {
                        profSkills.map(i => {
                            return <p key={ i.name} className="contentGridItem"><FontAwesomeIcon className={"icon"} icon={i.ico} size={"lg"} /> {i.name}</p>
                        })
                    }
                </div>
            </div>
            <div className="lightBack resumeSec">
                <h2 className="hTitle">Technical skills</h2>
                <div className="contentGrid3">
                    {
                        techSkills.map(i => {
                            return <p key={i.name} className="contentGridItem"><FontAwesomeIcon className={"icon"} icon={i.ico} size={"lg"} /> {i.name}</p>
                        })
                    }
                </div>
            </div>
            <div className="darkBack resumeSec">
                <h2 className="hTitle">Work History</h2>
                <p><FontAwesomeIcon className={"icon"} icon={faBuilding} size={"lg"} /> <b>Sievo.Oy</b></p>
                <p><b>Solution consultant (BI analysis)</b> - Helsinki, Jan 2019 - Jan 2021</p>
                <ul>
                    <li>Designed data models (SQL and SSIS)</li>
                    <li>Built BI reports (Qlik Sense and Power BI)</li>
                </ul>
                <p><FontAwesomeIcon className={"icon"} icon={faBuilding} size={"lg"} /> <b>Sievo.Oy</b></p>
                <p><b>Data management specialist</b> - Helsinki, Mar 2018 - jan 2019</p>
                <ul>
                    <li>Sanitized and categorized the data in different database objects (SQL)</li>
                    <li>Maintained the databases</li>
                </ul>
            </div>
            <div className="lightBack resumeSec">
                <h2 className="hTitle">Education</h2>
                <p><FontAwesomeIcon className={"icon"} icon={faGraduationCap} size={"lg"} /> <b>Business college Helsinki</b></p>
                <p><b>Full stack web development</b> - Helsinki, Jan 2021 - Present</p>
                <p><FontAwesomeIcon className={"icon"} icon={faGraduationCap} size={"lg"} /> <b>Tallinn university of technology</b></p>
                <p><b>Master of business administration (MBA)</b> - Tallinn, Sep 2015 - Jun 2017</p>
            </div>
        </div>
    );
};

export default Resume;