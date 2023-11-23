import axios from "axios";
import { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import useFetch from "../hooks/useFetch";
import "./Forgotid.css";
import Navbar from "../components/navbar/Navbar.jsx";

const Forgotid = () => {

  const location = useLocation();
  const [userid, setUserid] = useState(location.state.userid);
  const [username, setUsername] = useState(location.state.username);
  
  const [credentials, setCredentials] = useState({
    username: undefined,
    password:undefined,
    password2:undefined
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  //   Handle Change Function
  const handleChange = (e) => {
    
    e.preventDefault()
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    
  };
  

  //   Handle Click Function
  const handleClick = async (e) => {
    e.preventDefault()
    try{
      if(credentials.password==credentials.password2){
          const res = await axios.put(
              `/users/update/${userid}`,
              credentials
              );   
              navigate("/")
      }else{
          alert("Password Not Matched")
      }   
    }catch(err){
        
    }
    
   
  };
  
  return (
    <div>
    <Navbar/>
    <div className="mainContainer">
      <div className="contentArea">
        <div className="right">
        <h1 className="heading" >Forgot Password ID!</h1>
        <form>
          <span>Hi,{username}</span>
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
              onChange={handleChange}
            />
            <input
              style={{
                width: "120%",
                padding: "15px",
                border: "none",
                outline: "none",
                backgroundColor: "#ddd",
                borderRadius: "5px",
                
              }}
              type="password"
              placeholder="New Password"
              id="password"
              className="inputBox"
              onChange={handleChange}
            />
            <input
              style={{
                width: "120%",
                padding: "15px",
                border: "none",
                outline: "none",
                backgroundColor: "#ddd",
                borderRadius: "5px",
                
              }}
              type="password"
              placeholder="Confirm Password"
              id="password2"
              className="inputBox"
              onChange={handleChange}
            />
          </form>
          <br></br>
          
          <button  disabled={loading} onClick={handleClick}>
              Submit
            </button>
        </div>
        
      </div>
    </div>
    </div>
  );
};

export default Forgotid;
