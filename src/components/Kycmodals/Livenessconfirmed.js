import React, { useState } from 'react'
import './kycmodal.scss'
import Modal from 'react-bootstrap/Modal';
import Countrymodal from './Countrymodal';

const Livenessconfirmed = ({ showconfirmed, setShowconfirmed }) => {
    const handleCloseconfirmed = () => setShowconfirmed(false);

    const [showcountry, setShowcountry] = useState(false);
    const handleShowcountry = () => setShowcountry(true);
    return (
        <>
            <Modal className='kycmodal' show={showconfirmed} onHide={handleCloseconfirmed} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Liveness Confirmed</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="kyctop">
                        <img src="\Assets\kycmodal\check 1.svg" alt="kycimg" className="kycimg" />
                    </div>
                    <div className="successtexts">
                        <h6 className="successhead">Success</h6>
                        <p className="successpara">Liveness challenge has been successfully passed.</p>
                    </div>
                    <div onClick={()=>{
                        handleShowcountry();
                        handleCloseconfirmed();
                    }} className="outerbtn-green-btnonewidth">
                        <div className="innerbtn">
                            <span className="btnspan"></span>
                            <h5 className="btntext">Continue</h5>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <Countrymodal
                showcountry={showcountry}
                setShowcountry={setShowcountry}
            />
        </>
    )
}

export default Livenessconfirmed