import "./Charged.css"
import GetCharged 
from "../../Assets/Img/GetCharged.jpg"
import { Link } from "react-router-dom";

const Charged = () =>{
  return (
    <>
    <div className="charged">
      <div className="container">
      <div className="charged-left" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        <h2 className="charged-title">
        Get Charged.
        </h2>
        <p className="charged-text">Find out how to charge an Electric Vehicle
either on the road or at your home.</p>
<Link
 to="#" className="charged-link">
  MORE INFO 
</Link>
      </div>
      
      <div className="charged-right" data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="1500">
        <img src={GetCharged}
         alt="GetCharged"
         
          className="charged-thumb" />
      </div>

      </div>
      
    </div>

    
  
    </>
  )
}

export default Charged;