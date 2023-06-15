import React, { useState } from 'react'
import './myaccountdashboard.scss'
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { Dropdown } from 'react-bootstrap';
import Connectwalletmodal from '../Connectwalletmodal/Connectwalletmodal';
import Kycmodal from '../Kycmodals/Kycmodal';
import Userinfo from './Userinfo';
import Currpresale from './Currpresale';
import Myproject from './Myproject';
import Mylock from './Mylock';
import Favourite from './Favourite';

const Myaccountdashboard = () => {
    const [show1, setShow1] = useState(false);
    const handleShow1 = () => setShow1(true);

    const [show3, setShow3] = useState(false);
    const handleShow3 = () => setShow3(true);
    return (
        <>
            <section className="maindashboardaccount">
                {/* <div className="theme-container"> */}
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <div className="lowerdashboardmain">
                        <Nav variant="pills" className="sidebar sidebaraccount mt-0">
                            <div className='myaccountsidebarheader'>
                                <h2>MY ACCOUNT</h2>
                                <div className='mainimage'>
                                    <img src='\Assets\sidebar-icons\gamer.svg' alt='img' className='img-fluid' />
                                </div>
                                <div className='accountparent'>
                                    <div className='left'>
                                        <h4>Scott Foster</h4>
                                        <p>0x54t6X5TY43...5tx1</p>
                                    </div>
                                    <div className='right'>
                                        <div className='kycbtn'>
                                            <button><img src='\Assets\sidebar-icons\tick-circle1.svg' alt='img' className='img-fluid' />KYC</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="forscroll w-100">
                                <Nav.Item>
                                    <Nav.Link className='mynavlink' eventKey="first" >
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className='change-my-color'>
                                            <path d="M10.9997 1.83398C8.59801 1.83398 6.64551 3.78648 6.64551 6.18815C6.64551 8.54398 8.48801 10.4507 10.8897 10.5332C10.963 10.524 11.0363 10.524 11.0913 10.5332C11.1097 10.5332 11.1188 10.5332 11.1372 10.5332C11.1463 10.5332 11.1463 10.5332 11.1555 10.5332C13.5022 10.4507 15.3447 8.54398 15.3538 6.18815C15.3538 3.78648 13.4013 1.83398 10.9997 1.83398Z" fill="#777786" />
                                            <path d="M15.6569 12.9702C13.0994 11.2652 8.92854 11.2652 6.35271 12.9702C5.18854 13.7493 4.54688 14.8035 4.54688 15.931C4.54688 17.0585 5.18854 18.1035 6.34354 18.8735C7.62687 19.7352 9.31354 20.166 11.0002 20.166C12.6869 20.166 14.3735 19.7352 15.6569 18.8735C16.8119 18.0943 17.4535 17.0493 17.4535 15.9127C17.4444 14.7852 16.8119 13.7402 15.6569 12.9702Z" fill="#777786" />
                                        </svg>
                                        My Profile
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className='mynavlink' eventKey="second" >
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className='change-my-color'>
                                            <path d="M19.8643 6.37095C19.2776 4.38178 17.6185 2.72262 15.6293 2.13595C14.1168 1.69595 13.0718 1.73262 12.3476 2.27345C11.4768 2.92428 11.376 4.09762 11.376 4.93178V7.21428C11.376 9.46928 12.4026 10.6151 14.4193 10.6151H17.0501C17.8751 10.6151 19.0576 10.5143 19.7085 9.64345C20.2676 8.92845 20.3135 7.88345 19.8643 6.37095Z" fill="#777786" />
                                            <path d="M17.3344 12.247C17.0961 11.972 16.7478 11.8162 16.3903 11.8162H13.1086C11.4953 11.8162 10.1844 10.5054 10.1844 8.89205V5.61038C10.1844 5.25288 10.0286 4.90455 9.75361 4.66622C9.48777 4.42788 9.12111 4.31788 8.77277 4.36372C6.61861 4.63872 4.63861 5.82121 3.34611 7.59955C2.04444 9.38705 1.56777 11.5687 1.98027 13.7504C2.57611 16.9037 5.09694 19.4245 8.25944 20.0204C8.76361 20.1212 9.26777 20.167 9.77194 20.167C11.4311 20.167 13.0353 19.6537 14.4011 18.6545C16.1794 17.362 17.3619 15.382 17.6369 13.2279C17.6828 12.8704 17.5728 12.5129 17.3344 12.247Z" fill="#777786" />
                                        </svg>

                                        My Contributions
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className='mynavlink' eventKey="third" >
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className='change-my-color'>
                                            <path d="M16.4171 9.82617H13.5846V3.22617C13.5846 1.68617 12.7505 1.3745 11.733 2.5295L10.9996 3.36367L4.79381 10.422C3.94131 11.3845 4.29881 12.1728 5.58214 12.1728H8.41464V18.7728C8.41464 20.3128 9.24881 20.6245 10.2663 19.4695L10.9996 18.6353L17.2055 11.577C18.058 10.6145 17.7005 9.82617 16.4171 9.82617Z" fill="#777786" />
                                        </svg>
                                        My Projects
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className='mynavlink' eventKey="fourth" >
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className='change-my-color'>
                                            <path d="M11 15.9043C11.8252 15.9043 12.4942 15.2354 12.4942 14.4102C12.4942 13.585 11.8252 12.916 11 12.916C10.1748 12.916 9.50586 13.585 9.50586 14.4102C9.50586 15.2354 10.1748 15.9043 11 15.9043Z" fill="#777786" />
                                            <path d="M16.7563 8.73648V7.59065C16.7563 5.11565 16.1605 1.83398 10.9997 1.83398C5.83884 1.83398 5.24301 5.11565 5.24301 7.59065V8.73648C2.67634 9.05732 1.83301 10.359 1.83301 13.5582V15.2632C1.83301 19.0215 2.97884 20.1673 6.73717 20.1673H15.2622C19.0205 20.1673 20.1663 19.0215 20.1663 15.2632V13.5582C20.1663 10.359 19.323 9.05732 16.7563 8.73648ZM10.9997 17.179C9.46884 17.179 8.23134 15.9323 8.23134 14.4107C8.23134 12.8798 9.47801 11.6423 10.9997 11.6423C12.5213 11.6423 13.768 12.889 13.768 14.4107C13.768 15.9415 12.5305 17.179 10.9997 17.179ZM6.73717 8.65398C6.66384 8.65398 6.59967 8.65398 6.52634 8.65398V7.59065C6.52634 4.90482 7.28717 3.11732 10.9997 3.11732C14.7122 3.11732 15.473 4.90482 15.473 7.59065V8.66315C15.3997 8.66315 15.3355 8.66315 15.2622 8.66315H6.73717V8.65398Z" fill="#777786" />
                                        </svg>
                                        My Locks
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className='mynavlink' eventKey="fifth" >
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className='change-my-color'>
                                            <path d="M15.0697 2.8418C13.4105 2.8418 11.9255 3.64846 10.9997 4.88596C10.0738 3.64846 8.58884 2.8418 6.92967 2.8418C4.11551 2.8418 1.83301 5.13346 1.83301 7.96596C1.83301 9.0568 2.00717 10.0651 2.30967 11.0001C3.75801 15.5835 8.22217 18.3243 10.4313 19.076C10.743 19.186 11.2563 19.186 11.568 19.076C13.7772 18.3243 18.2413 15.5835 19.6897 11.0001C19.9922 10.0651 20.1663 9.0568 20.1663 7.96596C20.1663 5.13346 17.8838 2.8418 15.0697 2.8418Z" fill="#777786" />
                                        </svg>

                                        Favourite
                                    </Nav.Link>
                                </Nav.Item>
                            </div>
                        </Nav>
                        <Tab.Content className="content-side pt-0">
                            <div className="mainbtns">
                                <div className="outerbtn btnonewidth">
                                    <div className="innerbtn">
                                        <span className="btnspan"></span>
                                        <h5 className="btntext">Buy Token</h5>
                                    </div>
                                </div>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        <div className="outerbtn">
                                            <div className="innerbtn">
                                                <span className="btnspan"></span>
                                                <div className="btntextss">
                                                    <div className="btnimg">
                                                        <img src="\Assets\home-assets\exchangeimg.png" alt="btnexhchangeimg" className="btnexhchangeimg" />
                                                    </div>
                                                    <h6 className="btninnertext">32,210 BNB</h6>
                                                    <span className="btninnerspan">0x54t6...5tx1</span>
                                                    <img src="\Assets\home-assets\arrow-down-dark.svg" alt="arrowdownimg" className="arrowdownimg" />
                                                </div>
                                            </div>
                                        </div>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <div className="innerdrops">
                                            <div className="drop">
                                                <img src="\Assets\home-assets\myaccount.svg" alt="dropimg" className="dropimg" />
                                                <p className="droptext">My Account</p>
                                            </div>
                                            <div className="drop">
                                                <img src="\Assets\home-assets\mycontributions.svg" alt="dropimg" className="dropimg" />
                                                <p className="droptext">My Contributions</p>
                                            </div>
                                            <div className="drop">
                                                <img src="\Assets\home-assets\myprojects.svg" alt="dropimg" className="dropimg" />
                                                <p className="droptext">My Projects</p>
                                            </div>
                                            <div onClick={handleShow3} className="drop">
                                                <img src="\Assets\home-assets\kyc.svg" alt="dropimg" className="dropimg" />
                                                <p className="droptext">KYC</p>
                                            </div>
                                            <div onClick={handleShow1} className="drop">
                                                <img src="\Assets\home-assets\disconnect.svg" alt="dropimg" className="dropimg" />
                                                <p className="droptext">Disconnect</p>
                                            </div>
                                        </div>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <Tab.Pane eventKey="first">
                                {/* <Launchpad /> */}
                                <Userinfo />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                {/* <Privatesale /> */}
                                <Currpresale />
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                {/* <Buycrypto /> */}
                                <Myproject />
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                {/* <Leaderboard /> */}
                                <Mylock />
                            </Tab.Pane>
                            <Tab.Pane eventKey="fifth">
                                {/* <Create /> */}
                                <Favourite />
                            </Tab.Pane>
                            <Tab.Pane eventKey="sixth">
                                {/* <Staking /> */}
                            </Tab.Pane>
                            <Tab.Pane eventKey="seventh">
                                {/* <Nftlaunchpad /> */}
                            </Tab.Pane>
                            <Tab.Pane eventKey="eight">
                                {/* <Presale /> */}
                                {/* <Projectsdetails /> */}
                            </Tab.Pane>
                        </Tab.Content>
                    </div>

                </Tab.Container>
                {/* </div> */}
            </section>


            <Connectwalletmodal
                show1={show1}
                setShow1={setShow1}
            />
            <Kycmodal
                show3={show3}
                setShow3={setShow3}
            />
        </>
    )
}

export default Myaccountdashboard