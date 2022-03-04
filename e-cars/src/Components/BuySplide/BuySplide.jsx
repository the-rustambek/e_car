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
import Accordion from '../Accordion/Accordion';

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
      <Accordion  className={"faq"} faqs={faqArray} />
      {/* <div className="details">
            <h3 className="details-title">
              Vehiclle details</h3>
            <a href="#" className="details-link">
              <p>
                Free Vehicle History Report

              </p>
            </a>
            <a href="#" className="details-link">
              <p>
                Description
              </p>
            </a>
            <span>
              <p>Electic Vehicles Fast Facts</p>
              <p>

                - 21 kWh Lithium-ion Battery
              </p>
              <p>- 82 mile EPA range
              </p>
              <p>- 140 horsepower / 400 lb.-ft torque</p>
              <p>
                - Front-wheel drive</p>
            </span>
            <span>
              This 2014 Chevrolet Spark EV 2LT comes equipped with the following:
            </span>
            <span>
              <p>- Titanium exterior</p>
              <p>- Titanium exterior</p>
              <p>- Titanium exterior</p>
              <p>- Titanium exterior</p>
              <p>- Titanium exterior</p>
              <p>- Titanium exterior</p>
              <p>- Titanium exterior</p>
              <p>- Titanium exterior</p>
              <p>- Titanium exterior</p>
              <p>- Titanium exterior</p>
            </span>
            <span>
              This 2014 Chevrolet Spark EV 2LT has an EPA rated range of 82 miles on a full charge, with a 0–60 mph time
              of 7.9 seconds. The balance of Chevrolet factory warranties will transfer to the next owner.

            </span>
            <span>
              <p>
                Current Automotive is the nation's first online-focused, pre-owned electric vehicle retailer. Our team
                has been helping drive the transition to e-mobility for more than a decade, and our mission is to be
                champions of sustainable transportation who help people make the switch to electric by providing a fun,
                educational, and no-pressure experience. Why? Because we care. We care about helping people, building
                relationships, and maintaining our reputation—which means always doing the right thing.</p>
            </span>
            <span>
              <p>We make it easy to transition to your first or purchase your next electric vehicle with no-haggle
                pricing, competitive financing, nationwide shipping, and a transparent trade-in process. Find your EV,
                buy it online, and have it delivered.</p>
            </span>
            <a href="#" className="details-link">
              <p>
                Details

              </p>
            </a><a href="#" className="details-link">
              <p>
                Interior

              </p>
            </a><a href="#" className="details-link">
              <p>
                Exterior

              </p>
            </a><a href="#" className="details-link">
              <p>
                Entertainment

              </p>
            </a><a href="#" className="details-link">
              <p>
                Mechanical

              </p>
            </a><a href="#" className="details-link">
              <p>
                Safety

              </p>
            </a><a href="#" className="details-link">
              <p>
                Tech specs

              </p>
            </a><a href="#" className="details-link">
              <p>
                Premium Options

              </p>
            </a>
          </div> */}
    </div>
  );
}

const faqArray = [
  {
    question: "Free Vehicle History Report",
    answer: "Do you need quality service on 3D modeling? Our team of different home appliances and items can make you high quality and affordable. After all the payment of the order, you will download the order."
  },
  {
    question: "Description",
    answer: "et, coLorem ipsum dolor sit amnsectetur adipisicing elit. Voluptates, eligendi!"
  },
  {
    question: "Details",
    answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, eligendi!"
  },
  {
    question: "Interior",
    answer: "lorLorem ipsum do sit amet, consectetur adipisicing elit. Voluptates, eligendi!"
  },
  {
    question: "Exterior",
    answer: "lor sit aLorem ipsum domet, consectetur adipisicing elit. Voluptates, eligendi!"
  },
  {
    question: "Entertainment",
    answer: "Do you need quality service on 3D modeling? Our team of different home appliances and items can make you high quality and affordable. After all the payment of the order, you will download the order."
  },
  {
    question: "Mechanical",
    answer: " amet, consectetur adipisicing elit. Voluptates, eligendi!"
  },
  {
    question: "Safety",
    answer: " sit amet, consecteturLorem ipsum dolor adipisicing elit. Voluptates, eligendi!"
  },
  {
    question: "Tech specs",
    answer: "  ipsum dolor   amet, consectetur adipisicing elit. Voluptates, eligendi!"
  },
  {
    question: "Premium Options",
    answer: "  dolor sit amet, consectetur adipisicing elit. Voluptates, eligendi!"
  },
]