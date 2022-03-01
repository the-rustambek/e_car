import Logo_y from "../../Assets/Img/Logo_y.png";

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
                      <img src="" alt="" className="social-icon" />
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