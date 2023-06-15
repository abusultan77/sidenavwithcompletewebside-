import React from 'react';
import '../../Buycrypto/buycrypto.scss'
import '../staking.scss';

const StakeConfirmationComp = ({ completeStakeHandle, confirmationBackHandle }) => {
    return (
        <div className='tab22-wrapperrr unstaking-part'>
            <div className='tab22-headder'>
                <h3>Confirmation</h3>
                <p>In this step, you deposit $LAU into the staking <br /> smart contract.</p>
            </div>
            <div className='tab22-body'>
                <div className="option-fields unstake-amount-input">
                    <div class="material-textfield StakeEnterAmount-input">
                        <p>MAX</p>
                        <input placeholder="Ex: 1,000" type="text" className='white-placehoder' />
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
                    <div className="outerbtn btnonewidth my-btn" onClick={() => confirmationBackHandle()}>
                        <div className="innerbtn">
                            <span className="btnspan"></span>
                            <h5 className="btntext">Back</h5>
                        </div>
                    </div>
                    <div className="outerbtn-green-btnonewidth my-btn" onClick={() => completeStakeHandle()}>
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

export default StakeConfirmationComp