import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import './kycmodal.scss'

const Resubmission = ({ showresubmission, setShowresubmission }) => {
    const handleCloseresubmission = () => setShowresubmission(false);
  return (
    <>
    <Modal className='kycmodal' show={showresubmission} onHide={handleCloseresubmission} centered>
       <Modal.Header closeButton>
           <Modal.Title>Resubmission required</Modal.Title>
       </Modal.Header>
       <Modal.Body>
           <div className="kyctop">
               <img src="\Assets\kycmodal\resubmissionrequired.svg" alt="kycimg" className="kycimg" />
           </div>
           <div className="successtexts">
               <h6 className="successhead">Incomplete verification</h6>
               <p className="successpara">One of your document could not be verified due to this reason:</p>
           </div>
           <div className="compliancemain">
            <h6 className="compliancehead">Compliance requirement not meet</h6>
            <p className="compliancepara">2023-04-28 13:16:28</p>
           </div>
           <div className="outerbtn-green-btnonewidth">
               <div className="innerbtn">
                   <span className="btnspan"></span>
                   <h5 className="btntext">Submit documents again</h5>
               </div>
           </div>
       </Modal.Body>
   </Modal>

</>
  )
}

export default Resubmission