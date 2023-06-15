import React from 'react';
import copyIcon from '../../../Assets/copyIcon.svg';

const CompletedStakeCopm = () => {
    return (
        <div className='tab22-wrapperrr unstaking-part confirmation-part'>
            <div className='tab22-headder'>
                <h3>Completed</h3>
                <p>You have successfully staked XXX $LAU</p>
            </div>
            <div className='tab22-body'>
                <div className="option-fields unstake-amount-input">
                    <div class="material-textfield position-relative">
                        <img src={copyIcon} alt='copyIcon' className='position-abs' />
                        <input placeholder="0xD60745EB24CA1F87B66DCA3B33571DD0BA85FB8E" type="text" />
                        <label>Transaction hash</label>
                    </div>
                </div>

                <div className='current-blance-text complete-textttxxx'>
                    <p>View on ETH Mainnet explorer.</p>
                </div>

                <div className='unstakeAmount-buttons'>
                    <div className="outerbtn btnonewidth my-btn">
                        <div className="innerbtn">
                            <span className="btnspan"></span>
                            <h5 className="btntext">Restake</h5>
                        </div>
                    </div>
                    <div className="outerbtn-green-btnonewidth my-btn">
                        <div className="innerbtn">
                            <span className="btnspan"></span>
                            <h5 className="btntext">Withdraw</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompletedStakeCopm