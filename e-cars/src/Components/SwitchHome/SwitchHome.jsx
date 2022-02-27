import Batter from "../../Assets/Img/Chaqmoq.png";
import "./SwitchHome.css";

const SwitchHome = () =>{
  return (
    <section className="section">
    <div className="container">
      <div className="section-header">
        <h2 className="section-title">
        Why switch to electric?
        </h2>
        <p className="section-text">
        When you switch to an electric vehicle your total cost of ownership goes down considerably.
        </p>
      </div>
      <ul className="section-list">
        <li className="section-item">
          <div className="section-month">
            <span className="month-border">
            <p className="month-text">
              SAVE
            </p>
            <span>
              $50
            </span>
            <p>A Month*</p>
            </span>
            <span  className="section-subtext">
            In Fuel Cost

            </span>
          </div>
        </li>
        <li className="section-item">
          <img src={Batter} alt="Batter" className="section-img" />
        </li>
        <li className="section-item">
          <div className="section-month">
            <span className="month-border">
            <p className="month-text">
              SAVE
            </p>
            <span>
              $400
            </span>
            <p>A Year*</p>
            </span>
            <span  className="section-subtext">
            In Maintenance
            </span>
          </div>
        </li>
      </ul>
      <a href="#" className="section-link">
        Learn More
      </a>
    </div>
  </section>
  )
}

export default SwitchHome;