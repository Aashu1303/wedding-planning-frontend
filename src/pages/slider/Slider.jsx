import "./slider.css";
import { faCircleArrowLeft, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Slider = () => {

    const photos = [
       
        {
            src:"https://upload.wikimedia.org/wikipedia/commons/a/a1/Karimnagar_railway_station_1.jpg",
        },
        {
            src:"https://upload.wikimedia.org/wikipedia/commons/f/f7/A_typical_charminar_evening.jpg",

        },
        {
            src:"https://images.thrillophilia.com/image/upload/s--X9XV8LdF--/c_fill,g_auto,h_600,q_auto,w_975/f_auto,fl_strip_profile/v1/images/photos/000/191/632/original/1581421342_warangal-warangal-fort-0.jpg.jpg",
        },
        
        
      ];
    const [slideNumber,setSlideNumber]= useState(0);
    const handleMove = (direction) => {
        let newSlideNumber;

        if (direction === "l") {
        newSlideNumber = slideNumber === 0 ? 2 : slideNumber - 1;
        } else {
        newSlideNumber = slideNumber === 2 ? 0 : slideNumber + 1;
        }

        setSlideNumber(newSlideNumber)
    };

    
    
      const navigate=useNavigate();
      const handleClick=(e)=>{
        if(slideNumber==0){
            navigate("/halls/mumbai")
        }
        else if(slideNumber==1){
            navigate("/halls/hyderabad")
        }
        else if(slideNumber==2){
            navigate("/halls/delhi")
        }
      }

    

    return (
        <div>
           
            <div className="slider1">
                <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow"
                onClick={() => handleMove("l")}
                />
                <div className="sliderWrapper1">
                <img onClick={handleClick} src={photos[slideNumber].src} alt="" className="sliderImg1" />
                </div>
                <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow1"
                onClick={() => handleMove("r")}
                />
            </div>
        </div>
        
    );
};

export default Slider;