import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./myaccountdashboard.scss"
const Userinfo = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    return (
        <>
            <section className='userinfo'>
            
                    <div className='infocard'>
                        <div className='row'>
                            <div className='col-sm-12 p-0'>
                                <div className='innerinfocardsss'>
                                    <div className='infoparent2'>
                                        <div className='left'>
                                            <div className='inner'>
                                                <div className='right'>
                                                    <img src='\Assets\sidebar-icons\029-gamer.svg' alt='img' className='img-fluid' onClick={handleShow1} />
                                                </div>
                                                <div className='left111'>
                                                    <h4>Scott Foster</h4>
                                                    <p>0x54t6X5TY43...5tx1<img src='\Assets\sidebar-icons\copy.svg' alt='img' className='img-fluid' /></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='right'>
                                            <div className='completebtns'>
                                                <button><img src='\Assets\sidebar-icons\id-card.svg' alt='img' className='img-fluid' />Complete your KYC</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-sm-6'>
                                <div className='heading'>
                                    <h2>User Info</h2>
                                </div>
                                <div className='userinfocard'>
                                    <p className='green'>Nick Name</p>
                                    <div className='parent3'>
                                        <div className='left'>
                                            <h6>Scott Foster</h6>
                                        </div>
                                        <div className='right'>
                                            <img src='\Assets\sidebar-icons\edit-2.svg' alt='img' className='img-fluid' onClick={handleShow} />
                                        </div>
                                    </div>
                                </div>
                                <div className='userinfocard'>
                                    <p className='green'>Email Address</p>
                                    <div className='parent3'>
                                        <div className='left'>
                                            <h6>scott_foster@gmail.com</h6>
                                        </div>
                                        <div className='right'>
                                            <button><img src='\Assets\sidebar-icons\tick-circle1.svg' alt='img' className='img-fluid' />Verified</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-6'>
                                <div className='heading'>
                                    <h2>Main Wallet</h2>
                                </div>
                                <div className='userinfocard'>
                                    <p className='green'>Main Wallet Address</p>
                                    <div className='parent3'>
                                        <div className='left'>
                                            <h6>Main Wallet Address</h6>
                                        </div>
                                        <div className='right'>
                                            <img src='\Assets\sidebar-icons\Frameeth.svg' alt='img' className='img-fluid' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            
            </section>
            <Modal className='editmodal' show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Nick Name</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div class="material-textfield">
                        <input placeholder="Enter Your Nick Name" type="text" />
                        <label>Nick Name </label>
                    </div>
                    <div className='mainbutton'>
                            <div className="outerbtn-green-btnonewidth w-100">
                                <div className="innerbtn">
                                    <span className="btnspan"></span>
                                    <h5 className="btntext">Save</h5>
                                </div>
                            </div>
                        </div>
                </Modal.Body>
            </Modal>

            <Modal className='editmodal' show={show1} onHide={handleClose1} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Change Avatar</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                 <div className='row'>
                    <div className='col-xl-12 col-12 p-0'>
                        <div className='modalparent'>
                            <div className='modalcards'>
                                <img src='\Assets\sidebar-icons\029-gamer1.svg' alt='img' className='img-fluid'/>
                            </div>
                            <div className='modalcards'>
                                <img src='\Assets\sidebar-icons\031-gamer.svg' alt='img' className='img-fluid'/>
                            </div>
                            <div className='modalcards'>
                                <img src='\Assets\sidebar-icons\032-gamer1.svg' alt='img' className='img-fluid'/>
                            </div>
                            <div className='modalcards'>
                                <img src='\Assets\sidebar-icons\033-gamer.svg' alt='img' className='img-fluid'/>
                            </div>
                            <div className='modalcards'>
                                <img src='\Assets\sidebar-icons\034-gamer@2x.png' alt='img' className='img-fluid'/>
                            </div>
                            <div className='modalcards'>
                                <img src='\Assets\sidebar-icons\034-gamer@2x.png' alt='img' className='img-fluid'/>
                            </div>
                            <div className='modalcards'>
                                <img src='\Assets\sidebar-icons\034-gamer@2x.png' alt='img' className='img-fluid'/>
                            </div>
                            <div className='modalcards'>
                                <img src='\Assets\sidebar-icons\034-gamer@2x.png' alt='img' className='img-fluid'/>
                            </div>
                            <div className='modalcards'>
                                <img src='\Assets\sidebar-icons\034-gamer@2x.png' alt='img' className='img-fluid'/>
                            </div>
                              <div className='modalcards'>
                                <img src='\Assets\sidebar-icons\034-gamer@2x.png' alt='img' className='img-fluid'/>
                            </div>
                        </div>
                        {/* <div className='modalparent mt-2'>
                            <div className='modalcards'>
                                <img src='\Assets\sidebar-icons\029-gamer1.svg' alt='img' className='img-fluid'/>
                            </div>
                            <div className='modalcards'>
                                <img src='\Assets\sidebar-icons\031-gamer.svg' alt='img' className='img-fluid'/>
                            </div>
                            <div className='modalcards'>
                                <img src='\Assets\sidebar-icons\032-gamer1.svg' alt='img' className='img-fluid'/>
                            </div>
                            <div className='modalcards'>
                                <img src='\Assets\sidebar-icons\033-gamer.svg' alt='img' className='img-fluid'/>
                            </div>
                            <div className='modalcards'>
                                <img src='\Assets\sidebar-icons\034-gamer@2x.png' alt='img' className='img-fluid'/>
                            </div>
                        </div> */}
                    </div>
                 </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Userinfo