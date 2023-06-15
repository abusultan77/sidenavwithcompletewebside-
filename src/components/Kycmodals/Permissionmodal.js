import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import Readymodal from './Readymodal';
import './kycmodal.scss'

const Permissionmodal = ({ showpermission, setShowpermission }) => {
    const handleClosepermission = () => setShowpermission(false);

    const [showready, setShowready] = useState(false);
    const handleShowready = () => setShowready(true);
    return (
        <>
            <Modal className='kycmodal' show={showpermission} onHide={handleClosepermission} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Camera permission required</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="kyctop">
                        <img src="\Assets\kycmodal\no-camera.svg" alt="kycimg" className="kycimg" />
                    </div>
                    <p className="permissionpara">We could not access to your camera. Please grant access from your browser.</p>
                    <div onClick={()=>{
                        handleShowready();
                        handleClosepermission();
                    }} className="outerbtn-green-btnonewidth">
                        <div className="innerbtn">
                            <span className="btnspan"></span>
                            <h5 className="btntext">Grant Permission</h5>
                        </div>
                    </div>
                    <p className="backpara">Scan with your smart phone</p>
                </Modal.Body>
            </Modal>

            <Readymodal 
            showready={showready}
            setShowready={setShowready}
            />
        </>
    )
}

export default Permissionmodal