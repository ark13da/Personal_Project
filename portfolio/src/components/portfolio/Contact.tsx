import React from 'react';
import "./portfolio.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
        <div>
            <div className="lightBack resumeSec">
                
                
                        <p><b>You can contact me via Linkedin:</b></p>
                        <a href="https://www.linkedin.com/in/alireza-keshmiry-63193979" target="blank"> <FontAwesomeIcon icon={faLinkedin} size={"lg"} /></a>
                    
                    
                
            </div>
        </div>
    );
};

export default Contact;