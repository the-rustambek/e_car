import { Splide, SplideSlide } from '@splidejs/react-splide';import '@splidejs/splide/dist/css/splide.min.css';
import { useEffect, useState } from 'react';
import Car1  from "../../Assets/Img/Car1.png"
import Car2  from "../../Assets/Img/Car2.png"
import Car3  from "../../Assets/Img/Car3.png"
import "./Splide.css"

const Splides  = () =>{
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
 <div className="splide-top">
   <h2 className="splide-name">
   Available Electric Vehicles
   </h2>
   <p className="splide-info">
     
   Select a model to view our current inventory. 
                
   </p>
 </div>
 <>
      {cars.length > 0 && (
         <Splide className='splide-slide'
         options={ {
           type   : 'loop',
           perPage: 3,
           perMove: 1,
           autoplay: true,
         } }>
        {cars.map((car,i)=>(
          <SplideSlide className='splide-box'>
          <a href="#" className="splide-link">
          <img className='splide-img' src={Car1} alt="Image 1" />
          <h4 className="splite-title">
            {car.company.name} </h4>
            <p className="splite-text">
              {car.address.suite} </p>        
          </a>
        </SplideSlide>
        ))}
        
  </Splide>
      )}
    
    {/* <SplideSlide>
      <a href="#" className="splide-link">
      <img className='splide-img' src={Car2}  alt="Image 2" />
<h4 className="splite-title">
  Tesla Model 3</h4>
  <p className="splite-text">
    ELECTRIC</p>        
      </a>
    </SplideSlide>
    <SplideSlide>
      <a href="#" className="splide-link">
      <img className='splide-img' src={Car3}  alt="Image 3" />
<h4 className="splite-title">
  Tesla Model 3</h4>
  <p className="splite-text">
    ELECTRIC</p>        
      </a>
    </SplideSlide>
    <SplideSlide>
      <a href="#" className="splide-link">
      <img className='splide-img' src={Car2}  alt="Image 2" />
<h4 className="splite-title">
  Tesla Model 8</h4>
  <p className="splite-text">
    ELECTRIC</p>        
      </a>
    </SplideSlide> */}

  </>
  </div>
</div>
    
  )
}

export default Splides;