import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import './kycmodal.scss'
import Resubmission from './Resubmission';

const Vercomplete = ({ showvercomplete, setShowvercomplete }) => {
    const handleClosevercomplete = () => setShowvercomplete(false);

    const [showresubmission, setShowresubmission] = useState(false);
    const handleShowresubmission = () => setShowresubmission(true);
    return (
        <>
            <Modal className='kycmodal' show={showvercomplete} onHide={handleClosevercomplete} centered>
                <Modal.Header closeButton>
                    <Modal.Title>verification Completed</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="kyctop">
                        <img src="\Assets\kycmodal\verficationcomplete.svg" alt="kycimg" className="kycimg" />
                    </div>
                    <div className="successtexts">
                        <h6 className="successhead">Verification Completed</h6>
                        <p className="successpara">Congratulation, your KYC verification is completed successfully.</p>
                    </div>
                    <div onClick={() => {
                        handleClosevercomplete()
                        handleShowresubmission()
                    }} className="outerbtn-green-btnonewidth">
                        <div className="innerbtn">
                            <span className="btnspan"></span>
                            <h5 className="btntext">Okay</h5>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <Resubmission
                showresubmission={showresubmission}
                setShowresubmission={setShowresubmission}
            />
        </>
    )
}

export default Vercomplete