import React from 'react';
import '../../Buycrypto/buycrypto.scss'
import '../staking.scss';


const UnstakeAmount = ({ confirmationhandle, confirmationBackhandle }) => {
    return (
        <div className='tab22-wrapperrr unstaking-part'>
            <div className='tab22-headder'>
                <h3>Unstake Amount</h3>
                <p>The amount of $LAU you want to unstake</p>
            </div>
            <div className='tab22-body'>
                <div className="option-fields unstake-amount-input">
                    <div class="material-textfield ">
                        <p className='new-text'>MAX</p>
                        <input placeholder="5,000" type="text" />
                        <label>Enter the $LAU amount you want to unstake</label>
                    </div>
                </div>

                <div className='current-blance-text'>
                    <p>Current Balance: 14,000 $LAU</p>
                </div>

                <div className='unstakeAmount-buttons'>
                    <div className="outerbtn btnonewidth my-btn" onClick={() => confirmationBackhandle()}>
                        <div className="innerbtn">
                            <span className="btnspan"></span>
                            <h5 className="btntext">Back</h5>
                        </div>
                    </div>
                    <div className="outerbtn-green-btnonewidth my-btn" onClick={() => confirmationhandle()}>
                        <div className="innerbtn">
                            <span className="btnspan"></span>
                            <h5 className="btntext">Next</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UnstakeAmount