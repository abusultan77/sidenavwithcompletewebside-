import React, { useState } from 'react'
import Lockcreate from './Lockcreate'

const Lockdetail = () => {
    const [toggle, settoggle] = useState(true)
    return (
        <>
            {
                toggle ?
                    <>
                        <section className='lock-detail'>

                            <div className='row'>
                                <div className='col-sm-12 p-0'>
                                    <div className='backbtn'>
                                            <button onClick={()=>{
                                                settoggle(!toggle)
                                            }}><img src='\Assets\sidebar-icons\arrow-left.svg' alt='img' className='img-fluid' />Back to My Locks</button>
                                       
                                    </div>
                                    <div className='lockdetailcard'>
                                        <div className='detailhead'>
                                            <h2>Lock Details</h2>
                                        </div>
                                        <div className='secondhead'>
                                            <h2>Total Tokens</h2>
                                        </div>
                                        <div className='locdetailparent'>
                                            <p>Token Address</p>
                                            <h6>0x7b44578c25F6CC536893699360E3a84b7aa9B5FB</h6>
                                        </div>
                                        <div className='locdetailparent'>
                                            <p>Token Name</p>
                                            <h6>PreSaleToken</h6>
                                        </div>
                                        <div className='locdetailparent'>
                                            <p>Token Symbol</p>
                                            <h6>PST</h6>
                                        </div>
                                        <div className='locdetailparent'>
                                            <p>Token decimals</p>
                                            <h6>18</h6>
                                        </div>
                                        <div className='headsecond'>
                                            <h2>Lock Info</h2>
                                        </div>
                                        <div className='locdetailparent'>
                                            <p>Title</p>
                                            <h6>Test-lock-without-vesting</h6>
                                        </div>
                                        <div className='locdetailparent'>
                                            <p>Total amount</p>
                                            <h6>10,000 BNB</h6>
                                        </div>
                                        <div className='locdetailparent'>
                                            <p>Total value locked</p>
                                            <h6>$3,151,943.08</h6>
                                        </div>
                                        <div className='locdetailparent'>
                                            <p>Owner</p>
                                            <h6>0x7b44578c25F6CC536893699360E3a84b7aa9B5FB</h6>
                                        </div>
                                        <div className='locdetailparent'>
                                            <p>Lock Date</p>
                                            <h6>2023-11-04 08:00:00 UTC</h6>
                                        </div>
                                        <div className='locdetailparent'>
                                            <p>Unlock Date</p>
                                            <h6>2024-05-04 12:55:00 UTC</h6>
                                        </div>
                                        <div className='lockbtn'>
                                            <div className="outerbtn-green-btnonewidth w-100">
                                                <div className="innerbtn">
                                                    <span className="btnspan"></span>
                                                    <h5 className="btntext">Unlock</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section>
                    </>
                    :
                    <Lockcreate />
            }

        </>
    )
}

export default Lockdetail