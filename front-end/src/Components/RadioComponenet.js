import React from 'react'
import '../CSS/radioComponent.css'

const RadioComponenet = ({text}) => {
    return (
        <div className='form-check-label'>
            <span className='text'>{text}</span>
        </div>
  )
}

export default RadioComponenet