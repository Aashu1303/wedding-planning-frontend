import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./featured.css";
import {CircularProgress} from '@material-ui/core'


const Featured = () => {
  const { data, loading, error } = useFetch(
    '/halls/countByCity?cities=Hyderabad,Mumbai,Delhi'
  );

  const navigate=useNavigate();
  const handleClick=(e)=>{
    navigate("/halls/hyderabad")
  }
  const handleclick=(e)=>{
    navigate("/halls/mumbai")
  }
  const handleClickk=(e)=>{
    navigate("/halls/delhi")
  }


  return (
    <div className="featured">
      {loading ? 
        "Loading"
       : (
        <>
          <div className="featuredItem">
            <img
              src="https://qph.cf2.quoracdn.net/main-qimg-315aabe8b17c1cea0e5d70506b49f8cb-lq"
              alt=""
              className="featuredImg"
              onClick={handleClick}
            />
            <div className="featuredTitles">
              <h1>Hyderabad</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
            src="https://cdn.s3waas.gov.in/s372b32a1f754ba1c09b3695e0cb6cde7f/uploads/bfi_thumb/2018110238-olw9z028xotq284rskaog9ckyd3v7lvz3gngqu4xr4.jpg"
              alt=""
              className="featuredImg"
              onClick={handleclick}
            />
            <div className="featuredTitles">
              <h1>Mumbai</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
              alt=""
              className="featuredImg"
              onClick={handleClickk}
            />
            <div className="featuredTitles">
              <h1>Delhi</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;