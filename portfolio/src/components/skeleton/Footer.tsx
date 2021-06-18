import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="footer">
            <div className="topShortBorder">
                <a href="https://www.linkedin.com/in/alireza-keshmiry-63193979" target="blank"><p><FontAwesomeIcon icon={faLinkedin} size={"lg"} /> Linkedin</p></a>
                <a href="https://github.com/ark13da" target="blank"><p><FontAwesomeIcon icon={faGithub} size={"lg"}/> Github</p></a>
            </div>
        </div>
    );
};

export default Footer;