import { useState } from "react";
import "./Accordion.css";
import DownIcon
from "../../Assets/Img/down.svg"

const Accordion = (props) =>{
const [selected, setSelected] = useState(null);

function toggler(i){
    if(selected === i){
      return setSelected(null)
    }
     setSelected(i)
   }

return (
<>
  <div className="details">
    <h3 className="details-title">
      Vehiclle details</h3>
    <ul className={`faq_list ${props.className ? props.className : "" }`}>
      {props.faqs.map( (element, i) => {
    return(
      <li key={i} className="faq_list__item" onClick={()=> toggler(i)}>
        <div className="text_wrap faq_list__item__question_wrapper">
          <h4 className="faq_header">
            {element.question}
          </h4>
          <span className={`icon ${selected===i ? 'closer' : 'opener' }`}>
            <img className="down-icon" src={DownIcon} alt="" />
          </span>
        </div>
        <div className={`text_wrap ${selected===i ? 'faq_list__item__answer_wrapper show'
          : 'faq_list__item__answer_wrapper' }`}>
          <p className="faq_text">
            {element.answer}
          </p>
        </div>
      </li>
      )})}
    </ul>
  </div>
</>
)
}

export default Accordion;