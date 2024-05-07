import React from 'react'
import { seats } from '../data'
import '../CSS/lastBookingDetails.css'

const LastBookingDetails = () => {
    return (
        <div className='last-booking-details-main-container'>
            <h2 className='last-booking-details-heading'>Last Booking</h2>

            <div className='seats-container'>
                <p className='seats-header'>Seats:</p>
                <ul className='seats'>
                    {seats.map((seats, index) => (
                        <li className="seat-value" key={index}>
                            (seat): 0
                        </li>
                    ))}
                </ul>
            </div>
            
            <p className='slot' style={{textAlign:"left"}}>Slot: 00:00 AM<span></span></p>
            <p className='movie'>Movie: <span>JOKER 2</span></p>
        </div>
  )
}

export default LastBookingDetails