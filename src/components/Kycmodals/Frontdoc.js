import React, { useState } from 'react'
import './kycmodal.scss'
import Modal from 'react-bootstrap/Modal';
import Reviewdoc from './Reviewdoc';

const Frontdoc = ({ showfront, setShowfront }) => {
    const handleClosefront = () => setShowfront(false);

    const [showreviewdoc, setShowreviewdoc] = useState(false);
    const handleShowreviewdoc = () => setShowreviewdoc(true);
    return (
        <>
            <Modal className='kycmodal' show={showfront} onHide={handleClosefront} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Capture your front document</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="upperfront">
                        <div className="left">
                            <img src="\Assets\kycmodal\id-card.svg" alt="idimg" className="idimg" />
                            <p className="idlefttext">National ID (front side)</p>
                        </div>
                        <p className="rightidpara">JPEG, PNG / 10 MB max</p>
                    </div>
                    <div onClick={()=>{
                        handleShowreviewdoc();
                        handleClosefront();
                    }} className="mainupload">
                        <img src="\Assets\kycmodal\upload.svg" alt="uploadimg" className="uploadimg" />
                        <p className="uploadpara"><span>Upload</span> or drag and drop </p>
                    </div>
                    <p className="whitetext">Snap with your smart phone</p>
                    <p className="backpara">Back</p>
                </Modal.Body>
            </Modal>

            <Reviewdoc 
            showreviewdoc={showreviewdoc}
            setShowreviewdoc={setShowreviewdoc}
            />
        </>
    )
}

export default Frontdoc