import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './connectwalletmodal.scss'

const Connectwalletmodal = ({ show1, setShow1 }) => {
    const handleClose1 = () => setShow1(false);
    return (
        <>
            <Modal className='connectwalletmodal' show={show1} onHide={handleClose1} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Connect Wallet</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="modalpara">1. Agree to Launchpad term & conditions</p>
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
                        <p className="checkboxpara">I have read and agreed with the&nbsp;<span>&nbsp;Terms of Service</span>&nbsp;and&nbsp;<span>Privacy Policy</span></p>
                    </div>
                    <div className="choosenetwork">
                        <p className="choosepara">2. Choose Network</p>
                        <div className="innerchoose">
                            <div className="choosemain">
                                <img src="\Assets\connectwalletmodal\ethereum.svg" alt="chooseimg" className="chooseimg" />
                                <p className="choosemainpara">Ethereum</p>
                            </div>
                            <div className="choosemain">
                                <img src="\Assets\connectwalletmodal\bnb.svg" alt="chooseimg" className="chooseimg" />
                                <p className="choosemainpara">BNB Smart Chain</p>
                            </div>
                            <div className="choosemain">
                                <img src="\Assets\connectwalletmodal\arbitrum.svg" alt="chooseimg" className="chooseimg" />
                                <p className="choosemainpara">Arbitrum</p>
                            </div>
                        </div>
                    </div>
                    <div className="choosenetwork">
                        <p className="choosepara">3. Choose Wallet</p>
                        <div className="innerchoose">
                            <div className="choosemain">
                                <img src="\Assets\connectwalletmodal\metamask.svg" alt="chooseimg" className="chooseimg" />
                                <p className="choosemainpara">Metamask</p>
                            </div>
                            <div className="choosemain">
                                <img src="\Assets\connectwalletmodal\walletconnect.svg" alt="chooseimg" className="chooseimg" />
                                <p className="choosemainpara">WalletConnect</p>
                            </div>
                            <div className="choosemain">
                                <img src="\Assets\connectwalletmodal\coinbase-wallet.svg" alt="chooseimg" className="chooseimg" />
                                <p className="choosemainpara">Coinbase Wallet</p>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Connectwalletmodal