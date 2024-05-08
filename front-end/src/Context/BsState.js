import { useState } from "react";
import BsContext from "./BsContext";

const BsState = (props) => {
    
    const [movie,changeMovie] = useState('')
    const [time,changeTime] = useState('')
    
    const [noOfSeats,changeNoOfSeats] = useState({
        A1:0,A2:0,
        B1:0,B2:0,B3:0,B4:0,
        C1:0,C2:0
    })

    const [lastBookingDetails,setLastBookingDetails] = useState(null)

    return(
        <BsContext.Provider value={{movie,changeMovie,time,changeTime,noOfSeats,changeNoOfSeats,lastBookingDetails}}>
            {props.children}
        </BsContext.Provider>
    )
}

export default BsState;