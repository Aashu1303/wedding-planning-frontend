import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext"
import "./mailList.css"

const MailList = ({setOpen}) => {

  const {user}=useContext(AuthContext)
  const navigate=useNavigate()
  const [credentials, setCredentials] = useState({
    
    email: undefined,
    ph: undefined,
    
  });
  const handleChange = (e) => {

    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  
const handleClick = async (e) => {
  e.preventDefault()
  try{
    const res = await axios.put(
      "/contact/create",
      credentials
    );   
  }catch(err){
      
  }
  navigate("/")
};
const handleclick=()=>{
  navigate("/")
}

  
  return (
    <div className="reserve">
            

            <div className="rContainer">
                <FontAwesomeIcon icon={faCircleXmark} className="rClose" onClick={handleclick}/>
                <span>Contact:</span>
               <form>
                     <input className="tp" type="email"   placeholder="Enter Your Email.." required id="email"
                        onChange={handleChange} />
                     <input className="tp"  type="tel"   placeholder="Enter Your Ph.No." required id="ph"
                        onChange={handleChange} />
                    <button className="rButton"  onClick={handleClick} required>Subscribe</button>
                
                      </form>
                
                
            </div>
        </div>
  )
}

export default MailList