import React, { useEffect, useState } from "react";
import BsContext from "./BsContext";

const BsState = (props) => {
    
    const [movie, changeMovie] = useState('')
    const [time, changeTime] = useState('')
    const [errorPopup, setErrorPopup] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    
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

    //POST REQUEST FROM BACKEND
    const handlePostBooking = async() => {
        const response = await fetch(
            `http://localhost:8000/api/booking`,
            {
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body: JSON.stringify({movie: movie, slot: time, seats: noOfSeat}),
            }
        )

        const data = await response.json()

        setErrorPopup(true)
        setErrorMessage(data.message)

        if(response.status === 200){
            changeTime("")
            changeMovie("")
            changeNoOfSeats({
                A1: "",
                A2: "",
                B1: "",
                B2: "",
                B3: "",
                B4: "",
                C1: "",
                C2: "",
            })
            setLastBookingDetails(data.data)

            window.localStorage.clear()
        }
    }

    //GET REQUEST FROM BACKEND
    const handleGetLastBooking = async() => {
        const response = await fetch(
            `http://localhost:8000/api/booking`,
            {
                method: 'GET',
            }
        )

        const data = await response.json()

        setLastBookingDetails(data.data)
    }

    //ALL FUNCTIONS
    useEffect(() => {
        const movie = window.localStorage.getItem("movie")
        const slot = window.localStorage.getItem("slot")
        const seats = JSON.parse(window.localStorage.getItem("seats"))

        if(movie){
            changeMovie(movie)
        }
        if(slot){
            changeTime(slot)
        }
        if(seats){
            changeNoOfSeats(seats)
        }
    }, [])

    return(
        <BsContext.Provider
            value={{
                movie,changeMovie,
                time,changeTime,
                noOfSeat,changeNoOfSeats,
                lastBookingDetails,
                handlePostBooking,handleGetLastBooking,
                errorPopup, setErrorPopup,
                errorMessage, setErrorMessage
            }}>
            
            {props.children}
        </BsContext.Provider>
    )
}

export default BsState;