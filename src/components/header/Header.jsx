import { faBed, faCalendar, faCalendarDay, faCircleInfo, faImage, faLocation, faPerson, faVideoCamera,   } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { setDate } from "date-fns"
import { useContext, useState } from "react"
import { DateRange } from "react-date-range"
import "./header.css"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns"
import { useNavigate } from "react-router-dom"
import { SearchContext } from "../../context/SearchContext"

const Header = ({type}) =>{
    
    const [destination, setDestination] = useState("");
    const [event,setEvent]=useState("");
    const [openDate,setOpenDate]= useState(false)
    const [dates,setDates]= useState([
        
        {
            startDate:new Date(),
            endDate: new Date(),
            key:'selection',
        }
        
    ]);

    
    const [openOptions,setOpenOptions]=useState(false);
    const [options,setOptions]=useState({
        capacity:0,
    });

    const navigate =  useNavigate()
    

    const handleOption = (name,operation) =>{
        setOptions(prev=> {return{
            ...prev,[name]:operation === "i" ? options[name] +100 : options[name]-100
        }})
    };

    const {dispatch}=useContext(SearchContext);

    const handleSearch=()=>{
        dispatch({ type: "NEW_SEARCH", payload: { destination,event, dates, options } });
        if(!event || !destination){
            alert("Event and Destination cannot be empty")
            navigate("/")
        }
        else{
            navigate("/halls",{state:{destination,event,dates,options}}) ;
        }
       
    }
    

    return(
        <div className="header">
            <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
                
                
                <>
                <br/>
                <h1 className= "headerTitle" >Wedding Planning</h1>
                <p className="headerDesc">
                Need help planning your Wedding ?We've got you covered!
                "Turning Dreams into Everlasting Memories - Your Love, Our Expertise!
                </p>
                
                 </>
                
            </div>
        </div>
    )
    }

export default Header
