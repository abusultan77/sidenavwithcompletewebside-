import React from 'react'
import './swap.scss'
import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const Swap = () => {
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
  return (
    <>
      <section className="mainswap">
          <div className="swap">
            <div className="swapupper" onClick={handleShow2}>
              <h4 className="swaphead">Swap</h4>
              <span className="swapslippage">
                <p className="slippagetext">10.00% Slippage</p>
                <img src="\Assets\swap\setting.svg" alt="slippageimg" className="slippageimg" />
              </span>
            </div>
            <div className="swapmaininputs">
              <button className="swapupperbtn" onClick={handleShow1}>
                <div className="swapbtnleft">
                  <div className="swapbtnupperimg">
                    <img src="\Assets\btc-logo1.svg" alt="swapbtninnerimg" className="swapbtninnerimg" />
                  </div>
                  <p className="swapbtntext">BNB Chain</p>
                </div>
                <img src="\Assets\goldenarrow.svg" alt="swapbtnrightimg" className="swapbtnrightimg" />
                <span className="btnspan">Chain</span>
              </button>
              <div className="mainswapinputs">
                <div className="innerswapinput">
                  <input placeholder='0.00' type="text" className="swapinput" />
                  <span className="inputspan">From</span>
                  <button className="swapupperbtninput" onClick={handleShow}>
                    <div className="swapbtnleftinput">
                      <div className="swapbtnupperimginput">
                        <img src="\Assets\btc-logo1.svg" alt="swapbtninnerimginput" className="swapbtninnerimginput" />
                      </div>
                      <p className="swapbtntextinput">BNB</p>
                    </div>
                    <img src="\Assets\goldenarrow.svg" alt="swapbtnrightimg" className="swapbtnrightimginput" />
                  </button>
                </div>
                <img src="\Assets\swap\swaparrows.svg" alt="arrowws" className="arrowws" />
                <div className="innerswapinput">
                  <input placeholder='0.00' type="text" className="swapinput" />
                  <span className="inputspan">To</span>
                  <button className="swapupperbtninput">
                    <div className="swapbtnleftinput">
                      <div className="swapbtnupperimginput">
                        <img src="\Assets\btc-logo1.svg" alt="swapbtninnerimginput" className="swapbtninnerimginput" />
                      </div>
                      <p className="swapbtntextinput">BNB</p>
                    </div>
                    <img src="\Assets\goldenarrow.svg" alt="swapbtnrightimg" className="swapbtnrightimginput" />
                  </button>
                </div>
              </div>
              <div className="mainspans">
                <spans className="innerspans">25%</spans>
                <spans className="innerspans">50%</spans>
                <spans className="innerspans">75%</spans>
                <spans className="innerspans">MAX</spans>
              </div>
              <div className='swapacc'>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <div className='swapparent'>
                        <div className='left'>
                          <h4>Gas Fee</h4>
                        </div>
                        <div className='right'>
                          <div className='inner'>
                            <p><img src='\Assets\swap\gasoline-pump.svg' alt='img' className='img-fluid' />$1.47</p>
                            {/* <img src="\Assets\goldenarrow.svg" alt="swapbtnrightimg" className="swapbtnrightimg" /> */}
                          </div>
                        </div>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className='bodyparent'>
                        <p>Network fee</p>
                        <h6>~$1.47</h6>
                      </div>
                      <div className='bodyparent'>
                        <p>Price Impact</p>
                        <h6>-14.14%</h6>
                      </div>
                      <div className='bodyparent'>
                        <p>Minimum output</p>
                        <h6>521.41 BNB</h6>
                      </div>
                      <div className='bodyparent'>
                        <p>Expected output</p>
                        <h6>521.61 BNB</h6>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <div className="outerbtn-green-btnonewidth w-100" onClick={handleShow3}>
                <div className="innerbtn">
                  <span className="btnspan"></span>
                  <h5 className="btntext">Swap</h5>
                </div>
              </div>
            </div>
          </div>
      </section>

      <Modal className='tokenomodal' show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Select Token</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='searchbar'>
            <div class="material-textfield">
              <input placeholder="Search" type="text" />
              <label className='wlable'>
                Search Token
              </label>
            </div>
          </div>
          <div className='modalcardparent'>
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
          </div>

        </Modal.Body>

      </Modal>


      <Modal className='tokenomodal' show={show1} onHide={handleClose1} centered>
        <Modal.Header closeButton>
          <Modal.Title>Select Chain</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='searchbar'>
            <div class="material-textfield">
              <input placeholder=" Search Chain" type="text" />
              <label className='wlable'>
                Search
              </label>
            </div>
          </div>
          <div className='modalcardparent'>
            <div className='modalcard'>
              <div className='parentmodal'>
                <div className='left'>
                  <img src='\Assets\sidebar-icons\ethereum-eth 3.svg' alt='img' className='img-fluid' />
                </div>
                <div className='right'>
                  <h6>Ethereum Mainnet</h6>

                </div>
              </div>
            </div>
            <div className='modalcard'>
              <div className='parentmodal'>
                <div className='left'>
                  <img src='\Assets\swap\astart.svg' alt='img' className='img-fluid' />
                </div>
                <div className='right'>
                  <h6>Astar</h6>
                </div>
              </div>
            </div>
            <div className='modalcard'>
              <div className='parentmodal'>
                <div className='left'>
                  <img src='\Assets\swap\ava.svg' alt='img' className='img-fluid' />
                </div>
                <div className='right'>
                  <h6>Avalanche</h6>

                </div>
              </div>
            </div>
            <div className='modalcard'>
              <div className='parentmodal'>
                <div className='left'>
                  <img src='\Assets\swap\one.svg' alt='img' className='img-fluid' />
                </div>
                <div className='right'>
                  <h6>Arbitrum One</h6>

                </div>
              </div>
            </div>
            <div className='modalcard'>
              <div className='parentmodal'>
                <div className='left'>
                  <img src='\Assets\swap\op.svg' alt='img' className='img-fluid' />
                </div>
                <div className='right'>
                  <h6>Optimism</h6>

                </div>
              </div>
            </div>
            <div className='modalcard'>
              <div className='parentmodal'>
                <div className='left'>
                  <img src='\Assets\swap\fan.svg' alt='img' className='img-fluid' />
                </div>
                <div className='right'>
                  <h6>Fantom</h6>

                </div>
              </div>
            </div>
          </div>

        </Modal.Body>

      </Modal>

      <Modal className='tokenomodal' show={show2} onHide={handleClose2} centered>
        <Modal.Header closeButton>
          <Modal.Title>Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='slippage'>
            <h2>Slippage Tolerance</h2>
          </div>
          <div className="mainspans">
            <spans className="innerspans">0.1%</spans>
            <spans className="innerspans">0.5%</spans>
            <spans className="innerspans">1.0%</spans>
            <spans className="innerspans secondsss">0.50 <img src='\Assets\swap\percen.svg'alt='img'className='img-fluid'/></spans>
          </div>
          <div className='confirmbtnss'>
          <div className="outerbtn-green-btnonewidth w-100">
                <div className="innerbtn">
                  <span className="btnspan"></span>
                  <h5 className="btntext">Confirm</h5>
                </div>
              </div>
          </div>
        </Modal.Body>

      </Modal>

      
      <Modal className='tokenomodal' show={show3} onHide={handleClose3} centered>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
      <div className='loaderimg'>
        <img src='\Assets\swap\loader.svg'alt='loader'className='loaderimgage'/>
      </div>
      <div className='headingswap'>
        <h2>Waiting for confirmation</h2>
        <p>Confirm this transaction with your wallet</p>
      </div>
        </Modal.Body>

      </Modal>
      {/* <Modal className='tokenomodal' show={show3} onHide={handleClose3} centered>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
      <div className='loaderimg'>
        <img src='\Assets\swap\check-mark 1.svg'alt='loader'className='loaderimgage'/>
      </div>
      <div className='headingswap'>
        <h2>Swap Successfully</h2>
        <p className='green'>View on BSCScan</p>
      </div>
        </Modal.Body>

      </Modal> */}

{/* <Modal className='tokenomodal' show={show3} onHide={handleClose3} centered>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
      <div className='loaderimg'>
        <img src='\Assets\swap\remove.svg'alt='loader'className='loaderimgage'/>
      </div>
      <div className='headingswap'>
        <h3>Something went wrong</h3>
        <h4>Try increasing your slippage tolerance.</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
        </Modal.Body>

      </Modal> */}
    </>

  )
}

export default Swap