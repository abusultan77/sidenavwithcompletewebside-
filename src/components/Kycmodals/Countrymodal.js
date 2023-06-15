import React, { useState } from 'react'
import './kycmodal.scss'
import Modal from 'react-bootstrap/Modal';
import Documenttype from './Documenttype';

const Countrymodal = ({showcountry , setShowcountry}) => {
    const handleClosecountry = () => setShowcountry(false);

    const [showdocumenttype, setShowdocumenttype] = useState(false);
    const handleShowdocumenttype = () => setShowdocumenttype(true);
    return (
        <>
            <Modal className='kycmodal' show={showcountry} onHide={handleClosecountry} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Select document country</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div class="material-textfield maintextfield">
                  <input placeholder="Search your country" type="text" className='formargin' />
                  <label className='formarginlabel'>Search Country</label>
                </div>
                <div className="countriesmain">
                    <div className="countriesinner" onClick={()=>{
                        handleShowdocumenttype();
                        handleClosecountry();
                    }}>
                        <div className="countriesimg">
                            <img src="\Assets\kycmodal\united-kingdom.png" alt="countriesimginner" className="countriesimginner" />
                        </div>
                        <h4 className="countrieshead">United Kingdom</h4>
                    </div>
                    <div className="countriesinner" onClick={()=>{
                        handleShowdocumenttype();
                        handleClosecountry();
                    }}>
                        <div className="countriesimg">
                            <img src="\Assets\kycmodal\united-kingdom.png" alt="countriesimginner" className="countriesimginner" />
                        </div>
                        <h4 className="countrieshead">United Kingdom</h4>
                    </div>
                    <div className="countriesinner" onClick={()=>{
                        handleShowdocumenttype();
                        handleClosecountry();
                    }}>
                        <div className="countriesimg">
                            <img src="\Assets\kycmodal\united-kingdom.png" alt="countriesimginner" className="countriesimginner" />
                        </div>
                        <h4 className="countrieshead">United Kingdom</h4>
                    </div>
                    <div className="countriesinner" onClick={()=>{
                        handleShowdocumenttype();
                        handleClosecountry();
                    }}>
                        <div className="countriesimg">
                            <img src="\Assets\kycmodal\united-kingdom.png" alt="countriesimginner" className="countriesimginner" />
                        </div>
                        <h4 className="countrieshead">United Kingdom</h4>
                    </div>
                    <div className="countriesinner" onClick={()=>{
                        handleShowdocumenttype();
                        handleClosecountry();
                    }}>
                        <div className="countriesimg">
                            <img src="\Assets\kycmodal\united-kingdom.png" alt="countriesimginner" className="countriesimginner" />
                        </div>
                        <h4 className="countrieshead">United Kingdom</h4>
                    </div>
                    <div className="countriesinner" onClick={()=>{
                        handleShowdocumenttype();
                        handleClosecountry();
                    }}>
                        <div className="countriesimg">
                            <img src="\Assets\kycmodal\united-kingdom.png" alt="countriesimginner" className="countriesimginner" />
                        </div>
                        <h4 className="countrieshead">United Kingdom</h4>
                    </div>
                    <div className="countriesinner" onClick={()=>{
                        handleShowdocumenttype();
                        handleClosecountry();
                    }}>
                        <div className="countriesimg">
                            <img src="\Assets\kycmodal\united-kingdom.png" alt="countriesimginner" className="countriesimginner" />
                        </div>
                        <h4 className="countrieshead">United Kingdom</h4>
                    </div>
                    <div className="countriesinner" onClick={()=>{
                        handleShowdocumenttype();
                        handleClosecountry();
                    }}>
                        <div className="countriesimg">
                            <img src="\Assets\kycmodal\united-kingdom.png" alt="countriesimginner" className="countriesimginner" />
                        </div>
                        <h4 className="countrieshead">United Kingdom</h4>
                    </div>
                    <div className="countriesinner" onClick={()=>{
                        handleShowdocumenttype();
                        handleClosecountry();
                    }}>
                        <div className="countriesimg">
                            <img src="\Assets\kycmodal\united-kingdom.png" alt="countriesimginner" className="countriesimginner" />
                        </div>
                        <h4 className="countrieshead">United Kingdom</h4>
                    </div>
                    <div className="countriesinner" onClick={()=>{
                        handleShowdocumenttype();
                        handleClosecountry();
                    }}>
                        <div className="countriesimg">
                            <img src="\Assets\kycmodal\united-kingdom.png" alt="countriesimginner" className="countriesimginner" />
                        </div>
                        <h4 className="countrieshead">United Kingdom</h4>
                    </div>
                    <div className="countriesinner" onClick={()=>{
                        handleShowdocumenttype();
                        handleClosecountry();
                    }}>
                        <div className="countriesimg">
                            <img src="\Assets\kycmodal\united-kingdom.png" alt="countriesimginner" className="countriesimginner" />
                        </div>
                        <h4 className="countrieshead">United Kingdom</h4>
                    </div>
                    <div className="countriesinner" onClick={()=>{
                        handleShowdocumenttype();
                        handleClosecountry();
                    }}>
                        <div className="countriesimg">
                            <img src="\Assets\kycmodal\united-kingdom.png" alt="countriesimginner" className="countriesimginner" />
                        </div>
                        <h4 className="countrieshead">United Kingdom</h4>
                    </div>
                    <div className="countriesinner" onClick={()=>{
                        handleShowdocumenttype();
                        handleClosecountry();
                    }}>
                        <div className="countriesimg">
                            <img src="\Assets\kycmodal\united-kingdom.png" alt="countriesimginner" className="countriesimginner" />
                        </div>
                        <h4 className="countrieshead">United Kingdom</h4>
                    </div>
                    <div className="countriesinner" onClick={()=>{
                        handleShowdocumenttype();
                        handleClosecountry();
                    }}>
                        <div className="countriesimg">
                            <img src="\Assets\kycmodal\united-kingdom.png" alt="countriesimginner" className="countriesimginner" />
                        </div>
                        <h4 className="countrieshead">United Kingdom</h4>
                    </div>
                    <div className="countriesinner" onClick={()=>{
                        handleShowdocumenttype();
                        handleClosecountry();
                    }}>
                        <div className="countriesimg">
                            <img src="\Assets\kycmodal\united-kingdom.png" alt="countriesimginner" className="countriesimginner" />
                        </div>
                        <h4 className="countrieshead">United Kingdom</h4>
                    </div>
                </div>
                <p className="backpara">Back</p>
                </Modal.Body>
            </Modal>

            <Documenttype 
            showdocumenttype={showdocumenttype}
            setShowdocumenttype={setShowdocumenttype}
            />
        </>
    )
}

export default Countrymodal