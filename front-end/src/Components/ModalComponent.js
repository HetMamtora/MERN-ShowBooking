import React, { useContext } from 'react'
import BsContext from '../Context/BsContext'
import '../CSS/modalComponent.css'

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
                        <strong>Message</strong>
                    </div>
                    <div className='modal-body'>
                        <span>{errorMessage}</span>
                    </div>
                    <div className='modal-footer'>
                        <button onClick={handleClosePopup}>Close</button>
                    </div>
                </div>
            </div>
        )}
        </>
    )
}

export default ModalComponent