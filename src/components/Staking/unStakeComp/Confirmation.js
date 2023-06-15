import React from 'react';
import '../../Buycrypto/buycrypto.scss'
import '../staking.scss';


const Confirmation = ({ completehandle, completeBackhandle }) => {
    return (
        <div className='tab22-wrapperrr unstaking-part confirmation-part'>
            <div className='tab22-headder'>
                <h3>Confirmation</h3>
                <p>In this step, you deposit $LAU into the staking smart contract.</p>
            </div>
            <div className='tab22-body'>
                <div className="option-fields unstake-amount-input">
                    <div class="material-textfield ">
                        <p className='new-text'>MAX</p>
                        <input placeholder="5,000" type="text" />
                        <label>Enter the $LAU amount you want to unstake</label>
                    </div>
                </div>

                <div className='unstakeAmount-buttons'>
                    <div className="outerbtn btnonewidth my-btn" onClick={() => completeBackhandle()}>
                        <div className="innerbtn">
                            <span className="btnspan"></span>
                            <h5 className="btntext">Back</h5>
                        </div>
                    </div>
                    <div className="outerbtn-green-btnonewidth my-btn" onClick={() => completehandle()}>
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

export default Confirmation