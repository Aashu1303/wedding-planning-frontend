import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import { useContext, useState } from "react";
import { DateRange } from "react-date-range";
import { Link, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = ({item}) => {
  const {dispatch}=useContext(SearchContext);
  const { data, loading, error } = useFetch("/halls?featured=true&limit=4");
  
  const navigate =  useNavigate()

  const [openDate,setOpenDate]= useState(false)
  const [dates,setDates]= useState([
      {
          startDate:new Date(),
          endDate: new Date(),
          key:'selection',
      }
  ]);

  const handleClick=e=>{
    dispatch({ type: "NEW_SEARCH", payload: {dates } });
  }
  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              <Link to={`/fhalls/${item._id}`}>
              <img
                src={item.photos[0]}
                alt="img"
                className="fpImg" 
                onClick={handleClick}
              />
              </Link>
              
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpCity">Event:{item.type}</span>
              <span className="fpPrice">Starting from Rs.{item.affordableprice}</span>
              
              <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendar} className="headerIcon"/>
                        <span onClick={()=> setOpenDate(!openDate)} className="headerSearchText">
                        {`${format(dates[0].startDate,"MM/dd/yyyy")} to ${format(dates[0].endDate,"MM/dd/yyyy")}`} </span>
                        { openDate && (
                        <DateRange
                          editableDateInputs={true}
                          onChange={(item)=> setDates([item.selection])}
                          moveRangeOnFirstSelection={false}
                          ranges={dates}
                          className="date"
                          minDate={new Date()}
                        />
                        )}                         
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;