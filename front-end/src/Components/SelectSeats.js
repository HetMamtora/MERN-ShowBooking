import React, { useContext } from 'react'
import { seats } from '../data'
import SeatInputs from './SeatInputs'
import '../CSS/selectSeats.css'
import BsContext from '../Context/BsContext'

const SelectSeats = () => {

    const context = useContext(BsContext)
    const {noOfSeat,changeNoOfSeats} = context

    return (
        <div className='ss-wrapper'>
            <h1 className='ss-heading'>Select Seats</h1>

            <div className='ss-main-container'>
                {seats.map((el,index) => {
                    return (
                        <SeatInputs key={index} text={el} noOfSeat={noOfSeat} changeNoOfSeats={changeNoOfSeats}/>
                    )
                })}
            </div>
        </div>
  )
}

export default SelectSeats