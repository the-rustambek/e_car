import Accordion from "../Accordion/Accordion";
import BuyMonthly from "../BuyMonthly/BuyMonthly";
import OtherVehicles from "../OtherVehicles/OtherVehicles";
import "../BuySplide/BuySplide.css"
const BuyContent =() =>{
  return (
    <>
        <Accordion  
        className={"faq"}
         faqs={faqArray} />
        <div className="basic">
       <h3 className="basic-title">
         Basic Info</h3>
         <ul className="basic-list">
           <li className="basic-item">
             <p>Body: <b>4D Hatchback</b></p>
             </li>
             <li className="basic-item">
             <p>Mileage: <b>66,221</b></p>
             </li><li className="basic-item">
             <p>HWY: <b> 102 MPG †</b></p>
             </li><li className="basic-item">
             <p>City: <b> 101 MPG †</b></p>
             </li> <li className="basic-item">
             <p>Mileage: <b>66,221</b></p>
             </li><li className="basic-item">
             <p>Body: <b>4D Hatchback</b></p>
             </li><li className="basic-item">
             <p>City: <b> 101 MPG †</b></p>
             </li><li className="basic-item">
             <p>HWY: <b> 102 MPG †</b></p>
             </li></ul>
       </div>
       
     <BuyMonthly />
       <OtherVehicles />  
    </>
  )
}

const faqArray = [
  {
    question: "Free Vehicle History Report",
    answer: "Do you need quality service on 3D modeling? Our team of different home appliances and items can make you high quality and affordable. After all the payment of the order, you will download the order."
  },
  {
    question: "Description",
    answer: "et, coLorem ipsum dolor sit ansectetur adipisicing elit. Voluptates, eligendi!"
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
export default BuyContent;


