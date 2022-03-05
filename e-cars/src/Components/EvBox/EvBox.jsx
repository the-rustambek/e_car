import "./EvBox.css"
import  Ev from "../../Assets/Img/Ev.png";
import { Link } from "react-router-dom";

const EvBox = () =>{
  return ( 
        <>
          <div className="ev">
            <div className="container">
              <div className="ev-left">
                  <h2 className="ev-title">
                      Get Ev.
              </h2>
                <p className="ev-text">Find out how to charge an Electric Vehicle
                either on the road or at your home.</p>
                <Link to="/more_info" className="ev-link">
                  MORE INFO 
                </Link>
        </div>
        <div className="ev-right">
             <img src={Ev}
                    alt="Ev" className="ev-thumb" />
      </div>
    </div>
  </div>
   </>
  )
}

export default EvBox;