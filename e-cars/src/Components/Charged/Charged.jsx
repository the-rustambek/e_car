import "./Charged.css"
import GetCharged 
from "../../Assets/Img/GetCharged.jpg"

const Charged = () =>{
  return (
    <>
    <div className="charged">
      <div className="container">
      <div className="charged-left">
        <h2 className="charged-title">
        Get Charged.
        </h2>
        <p className="charged-text">Find out how to charge an Electric Vehicle
either on the road or at your home.</p>
<a href="#" className="charged-link">
  MORE INFO 
</a>
      </div>
      
      <div className="charged-right">
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