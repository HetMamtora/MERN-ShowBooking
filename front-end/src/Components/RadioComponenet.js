import React from 'react'
import '../CSS/radioComponent.css'

const RadioComponenet = ({text,changeSelection,data}) => {

    const handleChecked = (val) => {
        changeSelection(val)
    }

    return (
        <div name={text} className={`form-check-label ${data === text ?"active":"inactive"}`} onClick={()=> {handleChecked(text)}}>
            <span className='text'>{text}</span>
        </div>
  )
}

export default RadioComponenet