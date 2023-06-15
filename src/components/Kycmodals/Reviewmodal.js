import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import './kycmodal.scss'
import Livenessmodal from './Livenessmodal';

const Reviewmodal = ({ showreview, setShowreview }) => {
    const handleClosereview = () => setShowreview(false);

    const [showliveness, setShowliveness] = useState(false);
    const handleShowliveness = () => setShowliveness(true);
    return (
        <>
            <Modal className='kycmodal' show={showreview} onHide={handleClosereview} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Review the terms and conditions</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="kyctop">
                        <img src="\Assets\kycmodal\reviewmodalimg.png" alt="kycimg" className="kycimg" />
                    </div>
                    <div className="uppercheckboxpara">
                        <div className='chec'>
                            <div class="example">
                                <label class="checkbox-button">
                                    <input type="checkbox" class="checkbox-button__input" id="choice1-1" name="choice1" />
                                    <span class="checkbox-button__control"></span>
                                    {/* <span class="checkbox-button__label">I agree</span> */}
                                </label>
                            </div>
                        </div>

                        <p className="checkboxpara">I fully understand and agree with the&nbsp;<span>&nbsp;Launchpad Staking</span>&nbsp;and&nbsp;<span>Unstaking Policy</span></p>
                    </div>
                    <div onClick={() => {
                        handleShowliveness();
                        handleClosereview();
                    }} className="outerbtn-green-btnonewidth">
                        <div className="innerbtn">
                            <span className="btnspan"></span>
                            <h5 className="btntext">Accept terms & Conditions</h5>
                        </div>
                    </div>
                    <p className="backpara">Back</p>
                </Modal.Body>
            </Modal>

            <Livenessmodal
                showliveness={showliveness}
                setShowliveness={setShowliveness}
            />
        </>
    )
}

export default Reviewmodal