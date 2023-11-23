import "./listfeatured.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../hooks/useFetch.js";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../../components/reserve/Reserve";
import { format } from "date-fns";


const ListFeatured = () => {

    const location = useLocation();
    const id = location.pathname.split("/")[2];
    

    const [slideNumber,setSlideNumber]= useState(0);
    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const { data, loading, error } = useFetch(`/halls/find/${id}`);
    
    const {user}=useContext(AuthContext)
    const navigate = useNavigate();

    const { dates } = useContext(SearchContext);

    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    function dayDifference(date1, date2) {
      const timeDiff = Math.abs(date2.getTime() - date1.getTime());
      const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
      return diffDays;
    }

    var days = dayDifference(dates[0].endDate, dates[0].startDate);
    if(days==0){
        days=days+1
    }
    
    const handleOpen = (i) => {
        setSlideNumber(i);
        setOpen(true);
    };

    const handleMove = (direction) => {
        let newSlideNumber;

        if (direction === "l") {
        newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
        } else {
        newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
        }

        setSlideNumber(newSlideNumber)
    };

    const handleClick = () => {
        if (user) {
          setOpenModal(true);
        } else {
          navigate("/login");

        }
      };

    return (
        <div>
        <Navbar />
        <Header type="list" />
        {loading ? (
            "loading"
            ) :(
            <div className="hallContainer">
            {open && (
            <div className="slider">
                <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => setOpen(false)}
                />
                <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow"
                onClick={() => handleMove("l")}
                />
                <div className="sliderWrapper">
                <img src={data.photos[slideNumber]} 
                alt="" 
                className="sliderImg" />
                </div>
                <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow"
                onClick={() => handleMove("r")}
                />
            </div>
            )}
            <div className="hallWrapper">
            <button onClick={handleClick} className="bookNow">Reserve or Book Now!</button>
            <h1 className="hallTitle">{data.name}</h1>
            <div className="hallAddress">
                <FontAwesomeIcon icon={faLocationDot} />
                <span>{data.address}</span>
            </div>
            <span className="hallDistance">
                Capacity – {data.distance} people
            </span>
            <span className="hallPriceHighlight">
                Event Hall Price:{data.affordableprice}
            </span>
            <div className="hallImages">
                {data.photos?.map((photo, i) => (
                <div className="hallImgWrapper" key={i}>
                    <img
                    onClick={() => handleOpen(i)}
                    src={photo}
                    alt=""
                    className="hallImg"
                    />
                </div>
                ))}
            </div>
            <div className="hallDetails">
                <div className="hallDetailsTexts">
                <h1 className="hallTitle">{data.title}</h1>
                <p className="hallDesc">
                    {data.desc}
                </p>
                </div>
                <div className="hallDetailsPrice">
                <h1>Description</h1>
                <span>
                    Nice and Luxurious Hall With Decorations and Food Catering Available
                </span>
                <span>Selected Dates:{format(dates[0].startDate,"MM/dd/yyyy")} to {format(dates[0].endDate,"MM/dd/yyyy")}</span>

                <h2>
                    <b>Rs.{days*data.affordableprice}</b> ({days} Days)
                </h2>
                <button onClick={handleClick}>Reserve or Book Now!</button>
                </div>
            </div>
            </div>
            
            
        </div>
        )}
        {openModal && <Reserve setOpen={setOpenModal} hallId={id} hname={data.name} hprice={data.affordableprice}/>}
        </div>
    );
};

export default ListFeatured;