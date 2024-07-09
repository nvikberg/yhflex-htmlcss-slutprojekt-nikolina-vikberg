import linkedInPic from './LI.png'
import { Link } from "react-router-dom";
function Footer() {
    return (
        <div className="footer">
            <footer>
                <ul>
                    <li className="footerText">
                        Nikolina Vikberg<br>
                        </br>
                        nvikberg@gmail.com
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