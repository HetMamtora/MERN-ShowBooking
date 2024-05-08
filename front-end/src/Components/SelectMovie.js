import React, { useContext } from 'react'
import { moviesList } from '../data'
import RadioComponenet from './RadioComponenet'
import '../CSS/selectMovie.css'
import BsContext from '../Context/BsContext'

const SelectMovie = () => {

  const context = useContext(BsContext)
  const {movie,changeMovie} = context

  const handleChangeMovie = (val) => {
    changeMovie(val)

    window.localStorage.setItem("movie", val)
  }

  return (
    <>
        <h1 className='SM-heading'>SELECT MOVIE</h1>
        <div className='SM-main-container'>
            {moviesList.map((el,index) => {
                return(
                    <RadioComponenet
                      text={el}
                      key={index}
                      data={movie}
                      changeSelection={handleChangeMovie}
                    />
                )
            })}
      </div>
    </>
  )
}

export default SelectMovie