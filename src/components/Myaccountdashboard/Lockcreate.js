import React, { useState } from 'react'
import "./myaccountdashboard.scss"
import { Link } from 'react-router-dom'
import Lockdetail from './Lockdetail'
const Lockcreate = () => {
    const [toggle, settoggle] = useState(true)
    return (
        <>
            {
                toggle ?
                    <section className='lockcreate'>
                      
                            <div className='row'>
                                <div className='col-sm-12 p-0'>
                                    <div className='backbtn'>
                                        <a href="/">
                                            <button><img src='\Assets\sidebar-icons\arrow-left.svg' alt='img' className='img-fluid' />Back to My Locks</button>
                                        </a>
                                    </div>
                                    <div className='lockcard'>
                                        <div className='main-heading'>
                                            <h2>Create Lock</h2>
                                        </div>
                                        <div class="material-textfield">     
                                            <input placeholder="EX: LaunchPad" type="text" />
                                            <label className='wlable'>
                                            Token address
                                            </label>
                                        </div>
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
                                            <p className="checkboxpara">use another owner?</p>
                                        </div>
                                        <div class="material-textfield">
                                            <input placeholder="Enter owner address" type="text" />
                                            <label className='wlable'> Owner </label>
                                        </div>
                                        <div class="material-textfield">
                                            <input placeholder="Ex: My Lock" type="text" />
                                            <label className='wlable'>Title</label>
                                        </div>
                                        <div className='lockmaterial'>
                                            <div class="material-textfield">
                                                <input placeholder="Enter amount" type="text" />
                                                <label className='wlable'>Amount</label>
                                                <div className='green'>
                                                    <h2>MAX</h2>
                                                </div>
                                            </div>

                                        </div>
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
                                            <p className="checkboxpara">use vesting?</p>
                                        </div>
                                        <div className='createparentss'>
                                            <div class="material-textfield parentinput">
                                                <input placeholder=" DD/MM/YY" type="text" />
                                                <label className='parentlabel'>
                                                    TGE Date (UTC time)
                                                </label>
                                                <div className='picclander'>
                                                    <img src='\Assets\sidebar-icons\calendar.svg' alt='img' className='img-fluid' />
                                                </div>
                                            </div>

                                            <div class="material-textfield parentinput">
                                                <input placeholder="Ex: 10%" type="text" />
                                                <label className='parentlabel'>
                                                    TGE Percent
                                                </label>
                                            </div>
                                        </div>
                                        <div className='createparentss'>
                                            <div class="material-textfield parentinput">
                                                <input placeholder=" Ex: 10" type="text" />
                                                <label className='parentlabel'>
                                                    Cycle (days)
                                                </label>
                                            </div>
                                            <div class="material-textfield parentinput">
                                                <input placeholder="  Ex: 10" type="text" />
                                                <label className='parentlabel'>
                                                    Cycle Release Percent
                                                </label>
                                            </div>
                                        </div>
                                        <div className='imageinput'>
                                            <div class="material-textfield">
                                                <input placeholder="DD/MM/YY" type="text" />
                                                <label className='wlable'>Lock until (UTC time)</label>
                                                <div className='picclander'>
                                                    <img src='\Assets\sidebar-icons\calendar.svg' alt='img' className='img-fluid' />
                                                </div>
                                            </div>
                                        </div>
                                            <div className='end-btn'>
                                                <div className="outerbtn-green-btnonewidth w-100 createbtn" onClick={()=>{settoggle(!toggle)}}>
                                                    <div className="innerbtn">
                                                        <span className="btnspan"></span>
                                                        <h5 className="btntext">Lock</h5>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        
                    </section>

                    :
                    <Lockdetail />
            }
        </>
    )
}

export default Lockcreate