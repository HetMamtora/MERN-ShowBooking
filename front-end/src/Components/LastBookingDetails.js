import React, { useContext, useEffect } from 'react'
import { seats } from '../data'
import '../CSS/lastBookingDetails.css'
import BsContext from '../Context/BsContext'

const LastBookingDetails = () => {

    const context = useContext(BsContext)
    const {lastBookingDetails, handleGetLastBooking} = context

    useEffect(() => {
        handleGetLastBooking();
    })

    return (
        <div className='last-booking-details-main-container'>
            <h2 className='last-booking-details-heading'>LAST BOOKING DETAILS </h2>
            {lastBookingDetails ? (
                <>
                <div className='seats-container'>
                    <p className='seats-header'>SEATS</p>
                        <ul className='seats'>
                        {seats.map((seat, index) => (
                            <li className="seat-value" key={index}>
                                {seat}:{Number(lastBookingDetails.seats[seat])}
                            </li>
                        ))}
                        </ul>
                </div>
            
                <p className='slot' style={{textAlign:"left"}}>
                    SLOT : <span>{lastBookingDetails.slot}</span>
                </p>
                <p className='movie'>
                    MOVIE: <span>{lastBookingDetails.movie}</span>
                </p>
                </>
                ):(
                    <p className='no-previous-booking-msg'>No Previous Booking Found !</p>
                )}
        </div>
  )
}

export default LastBookingDetails