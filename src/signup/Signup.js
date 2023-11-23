import axios from "axios";
import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./Signup.css";
import Navbar from "../components/navbar/Navbar.jsx";


const Signup = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    phone: undefined,
    city: undefined,
    country: undefined,
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
    dispatch({ type: "REGISTER_START" });
    try {
      const res = await axios.post(
        "/auth/register",
        credentials
      );
      dispatch({ type: "REGISTER_SUCCESS", payload: res.data.details });
      navigate("/login");
    } catch (error) {
      dispatch({ type: "REGISTER_FAILURE", payload: error.response.data });
    }
  };
  return (
    <div>
      <Navbar/>
    <div className="mainContainer">
      <div className="contentArea">
        <div className="right">
          <h1>Create an Account!</h1>
          
          <form>
            <input
              style={{
                width: "100%",
                padding: "15px",
                border: "none",
                outline: "none",
                backgroundColor: "#ddd",
                borderRadius: "5px",
              }}
              type="text"
              placeholder="Username"
              id="username"
              onChange={handleChange}
              required
            />
            <input
              style={{
                width: "100%",
                padding: "15px",
                border: "none",
                outline: "none",
                backgroundColor: "#ddd",
                borderRadius: "5px",
              }}
              type="email"
              placeholder="Email"
              id="email"
              onChange={handleChange}
              required
            />

            <input
              style={{
                width: "100%",
                padding: "15px",
                border: "none",
                outline: "none",
                backgroundColor: "#ddd",
                borderRadius: "5px",
              }}
              type="text"
              placeholder="Phone"
              id="phone"
              onChange={handleChange}
              required
            />

            <input
              style={{
                width: "100%",
                padding: "15px",
                border: "none",
                outline: "none",
                backgroundColor: "#ddd",
                borderRadius: "5px",
              }}
              type="text"
              placeholder="City"
              id="city"
              onChange={handleChange}
              required
            />

            <input
              style={{
                width: "100%",
                padding: "15px",
                border: "none",
                outline: "none",
                backgroundColor: "#ddd",
                borderRadius: "5px",
              }}
              type="text"
              placeholder="Country"
              id="country"
              onChange={handleChange}
              required
            />

            <input
              style={{
                width: "100%",
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
              required
            />

            <button disabled={loading} onClick={handleClick}>
              Sign up
            </button>
            {error && <span>{error.message}</span>}
          </form>
        </div>
        
      </div>
    </div>
    </div>
  );
};

export default Signup;
