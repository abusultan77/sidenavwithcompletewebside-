import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import Capturing from './Capturing';

const Readymodal = ({ showready, setShowready }) => {
    const handleCloseready = () => setShowready(false);

    const [showcapturing, setShowcapturing] = useState(false);
    const handleShowcapturing = () => setShowcapturing(true);
    return (
        <>
            <Modal className='kycmodal' show={showready} onHide={handleCloseready} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Get ready for Video Selfie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="kyctop">
                        <img src="\Assets\kycmodal\face-recognition.svg" alt="kycimg" className="kycimg" />
                    </div>
                    <p className="permissionpara">Frame your face in the oval, Press I’m ready & Move Closer</p>
                    <div onClick={() => {
                        handleCloseready();
                        handleShowcapturing();
                    }} className="outerbtn-green-btnonewidth">
                        <div className="innerbtn">
                            <span className="btnspan"></span>
                            <h5 className="btntext">I’m Ready</h5>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <Capturing
                showcapturing={showcapturing}
                setShowcapturing={setShowcapturing}
            />
        </>
    )
}

export default Readymodal