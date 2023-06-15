import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import './kycmodal.scss'
import Underverification from './Underverification';

const Docsubmitted = ({ showdocsubmitted, setShowdocsubmitted }) => {
    const handleClosedocsubmitted = () => setShowdocsubmitted(false);

    const [showver, setShowver] = useState(false);
    const handleShowver = () => setShowver(true);
  return (
    <>
         <Modal className='kycmodal' show={showdocsubmitted} onHide={handleClosedocsubmitted} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Document submitted</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="kyctop">
                        <img src="\Assets\kycmodal\check 1.svg" alt="kycimg" className="kycimg" />
                    </div>
                    <div className="successtexts">
                        <h6 className="successhead">Document submitted</h6>
                        <p className="successpara">Your document has been successfully submitted. It will be reviewed very soon. It can take up to 24 hours during peak traffic times.</p>
                    </div>
                    <div onClick={()=>{
                        handleShowver();
                        handleClosedocsubmitted();
                    }} className="outerbtn-green-btnonewidth">
                        <div className="innerbtn">
                            <span className="btnspan"></span>
                            <h5 className="btntext">Continue</h5>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <Underverification 
            showver={showver}
            setShowver={setShowver}
            />
    </>
  )
}

export default Docsubmitted