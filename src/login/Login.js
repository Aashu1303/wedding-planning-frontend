import axios from "axios";
import { useContext, useState } from "react";
import Navbar from "../components/navbar/Navbar.jsx";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./Login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  //   Handle Change Function
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  //   Handle Click Function
  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "/auth/login",
        credentials
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
    }
  };
  return (
    <div>
      <Navbar/>
    <div className="mainContainer">
      
      <div className="contentArea">
        <div className="right">
          <h1 className="heading" >Sign in your account!</h1>
          
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
              placeholder="Password"
              id="password"
              onChange={handleChange}
            />
            <NavLink
              to="/forgot"
              >
              <span>Forgot Password?</span>
            </NavLink>
            
            <button  disabled={loading} onClick={handleClick}>
              Login
            </button>
            {error && <span>{error.message}</span>}
          </form>
        </div>
        
      </div>
    </div>
    </div>
  );
};

export default Login;
