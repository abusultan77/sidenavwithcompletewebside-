import React, { useState } from 'react'
import './kycmodal.scss'
import Modal from 'react-bootstrap/Modal';
import Docsubmitted from './Docsubmitted';

const Reviewdoc = ({ showreviewdoc, setShowreviewdoc }) => {
    const handleClosereviewdoc = () => setShowreviewdoc(false);

    const [showdocsubmitted, setShowdocsubmitted] = useState(false);
    const handleShowdocsubmitted = () => setShowdocsubmitted(true);
    return (
        <>
            <Modal className='kycmodal' show={showreviewdoc} onHide={handleClosereviewdoc} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Review your document</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mainupload">
                        <img src="\Assets\kycmodal\idcardmain.png" alt="idcardimg" className="idcardimg" />
                    </div>
                    <div className="methodmain" style={{ marginTop: '30px' }}>
                        <div className="methodinner">
                            <img src="\Assets\kycmodal\tick-circle.png" alt="methodimg" className="methodimg" />
                            <div className="methodtexts">
                                <h6 className="methodhead">Good Quality Document</h6>
                                <p className="methodpara">All information are readable</p>
                            </div>
                        </div>
                        <div className="methodinner">
                            <img src="\Assets\kycmodal\tick-circle.png" alt="methodimg" className="methodimg" />
                            <div className="methodtexts">
                                <h6 className="methodhead">4 Corners are Visible</h6>
                                <p className="methodpara">The 4 corners are visible</p>
                            </div>
                        </div>
                        <div className="methodinner">
                            <img src="\Assets\kycmodal\tick-circle.png" alt="methodimg" className="methodimg" />
                            <div className="methodtexts">
                                <h6 className="methodhead">Valid expiry date</h6>
                                <p className="methodpara">Document expiration is not exceeded</p>
                            </div>
                        </div>
                    </div>
                    <div onClick={() => {
                        handleClosereviewdoc();
                        handleShowdocsubmitted();
                    }} className="outerbtn-green-btnonewidth">
                        <div className="innerbtn">
                            <span className="btnspan"></span>
                            <h5 className="btntext">Continue</h5>
                        </div>
                    </div>
                    <p className="backpara">Reupload</p>
                </Modal.Body>
            </Modal>

            <Docsubmitted
                showdocsubmitted={showdocsubmitted}
                setShowdocsubmitted={setShowdocsubmitted}
            />
        </>
    )
}

export default Reviewdoc