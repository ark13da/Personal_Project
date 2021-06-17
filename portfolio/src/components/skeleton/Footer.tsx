import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="footer">
            <div className="topShortBorder">
                <p><FontAwesomeIcon icon={faLinkedin} /> Linkedin</p>
                <p><FontAwesomeIcon icon={faGithub}/> Github</p>
            </div>
        </div>
    );
};

export default Footer;