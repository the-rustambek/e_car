import { Splide, SplideSlide } from '@splidejs/react-splide';import '@splidejs/splide/dist/css/splide.min.css';
import { useEffect, useState,useRef  } from 'react';
import Car1  from "../../Assets/Img/Car1.png"
import Car2  from "../../Assets/Img/Car2.png"
import CarBuy 
 from "../../Assets/Img/carbuy.jpg"
import "./BuySplide.css"
   
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
 

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function BuySplide() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [swippers, setSwippers] = useState([]);

useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json()).then((data) => 
        setSwippers(data))
},[])

  return (
    <div className='swiper-box'>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={CarBuy} />
        </SwiperSlide>
     
        <SwiperSlide>
          <img src="https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/11002667/5YJ3E1EA0LF740577/428ec6b8e35ecf06f46aeb5198bc5371.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/11002667/5YJ3E1EA0LF740577/b150aadf4e5ffd38073fe73f1505ffee.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/11002667/5YJ3E1EA0LF740577/8471d2bea09bc1fe2ae7aeba4511a091.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/11002667/5YJ3E1EA0LF740577/4d92435c548c5fbe5c1835b1bb73fa35.jpg" />
        </SwiperSlide>
        </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={CarBuy} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/11002667/5YJ3E1EA0LF740577/428ec6b8e35ecf06f46aeb5198bc5371.jpg" />
        </SwiperSlide>
         
        <SwiperSlide>
          <img src="https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/11002667/5YJ3E1EA0LF740577/b150aadf4e5ffd38073fe73f1505ffee.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/11002667/5YJ3E1EA0LF740577/8471d2bea09bc1fe2ae7aeba4511a091.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/11002667/5YJ3E1EA0LF740577/4d92435c548c5fbe5c1835b1bb73fa35.jpg" />
        </SwiperSlide>
 
      </Swiper>
    </div>
  );
}
