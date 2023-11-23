import { Link } from "react-router-dom";
import "./searchItemcity.css";

const SearchItemcity = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="img" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">Capacity:{item.distance}</span>
        <span className="siTaxiOp">A/C Function Hall</span>
        
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Free cancellation </span>
        
      </div>
      <div className="siDetails">
        
        <div className="siDetailTexts">
          <span className="siPrice">Rs.{item.affordableprice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          
        </div>
      </div>
    </div>
  );
};

export default SearchItemcity;