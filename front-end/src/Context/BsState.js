import { useState } from "react";
import BsContext from "./BsContext";

const BsState = (props) => {
    
    const [movie,changeMovie] = useState('')
    const [time,changeTime] = useState('')
    
    const [noOfSeat, changeNoOfSeats] = useState({
        A1: "",
        A2: "",
        B1: "",
        B2: "",
        B3: "",
        B4: "",
        C1: "",
        C2: "",
      });

    const [lastBookingDetails,setLastBookingDetails] = useState(null)

    return(
        <BsContext.Provider
            value={{
                movie,changeMovie,
                time,changeTime,
                noOfSeat,changeNoOfSeats,
                lastBookingDetails
            }}>
            
            {props.children}
        </BsContext.Provider>
    )
}

export default BsState;