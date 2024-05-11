import React, { useContext } from 'react'
import BsContext from '../Context/BsContext'
import '../CSS/modalComponent.css'
import { FaWindowClose } from "react-icons/fa";

const ModalComponent = () => {
    
    const context = useContext(BsContext)
    const { errorPopup, errorMessage, setErrorPopup, setErrorMessage } = context;

    const handleClosePopup = () => {
        setErrorMessage("")
        setErrorPopup(false)
    }
    return (
        <>
        {errorPopup && (
            <div className={`modal-container${errorPopup ? "active" : "inactive"}`}>
                <div className='modal'>
                    <div className='modal-header'>
                        <strong className='message-box'>MESSAGE</strong>
                    </div>
                    <div className='modal-body'>
                        <span>{errorMessage}</span>
                    </div>
                    <div className='modal-footer'>
                        <FaWindowClose className='button-close' onClick={handleClosePopup}/>
                    </div>
                </div>
            </div>
        )}
        </>
    )
}

export default ModalComponent