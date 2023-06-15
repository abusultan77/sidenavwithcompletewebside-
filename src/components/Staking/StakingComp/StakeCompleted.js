import React from 'react'

const StakeCompleted = () => {
    return (
        <div className='tab22-wrapperrr unstaking-part'>
            <div className='tab22-headder'>
                <h3>Completed</h3>
                <p>You have successfully staked XXX $LAU</p>
            </div>
            <div className='tab22-body'>
                <div className="option-fields unstake-amount-input">
                    <div class="material-textfield ">
                        <input placeholder="0xD60745EB24CA1F87B66DCA3B33571DD0BA85FB8E" type="text" />
                        <label>Transaction hash</label>
                    </div>
                </div>

                <div className='current-blance-text current-blance-text-flex'>
                    <p className='left-text'>
                        <a>View on ETH Mainnet explorer.</a>
                    </p>
                    {/* <p>Current Balance: 14,000 $LAU</p> */}
                </div>

                <div className="outerbtn-green-btnonewidth my-btn">
                    <div className="innerbtn">
                        <span className="btnspan"></span>
                        <h5 className="btntext">Confirm</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StakeCompleted