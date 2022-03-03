import { useEffect, useState } from "react";
import "./CarList.css";
import CarImg from "../../Assets/Img/CarLists.jpg";
import "../../Page/VehiclesPage/VehiclesPage.css"

const CarList = () =>{
  const [teslas,setTeslas]= useState([]);
  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json()).then((data) =>{
        setTeslas(data)

      })
  })
  return (
      <>
     {teslas.length > 0 && (
      <div className="cars-box">
       {teslas.map((tesla,i) =>(
        <ul key={i} className="car-list">
        <li className="car-item">
          <img src={CarImg} alt="" className="car-img" />

        </li>
        <li className="car-item">
          <p className="car-date">
            Pre-Owned 2016
          </p>
        </li>
        <li className="car-item">
          <h4 className="car-title">

          Tesla Model S 100D EAP | 335 mile range
          </h4>
        </li>
        <li className="car-item">
          <p className="car-stock">Stock: C1780PA</p>
        </li>
        <li className="car-item car-items">
          <span className="car-price">
            Price
          </span>
          <span className="car-money">
            $45,490
          </span>
        </li>
        <li className="car-item">
          <p className="car-text">
            Mileage: 66,621
          </p>
        </li>
        <li className="car-item">
          <p className="car-text">
            Exterrior: Titanium metallic
          </p>
        </li>
        <li className="car-item">
          <p className="car-text">
            Interior: Tan
          </p>
        </li>
      </ul>
       ))}
       </div>
     )}
   
   </>
      
  )
}

export default CarList;