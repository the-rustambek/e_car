import RangeSlider from "../RangeSlider/RangeSlider";
import "./Sidebar.css";

const Sidebar = () =>{
  return (
    <div className="sidebar">
    
    <div className="sidebar-top">
      <p className="toggle-text">
        Used
      </p>
      <label className="switch">
          <input type="checkbox" 
                /> 
          <span className="slider round">
          </span>
      </label>
     
    </div>
    
    <div className="sidebar-main">
      <span>
      <h3 className="range-title">
        PRICE
      </h3>
      <RangeSlider />
      </span>
      <ul className="sidebar-list">
        <li className="sidebar-item">
          <button className="sidebar-btn">
          <i className="fa-solid fa-clock"></i>
          <p>Year</p>
          </button>
        </li>
        <li className="sidebar-item">
          <button className="sidebar-btn">
          <i className="fa-solid fa-car"></i>
          <p>Make</p>
          </button>
        </li>
        <li className="sidebar-item">
          <button className="sidebar-btn">
          <i className="fa-solid fa-car"></i>
          <p>Model</p>
          </button>
        </li>
       
        <li className="sidebar-item">
          <button className="sidebar-btn">
          <i className="fa-solid fa-square-plus"></i>
          <p>Trim</p>
          </button>
        </li>
        <li className="sidebar-item">
          <button className="sidebar-btn">
          <i className="fa-solid fa-clock"></i>
          <p>Features</p>
          </button>
        </li>
        <li className="sidebar-item">
          <button className="sidebar-btn">
          <i className="fa-solid fa-clock"></i>
           <p>Fueltype</p>
          </button>
        </li>
        <li className="sidebar-item">
          <button className="sidebar-btn">
          <i className="fa-solid fa-square-plus"></i>
          <p>Transmission</p>
          </button>
        </li>
        <li className="sidebar-item">
          <button className="sidebar-btn">
          <i className="fa-solid fa-car"></i> <p>Mileage</p>
          </button>
        </li>
        <li className="sidebar-item">
          <button className="sidebar-btn">
          <i className="fa-solid fa-square-plus"></i>
          <p>Engine</p>
          </button>
        </li>
        <li className="sidebar-item">
          <button className="sidebar-btn">
          <i className="fa-solid fa-square-plus"></i>
           <p>Color</p>
          </button>
        </li>
        <li className="sidebar-item">
          <button className="sidebar-btn">
          <i className="fa-solid fa-car"></i> <p>Bodystyle</p>
          </button>
        </li>
      </ul>
     
    </div>
</div>
  )
}
export default Sidebar;