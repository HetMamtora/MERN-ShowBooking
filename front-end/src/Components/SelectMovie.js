import React from 'react'
import { moviesList } from '../data'
import RadioComponenet from './RadioComponenet'
import '../CSS/selectMovie.css'

const SelectMovie = () => {
  return (
    <>
        <h1 className='SM-heading'>SELECT MOVIE</h1>
        <div className='SM-main-container'>
            {moviesList.map((el,index) => {
                return(
                    <RadioComponenet text={el} key={index} />
                )
            })}
      </div>
    </>
  )
}

export default SelectMovie