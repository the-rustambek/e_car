import Header from "../../Components/Header/Header"
import "./HomePage.css"
import Batter from "../../Assets/Img/Batter.png";
import Charged from "../../Components/Charged/Charged";
import  Ev from "../../Assets/Img/Ev.png";
import Vehicle from "../../Assets/Img/Vehicle.png";
import online from "../../Assets/Img/online.png";
import Delivered from "../../Assets/Img/Delivered.png";
import Questions from "../../Components/Questions/Questions";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import Splides from "../../Components/Splide/Splide";

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
        <ul className="main-list" data-aos="fade-up" data-aos-duration="10000">
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
            <Link to="/vehiclespage" className="main-link" data-aos="fade-up" data-aos-duration="15000">
              VIEW ALL VEHICLES
            </Link>
          </li>
        </ul>

      </div>
    </div>

<div className="wrapper">
  <div className="container">
  <ul className="wrapper-list">
    <li className="wrapper-item wrapper-items" data-aos="fade-up"
     data-aos-duration="6000">
      <Link to="#" className="wrapper-link">
        How does  Shipping  Work ?
      </Link>
    </li>
    <li className="wrapper-item wrapper-items" data-aos="fade-up"
     data-aos-duration="4000">
      <Link to="#" className="wrapper-link">
      Browse our Electric Vehicles
      </Link>
    </li>
    <li className="wrapper-item" data-aos="fade-up"
     data-aos-duration="2000">
      <Link to="#" className="wrapper-link">
      Our Story
      </Link>
    </li>
  </ul>
  </div>
  
</div>
  </div>
 

  <section className="section">
    <div className="container">
      <div className="section-header"  data-aos="fade-up"
     >
        <h2 className="section-title">
        Why switch to electric?
        </h2>
        <p className="section-text">
        When you switch to an electric vehicle your total cost of ownership goes down considerably.
        </p>
      </div>
      <ul className="section-list">
        <li className="section-item"  data-aos="fade-up"
     data-aos-duration="3000">
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
        <li className="section-item"  data-aos="fade-up"
     data-aos-duration="2000">
          <img src={Batter} alt="Batter" 
          className="section-img" />
        </li>
        <li className="section-item"  data-aos="fade-up"
     data-aos-duration="1000">
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

    <Link to="" className="section-link">
        Learn More
      </Link>

    </div>
  </section>
  
  <Charged />
        <div className="ev">
            <div className="container-fluid">
            <div className="ev-left"data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
             <img src={Ev}
                    alt="Ev" className="ev-thumb" />
                </div>
                <div className="ev-right" data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-easing="ease-in">
                  <h2 className="ev-title">
                    Sellling Your Ev.
              </h2>
                <p className="ev-text">We’ll give you
                 a fair price. Use our online trade-in
                  estimator  to get an idea of what your EV is worth. </p>
                <Link to="#" className="ev-link">
                  Get Appraised
                </Link>
        </div>
    
    </div>
  </div>
  <div className="holder">
  <div className="container-fluid">
  <div className="holder-top" data-aos="fade-up"
     data-aos-duration="3000">
    <h2 className="holder-title">
      How easy is it ?
    </h2>
    <p className="holder-text">
    Simple! Just find your car and use our online system to complete the purchase.
  No need to even leave the house!
    </p>
  </div>
  <div className="holder-blok">
  <ul className="holder-list"  data-aos="fade-up"
     data-aos-duration="4000">
    <li className="holder-item">
      <img src={Vehicle} alt="Vehicle" className="holder-pic" />
    </li>
    <li className="holder-item"  >
      <h3 className="holder-subtitle">
        1.Find Your Vehicle
      </h3>
    </li>
    <li className="holder-item">
      <p className="holder-subtext">
      Browse hand-picked pre-owned electric vehicles.
      </p>
    </li>
  </ul>

  <ul className="holder-list"  data-aos="fade-up"
     data-aos-duration="5000"> 
    <li className="holder-item">
      <img src={online} alt="online" className="holder-pic" />
    </li>
    <li className="holder-item">
      <h3 className="holder-subtitle">
      2. Purchase Online
      </h3>
    </li>
    <li className="holder-item">
      <p className="holder-subtext">
      Chat, finance, and sign. </p>
    </li>
  </ul>
  <ul className="holder-list"  data-aos="fade-up"
     data-aos-duration="7000">
    <li className="holder-item">
      <img src={Delivered} alt="Delivered" className="holder-pic" />
    </li>
    <li className="holder-item">
      <h3 className="holder-subtitle">
      3. Get it delivered!
      </h3>
    </li>
    <li className="holder-item">
      <p className="holder-subtext">
      We’ll bring the vehicle to you where ever you are. </p>
    </li>
  </ul>
  </div>
 

  </div>
  </div>
  <Splides />
  <Questions />
  <Footer />
</>
)
}

export default HomePage;