import "./listcity.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import SearchItemcity from "../../components/searchItemcity/SearchItemcity";


const Listcity1 = () => {
 
  
  const {data,loading,error,reFetch}=useFetch(`/halls?city=Hyderabad`)

  

  return (
    <div className="kuku">
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          
            

        <div className="listResult">
        {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <SearchItemcity item={item} key={item._id} />
                ))}
              </>
            )}
            
        </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default Listcity1;