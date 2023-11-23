import Navbar from "../components/navbar/Navbar.jsx";
import { useNavigate } from "react-router-dom";
import "./about.css";

const About = () => {
    
    return(
        <div >
			<Navbar/>
		<div class="acontainer">
			<div class="content-section">
				<div class="title">
					<h1 style={{ color: 'black' }}>About Us</h1>
				</div>
				<div class="content">
                 <h3>Our Aim</h3>
                <p>Wedding Planning is not just about organizing events; it's an art of crafting unforgettable experiences. 
                 We are a team of creative minds specializing in designing and orchestrating exceptional weddings and events. 
                 Our passion lies in transforming spaces and curating truly unique and memorable occasions.</p>

                <h3>Visionary Approach</h3>
                <p>We exist to make your celebrations effortless, ensuring you savor every moment while we take care of the details. 
                Consider us your "One-stop Shoppe" for all your event management needs. 
                We envision being the premier Event Organizer in India, dedicated to making your dreams a reality.</p>

               <h3>Our Mission</h3>
              <p>Our commitment is to deliver the utmost in quality and sophistication for our clients. 
              Whether it's an intimate birthday party or a grand wedding, we embrace each challenge to fulfill every client's vision. 
              Having ventured into every corner, we bring to the table what you deserve – the finest event management services in India.</p>
           </div>

  
				
			</div>
			<div class="image-section">
				<img src="https://www.vajraevents.com/images/wedding/wedding1-8.jpg"/>
				
			</div>
		</div>
	</div>
    )
}

export default About
