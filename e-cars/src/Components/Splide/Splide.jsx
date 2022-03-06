import { Splide, SplideSlide } from '@splidejs/react-splide';import '@splidejs/splide/dist/css/splide.min.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Car1 from "../../Assets/Img/Car1.png"
import "./Splide.css"

const Splides = () =>{
const [cars, setCars] = useState([])

useEffect(() =>{
fetch("https://jsonplaceholder.typicode.com/users")
.then((res) => res.json()).then((data) =>{
setCars(data)
})
})
return (
<div className="splide">
  <div className="container-fluid">
    <div className="splide-top" data-aos="fade-up" data-aos-duration="3000">
      <h2 className="splide-name">
        Available Electric Vehicles
      </h2>
      <p className="splide-info">

        Select a model to view our current inventory.

      </p>
    </div>
    <>
      {cars.length > 0 && (
      <Splide data-aos="fade-up" 
      data-aos-duration="3000"
       className='splide-slide' options={ { type : 'loop' , perPage:
        3, perMove: 1, autoplay: true, } }>
        {cars.map((car,i)=>(
        <SplideSlide key={i}
         className='splide-box'>
          <Link to="/vehiclespage" className="splide-link">
          <img className='splide-img' src={Car1} alt="Image1" />
          <h4 className="splite-title">
            {car.company.name} </h4>
          <p className="splite-text">
            {car.address.suite} </p>
          </Link>
        </SplideSlide>
        ))}

      </Splide>
      )}


    </>
    <Link to="/vehiclespage" className="splide-links"
     data-aos="fade-up" 
     data-aos-duration="3000">
    View All Vehicles
    </Link>
  </div>
</div>

)
}

export default Splides;