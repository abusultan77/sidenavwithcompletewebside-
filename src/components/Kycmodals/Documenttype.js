import React, { useState } from 'react'
import './kycmodal.scss'
import Modal from 'react-bootstrap/Modal';
import Frontdoc from './Frontdoc';

const Documenttype = ({ showdocumenttype, setShowdocumenttype }) => {
    const handleClosedocumenttype = () => setShowdocumenttype(false);

    const [showfront, setShowfront] = useState(false);
    const handleShowfront = () => setShowfront(true);
  return (
   <>
            <Modal className='kycmodal' show={showdocumenttype} onHide={handleClosedocumenttype} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Select document type</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className="countriesmain">
                    <div onClick={()=>{
                        handleShowfront();
                        handleClosedocumenttype();
                    }} className="countriesinner">
                            <img src="\Assets\kycmodal\passport-card.svg" alt="countriesimginner" className="img-fluid" />
                        <h4 className="countrieshead">Passport</h4>
                    </div>
                    <div onClick={()=>{
                        handleShowfront();
                        handleClosedocumenttype();
                    }} className="countriesinner">
                            <img src="\Assets\kycmodal\idcard.svg" alt="countriesimginner" className="img-fluid" />
                        <h4 className="countrieshead">National ID</h4>
                    </div>
                    <div onClick={()=>{
                        handleShowfront();
                        handleClosedocumenttype();
                    }} className="countriesinner">
                            <img src="\Assets\kycmodal\driving-license.svg" alt="countriesimginner" className="img-fluid" />
                        <h4 className="countrieshead">Driving Licence</h4>
                    </div>
                    <div onClick={()=>{
                        handleShowfront();
                        handleClosedocumenttype();
                    }} className="countriesinner">
                            <img src="\Assets\kycmodal\paper.svg" alt="countriesimginner" className="img-fluid" />
                        <h4 className="countrieshead">Residential Permit</h4>
                    </div>
                </div>
                <p className="backpara">Back</p>
                </Modal.Body>
            </Modal>

            <Frontdoc 
            showfront={showfront}
            setShowfront={setShowfront}
            />
   </>
  )
}

export default Documenttype