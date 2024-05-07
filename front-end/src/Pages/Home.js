import React from 'react'
import SelectMovie from '../Components/SelectMovie'

const Home = () => {
    return (
        <div className='container'>
            <div className='wrapper'>
                <div className='select-movie-container'>
                    <SelectMovie />
                </div>
                <div className='last-booking-details-container'>
                    Last Booking
                </div>
            </div>

            <div className='time-seats-container'>
                Time Schedule
                Select Seats
                <button>Book Now</button>
            </div>
        </div>
  )
}

export default Home