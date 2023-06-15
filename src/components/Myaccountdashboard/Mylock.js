import React, { useState } from 'react'
import "./myaccountdashboard.scss"
import { Link } from 'react-router-dom'
import { Dropdown, Nav } from 'react-bootstrap'
import Lockcreate from './Lockcreate'
const Mylock = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    const [toggle , settoggle] = useState(true)
    return (
        <>
        {
            toggle ?
            <section className="currpresale">
            <div className="currpresaleheadings">

            </div>
            <div className="maintabs tabss">
                <div className="searchinput">
                    <img src="\Assets\home-assets\search-normal.svg" alt="searchinputimg" className="searchinputimg" />
                    <input type="text" placeholder='Enter token name or token sybmol' className="searchinputmain" />
                    <img src="\Assets\home-assets\mobilefilter.svg" alt="filterimg" onClick={handleShow} className="filterimg d-none" />
                </div>
                <div className='createbtns'>
                    <div className="outerbtn-green-btnonewidth w-100 createbtn" onClick={()=>{settoggle(!toggle)}}>
                        <div className="innerbtn">
                            <span className="btnspan"></span>
                            <h5 className="btntext">Create Lock</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lockcard'>
                <div className='lockparent'>
                    <div className='lockleft'>
                        <div className='innerlock'>
                            <div className='innerleft'>
                                <div className='imgagess'>
                                <img src='\Assets\sidebar-icons\ci_lock.svg' alt='img' className='img-fluid' />
                                </div>
                               <div className='text'>
                               <h6>Test-lock-without-vesting</h6>
                                <p>LaunchPadTestToken2</p>
                               </div>
                               
                            </div>
                            <div className='innerright'>
                                <p>Amount</p>
                                <h6>10,000 BNB</h6>
                            </div>
                        </div>
                    </div>
                    <div className='lockright'>
                        <div className='detailveiw'>
                            <div className="outerbtn-green-btnonewidth w-100 details">
                                <div className="innerbtn">
                                    <span className="btnspan"></span>
                                    <h5 className="btntext">View Details</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lockcard'>
                <div className='lockparent'>
                    <div className='lockleft'>
                        <div className='innerlock'>
                            <div className='innerleft'>
                                <div className='imgagess'>
                                <img src='\Assets\sidebar-icons\ci_lock.svg' alt='img' className='img-fluid' />
                                </div>
                               <div className='text'>
                               <h6>Test-lock-without-vesting</h6>
                                <p>LaunchPadTestToken2</p>
                               </div>
                               
                            </div>
                            <div className='innerright'>
                                <p>Amount</p>
                                <h6>10,000 BNB</h6>
                            </div>
                        </div>
                    </div>
                    <div className='lockright'>
                        <div className='detailveiw'>
                            <div className="outerbtn-green-btnonewidth w-100 details">
                                <div className="innerbtn">
                                    <span className="btnspan"></span>
                                    <h5 className="btntext">View Details</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lockcard'>
                <div className='lockparent'>
                    <div className='lockleft'>
                        <div className='innerlock'>
                            <div className='innerleft'>
                                <div className='imgagess'>
                                <img src='\Assets\sidebar-icons\ci_lock.svg' alt='img' className='img-fluid' />
                                </div>
                               <div className='text'>
                               <h6>Test-lock-without-vesting</h6>
                                <p>LaunchPadTestToken2</p>
                               </div>
                               
                            </div>
                            <div className='innerright'>
                                <p>Amount</p>
                                <h6>10,000 BNB</h6>
                            </div>
                        </div>
                    </div>
                    <div className='lockright'>
                        <div className='detailveiw'>
                            <div className="outerbtn-green-btnonewidth w-100 details">
                                <div className="innerbtn">
                                    <span className="btnspan"></span>
                                    <h5 className="btntext">View Details</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lockcard'>
                <div className='lockparent'>
                    <div className='lockleft'>
                        <div className='innerlock'>
                            <div className='innerleft'>
                                <div className='imgagess'>
                                <img src='\Assets\sidebar-icons\ci_lock.svg' alt='img' className='img-fluid' />
                                </div>
                               <div className='text'>
                               <h6>Test-lock-without-vesting</h6>
                                <p>LaunchPadTestToken2</p>
                               </div>
                               
                            </div>
                            <div className='innerright'>
                                <p>Amount</p>
                                <h6>10,000 BNB</h6>
                            </div>
                        </div>
                    </div>
                    <div className='lockright'>
                        <div className='detailveiw'>
                            <div className="outerbtn-green-btnonewidth w-100 details">
                                <div className="innerbtn">
                                    <span className="btnspan"></span>
                                    <h5 className="btntext">View Details</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            :
            <Lockcreate /> 
        }
       
        </>
    )
}

export default Mylock