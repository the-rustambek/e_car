import { useState } from "react";
// import { Link } from "react-router-dom";
import Modal from "../../Components/Modal/Modal";
import RangeSlider from "../RangeSlider/RangeSlider";
import "./Sidebar.css";

const Sidebar = () =>{
  const [yearModal, setYearModal] =  useState(false);
  // const [makeModal, setMakeModal] =  useState(false);
  // const [modelModal, setModelModal] =  useState(false);
  // const [trimModal, setTrimModal] =  useState(false);
  // const [featuresModal, setFeaturesModal] =  useState(false);
  // const [fueltypeModal, setFueltypeModal] =  useState(false);
  // const [transmissionModal, setTransmissionModal] =  useState(false);
  // const [mileageModal, setMileageModal] =  useState(false);
  // const [engineModal, setEngineModal] =  useState(false);
  // const [colorModal, setColorModal] =  useState(false);
  // const [bodystyleModal, setBodystyleModal] =  useState(false);

  function openYearModal(){
    setYearModal(!yearModal)
    }  
  // function openMakeModal(){
  //   setMakeModal(!makeModal)
  //   }   
  // function openModelModal(){
  //   setModelModal(!modelModal)
  //   }
  // function openTrimModal(){
  //   setTrimModal(!trimModal)
  //   }
  // function openFeaturesModal(){
  //     setFeaturesModal(!featuresModal)
  //     }
  // function openFueltypeModal(){
  //   setFueltypeModal(!fueltypeModal)
  //       }
  // function openTransmissionModal(){
  //    setTransmissionModal(!transmissionModal)
  //         }
  // function openMileageModal(){
  //     setMileageModal(!mileageModal)
  //           }
  // function openEngineModal(){
  //     setEngineModal(!engineModal)
  //             }
  // function openColorModal(){
  //      setColorModal(!colorModal)
  //               }
  // function openBodystyleModal(){
  //      setBodystyleModal(!bodystyleModal)
  //                 }
  return (
    <div className="sidebar">
    
    <div className="sidebar-top">
      <p className="toggle-text">
        Used
      </p>
      <label className="switch">
          <input type="checkbox" 
                /> 
          <span className="slider round">
          </span>
      </label>
     
    </div>
    
    <div className="sidebar-main">
      <span>
      <h3 className="range-title">
        PRICE
      </h3>
      <RangeSlider />
      </span>
      <ul className="sidebar-list">
        <li className="sidebar-item">
          <button className="sidebar-btn"  onClick={()=> openYearModal()} >
          <i className="fa-solid fa-clock"></i>
          <p>Year</p>
          </button>
        </li>
        
        <li className="sidebar-item">
          <button className="sidebar-btn" >
          <i className="fa-solid fa-car"></i>
          <p>Make</p>
          </button>
        </li>
        <li className="sidebar-item">
          <button className="sidebar-btn">
          <i className="fa-solid fa-car"></i>
          <p>Model</p>
          </button>
        </li>
       
        <li className="sidebar-item">
          <button className="sidebar-btn">
          <i className="fa-solid fa-square-plus"></i>
          <p>Trim</p>
          </button>
        </li>
        <li className="sidebar-item">
          <button className="sidebar-btn">
          <i className="fa-solid fa-clock"></i>
          <p>Features</p>
          </button>
        </li>
        <li className="sidebar-item">
          <button className="sidebar-btn">
          <i className="fa-solid fa-clock"></i>
           <p>Fueltype</p>
          </button>
        </li>
        <li className="sidebar-item">
          <button className="sidebar-btn">
          <i className="fa-solid fa-square-plus"></i>
          <p>Transmission</p>
          </button>
        </li>
        <li className="sidebar-item">
          <button className="sidebar-btn">
          <i className="fa-solid fa-car"></i> <p>Mileage</p>
          </button>
        </li>
        <li className="sidebar-item">
          <button className="sidebar-btn">
          <i className="fa-solid fa-square-plus"></i>
          <p>Engine</p>
          </button>
        </li>
        <li className="sidebar-item">
          <button className="sidebar-btn">
          <i className="fa-solid fa-square-plus"></i>
           <p>Color</p>
          </button>
        </li>
        <li className="sidebar-item">
          <button className="sidebar-btn">
          <i className="fa-solid fa-car"></i> <p>Bodystyle</p>
          </button>
        </li>
        
      </ul>
     
    </div>
    <Modal className="modal"
     show={yearModal} w={600} mh={400}>
    <button className="close-btn" onClick={()=>setYearModal()}>
                    &times;
                </button>
       <h3 className="modal-title">
         Year

       </h3>
       <ul className="modal-list">
         <li className="modal-item">
           <a href="#" className="modal-link">
             <span>2022</span>
             <span className="modal-count">2</span>
           </a>
         </li>
         <li className="modal-item">
           <a href="#" className="modal-link">
             <span>2021</span>
             <span className="modal-count">1</span>
           </a>
         </li>  <li className="modal-item">
           <a href="#" className="modal-link">
             <span>2020</span>
             <span className="modal-count">7</span>
           </a>
         </li>  <li className="modal-item">
           <a href="#" className="modal-link">
             <span>2019</span>
             <span className="modal-count">3</span>
           </a>
         </li>  <li className="modal-item">
           <a href="#" className="modal-link">
             <span>2018</span>
             <span className="modal-count">5</span>
           </a>
         </li>  <li className="modal-item">
           <a href="#" className="modal-link">
             <span>2017</span>
             <span className="modal-count">2</span>
           </a>
         </li>  <li className="modal-item">
           <a href="#" className="modal-link">
             <span>2016</span>
             <span className="modal-count">11</span>
           </a>
         </li>  <li className="modal-item">
           <a href="#" className="modal-link">
             <span>2015</span>
             <span className="modal-count">1</span>
           </a>
         </li>
         <a href="#" className="modal-result">
           View Results
         </a>
       </ul>
    </Modal>
   
</div>

  )
}
export default Sidebar;