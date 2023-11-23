import axios from "axios";
import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Navbar from "../components/navbar/Navbar.jsx";
import useFetch from "../hooks/useFetch";
import "./Forgot.css";

const Forgot = () => {

  const {data,loading,error}=useFetch(`/users/`)

  const [credentials, setCredentials] = useState("");

  const [userid, setUserid] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  
  //   Handle Click Function
  const handleClick = async (e) => {
    e.preventDefault()
    data.forEach(element => {

      if((credentials)==(element.username)){
        setUserid(element._id)
        setUsername(element.username)
      }
    });
    
  };

  const handleclick=async(e)=>{
    e.preventDefault()
    if(userid==""){
      alert("No User Found Enter Correct")
    }
    else{
      navigate("/forgotid",{state:{userid,username}}) ;
    }
    
    
  }
  
  
  return (
    <div>
      <Navbar/>
    <div className="mainContainer">
      <div className="contentArea">
        <div className="right">
        <h1 className="heading" >Forgot Password!</h1>
        <br></br>
        <form>
          <input
              style={{
                width: "120%",
                padding: "15px",
                border: "none",
                outline: "none",
                backgroundColor: "#ddd",
                borderRadius: "5px",
                
              }}
              type="text"
              placeholder="Username"
              id="username"
              className="inputBox"
              onChange={(e) => setCredentials(e.target.value)}
            />
          </form>
          <br></br>
          <button  disabled={loading} onClick={handleClick}>
              Submit
          </button>
          <br></br>

          <button  disabled={loading} onClick={handleclick}>
            Details
          </button>
          
          
          
        </div>
        
      </div>
    </div>
    </div>
  );
};

export default Forgot;
