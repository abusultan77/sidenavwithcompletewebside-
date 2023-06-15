import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import Permissionmodal from './Permissionmodal';

const Livenessmodal = ({ showliveness, setShowliveness }) => {
    const handleCloseliveness = () => setShowliveness(false);

    const [showpermission, setShowpermission] = useState(false);
    const handleShowpermission = () => setShowpermission(true);
    return (
        <>
            <Modal className='kycmodal' show={showliveness} onHide={handleCloseliveness} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Liveness</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="kyctop">
                        <img src="\Assets\kycmodal\face-authentication.png" alt="kycimg" className="kycimg" />
                    </div>
                    <div className="livenesstexts">
                        <h6 className="livenesshead">Position your face in the circle</h6>
                        <p className="livenesspara">Follow the instructions on the screen</p>
                    </div>
                    <div onClick={()=>{
                        handleShowpermission();
                        handleCloseliveness();
                    }} className="outerbtn-green-btnonewidth">
                        <div className="innerbtn">
                            <span className="btnspan"></span>
                            <h5 className="btntext">Start</h5>
                        </div>
                    </div>
                    <p className="backpara">Scan with your smart phone</p>
                </Modal.Body>
            </Modal>

            <Permissionmodal
                showpermission={showpermission}
                setShowpermission={setShowpermission}
            />
        </>
    )
}

export default Livenessmodal