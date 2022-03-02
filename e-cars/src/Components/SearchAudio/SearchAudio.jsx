
import Audio from "../../Assets/Img/Audio.png";
import "./SearchAudio.css";

const SearchAudio = () =>{
  return (
    <div className="search-audio">
      <form className="search-form"> 
      <button className="search-btn">
      <img className="search-icon" src={Audio} 
        alt="Audio" />
      </button>
        <input className="search-input" type="search" placeholder="Search by year, make, model, feature..." required />
        </form>
    </div>
  )
}

export default SearchAudio;