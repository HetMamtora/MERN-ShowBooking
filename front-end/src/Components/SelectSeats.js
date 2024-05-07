import React from 'react'
import { seats } from '../data'
import SeatInputs from './SeatInputs'
import '../CSS/selectSeats.css'

const SelectSeats = () => {
    return (
        <div className='ss-wrapper'>
            <h1 className='ss-heading'>Select Seats</h1>

            <div className='ss-main-container'>
                {seats.map((el,index) => {
                    return (
                        <SeatInputs key={index} text={el}/>
                    )
                })}
            </div>
        </div>
  )
}

export default SelectSeats