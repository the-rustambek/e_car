import Logo from "../../Assets/Img/Logo_x.png"
import Search from "../../Assets/Img/White-Search.png"
import Phone from "../../Assets/Img/White-Phone.png"
import "./Header.css"
import Menu from "../../Assets/Img/Menu.png";


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
            <a href="#" className="logo-link">
              <img src={Logo} alt="" className="header-logo" />
            </a>
          </div>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#" className="nav-link">
                Inventory
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Why Electric ?
              </a>
            </li> <li className="nav-item">
              <a href="#" className="nav-link">
                Charging
              </a>
            </li> 
            <li className="nav-item">
              <select className="nav-select">
                <option disabled value="We Buy EVs ">We Buy EVs </option>
                <option  value="We Buy EVs ">We Buy Tesles </option>
                <option disabled value="We Buy EVs ">We Buy Rivians </option>
                <option disabled value="We Buy EVs ">We Buy Mach-es </option>
                <option disabled value="We Buy EVs ">We Buy All EVs and PHEVs </option>
              </select>
            </li>
            <li className="nav-item">
              <select className="nav-select">
                <option disabled value="We Buy EVs ">We Buy EVs </option>
                <option  value="We Buy EVs ">We Buy Tesles </option>
                <option disabled value="We Buy EVs ">We Buy Rivians </option>
                <option disabled value="We Buy EVs ">We Buy Mach-es </option>
                <option disabled value="We Buy EVs ">We Buy All EVs and PHEVs </option>
              </select>
            </li>
            <li className="nav-item">
              <select className="nav-select">
                <option disabled value="We Buy EVs ">We Buy EVs </option>
                <option  value="We Buy EVs ">We Buy Tesles </option>
                <option disabled value="We Buy EVs ">We Buy Rivians </option>
                <option disabled value="We Buy EVs ">We Buy Mach-es </option>
                <option disabled value="We Buy EVs ">We Buy All EVs and PHEVs </option>
              </select>
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
              <li className="header-item header-items">
                <a href="#" className="header-links">
                  Available Cars
                </a>
              </li>
          </ul>
      </div>
      
    </div>

    
  
    </>
  )
}

export default Header;