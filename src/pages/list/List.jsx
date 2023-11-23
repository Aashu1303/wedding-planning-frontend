import "./list.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";

import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";
import MailList from "../../components/mailList/MailList";


const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  
  const [event, setEvent] = useState(location.state.event);

  
  const {data,loading,error,reFetch}=useFetch(`/halls?city=${destination}&type=${event}`)

  const handleClick = () => {
    reFetch();
  };
  

  return (
    <div className="kuku">
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Enter city</label>
              <input placeholder={destination} onChange={(e)=>setDestination(e.target.value)} type="text" />
            </div>
            <div className="lsItem">
              <label>Event Type</label>
              <input placeholder={event} onChange={(e)=>setEvent(e.target.value)} type="text" />
            </div>
            
            <button onClick={handleClick}>Search</button>
        </div>

        <div className="listResult">
        {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
            
        </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default List;