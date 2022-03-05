import otherCar from "../../Assets/Img/otherCar.jpg"
import "./OtherVehicles.css"
import "../../Page/BuyPage/BuyPage.css"
import { Link } from "react-router-dom"

const OtherVehicles = () => {
  return (
    <>
      <h3 className="other-title">
         Other Vehicles You May Like
      </h3>
      <ul className="other-list">
        <li className="other-item">
        <Link to="/buypage" className="other-link">
          <img src={otherCar} alt="otherCar" className="other-img" />
          </Link>
        </li>
        <li className="other-item">
            <Link to="/buypage" className="other-link">
              Pre owned 121212  are  ned 2Pre owned Pre owned 1 
              </Link>
          </li>
          <li className="other-item">
            <Link to="/buypage/pending" className="other-link">
            Pending sale</Link>
          </li>
        
      </ul>
      <div className="other-section">
        <h4 className="other-subtitle">
          Disclaimer:</h4>
          <span>
          Tax, Title and Tags not included in vehicle prices shown and must be paid by the purchaser. While great effort is made to ensure the accuracy of the information on this site, errors do occur so please verify information with a customer service rep. This is easily done by calling us at (855) 438-3838 or by visiting us at the store.
          </span>
          <span>
          **With approved credit. Terms may vary. Monthly payments are only estimates derived from the vehicle price with a 72 month term, 5.9% interest and 20% downpayment.
          </span>
          <span>
          *Number of views in last 30 days
          </span>
          <span>
          † Based on 2014 EPA mileage ratings. Use for comparison purposes only. Your actual mileage will vary depending on how you drive and maintain your vehicle.† Based on 2014 EPA mileage ratings. Use for comparison purposes only. Your actual mileage will vary depending on how you drive and maintain your vehicle.
          </span>
        </div>
    <div className="other-footer">
      <h2 className="other-info">
      Why Current Automotive
        </h2>
        <p className="other-subtext">
          
        At Current Automotive, we are electric vehicle experts and we know the future of transportation is electric. Our team has been helping drive the transition to e-mobility for the last 10 years, and it remains our mission to be champions who help people make the switch to sustainable transportation. We pride ourselves on providing a fun, educational and no-pressure experience.</p>
      </div>
    </>
  )
}

export default OtherVehicles;