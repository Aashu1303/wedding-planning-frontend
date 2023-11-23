import Navbar from "../components/navbar/Navbar.jsx";
import { useNavigate } from "react-router-dom";
import "./services.css";

const Services = () => {
  const navigate=useNavigate();

  
    
    return(
      <div>
        <Navbar/>
        <div class="services">
          <br/>
          <br/>
          <h1 style={{ color: 'black' }}>Our Services</h1>
          <div class="cen">
            <div class="service">
              <h2  style={{ color: 'black' }}>Wedding Planning</h2>
              <p>We offer a range of tailored packages to accommodate every couple's unique vision for their special day. From full-service planning, ensuring every detail is expertly coordinated, to partial planning and day-of coordination services, we are dedicated to making wedding dreams come true. Our commitment to customization allows couples to personalize their experience, and our comprehensive offerings include vendor management, budget guidance, venue selection, and meticulous event design. With a focus on creating seamless and memorable celebrations, we leverage our expertise to transform visions into reality. Don't just take our word for it—explore testimonials and success stories from delighted couples. We invite you to connect with us, share your wedding aspirations, and let us bring your dream wedding to life.</p>
            </div>

          
          </div>
      
    </div>
    </div>
        
    )
}

export default Services
