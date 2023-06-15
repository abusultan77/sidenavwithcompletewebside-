import React from 'react'
import './buycrypto.scss'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const Buycrypto = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);



  const [show3, setShow3] = useState(false);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const [toggle, settoggle] = useState(true)
  return (
    <>
      <section className='buyxrypto'>
        <div className='container-fluid p-0'>
          <div className='row'>
            <div className='col-xl-6 col-md-12 col-12 paddddd'>
              <div className='main-head'>
                <h2>Buy Crypto in One Click</h2>
                <p>Pay with the currency and payment method of your choice.</p>
                <p>Supported payment methods</p>
                <div className='visaimg'>
                  <img src='\Assets\sidebar-icons\visa.svg' alt='img' className='img-fluid' />
                </div>
              </div>
            </div>
            <div className='col-xl-6 col-md-12 col-12 paddddd'>
              <div className='cryptocard'>
                <div className='head'>
                  <h2>Buy Crypto</h2>
                  {toggle ?
                    <>
                      <div class="material-textfield">
                        <input placeholder="0.00" type="text" />
                        <label>You Spend</label>
                        <div className='usdbtn'>
                          <button onClick={handleShow}>
                            <div className='parentbtn'>
                              <div className='left'>
                                <span><img src='\Assets\dollar-symbol.svg' alt='img' className='img-fluid' /></span>USD
                              </div>
                              <div className='right'>
                                <img src='\Assets\arrow-down.svg' alt='img' className='img-fluid' />
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                      <div class="material-textfield mt-4">
                        <input placeholder="0.00" type="text" />
                        <label>You Receive</label>
                        <div className='usdbtn'>
                          <button onClick={handleShow1}>
                            <div className='parentbtn'>
                              <div className='left'>
                                <span><img src='\Assets\eth.svg' alt='img' className='img-fluid' /></span>ETH
                              </div>
                              <div className='right'>
                                <img src='\Assets\arrow-down.svg' alt='img' className='img-fluid' />
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                      <div className='estimateinput'>
                        <div className='estimate'>
                          <input type='text' placeholder='Estimated price: 1 Token ≈ 0.0002 USD' />
                          <img src='\Assets\arrange-circle.svg' alt='img' className='img-fluid' />
                        </div>
                        <div class="material-textfield" onClick={handleShow2}>
                          <input placeholder="Visa / Master Card" type="text" />
                          {/* <label className='paywith'>Pay with</label> */}
                          <div className='frmimage'>
                            <img src='\Assets\frame.png' alt='img' className='img-fluid' />

                          </div>
                          <img src='\Assets\arrow-down.svg' alt='img' className='img-fluid arrowdown' />
                        </div>
                      </div>
                      <div className='buybtns'>
                        <div onClick={() => { settoggle(!toggle) }} className="outerbtn-green-btnonewidth w-100">
                          <div className="innerbtn">
                            <span className="btnspan"></span>
                            <h5 className="btntext">Buy Crypto</h5>
                          </div>
                        </div>
                      </div>
                    </>
                    :
                    <>
                      <div className='spendcard'>
                        <div className='spendparent'>
                          <div className='innerspendleft'>
                            <p><img src='\Assets\sidebar-icons\earnings.svg' alt='img' className='img-fluid' />Spend</p>
                            <h6>2,500.52 USD</h6>
                          </div>
                          <div className='innerspendleft'>
                            <p className='right'>Receive<img src='\Assets\sidebar-icons\hand.svg' alt='img' className='img-fluid' /></p>
                            <h6>453,445.565 TOKEN</h6>
                          </div>
                        </div>
                      </div>
                      <div className='amount'>
                        <div className='amountleft'>
                          <p>Amount</p>
                        </div>
                        <div className='amountright'>
                          <h6>2,500.52 USD</h6>
                        </div>
                      </div>
                      <div className='amount'>
                        <div className='amountleft'>
                          <p>Unit Price</p>
                        </div>
                        <div className='amountright'>
                          <h6>1 Token ≈ 0.0002 USD</h6>
                        </div>
                      </div>
                      <div className='amount'>
                        <div className='amountleft'>
                          <p>You will get</p>
                        </div>
                        <div className='amountright'>
                          <h6>453,445.565 TOKEN</h6>
                        </div>
                      </div>
                      <div className='amount'>
                        <div className='amountleft'>
                          <p>Estimated arrival time</p>
                        </div>
                        <div className='amountright'>
                          <h6>5 Minutes</h6>
                        </div>
                      </div>
                      <div className='recievecard'>
                        <p>Disclaimer: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                      </div>
                      <div className='checkss'>
                      <div className='chec'>
                        <div class="example">
                          <label class="checkbox-button">
                            <input type="checkbox" class="checkbox-button__input" id="choice1-1" name="choice1" />
                            <span class="checkbox-button__control"></span>
                            {/* <span class="checkbox-button__label">I agree</span> */}
                          </label>
                        </div>
                        <p className="checkboxpara">I have read and agree to the disclaimer.</p>
                      </div>
                      </div>
                     
                      <div onClick={() => { settoggle(!toggle) }} className="outerbtn-green-btnonewidth w-100">
                        <div className="innerbtn">
                          <span className="btnspan"></span>
                          <h5 className="btntext">Confirm</h5>
                        </div>
                      </div>
                    </>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal className='cryptomodal' show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Select Crypto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='modalcard'>
            <div className='parentmodal'>
              <div className='left'>
                <img src='\Assets\btc-logo1.svg' alt='img' className='img-fluid' />
              </div>
              <div className='right'>
                <h6>BTC</h6>
                <p>Bitcoin</p>
              </div>
            </div>
          </div>
          <div className='modalcard'>
            <div className='parentmodal'>
              <div className='left'>
                <img src='\Assets\sidebar-icons\ethereum-eth 3.svg' alt='img' className='img-fluid' />
              </div>
              <div className='right'>
                <h6>ETH</h6>
                <p>Ethereum</p>
              </div>
            </div>
          </div>
          <div className='modalcard'>
            <div className='parentmodal'>
              <div className='left'>
                <img src='\Assets\sidebar-icons\BNB1.svg' alt='img' className='img-fluid' />
              </div>
              <div className='right'>
                <h6>BNB</h6>
                <p>BNB</p>
              </div>
            </div>
          </div>
          <div className='modalcard'>
            <div className='parentmodal'>
              <div className='left'>
                <img src='\Assets\sidebar-icons\busd.svg' alt='img' className='img-fluid' />
              </div>
              <div className='right'>
                <h6>BUSD</h6>
                <p>BUSD</p>
              </div>
            </div>
          </div>
          <div className='modalcard'>
            <div className='parentmodal'>
              <div className='left'>
                <img src='\Assets\sidebar-icons\cardano.svg' alt='img' className='img-fluid' />
              </div>
              <div className='right'>
                <h6>ADA</h6>
                <p>Cardano</p>
              </div>
            </div>
          </div>
          <div className='modalcard'>
            <div className='parentmodal'>
              <div className='left'>
                <img src='\Assets\sidebar-icons\ALICE.svg' alt='img' className='img-fluid' />
              </div>
              <div className='right'>
                <h6>ALICE</h6>
                <p>My neighbour Alice</p>
              </div>
            </div>
          </div>
          <div className='modalcard'>
            <div className='parentmodal'>
              <div className='left'>
                <img src='\Assets\sidebar-icons\ALICE1.svg' alt='img' className='img-fluid' />
              </div>
              <div className='right'>
                <h6>ALPINE</h6>
                <p>Alpine F1 Team Fan Token</p>
              </div>
            </div>
          </div>
        </Modal.Body>

      </Modal>

      <Modal className='cryptomodal' show={show1} onHide={handleClose1} centered>
        <Modal.Header closeButton>
          <Modal.Title>Select Currency</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='modalcard'>
            <div className='parentmodal'>
              <div className='left'>
                <img src='\Assets\dollar-symbol.svg' alt='img' className='img-fluid' />
              </div>
              <div className='right'>
                <h6>USD</h6>
                <p>United State Dollars</p>
              </div>
            </div>
          </div>
          <div className='modalcard'>
            <div className='parentmodal'>
              <div className='left'>
                <img src='\Assets\sidebar-icons\dirham.svg' alt='img' className='img-fluid' />
              </div>
              <div className='right'>
                <h6>AED</h6>
                <p>United Arab Emirates Dirham</p>
              </div>
            </div>
          </div>
          <div className='modalcard'>
            <div className='parentmodal'>
              <div className='left'>
                <img src='\Assets\sidebar-icons\afghan.svg' alt='img' className='img-fluid' />
              </div>
              <div className='right'>
                <h6>AFN</h6>
                <p>Afghan Afghani</p>
              </div>
            </div>
          </div>
          <div className='modalcard'>
            <div className='parentmodal'>
              <div className='left'>
                <img src='\Assets\sidebar-icons\dram.svg' alt='img' className='img-fluid' />
              </div>
              <div className='right'>
                <h6>AMD</h6>
                <p>Armenian Dram</p>
              </div>
            </div>
          </div>
          <div className='modalcard'>
            <div className='parentmodal'>
              <div className='left'>
                <img src='\Assets\sidebar-icons\argentine-peso.svg' alt='img' className='img-fluid' />
              </div>
              <div className='right'>
                <h6>ARS</h6>
                <p>Argentine Peso</p>
              </div>
            </div>
          </div>
          <div className='modalcard'>
            <div className='parentmodal'>
              <div className='left'>
                <img src='\Assets\sidebar-icons\australian-dollars.svg' alt='img' className='img-fluid' />
              </div>
              <div className='right'>
                <h6>AUD</h6>
                <p>Australian Dollar</p>
              </div>
            </div>
          </div>
          <div className='modalcard'>
            <div className='parentmodal'>
              <div className='left'>
                <img src='\Assets\sidebar-icons\australian-dollars.svg' alt='img' className='img-fluid' />
              </div>
              <div className='right'>
                <h6>AZN</h6>
                <p>Azerbaijani Manat</p>
              </div>
            </div>
          </div>
          <div className='modalcard'>
            <div className='parentmodal'>
              <div className='left'>
                <img src='\Assets\sidebar-icons\bulgarian-lev.svg' alt='img' className='img-fluid' />
              </div>
              <div className='right'>
                <h6>BGN</h6>
                <p>Bulgarian Lev</p>
              </div>
            </div>
          </div>
        </Modal.Body>

      </Modal>

      <Modal className='paymentmodal' show={show2} onHide={handleClose2} centered>
        <Modal.Header closeButton>
          <Modal.Title>Select Payment Method</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='main-input'>
            <div className='first'>
              <input type='text' placeholder='Ending with 9081' />
              <img src='\Assets\sidebar-icons\image.svg' alt='img' className='img-fluid' />
            </div>
            <div className='second'>
              <input type='text' placeholder='Ending with 9081' />
              <img src='\Assets\sidebar-icons\Frame777.svg' alt='img' className='img-fluid' />
            </div>
            <div className='add'>
              <button onClick={()=>{
                handleShow3();
                handleClose2();
              }}>Add New Card</button>
            </div>
          </div>
        </Modal.Body>

      </Modal>

      <Modal className='cardmodal' show={show3} onHide={handleClose3} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add New Card</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="material-textfield">
            <input placeholder="Ex: John Doe" type="text" />
            <label>Name</label>
          </div>
          <div class="material-textfield">
            <input placeholder="XXXX XXXX XXXX XXX" type="text" />
            <label>Card Number</label>
          </div>
          <div className='parent'>
            <div class="material-textfield">
              <input placeholder="MM/YY" type="text" />
              <label>Expiry Date</label>
            </div>
            <div class="material-textfield">
              <input placeholder="Enter CVV" type="text" />
              <label>Security Code (CVV)</label>
            </div>
          </div>
          <div className='confirmbtn'>
            <div className="outerbtn-green-btnonewidth w-100">
              <div className="innerbtn">
                <span className="btnspan"></span>
                <h5 className="btntext">Confirm</h5>
              </div>
            </div>
          </div>
        </Modal.Body>

      </Modal>
    </>
  )
}

export default Buycrypto