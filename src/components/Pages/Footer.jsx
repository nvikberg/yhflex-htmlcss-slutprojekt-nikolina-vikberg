import linkedInPic from './LI.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


import { Link } from "react-router-dom";
function Footer() {
    return (
        <div className="footer">
            <footer>
                <ul>
                    <li className="footerText">
                    <span className="footer-name">Nikolina Vikberg</span>
                        <br />
                        <span className="footer-email">nvikberg@gmail.com</span>
                        <br />
                        <span className="footer-location">
                            <FontAwesomeIcon icon={faLocationDot} /> Malmö, Sweden
                        </span>
                        <br />
                        <a href="http://www.linkedin.com/in/nikolina-vikberg-a368198b" target="_blank" rel="noopener noreferrer">
                            <img src={linkedInPic} alt="LinkedIn" style={{ width: '42px', height: '42px' }} />
                        </a>
                    </li>
                </ul>





            </footer>

        </div>

    );
}

export default Footer;