import React, { useState } from 'react'
import './kycmodal.scss'
import Modal from 'react-bootstrap/Modal';
import Reviewmodal from './Reviewmodal';

const Kycmodal = ({ show3, setShow3 }) => {
    const handleClose3 = () => setShow3(false);

    const [showreview, setShowreview] = useState(false);
    const handleShowreview = () => setShowreview(true);
    return (
        <>
            <Modal className='kycmodal' show={show3} onHide={handleClose3} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Verify your identity</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="kyctop">
                        <img src="\Assets\kycmodal\biometric-security.png" alt="kycimg" className="kycimg" />
                    </div>
                    <p className="kycpara">Complete the following steps to validate your verification process</p>
                    <div className="methodmain">
                        <div className="methodinner">
                            <img src="\Assets\kycmodal\face-scan.svg" alt="methodimg" className="methodimg" />
                            <div className="methodtexts">
                                <h6 className="methodhead">Liveness</h6>
                                <p className="methodpara">Scan your face</p>
                            </div>
                        </div>
                        <div className="methodinner">
                            <img src="\Assets\kycmodal\id-card.svg" alt="methodimg" className="methodimg" />
                            <div className="methodtexts">
                                <h6 className="methodhead">ID Document</h6>
                                <p className="methodpara">Add official document</p>
                            </div>
                        </div>
                    </div>
                    <div onClick={() => {
                        handleShowreview();
                        handleClose3();
                    }} className="outerbtn-green-btnonewidth">
                        <div className="innerbtn">
                            <span className="btnspan"></span>
                            <h5 className="btntext">Start Verification</h5>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <Reviewmodal
                showreview={showreview}
                setShowreview={setShowreview}
            />
        </>
    )
}

export default Kycmodal