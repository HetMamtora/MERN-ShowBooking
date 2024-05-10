import React, { useContext, useState } from 'react'
import { seats } from '../data'
import SeatInputs from './SeatInputs'
import '../CSS/selectSeats.css'
import BsContext from '../Context/BsContext'

const SelectSeats = () => {

    const [seat, changeSeats] = useState([])
    const context = useContext(BsContext)
    const {noOfSeat,changeNoOfSeats} = context

    return (
        <div className='ss-wrapper'>
            <h1 className='ss-heading'>Select Seats</h1>

            <div className='ss-main-container'>
                {seats.map((el,index) => {
                    return (
                        <SeatInputs
                            seat={seat}
                            key={index}
                            index={index}
                            changeSeats={changeSeats}
                            noOfSeat={noOfSeat}
                            text={el}
                            changeNoOfSeats={changeNoOfSeats}
                        />
                    )
                })}
            </div>
        </div>
  )
}

export default SelectSeats