import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import './kycmodal.scss'
import Livenessconfirmed from './Livenessconfirmed';

const Capturing = ({ showcapturing, setShowcapturing }) => {
    const handleClosecapturing = () => setShowcapturing(false);

    const [showconfirmed, setShowconfirmed] = useState(false);
    const handleShowconfirmed = () => setShowconfirmed(true);
    return (
        <>
            <Modal className='kycmodal' show={showcapturing} onHide={handleClosecapturing} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Liveness</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="capturingmain">
                        <div className="capturingmainimage">
                            <img src="\Assets\kycmodal\dummyimage.png" alt="capturinginnerimg" className="capturinginnerimg" />
                        </div>
                    </div>
                    <div onClick={() => {
                        handleShowconfirmed();
                        handleClosecapturing();
                    }} className="outerbtn-green-btnonewidth mt-3">
                        <div className="innerbtn">
                            <span className="btnspan"></span>
                            <h5 className="btntext">Continue</h5>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <Livenessconfirmed 
            showconfirmed={showconfirmed}
            setShowconfirmed={setShowconfirmed}
            />
        </>
    )
}

export default Capturing