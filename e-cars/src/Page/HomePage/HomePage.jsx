import Header from "../../Components/Header/Header"
import "./HomePage.css"
import Batter from "../../Assets/Img/Batter.png";
import Charged from "../../Components/Charged/Charged";

const HomePage = () =>{
return (
<>
 
  <video autoPlay muted className="header-video" id="myVideo">
    <source
      src="https://3a73912591e33a34c7ec-0b2c97842f44191203c9b45228f673bc.ssl.cf1.rackcdn.com/currentautomotive/home-video.mp4"
      type="video/mp4" />
  </video>
  <div className="header-page">
   <Header />
    <div className="main">
      <div className="container">
        <ul className="main-list">
          <li className="main-item">
            <h2 className="main-title">
              Pre-owned Electric Vehicles.
              Buy Online. Get it Delivered.
            </h2>
          </li>
          <li className="main-item">

            <p className="main-text">
              We offer financing, accept all trades, and deliver anywhere in the Continental US.
            </p>
          </li>
          <li className="main-item main-items">
            <a href="#" className="main-link">
              VIEW ALL VEHICLES
            </a>
          </li>
        </ul>

      </div>
    </div>

<div className="wrapper">
  <div className="container">
  <ul className="wrapper-list">
    <li className="wrapper-item wrapper-items">
      <a href="#" className="wrapper-link">
        How does  Shipping  Work ?
      </a>
    </li>
    <li className="wrapper-item wrapper-items">
      <a href="#" className="wrapper-link">
      Browse our Electric Vehicles
      </a>
    </li>
    <li className="wrapper-item">
      <a href="#" className="wrapper-link">
      Our Story
      </a>
    </li>
  </ul>
  </div>
  
</div>
  </div>
 

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
            <div className="month-border">
            <p className="month-text">
              SAVE
            </p>
            <span className="section-price"> 
              $50
            </span>
            <p>A Month*</p>
            </div>
            <span  className="section-subtext">
            In Fuel Cost

            </span>
          </div>
        </li>
        <li className="section-item">
          <img src={Batter} alt="Batter" 
          className="section-img" />
        </li>
        <li className="section-item">
          <div className="section-month">
            <div className="month-border">
            <p className="month-text">
              SAVE
            </p>
            <span className="section-price">
              $400
            </span>
            <p>A Year*</p>
            </div>
            <span  className="section-subtext">
            In Maintenance
            </span>
          </div>
        </li>
      </ul>
    <div className="">
    <a href="#" className="section-link">
        Learn More
      </a>
    </div>
    </div>
  </section>
  
  <Charged />
</>
)
}

export default HomePage;