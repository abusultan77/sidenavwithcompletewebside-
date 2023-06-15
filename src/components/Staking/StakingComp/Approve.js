import React from 'react';
import '../../Buycrypto/buycrypto.scss'
import '../staking.scss';

const Approve = ({ confirmationHandle, approveBackhandle }) => {
    return (
        <div className='tab22-wrapperrr unstaking-part'>
            <div className='tab22-headder'>
                <h3>Approve</h3>
                <p>In this step, grant access to staking smart contract to accept your $LAU.</p>
            </div>
            <div className='tab22-body'>
                <div className="option-fields unstake-amount-input">
                    <div class="material-textfield StakeEnterAmount-input">
                        <p>MAX</p>
                        <input placeholder="14,000" type="text" />
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
                    <div className="outerbtn btnonewidth my-btn" onClick={() => approveBackhandle()}>
                        <div className="innerbtn">
                            <span className="btnspan"></span>
                            <h5 className="btntext">Back</h5>
                        </div>
                    </div>
                    <div className="outerbtn-green-btnonewidth my-btn" onClick={() => confirmationHandle()}>
                        <div className="innerbtn">
                            <span className="btnspan"></span>
                            <h5 className="btntext">Approve</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Approve