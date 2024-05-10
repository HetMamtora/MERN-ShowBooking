import React from 'react'
import '../CSS/seatInputs.css'

const SeatInputs = ({key,text,noOfSeat,changeNoOfSeats,changeSeats,seat,index}) => {

    const change_seats = (e) => {
        changeNoOfSeats({...noOfSeat,[e.target.name]:Number(e.target.value)})

        window.localStorage.setItem(
            "seats",
            JSON.stringify({
                ...noOfSeat,
                [e.target.name]:Number(e.target.value)
            })
        )
    }
    
    const handleChecked = (text) => {
        changeSeats(text)
    }

    return (
        /*
        <div className='form-check-label'>
            <span className='text'>{text}</span>
            <input type='number' className='seats-input' placeholder='0' max='15' min='0'
                   name={text} onChange={change_seats} value={noOfSeat[text]}
            />

        </div>*/
        <div name={text} 
             className={`form-check-label seats ${seat === text ? "active" : "inactive"}`}
             id={`${index}text`}
             onClick={() => {handleChecked(text, index);}}>
      
            <span className={"text"}>{text}</span>
            <input type="number" className="seats-input" placeholder="0"
                   name={text} min="0" id={`${index}input`} max="30"
                   onChange={change_seats} value={noOfSeat[text]} />
        </div>
  )
}

export default SeatInputs