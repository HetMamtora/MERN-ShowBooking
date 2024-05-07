import React from 'react'
import { slots } from '../data'
import RadioComponenet from './RadioComponenet'
import '../CSS/timeSchedule.css'

const TimeSchedule = () => {
    return (
        <>
        <div className='slot-container'>
            <h1 className='ts-heading'>Select Time</h1>

            <div className='ts-main-container'>
                {slots.map((el,index) => {
                    return(
                        <RadioComponenet text={el} key={index} />
                    )
                })}
            </div>

        </div>
        </>
    )
}   

export default TimeSchedule