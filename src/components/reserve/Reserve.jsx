import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons"
import "./reserve.css"
import useFetch from "../../hooks/useFetch"
import { useContext, useState } from "react"
import { SearchContext } from "../../context/SearchContext.js";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { format } from "date-fns"

import jsPDFInvoiceTemplate, { OutputType } from "jspdf-invoice-template";
import { AuthContext } from "../../context/AuthContext"


const Reserve = ({ setOpen, hallId, hname, hprice }) => {
    const [selectedSlots, setSelectedSlots] = useState([]);

    const { data, loading, error } = useFetch(`/halls/slot/${hallId}`)
    const { dates } = useContext(SearchContext);
    const { user } = useContext(AuthContext)
    const getDatesInRange = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);

        const date = new Date(start.getTime());

        const dates = [];

        while (date <= end) {
            dates.push(new Date(date).getTime());
            date.setDate(date.getDate() + 1);
        }

        return dates;
    };

    const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);

    const isAvailable = (slotNumber) => {
        const isFound = slotNumber.unavailableDates.some(date =>
            alldates.includes(new Date(date).getTime())
        );

        return !isFound
    }

    const handleSelect = (e) => {
        const checked = e.target.checked;
        const value = e.target.value;
        setSelectedSlots(
            checked
                ? [...selectedSlots, value]
                : selectedSlots.filter((item) => item !== value)
        );

    };

    const navigate = useNavigate()

    const handleClick = async (e) => {
        e.preventDefault()
        try {
            await Promise.all(
                selectedSlots.map((slotId) => {
                    const res = axios.put(`/slots/availabilty/${slotId}`, {
                        dates: alldates,
                    });

                    return res.data

                })
            );
            const pdfObject = jsPDFInvoiceTemplate(props);
            setOpen(false)
            navigate("./")

        } catch (err) {

        }

    };

    var props = {
        returnJsPDFDocObject: true,
        fileName: "Invoice Wedding Planning",
        orientationLandscape: false,
        compress: true,

        stamp: {
            inAllPages: true,
            src: "https://www.shutterstock.com/image-vector/sample-qr-code-icon-vector-260nw-529327996.jpg",
            type: 'JPG', //optional, when src= data:uri (nodejs case)
            width: 20, //aspect ratio = width/height
            height: 20,
            margin: {
                top: 0, //negative or positive num, from the current position
                left: 0 //negative or positive num, from the current position
            }
        },
        business: {
            name: "Wedding Planning",
            address: "Mumbai, India",
            phone: "9048474484",
            email: "wp@support.com",

        },
        contact: {
            label: "Invoice issued for:",
            name: user.username,
            address: user.city,
            phone: user.phone,
            email: user.email,

        },
        invoice: {
            label: "Invoice #: ",
            num: 19,

            headerBorder: false,
            tableBodyBorder: false,
            header: [
                {
                    title: "#",
                    style: {
                        width: 10
                    }
                },
                {
                    title: "Hall Id",
                    style: {
                        width: 50
                    }
                },
                {
                    title: "Hall Name",
                    style: {
                        width: 50
                    }
                },
                {
                    title: "Booking Id",
                    style: {
                        width: 50
                    }
                },

                { title: "Status" }

            ],
            table: Array.from(Array(1), (item, index) => ([
                index + 1,
                hallId,
                hname,
                selectedSlots,
                "Confirmed"
            ])),
            additionalRows: [{
                col1: 'Total:',
                col2: "Rs." + hprice,
                col3: 'HALL',
                style: {
                    fontSize: 14
                }
            },
            {
                col1: 'GST:',
                col2: 'Rs.' + (0.18 * hprice),
                col3: '18%',
                style: {
                    fontSize: 10
                }
            },
            {
                col1: 'SubTotal:',
                col2: "Rs." + (1.18 * hprice),
                col3: 'HALL',
                style: {
                    fontSize: 10
                }
            }],
            invDescLabel: "Invoice Note",
            invDesc: "This Invoice should be presented at the Hall Office for Confirmation.",
        },
        footer: {
            text: "The invoice is created on a computer and is valid without the signature and stamp.",
        },
        pageEnable: true,
        pageLabel: "Page ",
    };





    return (
        <div className="reserve">


            <div className="rContainer">
                <FontAwesomeIcon icon={faCircleXmark} className="rClose" onClick={() => setOpen(false)} />
                <span>Select your slot:</span>
                {data.map(item => (
                    <div className="rItem">
                        <div className="rItemInfo">
                            <div className="rTitle">{item.title}</div>
                            <div className="rDesc">{item.desc}</div>
                            <div className="rMax">Capacity:<b>{item.maxPeople}</b></div>
                            <div className="rPrice">Price:<b>{item.price}</b></div>


                        </div>
                        <div className="rSelectRooms">
                            {item.slotNumbers.map(slotNumber => (
                                <div className="slot">
                                    <label>{slotNumber.number}</label>

                                    {!isAvailable(slotNumber) ? "booked" : (<input
                                        type="checkbox"
                                        value={slotNumber._id}
                                        onChange={handleSelect}
                                    //hidden={!isAvailable(roomNumber)} 
                                    />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                <button onClick={handleClick} className="rButton">Book Now!!</button>

            </div>
        </div>
    )
}

export default Reserve