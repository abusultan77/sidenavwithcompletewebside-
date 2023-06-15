import React from 'react';
import '../staking.scss';
import checkmark from '../../../Assets/checkmark.svg';
import crossIcon from '../../../Assets/crossIcon.svg';

const PreStaking = () => {
    return (
        <div className='tab22-wrapperrr'>
            <div className='tab22-headder'>
                <h3>Pre - Stake</h3>
                <p>The following conditions must be met to proceed</p>
            </div>
            <div className='tab22-body'>
                <button className='tab22-body-btn connect-wallet-btn'>
                    <div className='tab22-body-btn-media'>
                        <img src={checkmark} alt='check mark' />
                        Connect Wallet
                    </div>
                    <p>0x54t6...5tx1</p>
                </button>
                <button className='tab22-body-btn'>
                    <div className='tab22-body-btn-media'>
                        <img src={checkmark} alt='check mark' />
                        Switch to ETH Network
                    </div>
                    <p>Switch Network</p>
                </button>
                <button className='tab22-body-btn connect-wallet-btn'>
                    <div className='tab22-body-btn-media'>
                        <img src={crossIcon} alt='check mark' />
                        $LAU available to stake
                    </div>
                    <p>543,986.876 $LAU</p>
                </button>
                <button className='tab22-body-btn available-wallet-btn'>
                    <div className='tab22-body-btn-media'>
                        <img src={crossIcon} alt='check mark' />
                        BNB available in wallet
                    </div>
                    <p>BNB is required to pay transaction fees on the BSC network</p>
                </button>
            </div>
        </div>
    )
}

export default PreStaking