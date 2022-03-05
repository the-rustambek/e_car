import Logo from "../../Assets/Img/Logo_x.png"
import Search from 
"../../Assets/Img/Search1.png"
import Phone from "../../Assets/Img/White-Phone.png"
import "./BuyHeader.css"
import Menu from "../../Assets/Img/Menu.png";
import { Link } from "react-router-dom";


const BuyHeader = () =>{
  return (
    <>
    <div className="headers">
      <div className="container-fluid">
      
          <div className="headers-left">
          <button className="menu-button">
          <img src={Menu} alt="Menu" 
          className="menu-icon" />
        </button>
            <Link to="/" className="logo-link">
              <img src={Logo} alt="" className="headers-logo" />
            </Link>
          </div>
          <ul className="navs-list">
            <li className="navs-item">
              <Link to="/vehiclespage" className="navs-link">
                Inventory
              </Link>
            </li>
            <li className="navs-item">
              <Link to="" className="navs-link">
                Why Electric ?
              </Link>
            </li> <li className="navs-item">
              <Link to="" className="navs-link">
                Charging
              </Link>
            </li> 
            <li className="navs-item">
              <select className="navs-select">
                <option disabled value="We Buy EVs ">We Buy EVs </option>
                <option  value="We Buy EVs ">We Buy Tesles </option>
                <option disabled value="We Buy EVs ">We Buy Rivians </option>
                <option disabled value="We Buy EVs ">We Buy Mach-es </option>
                <option disabled value="We Buy EVs ">We Buy All EVs and PHEVs </option>
              </select>
            </li>
            <li className="navs-item">
              <select className="navs-select">
                <option disabled value="We Buy EVs ">We Buy EVs </option>
                <option  value="We Buy EVs ">We Buy Tesles </option>
                <option disabled value="We Buy EVs ">We Buy Rivians </option>
                <option disabled value="We Buy EVs ">We Buy Mach-es </option>
                <option disabled value="We Buy EVs ">We Buy All EVs and PHEVs </option>
              </select>
            </li>
            <li className="navs-item">
              <select className="navs-select">
                <option disabled value="We Buy EVs ">We Buy EVs </option>
                <option  value="We Buy EVs ">We Buy Tesles </option>
                <option disabled value="We Buy EVs ">We Buy Rivians </option>
                <option disabled value="We Buy EVs ">We Buy Mach-es </option>
                <option disabled value="We Buy EVs ">We Buy All EVs and PHEVs </option>
              </select>
            </li>
          </ul>
          <ul className="headers-list">
              <li className="headers-item headerss-item">
                <button className="headers-btn headers-search">
                  <img src={Search} alt="Search" className="headers-icon" />
                </button>
              </li>
              <li className="headers-item">
                <button className="headers-btn">
                <i class="fa-solid fa-phone"></i></button>
              </li>
              <li className="headers-item
               headers-items">
                <Link to="" className="headers-links">
                  Available Cars
                </Link>
              </li>
          </ul>
      </div>      
    </div>
    </>
  )
}

export default BuyHeader;