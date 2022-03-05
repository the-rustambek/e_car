import Logo from "../../Assets/Img/Logo_x.png"
import Search from "../../Assets/Img/White-Search.png"
import Phone from "../../Assets/Img/White-Phone.png"
import "./Header.css"
import Menu from "../../Assets/Img/Menu.png";
import { Link } from "react-router-dom";
import UnstyledSelectCustomRenderValue from "../Dropdown/Dropdown";


const Header = () =>{
  return (
    <>
    <div className="header">
      <div className="container-fluid">
          <div className="header-left">
          <button className="menu-button">
          <img src={Menu} alt="Menu" 
          className="menu-icon" />
        </button>
            <Link to="/" className="logo-link">
              <img src={Logo} alt="" className="header-logo" />
            </Link>
          </div>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/vehiclespage" className="nav-link">
                Inventory
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/electric" className="nav-link">
                Why Electric ?
              </Link>
            </li> <li className="nav-item">
              <Link to="/charging" className="nav-link">
                Charging
              </Link>
            </li> 
            <li className="nav-item">
                <UnstyledSelectCustomRenderValue />
            
            </li>
            <li className="nav-item">
            <UnstyledSelectCustomRenderValue />
            </li>
            <li className="nav-item">
            <UnstyledSelectCustomRenderValue />
            </li>
          </ul>
          <ul className="header-list">
              <li className="header-item headers-item">
                <button className="header-btn header-search">
                  <img src={Search} alt="Search" className="header-icon" />
                </button>
              </li>
              <li className="header-item">
                <button className="header-btn">
                  <img src={Phone} alt="Phone" 
                  className="header-icon" />
                </button>
              </li>
              <li className="header-item 
              header-items">
                <Link to="/available_cars" className="header-links">
                  Available Cars
                </Link>
              </li>
          </ul>
      </div>
      
    </div>

    
  
    </>
  )
}

export default Header;