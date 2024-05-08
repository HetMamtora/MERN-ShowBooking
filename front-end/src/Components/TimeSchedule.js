import React, { useContext } from 'react'
import { slots } from '../data'
import RadioComponenet from './RadioComponenet'
import '../CSS/timeSchedule.css'
import BsContext from '../Context/BsContext'

const TimeSchedule = () => {

    const context = useContext(BsContext)
    const {time,changeTime} = context

    const handleChangeItem = (val) => {
        changeTime(val)

        window.localStorage.setItem("slot",val)
    }

    return (
        <>
        <div className='slot-container'>
            <h1 className='ts-heading'>Select Time</h1>

            <div className='ts-main-container'>
                {slots.map((el,index) => {
                    return(
                        <RadioComponenet text={el} key={index} data={time} changeSelection={handleChangeItem}/>
                    )
                })}
            </div>

        </div>
        </>
    )
}   

export default TimeSchedule