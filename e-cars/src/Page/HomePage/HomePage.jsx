import Header from "../../Components/Header/Header"
import SwitchHome from "../../Components/SwitchHome/SwitchHome";
import "./HomePage.css"

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
 

  {/* <SwitchHome /> */}

 

</>
)
}

export default HomePage;