import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StakeEnterAmount from './StakingComp/StakeEnterAmount';
import PreStaking from './StakingComp/PreStaking';
import './staking.scss';
import Approve from './StakingComp/Approve';
import CompletedStakeCopm from './StakingComp/CompletedStakeCopm';
import StakeConfirmationComp from './StakingComp/StakeConfirmationComp';


const StakingCopm = () => {

    const [warningS, setWarningS] = useState(true);
    const [warningStatu, setwarningStatu] = useState(true);
    const [warningProcess, setwarningProcess] = useState(true);
    const [warningComplete, setwarningComplete] = useState(false);

    const [unstakeAmountS, setUnstakeAmountS] = useState(false);
    const [unstakeStatu, setUnstakeStatu] = useState(false);
    const [unstakeProcess, setUnstakeProcess] = useState(false);
    const [unstakeComplete, setUnstakeComplete] = useState(false);

    const [confirmation, setConfirmation] = useState(false);
    const [confirmationStatus, setConfirmationStatus] = useState(false);
    const [confirmationProcess, setConfirmationProcess] = useState(false);
    const [confirmationComplete, setConfirmationComplete] = useState(false);

    const [completeStake, setCompleteStake] = useState(false);
    const [completeStakeStatus, setCompleteStakeStatus] = useState(false);
    const [completeStakeProcess, setCompleteStakeProcess] = useState(false);
    const [completeStakeComplete, setCompleteStakeComplete] = useState(false);

    const [completeStake1, setCompleteStake1] = useState(false);
    const [completeStakeStatus1, setCompleteStakeStatus1] = useState(false);
    const [completeStakeProcess1, setCompleteStakeProcess1] = useState(false);
    const [completeStakeComplete1, setCompleteStakeComplete1] = useState(false);


    const entermountHandle = () => {
        console.log('111111111111');
        setWarningS(false);
        setConfirmation(false);
        setwarningProcess(false);
        setwarningComplete(true);
        setUnstakeAmountS(true);

        setUnstakeStatu(true);
        setUnstakeProcess(true);
    }

    const entermountBackHandle = () => {
        console.log('back1111111111111');
        setWarningS(true);
        setConfirmation(false);
        setwarningProcess(true);
        setwarningComplete(false);
        setUnstakeAmountS(false);

        setUnstakeStatu(false);
        setUnstakeProcess(false);
    }

    const approvehandle = () => {
        console.log('22222222222');
        setWarningS(false);
        setUnstakeAmountS(false);
        setConfirmation(true);
        setConfirmationStatus(true);
        setConfirmationProcess(true);
        setUnstakeComplete(true);
        setUnstakeStatu(true);
        setUnstakeProcess(false);
        setConfirmationComplete(true);
    }

    const approveBackhandle = () => {
        console.log('backkkkk---22222222222');
        setWarningS(false);
        setUnstakeAmountS(true);

        setConfirmation(false);
        setConfirmationStatus(false);
        setConfirmationProcess(false);

        setUnstakeComplete(false);
        setUnstakeStatu(true);
        setUnstakeProcess(true);

        setConfirmationComplete(false);
    }

    const confirmationHandle = () => {
        console.log('33333333333333333');
        setWarningS(false);
        setUnstakeAmountS(false);
        setConfirmation(false);
        setConfirmationStatus(true);
        setConfirmationProcess(false);
        setUnstakeComplete(true);
        setUnstakeStatu(true);
        setUnstakeProcess(false);
        setConfirmationComplete(true);

        setCompleteStake(true);
        setCompleteStakeStatus(true);
        setCompleteStakeProcess(true);
        setCompleteStakeComplete(true);
    }

    const confirmationBackHandle = () => {
        console.log('backkkk33333333333333333');
        setWarningS(false);
        setUnstakeAmountS(false);
        setConfirmation(true);
        setConfirmationStatus(true);
        setConfirmationProcess(true);
        setUnstakeComplete(true);
        setUnstakeStatu(true);
        setUnstakeProcess(false);
        setConfirmationComplete(false);

        setCompleteStake(false);
        setCompleteStakeStatus(false);
        setCompleteStakeProcess(false);
        setCompleteStakeComplete(false);
    }

    const completeStakeHandle = () => {
        console.log('444444444444444444444');
        setWarningS(false);
        setUnstakeAmountS(false);
        setConfirmation(false);
        setConfirmationStatus(true);
        setConfirmationProcess(false);
        setUnstakeComplete(true);
        setUnstakeStatu(true);
        setUnstakeProcess(false);
        setConfirmationComplete(true);

        setCompleteStake(false);
        setCompleteStakeStatus(true);
        setCompleteStakeProcess(false);
        setCompleteStakeComplete(true);

        setCompleteStake1(true);
        setCompleteStakeStatus1(true);
        setCompleteStakeProcess1(true);
        setCompleteStakeComplete1(true);
    }

    return (
        <div className='row m-0 stake-time-line-wrapper-main'>
            <div className='stake-time-line-wrapper'>
                <div className='item-bg-color'>
                    <div class="bg-gradient_solid">
                        <div class="container">
                            <div class="section-header">
                                <h2>Staking</h2>
                            </div>
                            <div class="steps">
                                <div class="steps-container">
                                    <div class="content">
                                        <h2 className={warningStatu ? "active-time-line" : ""}>Pre-staking</h2>
                                        <p>The following conditions must be met to proceed</p>
                                    </div>
                                    {/* <i class="step-line"></i> */}
                                    <div class="date">
                                        <div className={warningProcess ? 'date-inner date-inner-process' : warningComplete ? "date-inner-complete date-inner" : 'date-inner'}>
                                            1
                                        </div>
                                    </div>
                                </div>
                                <div class="steps-container">
                                    <div class="content">
                                        <h2 className={unstakeStatu ? 'active-time-line' : ""}>Enter Amount</h2>
                                        <p>The amount of $LAU you want to stake</p>
                                    </div>
                                    {/* <i class="step-line"></i> */}
                                    <div class="date">
                                        <div className={unstakeProcess ? 'date-inner date-inner-process' : unstakeComplete ? "date-inner-complete date-inner" : 'date-inner'}>
                                            2
                                        </div>
                                    </div>
                                </div>
                                <div class="steps-container">
                                    <div class="content">
                                        <h2 className={confirmationStatus ? "active-time-line" : ""}>Approve</h2>
                                        <p>In this step, grant access to staking smart contract to accept your $LAU.</p>
                                    </div>
                                    {/* <i class="step-line"></i> */}
                                    <div class="date">
                                        <div className={confirmationProcess ? 'date-inner date-inner-process' : confirmationComplete ? "date-inner-complete date-inner" : 'date-inner'}>
                                            3
                                        </div>
                                    </div>
                                </div>
                                <div class="steps-container">
                                    <div class="content">
                                        <h2 className={completeStakeStatus ? "active-time-line" : ""}>Confirmation</h2>
                                        <p>In this step, you deposit $LAU into the staking smart contract.</p>
                                    </div>
                                    {/* <i class="step-line"></i> */}
                                    <div class="date">
                                        <div className={completeStakeProcess ? 'date-inner date-inner-process' : completeStakeComplete ? "date-inner-complete date-inner" : "date-inner"}>
                                            4
                                        </div>
                                    </div>
                                </div>
                                <div class="steps-container">
                                    <div class="content">
                                        <h2 className={completeStakeStatus1 ? "active-time-line" : ""}>Completed</h2>
                                        <p>You have successfully staked XXX $LAU</p>
                                    </div>
                                    {/* <i class="step-line"></i> */}
                                    <div class="date">
                                        <div className={completeStakeProcess1 ? 'date-inner date-inner-process' : completeStakeComplete1 ? "date-inner-complete date-inner" : "date-inner"}>
                                            5
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='stake-time-line-data'>
                <div className='item-bg-color tab-part-2 staking-inner-tabs-col'>

                    {
                        warningS && <PreStaking />
                    }
                    {
                        unstakeAmountS && <StakeEnterAmount entermountBackHandle={entermountBackHandle} approvehandle={approvehandle} />
                    }
                    {
                        confirmation && <Approve confirmationHandle={confirmationHandle} approveBackhandle={approveBackhandle} />
                    }
                    {
                        completeStake && <StakeConfirmationComp completeStakeHandle={completeStakeHandle} confirmationBackHandle={confirmationBackHandle} />
                    }
                    {
                        completeStake1 && <CompletedStakeCopm />
                    }
                </div>
            </div>
            <div className='stake-findes-col'>
                <div className='current-staking-info'>
                    <div className='item-bg-color current-staking-data'>
                        <p>Current Staking</p>
                        <h3>543,986.876 $LAU</h3>
                    </div>

                    <div className='item-bg-color current-staking-data'>
                        <p>Pending Withdrawal</p>
                        <h3>3,457.431 $LAU</h3>
                    </div>
                    {warningS ?
                        <>
                            {/* <div className='checkbox-wrapper my-4'>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        <p>
                                            I fully understand and agree with the <Link to='/'>Launchpad Staking and Unstaking Policy</Link>
                                        </p>
                                    </label>
                                </div>
                            </div> */}

                            <div className='checkbox-wrapper my-4'>
                                <div className='radio-btnn-oter-div mb-2'>
                                    <label>
                                        <div className="uppercheckboxpara stake-input">
                                            <div className='chec'>
                                                <div class="example">
                                                    <label class="checkbox-button">
                                                        <input type="checkbox" class="checkbox-button__input" id="choice1-1" name="choice1" />
                                                        <span class="checkbox-button__control"></span>
                                                        {/* <span class="checkbox-button__label">I agree</span> */}
                                                    </label>
                                                </div>
                                            </div>
                                            <p>
                                                I fully understand and agree with the <Link to='/'>Launchpad Staking and Unstaking Policy</Link>
                                            </p>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <div className="outerbtn-green-btnonewidth" onClick={() => entermountHandle()}>
                                <div className="innerbtn">
                                    <span className="btnspan"></span>
                                    <h5 className="btntext">Stake Now</h5>
                                </div>
                            </div>
                        </>
                        : null
                    }
                </div>
            </div>
        </div>
    )
}

export default StakingCopm