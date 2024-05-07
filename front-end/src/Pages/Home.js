import React from 'react'
import '../CSS/home.css'
import SelectMovie from '../Components/SelectMovie'
import LastBookingDetails from '../Components/LastBookingDetails'
import TimeSchedule from '../Components/TimeSchedule'
import SelectSeats from '../Components/SelectSeats'

const Home = () => {
    return (
        <div className='container'>
            <div className='wrapper'>
                <div className='select-movie-container'>
                    <SelectMovie />
                </div>
                <div className='last-booking-details-container'>
                    <LastBookingDetails />
                </div>
            </div>

            <div className='time-seats-container'>
                <TimeSchedule />
                <SelectSeats />
                <button className='btn-booknow'>Book Now</button>
            </div>
        </div>
  )
}

export default Home