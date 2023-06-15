import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import './kycmodal.scss'
import Vercomplete from './Vercomplete';

const Underverification = ({ showver, setShowver }) => {
    const handleClosever = () => setShowver(false);

    const [showvercomplete, setShowvercomplete] = useState(false);
    const handleShowvercomplete = () => setShowvercomplete(true);
    return (
        <>
            <Modal className='kycmodal' show={showver} onHide={handleClosever} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Under verification</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="kyctop">
                        <img src="\Assets\kycmodal\underverification.svg" alt="kycimg" className="kycimg" />
                    </div>
                    <div className="successtexts">
                        <h6 className="successhead">You will be verified shortly</h6>
                        <p className="mediumpara">Your documents are currently being verified.</p>
                        <p className="successpara">The verification process can take up to 24 hours during peak traffic times. There is no need to contact us before this time.</p>
                    </div>
                    <div onClick={() => {
                        handleShowvercomplete();
                        handleClosever();
                    }} className="outerbtn-green-btnonewidth">
                        <div className="innerbtn">
                            <span className="btnspan"></span>
                            <h5 className="btntext">Continue</h5>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <Vercomplete
                showvercomplete={showvercomplete}
                setShowvercomplete={setShowvercomplete}
            />
        </>
    )
}

export default Underverification