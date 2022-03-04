import Header from "../../Components/Header/Header"
import "./BuyPage.css"
import Splides from "../../Components/Splide/Splide";
import Questions from "../../Components/Questions/Questions";
import Footer from "../../Components/Footer/Footer";
import BuySplide from "../../Components/BuySplide/BuySplide";
import "swiper/css/bundle";
import BuyHeader from "../../Components/BuyHeader/BuyHeader";


const BuyPage = () =>{
return (
<div className="buy-page">
  <div className="buy-top">
      <BuyHeader />
      </div>
     <div className="buy-main">
     <div className="container">
     <h2 className="buy-title">
     Pre-Owned 2020 Tesla Model 3 Standard Range Plus RWD AP | 263 miles range
     </h2>
     <div className="buy-flex">
      
<div className="buy-left">
   
       <BuySplide />
       {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio atque magni delectus ipsam praesentium. Sequi doloribus, incidunt omnis totam nam, nostrum non rem iure id suscipit libero provident? Quis eos molestiae, hic laborum obcaecati ipsam dolore et omnis facilis! Recusandae numquam minima, autem architecto eaque distinctio. Laudantium repudiandae vitae eos.

       </p> */}
       </div>
       <div className="buy-right">
      <ul className="buy-list">
        <li className="buy-item">
          <span>
            STOCK
          </span>
          <span>
            C1835P
          </span>
        </li>
        <li className="buy-item">
          <span>
            Vin
          </span>
          <span>
          5YJ3E1EA0LF740577
          </span>
        </li>
        <li className="buy-item">
          <span>
          ODOMETER:
          </span>
          <span>
          11,476
          </span>
        </li>
        <li className="buy-item">
          <span>
          COLOR:
          </span>
          <span>
          PEARL WHITE MULTI-COAT
          </span>
        </li>
        <li className="buy-item">
          <span>
          INTERIOR:
          </span>
          <span>
          BLACK
          </span>
        </li>
      </ul>
      <span className="buy-cost">
        <p>Price</p>
        <p className="buy-price">$45,990</p>
      </span>
      <span>
        <button className="buy-btn">
          By online from <p>$636/mo</p>
        </button>
      </span>
      <button className="purchose-btn">
        Start My Purchase
      </button>
      <button className="payment-btn">
        Build Payment
      </button>
      <button className="value-btn">
        Value Trade
      </button>
      <p className="viewed-text">
      98 people recently viewed this vehicle*
      </p>
      </div>
     </div>
     </div>
    </div>
</div>
)
}

export default BuyPage;