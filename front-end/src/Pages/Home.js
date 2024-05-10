import React, { useContext } from 'react'
import '../CSS/home.css'
import SelectMovie from '../Components/SelectMovie'
import LastBookingDetails from '../Components/LastBookingDetails'
import TimeSchedule from '../Components/TimeSchedule'
import SelectSeats from '../Components/SelectSeats'
import BsContext from '../Context/BsContext'
import ModalComponent from '../Components/ModalComponent'

const Home = (props) => {

    const context = useContext(BsContext)
    const {
        movie,time,
        noOfSeat,
        handlePostBooking,
        setErrorPopup,
        setErrorMessage,
    } = context

    //Check Negative seat selection
    const checkNegativeSeatsValidity = (seats) => {
        for (let seat in seats) {
          if (Number(seats[seat]) < 0) {
            return true;
          }
        }
    
        return false;
      };
    
      //Check 0 for seat selection
      const checkZeroSeatsValidity = (seats) => {
        for (let seat in seats) {
          if (Number(seats[seat]) > 0) {
            return false;
          }
        }
        return true;
      };

    const handleBookNow = () => {
        if(!movie){
            setErrorPopup(true)
            setErrorMessage("Please select a Movie!")
        }
        else if(!time){
            setErrorPopup(true)
            setErrorMessage("Please select time slot!")
        }
        else if(checkNegativeSeatsValidity(noOfSeat) || checkZeroSeatsValidity(noOfSeat)){
            setErrorPopup(true)
            setErrorMessage("Invalid Seats !")
        }
        else{
            handlePostBooking();
        }
    }

    return (
      <>
        <ModalComponent />
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
                <button className='btn-booknow' onClick={() => {handleBookNow()}}>Book Now</button>
            </div>
        </div>
        </>
  )
}

export default Home