import React, { useState } from 'react'
import './staking.scss';
import Nav from "react-bootstrap/Nav";
import stakedIcon from '../../Assets/stakedIcon.svg';
import Ranks from './Ranks';
import Unstake from './Unstake';
import StakingCopm from './StakingCopm';

const Staking = () => {


  const [activeTab, setActiveTab] = useState('link-1');

  const handleSelect = (eventKey) => {
    setActiveTab(eventKey);
  };


  return (
    <div className='maintabs'>
      <div className='staking-info-wrapper'>
        <div className='staking-info-item first-item'>
          <img src={stakedIcon} alt='stakedIcon' />
          <div className='staking-info-text-detail'>
            <p className='staking-info-text'>Current Rank</p>
            <h5 className='staking-info-heading'>king pepe</h5>
          </div>
        </div>
        <div className='staking-info-item'>
          <div className='staking-info-text-detail'>
            <p className='staking-info-text'>Your Staking</p>
            <h5 className='staking-info-heading'>3,457.431 $LAU</h5>
          </div>
        </div>
        <div className='staking-info-item'>
          <div className='staking-info-text-detail'>
            <p className='staking-info-text'>$LAU Left for Stake</p>
            <h5 className='staking-info-heading'>543,986,987.876 $LAU</h5>
          </div>
        </div>
        <div className='staking-info-item'>
          <div className='staking-info-text-detail'>
            <p className='staking-info-text'>Total $LAU Staked</p>
            <h5 className='staking-info-heading'>2,543,986.876 $LAU </h5>
          </div>
        </div>
        <div className='staking-info-item'>
          <div className='staking-info-text-detail'>
            <p className='staking-info-text'>APY %</p>
            <h5 className='staking-info-heading'>45%</h5>
          </div>
        </div>
      </div>

      <Nav variant="pills" activeKey={activeTab} onSelect={handleSelect} className='tabs-wrapper'>
        <Nav.Item>
          <Nav.Link eventKey="link-1">
            {/* <h5 className="btntextnav">All Projects</h5> */}
            <div className="outerbtn-green-btnonewidthnew">
              <div className="innerbtn">
                <span className="btnspan"></span>
                <h5 className="btntext">Stake</h5>
              </div>
            </div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">
            <div className="outerbtn-green-btnonewidthnew">
              <div className="innerbtn">
                <span className="btnspan"></span>
                <h5 className="btntext">UnStake</h5>
              </div>
            </div>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="link-3">
            <div className="outerbtn-green-btnonewidthnew">
              <div className="innerbtn">
                <span className="btnspan"></span>
                <h5 className="btntext">Ranks</h5>
              </div>
            </div>
          </Nav.Link>
        </Nav.Item>
      </Nav>

      {activeTab === 'link-1' && (
        <>
          <StakingCopm />
        </>
      )}

      {activeTab === 'link-2' && (
        <>
          <Unstake />
        </>
      )}

      {activeTab === 'link-3' && (
        <>
          <Ranks />
        </>
      )}
    </div>
  )
}

export default Staking