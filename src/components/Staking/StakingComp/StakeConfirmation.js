import React from 'react'

const StakeConfirmation = () => {
    return (
        <div className='tab22-wrapperrr unstaking-part'>
            <div className='tab22-headder'>
                <h3>Enter Amount</h3>
                <p>The amount of $LAU you want to stake</p>
            </div>
            <div className='tab22-body'>
                <div className="option-fields unstake-amount-input">
                    <div class="material-textfield ">
                        <input placeholder="5,000" type="text" />
                        <label>Enter the $LAU amount you want to unstake</label>
                    </div>
                </div>

                <div className='current-blance-text current-blance-text-flex'>
                    <p className='left-text'>
                        Need more $LAU? <a>Buy here</a>
                    </p>
                    <p>Current Balance: 14,000 $LAU</p>
                </div>

                <div className='unstakeAmount-buttons'>
                    <div className="outerbtn btnonewidth my-btn">
                        <div className="innerbtn">
                            <span className="btnspan"></span>
                            <h5 className="btntext">Back</h5>
                        </div>
                    </div>
                    <div className="outerbtn-green-btnonewidth my-btn">
                        <div className="innerbtn">
                            <span className="btnspan"></span>
                            <h5 className="btntext">Confirm</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StakeConfirmation