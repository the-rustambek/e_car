import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo_y from "../../Assets/Img/Logo_y.png";
import { faFacebook, faInstagram, faLinkedin, faYoutube }
 from '@fortawesome/free-brands-svg-icons'
// import "./Footer.css"
import "../../Page/HomePage/HomePage.css";
import { Link } from "react-router-dom";

const Footer = () =>{
  return (
        <footer className="footer">
          <div className="container">
            <ul className="footer-list">
              <li className="foooter-item">
                <img src={Logo_y} alt="" className="footer-logo" />
              </li>
              <li className="footer-item">
                <ul className="social-list">
                  <li className="social-item">
                    <Link to="/facebook" className="social-link">
                    <FontAwesomeIcon className="social-icon" 
                    icon={faFacebook} /> </Link>
                  </li>
                  <li className="social-item">
                    <Link to="/youtube" className="social-link">
                    <FontAwesomeIcon className="social-icon" 
                    icon={faYoutube} /> </Link>
                  </li>
                  <li className="social-item">
                    <Link to="/instagram" className="social-link">
                    <FontAwesomeIcon className="social-icon" 
                    icon={faInstagram} />   </Link>
                  </li>
                  <li className="social-item">
                    <Link to="/linkedin" className="social-link">
                    <FontAwesomeIcon className="social-icon" 
                    icon={faLinkedin} /> </Link>
                  </li>
                

                </ul>
              </li>
              <li className="footer-item">
                <p>
                Phone: 855-438-3838

                </p>
                <p>
                300 E Ogden Ave Hinsdale, IL 60521

                </p>
                <p>Monday - Saturday: By Appointment Only</p>
<p>
Sunday: Closed
</p>

              </li>
              <li className="footer-item footer-items">
                <p>Current Automotive is not affiliated with Tesla, inc.</p>
              <p>The three lightning bolts logo is a registered trademark of Current Automotive.</p>
              </li>
              <li className="footer-item">
                <ul className="contact-list">
                  <li className="contact-item">
                    <Link to="/policy" className="contact-link contact-links">
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="contact-item">
                    <Link to="/contact" className="contact-link">
                      Contact us
                    </Link>
                  </li>
                  <li className="contact-item">
                    <Link to="/sitemap" className="contact-link ">
                      Sitemap
                    </Link>
                  </li>
                  <li className="contact-item">
                    <Link to="/sitemap_xml" className="contact-link">
                    Sitemap XML
                    </Link>
                  </li>

                </ul>
              </li>
            </ul>
          </div>
        </footer>
  )
}
 export default Footer;