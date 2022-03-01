import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo_y from "../../Assets/Img/Logo_y.png";
import { faFacebook, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
// import "./Footer.css"
import "../../Page/HomePage/HomePage.css";

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
                    <a href="#" className="social-link">
                    <FontAwesomeIcon className="social-icon" 
                    icon={faFacebook} /> </a>
                  </li>
                  <li className="social-item">
                    <a href="#" className="social-link">
                    <FontAwesomeIcon className="social-icon" 
                    icon={faYoutube} /> </a>
                  </li>
                  <li className="social-item">
                    <a href="#" className="social-link">
                    <FontAwesomeIcon className="social-icon" 
                    icon={faInstagram} />   </a>
                  </li>
                  <li className="social-item">
                    <a href="#" className="social-link">
                    <FontAwesomeIcon className="social-icon" 
                    icon={faLinkedin} /> </a>
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
                    <a href="#" className="contact-link contact-links">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="contact-item">
                    <a href="#" className="contact-link">
                      Contact us
                    </a>
                  </li>
                  <li className="contact-item">
                    <a href="#" className="contact-link ">
                      Sitemap
                    </a>
                  </li>
                  <li className="contact-item">
                    <a href="#" className="contact-link">
                    Sitemap XML
                    </a>
                  </li>

                </ul>
              </li>
            </ul>
          </div>
        </footer>
  )
}
 export default Footer;