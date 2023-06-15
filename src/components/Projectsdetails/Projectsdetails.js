import React, { useEffect, useState } from 'react'
import './projectsdetails.scss'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Dropdown, Nav } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import Chat from '../Chat/Chat';
import Game from '../Game/Game';
const Projectsdetails = () => {
    const [activeTab, setActiveTab] = useState('link-1');

    const handleSelect = (eventKey) => {
        setActiveTab(eventKey);
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [toggle, settoggle] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [isCheckboxChecked1, setIsCheckboxChecked1] = useState(false);
    const handleCheckboxClick1 = () => {
        setIsCheckboxChecked1(!isCheckboxChecked1);
    };

    const [isCheckboxChecked2, setIsCheckboxChecked2] = useState(false);
    const handleCheckboxClick2 = () => {
        setIsCheckboxChecked2(!isCheckboxChecked2);
    };

    const [isCheckboxChecked3, setIsCheckboxChecked3] = useState(false);
    const handleCheckboxClick3 = () => {
        setIsCheckboxChecked3(!isCheckboxChecked3);
    };
    return (
        <>
            {
                toggle == 0 ?
                    <>
                        <section className='projectsdetails'>
                            <div className='container-fluid'>
                                <div className='row'>
                                    <div className='col-sm-12 paddddd'>

                                        <div className='backbtn'>
                                            <a href="/">
                                                <button><img src='\Assets\sidebar-icons\arrow-left.svg' alt='img' className='img-fluid' />Back to Projects</button>
                                            </a>
                                        </div>

                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-xl-8 col-lg-12 col-md-12 col-12 projectsdetails-left-box paddddd'>
                                        <div className='innercard'>
                                            <div className='cardparent'>
                                                <div className='left'>
                                                    <img src='\Assets\sidebar-icons\nftgame.svg' alt='img' className='img-fluid' />
                                                </div>
                                                <div className='right'>
                                                    <h3>Kryptomon</h3>
                                                    <p>Fair Launch</p>
                                                    <div className='icons'>
                                                        <img src='\Assets\sidebar-icons\twitter.png' alt='img' className='img-fluid' />
                                                        <img src='\Assets\sidebar-icons\telegram1.svg' alt='img' className='img-fluid' />
                                                        <img src='\Assets\sidebar-icons\instagram1.svg' alt='img' className='img-fluid' />
                                                        <img src='\Assets\sidebar-icons\Discord1.svg' alt='img' className='img-fluid' />
                                                        <img src='\Assets\sidebar-icons\reddit1.svg' alt='img' className='img-fluid' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='box'>
                                                <div className='left'>
                                                    <div className='box-card'>
                                                        <div className='leftbox'>
                                                            <h5>Chains</h5>
                                                        </div>
                                                        <div className='rightbox'>
                                                            <img src='\Assets\sidebar-icons\ethereum.svg' alt='img' className='img-fluid' />
                                                            <img src='\Assets\sidebar-icons\bnb-bnb.svg' alt='img' className='img-fluid' />
                                                            <img src='\Assets\sidebar-icons\arbitrum.svg' alt='img' className='img-fluid' />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='left'>
                                                    <div className='box-card'>
                                                        <div className='leftbox'>
                                                            <h5>Project Badges</h5>
                                                        </div>
                                                        <div className='rightbox'>
                                                            <img src='\Assets\sidebar-icons\badge.svg' alt='img' className='img-fluid' />
                                                            <img src='\Assets\sidebar-icons\badge1.svg' alt='img' className='img-fluid' />
                                                            <img src='\Assets\sidebar-icons\badge2.svg' alt='img' className='img-fluid' />
                                                            <img src='\Assets\sidebar-icons\sticker.svg' alt='img' className='img-fluid' />
                                                            <img src='\Assets\sidebar-icons\coin.svg' alt='img' className='img-fluid' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='greenbox'>
                                                <p><img src='\Assets\sidebar-icons\shield1.svg' alt='img' className='img-fluid' />This presale is insured</p>
                                                <div className='shieldimg'>
                                                    <img src='\Assets\sidebar-icons\shield2.svg' alt='img' className='img-fluid' />
                                                </div>
                                            </div>
                                            <p className='nfts'>Kryptomon is an NFT Play-And-Earn web3 game, where Pokamon meets Tamagotchi and CryptoKitties.</p>
                                            <p className='nfts'>Set in the Kryptomon metaverse, community members play as of their own individual monsters Kryptomons each of which is a completely unique digital asset connected to an NFT. Each has a unique but mutable genetic code made up of 38 randomised parameters that determine all of the aspects physical and behavioural of the creature.</p>
                                            <p className='nfts'>This not only ensures that each Kryptomon is unique but also brings to life each Kryptomon as a digital companion in the Kryptomon metaverse. They are capable of learning, falling sick, getting hungry, and protecting their trainers when out on an adventure in the physical world. In turn, trainers will have to care for, feed, and train their Kryptomon partners in order to grow and prepare for the battles ahead.</p>
                                            <div className='kmonimg'>
                                                <img src='\Assets\sidebar-icons\kmon.svg' alt='img' className='img-fluid w-100' />
                                            </div>
                                            <p className='nfts'>Play and participate in the Kryptomon league to become the Kryptomon Metaverse Champion!</p>
                                        </div>
                                    </div>
                                    <div className='col-xl-4 col-lg-12 col-md-12 col-12 paddddd'>
                                        <div className='startcard'>
                                            <div className='parent'>
                                                <div className='left'>
                                                    <h4>Presale Starts In</h4>
                                                </div>
                                                <div className='right'>
                                                    <div className='inner'>
                                                        <p className='green'>02</p>
                                                        <p className='grey'>Days</p>
                                                    </div>
                                                    <span>:</span>
                                                    <div className='inner'>
                                                        <p className='green'>23</p>
                                                        <p className='grey'>Hours</p>
                                                    </div>
                                                    <span>:</span>
                                                    <div className='inner'>
                                                        <p className='green'>15</p>
                                                        <p className='grey'>MINUTES</p>
                                                    </div>
                                                    <span>:</span>
                                                    <div className='inner'>
                                                        <p className='green'>45</p>
                                                        <p className='grey'>Seconds</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="forcolor">
                                            <div className="currpresalecardboxinner">
                                                <div className="currpresalecardboxleft">
                                                    <p className="currpresalecardboxupperpara whitte">Project Progress</p>
                                                </div>
                                            </div>
                                            <div className="cardprogress">
                                                <div className="cardprogressheadings">
                                                    <p className="cardprogresspara">Progress</p>
                                                    <h6 className="cardprogresshead">50.5%</h6>
                                                </div>
                                                <ProgressBar now={60} />
                                                <div className="cardprogressheadings">
                                                    <p className="cardprogresspara">5,550 ETH</p>
                                                    <h6 className="cardprogresshead">10,000 ETH</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='projectcard'>
                                            <div className='heading'>
                                                <h3>Join Project</h3>
                                                <p>Amount (max: 2.5 BNB)</p>
                                            </div>
                                            <div className='maininput'>
                                                <input type='text' placeholder='Enter amount' />
                                                <div className="outerbtn-green-btnonewidth w-100 max">
                                                    <div className="innerbtn">
                                                        <span className="btnspan"></span>
                                                        <h5 className="btntext">MAX</h5>
                                                    </div>
                                                </div>
                                                <div className='parent'>
                                                    <div className={isCheckboxChecked1 ? 'uppercheckboxpara1 activeTab' : 'uppercheckboxpara1 '}>
                                                        <div className='chec'>
                                                            <div class="example">
                                                                <label class="checkbox-button">
                                                                    <input type="checkbox" onChange={() => handleCheckboxClick1()} checked={isCheckboxChecked1} class="checkbox-button__input" id="choice1-1" name="choice1" />
                                                                    <span class="checkbox-button__control"></span>
                                                                    {/* <span class="checkbox-button__label">I agree</span> */}
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <p className="checkboxpara">BNB</p>
                                                    </div>
                                                    <div className={isCheckboxChecked2 ? 'uppercheckboxpara1 activeTab' : 'uppercheckboxpara1 '}>
                                                        <div className='chec'>
                                                            <div class="example">
                                                                <label class="checkbox-button">
                                                                    <input onChange={() => handleCheckboxClick2()} checked={isCheckboxChecked2} type="checkbox" class="checkbox-button__input" id="choice1-1" name="choice1" />
                                                                    <span class="checkbox-button__control"></span>
                                                                    {/* <span class="checkbox-button__label">I agree</span> */}
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <p className="checkboxpara">ETH</p>
                                                    </div>
                                                    <div className={isCheckboxChecked3 ? 'uppercheckboxpara1 activeTab' : 'uppercheckboxpara1 '}>
                                                        <div className='chec'>
                                                            <div class="example">
                                                                <label class="checkbox-button">
                                                                    <input onChange={() => handleCheckboxClick3()} checked={isCheckboxChecked3} type="checkbox" class="checkbox-button__input" id="choice1-1" name="choice1" />
                                                                    <span class="checkbox-button__control"></span>
                                                                    {/* <span class="checkbox-button__label">I agree</span> */}
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <p className="checkboxpara">ARB</p>
                                                    </div>
                                                </div>
                                                <div className='mainbutton'>
                                                    <div className="outerbtn-green-btnonewidth w-100">
                                                        <div className="innerbtn">
                                                            <span className="btnspan"></span>
                                                            <h5 className="btntext">Buy Now</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='prograsscard'>
                                            <div className='parent'>
                                                <div className='left'>
                                                    <p>Status</p>
                                                </div>
                                                <div className='right'>
                                                    <h6>Inprogress</h6>
                                                </div>
                                            </div>
                                            <div className='parent'>
                                                <div className='left'>
                                                    <p>Current Rate</p>
                                                </div>
                                                <div className='right'>
                                                    <h6>1 BNB = 105,09.408 TOKN</h6>
                                                </div>
                                            </div>
                                            <div className='parent'>
                                                <div className='left'>
                                                    <p>Max Contribution</p>
                                                </div>
                                                <div className='right'>
                                                    <h6>2.5 BNB</h6>
                                                </div>
                                            </div>
                                            <div className='parent'>
                                                <div className='left'>
                                                    <p>Total Contributors</p>
                                                </div>
                                                <div className='right'>
                                                    <h6>241</h6>
                                                </div>
                                            </div>
                                            <div className='parent'>
                                                <div className='left'>
                                                    <p>You purchased</p>
                                                </div>
                                                <div className='right'>
                                                    <h6>1,000</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='gamebutton'>
                                            <div onClick={() => {
                                                settoggle(1);
                                            }} className="outerbtn-green-btnonewidth chat">
                                                <div className="innerbtn">
                                                    <span className="btnspan"></span>
                                                    <h5 className="btntext">Chat</h5>
                                                </div>
                                            </div>

                                            <div onClick={() => {
                                                settoggle(2);
                                            }} className="outerbtn chat">
                                                <div className="innerbtn">
                                                    <span className="btnspan"></span>
                                                    <h5 className="btntext">Play Game</h5>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-sm-12 px-0'>
                                        <div className="maintabs">
                                            <Nav variant="pills" activeKey={activeTab} onSelect={handleSelect}>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="link-1">
                                                        <div className="outerbtn-green-btnonewidthnav">
                                                            <div className="innerbtnnav">
                                                                <span className="btnspannav"></span>
                                                                <h5 className="btntextnav">Information</h5>
                                                            </div>
                                                        </div>
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="link-2">
                                                        <div className="outerbtn-green-btnonewidthnav">
                                                            <div className="innerbtnnav">
                                                                <span className="btnspannav"></span>
                                                                <h5 className="btntextnav">Claim</h5>
                                                            </div>
                                                        </div>
                                                    </Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                        </div>
                                        {activeTab === 'link-1' && (
                                            <div className='row information-tabe-row'>
                                                <div className='col-xl-5 col-lg-5 col-md-12 col-12 information-tabe-info-col paddddd'>
                                                    <div className='poolcard'>
                                                        <div className='heading'>
                                                            <h2>Pool Information</h2>
                                                        </div>
                                                        <div className='poolparent'>
                                                            <div className='left'>
                                                                <p>Opens</p>
                                                            </div>
                                                            <div className='right'>
                                                                <h6>2023-11-04 08:00:00 UTC</h6>
                                                            </div>
                                                        </div>
                                                        <div className='poolparent'>
                                                            <div className='left'>
                                                                <p>FCFS Opens</p>
                                                            </div>
                                                            <div className='right'>
                                                                <h6>2023-11-04 08:00:00 UTC</h6>
                                                            </div>
                                                        </div>
                                                        <div className='poolparent'>
                                                            <div className='left'>
                                                                <p>Closes</p>
                                                            </div>
                                                            <div className='right'>
                                                                <h6>2023-11-04 08:00:00 UTC</h6>
                                                            </div>
                                                        </div>
                                                        <div className='poolparent'>
                                                            <div className='left'>
                                                                <p>Token Price</p>
                                                            </div>
                                                            <div className='right'>
                                                                <h6>0.0431 BUSD</h6>
                                                            </div>
                                                        </div>
                                                        <div className='poolparent'>
                                                            <div className='left'>
                                                                <p>Total Raise</p>
                                                            </div>
                                                            <div className='right'>
                                                                <h6>$2,000</h6>
                                                            </div>
                                                        </div>
                                                        <div className='poolparent'>
                                                            <div className='left'>
                                                                <p>Cap Soft / Hard</p>
                                                            </div>
                                                            <div className='right'>
                                                                <h6>100 BUSD / 500 BUSD</h6>
                                                            </div>
                                                        </div>
                                                        <div className='poolparent'>
                                                            <div className='left'>
                                                                <p>Access Type</p>
                                                            </div>
                                                            <div className='right'>
                                                                <h6>Public</h6>
                                                            </div>
                                                        </div>
                                                        <div className='poolparent'>
                                                            <div className='left'>
                                                                <p>Swap Amount</p>
                                                            </div>
                                                            <div className='right'>
                                                                <h6>44,444 TOKN</h6>
                                                            </div>
                                                        </div>
                                                        <div className='poolparent'>
                                                            <div className='left'>
                                                                <p>Token Network</p>
                                                            </div>
                                                            <div className='right'>
                                                                <h6>BNB</h6>
                                                            </div>
                                                        </div>
                                                        <div className='poolparent'>
                                                            <div className='left'>
                                                                <p>Accepted Currency</p>
                                                            </div>
                                                            <div className='right'>
                                                                <h6>BUSD</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-xl-7 col-lg-5 col-md-12 col-12 paddddd'>
                                                    <div className='tokencard pb-5'>
                                                        <div className='head'>
                                                            <h2>TOKEN Information</h2>
                                                        </div>
                                                        <div className='row'>
                                                            <div className='col-xl-4 col-6 paddddd'>
                                                                <div className='innercontent'>
                                                                    <p>Token Name</p>
                                                                    <h6>TokenName</h6>
                                                                </div>
                                                                <div className='innercontent'>
                                                                    <p>Token Decimals</p>
                                                                    <h6>18</h6>
                                                                </div>
                                                                <div className='innercontent'>
                                                                    <p>Tokens For Presale</p>
                                                                    <h6>30,000,000 TOKN</h6>
                                                                </div>
                                                                <div className='innercontent'>
                                                                    <p>Liquidity Percent</p>
                                                                    <h6>61%</h6>
                                                                </div>
                                                            </div>
                                                            <div className='col-xl-4 col-6 paddddd'>
                                                                <div className='innercontent'>
                                                                    <p>Symbol</p>
                                                                    <h6>TOKN</h6>
                                                                </div>
                                                                <div className='innercontent'>
                                                                    <p>Token Address</p>
                                                                    <h6>0x7353AEB429...c3fd</h6>
                                                                </div>
                                                                <div className='innercontent'>
                                                                    <p>Tokens For Liquidity</p>
                                                                    <h6>17,385,000 TOKN</h6>
                                                                </div>
                                                                <div className='innercontent'>
                                                                    <p>Liquidity Lockup Time</p>
                                                                    <h6>367 days after pool ends</h6>
                                                                </div>
                                                            </div>
                                                            <div className='col-xl-4 col-12 paddddd'>
                                                                <div className="row">
                                                                <div className='col-xl-12 col-6 p-0 paddddd'>
                                                                    <div className='innercontent'>
                                                                        <p>Presale Address</p>
                                                                        <h6>0x455389738B...8C64</h6>
                                                                    </div>
                                                                </div>
                                                                <div className='col-xl-12 col-6 p-0 paddddd'>
                                                                    <div className='innercontent'>
                                                                        <p>Total Supply</p>
                                                                        <h6>100,000,000 TOKN</h6>
                                                                    </div>
                                                                </div>
                                                                <div className='col-xl-12 col-6 p-0 paddddd'>
                                                                    <div className='innercontent'>
                                                                        <p>Listing On</p>
                                                                        <h6>Pancakeswap</h6>
                                                                    </div>
                                                                </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {activeTab === 'link-2' && (
                                            <div className='row'>
                                                <div className='col-sm-5 p-0 paddddd'>
                                                    <div className='poolcard'>
                                                        <div className='heading'>
                                                            <h2>Pool Information</h2>
                                                        </div>
                                                        <div className='poolparent'>
                                                            <div className='left'>
                                                                <p>Network</p>
                                                            </div>
                                                            <div className='right'>
                                                                <h6>ETH</h6>
                                                            </div>
                                                        </div>
                                                        <div className='poolparent'>
                                                            <div className='left'>
                                                                <p>Symbol</p>
                                                            </div>
                                                            <div className='right'>
                                                                <h6>TOKN</h6>
                                                            </div>
                                                        </div>
                                                        <div className='poolparent'>
                                                            <div className='left'>
                                                                <p>Token Price</p>
                                                            </div>
                                                            <div className='right'>
                                                                <h6>0.0431 BUSD</h6>
                                                            </div>
                                                        </div>
                                                        <div className='poolparent'>
                                                            <div className='left'>
                                                                <p>Have Bought</p>
                                                            </div>
                                                            <div className='right'>
                                                                <h6>1,000</h6>
                                                            </div>
                                                        </div>
                                                        <div className='poolparent'>
                                                            <div className='left'>
                                                                <p>Equivalent</p>
                                                            </div>
                                                            <div className='right'>
                                                                <h6>XXX,XXX.XXX TOKN</h6>
                                                            </div>
                                                        </div>
                                                        <div className='poolparent'>
                                                            <div className='left'>
                                                                <p>Token Network</p>
                                                            </div>
                                                            <div className='right'>
                                                                <h6>BNB</h6>
                                                            </div>
                                                        </div>
                                                        <div className='poolparent'>
                                                            <div className='left'>
                                                                <p>Accepted Currency</p>
                                                            </div>
                                                            <div className='right'>
                                                                <h6>BUSD</h6>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className='col-sm-7 paddddd'>
                                                    <div className='tokencard h-100'>
                                                        <div className='head'>
                                                            <h2>CLAIM DETAILS</h2>
                                                        </div>
                                                        <div className='row'>
                                                            <div className='col-sm-4 paddddd p-0'>
                                                                <div className='innercontent'>
                                                                    <p>OPEN (GMT+5)</p>
                                                                    <h6>2022-08-16 21:30:00</h6>
                                                                </div>
                                                            </div>
                                                            <div className='col-sm-4 paddddd p-0'>
                                                                <div className='innercontent'>
                                                                    <p>Percentage</p>
                                                                    <h6>30%</h6>
                                                                </div>
                                                            </div>
                                                            <div className='col-sm-4 paddddd p-0'>
                                                                <div className='innercontent'>
                                                                    <p>Claimed</p>
                                                                    <h6>0.00</h6>
                                                                </div>

                                                            </div>
                                                            <div className='claimbutton'>
                                                                <div className="outerbtn-green-btnonewidth w-100 claim">
                                                                    <div className="innerbtn">
                                                                        <span className="btnspan"></span>
                                                                        <h5 className="btntext">Claim Token</h5>
                                                                    </div>
                                                                </div>
                                                                <div className="outerbtn claim">
                                                                    <div className="innerbtn">
                                                                        <span className="btnspan"></span>
                                                                        <h5 className="btntext">Add token to MetaMask</h5>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                    :
                    toggle == 1 ?
                        <Chat settoggle={settoggle} />
                        :
                        toggle == 2 ?
                            <Game settoggle={settoggle} />
                            : ""

            }

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>

            </Modal>
        </>
    )
}

export default Projectsdetails