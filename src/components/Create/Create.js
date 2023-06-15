import React, { useState } from 'react'
import './create.scss'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTheme } from 'styled-components';
import { OutlinedInput } from '@mui/material';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Dropdown } from 'react-bootstrap';
import createtokenicon from '../../Assets/createToken.svg';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};



function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


const Create = () => {
  const [routes, setRoutes] = useState(0);


  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);





  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [isCheckboxChecked1, setIsCheckboxChecked1] = useState(false);
  const [isCheckboxChecked2, setIsCheckboxChecked2] = useState(false);
  const [isCheckRadio, setIsCheckRadio] = useState(false);
  console.log(isCheckboxChecked, 'isCheckboxChecked');



  const [recommendedRadio, setRecommendedRadio] = useState(false);
  const [otherRadio, setOtherRadio] = useState(false);
  const [autoListing, setAutoListing] = useState(false);
  const [manualListing, setManualListing] = useState(false);
  const [disableAffiliate, setDisableAffiliate] = useState(false);
  const [enableAffiliate, setEnableAffiliate] = useState(false);
  const [disable, setDisable] = useState(false);
  const [enable, setEnable] = useState(false);
  const [disable1, setDisable1] = useState(false);
  const [enable1, setEnable1] = useState(false);
  const [pancakeSwap, setPancakeSwap] = useState(false);
  const [sushiSwap, setSushiSwap] = useState(false);
  const [uniSwap, setUniSwap] = useState(false);


  const recommendedRadioHandle = () => {
    console.log('0000000.............');
    setRecommendedRadio(!recommendedRadio);
    setOtherRadio(false);
  }

  const otherRadioHandle = () => {
    console.log('0000000.............');
    setRecommendedRadio(false);
    setOtherRadio(!otherRadio);
  }

  const autoListingHandle = () => {
    console.log('111.................');
    // setRecommendedRadio(false);
    // setOtherRadio(false);
    setAutoListing(!autoListing);
    setManualListing(false)
  }

  const manualListingHandle = () => {
    console.log('2222222...............');
    // setRecommendedRadio(false);
    // setOtherRadio(false);
    setAutoListing(false);
    setManualListing(!manualListing);
  }

  const disableAffiliateHandle = () => {
    console.log('33333333...............');
    setDisableAffiliate(!disableAffiliate);
    setEnableAffiliate(false);
  }

  const enableAffiliateHandle = () => {
    console.log('33333333...............');
    setDisableAffiliate(false);
    setEnableAffiliate(!enableAffiliate);
  }

  const disableHandle = () => {
    console.log('44444444...............');
    setDisable(!disable);
    setEnable(false);
  }

  const enableHandle = () => {
    console.log('44444444...............');
    setDisable(false);
    setEnable(!enable)
  }

  const disableHandle1 = () => {
    console.log('44444444...............');
    setDisable1(!disable1);
    setEnable1(false);
  }

  const enableHandle1 = () => {
    console.log('44444444...............');
    setDisable1(false);
    setEnable1(!enable1)
  }



  const handleCheckboxClick = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };

  const handleCheckboxClick1 = () => {
    setIsCheckboxChecked1(!isCheckboxChecked1);
  };

  const handleCheckboxClick2 = () => {
    setIsCheckboxChecked2(!isCheckboxChecked2);
  };

  const handleCheckRadio = () => {
    setIsCheckRadio(!isCheckRadio);
  };

  // checkboxs ---------------------------


  const [verifyToken, setVerifyToken] = useState(true);
  const [verifyTokenCompt, setVerifyTokenCompt] = useState(false);
  const [deFiLaunchpad, setDeFAdditional] = useState(false);
  const [deFiLaunchpadCompt, setDeFAdditionalCompt] = useState(false);
  const [additionalInfo, setAdditionalInfo] = useState(false);
  const [additionalInfoCompt, setAdditionalInfoCompt] = useState(false);
  const [finish, setFinish] = useState(false);
  const [finishCompt, setFinishCompt] = useState(false);

  const verifyTokenHandel = () => {
    console.log('111111111111');
    setRoutes(1);
    setVerifyTokenCompt(true);
    setVerifyToken(false);
    setDeFAdditional(true);
  }

  const verifyTokenBackHandel = () => {
    console.log('backkkk111111111111');
    setRoutes(0);
    setVerifyTokenCompt(false);
    setVerifyToken(true);
    setDeFAdditional(false);
  }

  const deFiLaunchpadHandel = () => {
    console.log('22222222222');
    setRoutes(2);
    setDeFAdditionalCompt(true);
    setVerifyTokenCompt(true);
    setVerifyToken(false);
    setDeFAdditional(false);
    setAdditionalInfo(true);
  }

  const deFiLaunchpadBackHandel = () => {
    console.log('backkkkkkkk22222222222');
    setRoutes(1);
    setDeFAdditionalCompt(false);
    setVerifyTokenCompt(true);
    setDeFAdditional(true);
    setVerifyToken(false);
    setAdditionalInfo(false);
  }

  const additionalInfoHandel = () => {
    console.log('33333333333');
    setRoutes(3);
    setVerifyTokenCompt(true);
    setDeFAdditionalCompt(true);
    setAdditionalInfoCompt(true);
    setVerifyToken(false);
    setDeFAdditional(false);
    setAdditionalInfo(false);
    setFinish(true);
  }

  const additionalInfoBackHandel = () => {
    console.log('backkk33333333333');
    setRoutes(2);
    setVerifyTokenCompt(true);
    setDeFAdditionalCompt(true);
    setAdditionalInfoCompt(false);
    setVerifyToken(false);
    setDeFAdditional(true);
    setAdditionalInfo(true);
    setFinish(true);
  }

  const finishHandel = () => {
    console.log('444444444444444');
    setRoutes(0);
    setVerifyToken(true);
    setFinishCompt(false);
    setVerifyTokenCompt(false);
    setDeFAdditionalCompt(false);
    setAdditionalInfoCompt(false);
    setDeFAdditional(false);
    setAdditionalInfo(false);
    setFinish(false);
  }

  return (
    <>
      <section className="createvault">
        <div className="row">
          <div className="col-xl-3
           col-md-12 p-0">
            <div className="left-side">
              <div className="head">
                <h6>Create Launchpad</h6>
              </div>
              <ul class="progresss vertical">
                {/* <div className='timeline-steps-line'></div> */}
                <li data-step="1" class={routes == 0 && verifyToken ? "half-active" : verifyTokenCompt ? "active" : ""}>
                  <h6>Verify Token</h6>
                  <p>Enter the token address and verify</p>
                </li>
                <li data-step="2" class={routes == 1 && deFiLaunchpad ? "half-active" : deFiLaunchpadCompt ? "active" : ""}>
                  <h6>DeFi Launchpad Info</h6>
                  <p>Enter the launchpad information that you want to raise , that should be enter all details about your presale</p>
                </li>
                <li data-step="3" class={routes == 2 && additionalInfo ? "half-active" : additionalInfoCompt ? "active" : ""}>
                  <h6>Add Additional Info</h6>
                  <p>Let people know who you are</p>
                </li>
                <li data-step="4" class={routes == 3 && finish ? "half-active" : finishCompt ? "active" : ""}>
                  <h6>Finish</h6>
                  <p>Review and verify your information</p>
                </li>
                {/* <li data-step="5" class={routes == 4 ? "active" : ""}>
                    <h6>Transaction Confirmation</h6>
                    <p>Confirm your transaction with your wallet</p>
                  </li> */}
              </ul>
            </div>
          </div>
          <div className="col-xl-9 col-md-12 padd-sm ">
            {
              routes == 0 ?
                <>
                  <div className="connectwallet-content">
                    <div className="inner-side">
                      <h6>Verify Token</h6>
                      <button className='btn-connect' onClick={handleShow}>
                        <img src={createtokenicon} alt="createtokenicon" className='createtokenicon' />
                        Create Token</button>
                    </div>
                    <div className="option-fields">
                      <div class="material-textfield ">
                        <input placeholder="LaunchPad" type="text" />
                        <label>Token address</label>
                      </div>
                    </div>
                    <div className='input-radio-headind'>
                      <div className='input-maindiv'>
                        <h6 className='chains-lable'>
                          Chains
                        </h6>
                        <p className='chains-para py-2'>
                          Project chain
                        </p>
                      </div>
                      <div className={isCheckboxChecked ? 'radio-btnn-oter-div mb-2 activeTab' : 'radio-btnn-oter-div mb-2'}>
                        <div className="uppercheckboxpara">
                          <div className='chec'>
                            <div class="example">
                              <label class="checkbox-button">
                                <input type="checkbox" onChange={() => handleCheckboxClick()} checked={isCheckboxChecked} class="checkbox-button__input" id="choice1-1" name="choice1" />
                                <span class="checkbox-button__control"></span>
                                {/* <span class="checkbox-button__label">I agree</span> */}
                              </label>
                            </div>
                          </div>
                          <p className="checkboxpara grey">Ethereum</p>
                        </div>
                      </div>
                      <div className={isCheckboxChecked1 ? 'radio-btnn-oter-div mb-2 activeTab' : 'radio-btnn-oter-div mb-2'}>
                        <div className="uppercheckboxpara">
                          <div className='chec'>
                            <div class="example">
                              <label class="checkbox-button">
                                <input type="checkbox" onChange={() => handleCheckboxClick1()} checked={isCheckboxChecked1} class="checkbox-button__input" id="choice1-1" name="choice1" />
                                <span class="checkbox-button__control"></span>
                                {/* <span class="checkbox-button__label">I agree</span> */}
                              </label>
                            </div>
                          </div>
                          <p className="checkboxpara grey">Binance Smart Chain</p>
                        </div>
                      </div>
                      <div className={isCheckboxChecked2 ? 'radio-btnn-oter-div mb-2 activeTab' : 'radio-btnn-oter-div mb-2'}>
                        <div className="uppercheckboxpara">
                          <div className='chec'>
                            <div class="example">
                              <label class="checkbox-button">
                                <input type="checkbox" onChange={() => handleCheckboxClick2()} checked={isCheckboxChecked2} class="checkbox-button__input" id="choice1-1" name="choice1" />
                                <span class="checkbox-button__control"></span>
                                {/* <span class="checkbox-button__label">I agree</span> */}
                              </label>
                            </div>
                          </div>
                          <p className="checkboxpara grey">Arbitrum</p>
                        </div>
                      </div>
                    </div>
                    <div className='input-radio-headind'>

                      <div className='radio-customm'>
                        <div className='input-maindiv'>
                          <h6 className='chains-lable'>
                            Fee Option
                          </h6>
                        </div>
                        <ul>
                          <li className={recommendedRadio ? "activeRadio" : ""}>
                            <input type="radio" id="recommended" name="selector7" onChange={() => recommendedRadioHandle()} />
                            <label for="recommended">5% <span className='ms-2'>(Recommended)</span></label>
                            <div class="check"></div>
                          </li>
                          <li className={otherRadio ? "activeRadio" : ""}>
                            <input type="radio" id="other" name="selector7" onChange={() => otherRadioHandle()} />
                            <label for="other">Other</label>
                            <div class="check"></div>
                          </li>
                          {/* <li>
                            <input type="radio" id="dds-option" name="selector" />
                            <label for="dds-option">Other</label>
                            <div class="check">
                              <div class="inside"></div>
                            </div>
                          </li> */}
                        </ul>
                      </div>
                    </div>
                    <div className='input-radio-headind'>
                      <div className='radio-customm'>
                        <div className='input-maindiv'>
                          <h6 className='chains-lable'>
                            Listing Options
                          </h6>
                        </div>
                        <ul>
                          <li className={autoListing ? "activeRadio" : ""}>
                            <input type="radio" id="ss-option" name="selector4" onChange={() => autoListingHandle()} />
                            <label for="ss-option">Auto Listing</label>
                            <div class="check"></div>
                          </li>
                          <li className={manualListing ? "activeRadio" : ""}>
                            <input type="radio" id="tt-option" name="selector4" onChange={() => manualListingHandle()} />
                            <label for="tt-option">Manual Listing</label>
                            <div class="check">
                              <div class="inside"></div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className='radio-customm'>
                      <div className='input-maindiv'>
                        <h6 className='chains-lable'>
                          Affiliate Program
                        </h6>
                      </div>
                      <ul>
                        <li className={disableAffiliate ? "activeRadio" : ""}>
                          <input type="radio" id="f-option" name="selector1" onChange={() => disableAffiliateHandle()} />
                          <label for="f-option">Disable Affiliate</label>
                          <div class="check"></div>
                        </li>
                        <li className={enableAffiliate ? "activeRadio" : ""}>
                          <input type="radio" id="r-option" name="selector1" onChange={() => enableAffiliateHandle()} />
                          <label for="r-option">Enable Affiliate</label>
                          <div class="check">
                            <div class="inside"></div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className='fast-finalize'>
                      <p className='finalize'>
                        For auto listing, after you finalize the pool your token will be auto listed on DEX.
                      </p>
                    </div>
                    <div className='mainbutton'>
                      <div className="outerbtn-green-btnonewidth w-100" onClick={() => verifyTokenHandel()}>
                        <div className="innerbtn">
                          <span className="btnspan"></span>
                          <h5 className="btntext">Next</h5>
                        </div>
                      </div>
                    </div>
                  </div>

                </>
                :
                routes == 1 ?
                  <div className="connectwallet-content">
                    <div className="inner-side">
                      <h6>DeFi Launchpad Info</h6>
                    </div>
                    <div className="option-fields">
                      <div class="material-textfield onestinput">
                        <input placeholder="0.00 " type="text" />
                        <label>Presale rate</label>
                      </div>
                      <p className='receive-para'>
                        If I spend 1 BNB how many tokens will I receive?
                      </p>
                    </div>
                    <div className='input-radio-headind'>
                      <div className='input-maindiv'>
                        <h6 className='chains-lable  common-green'>
                          Whitelist
                        </h6>
                        <p className='chains-para'>
                          You can enable/disable whitelist anytime
                        </p>
                      </div>
                      <div className='radio-customm'>
                        <ul>
                          <li className={disable ? "activeRadio" : ""}>
                            <input type="radio" id="uu-option" name="selector11" onChange={() => disableHandle()} />
                            <label for="uu-option">Disable</label>
                            <div class="check"></div>
                          </li>
                          <li className={enable ? "activeRadio" : ""}>
                            <input type="radio" id="llk-option" name="selector11" onChange={() => enableHandle()} />
                            <label for="llk-option">Enable</label>
                            <div class="check">
                              <div class="inside"></div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className='input-radio-headind'>
                      <div className='input-maindiv'>
                        <h6 className='chains-lable common-green'>
                          guarantee Listing
                        </h6>
                      </div>
                      <div className='radio-customm py-1'>
                        <ul>
                          <li className={disable1 ? "activeRadio" : ""}>
                            <input type="radio" id="ttr-option" name="selector22" onChange={() => disableHandle1()} />
                            <label for="ttr-option">Disable</label>
                            <div class="check"></div>
                          </li>
                          <li className={enable1 ? "activeRadio" : ""}>
                            <input type="radio" id="rrt-option" name="selector22" onChange={() => enableHandle1()} />
                            <label for="rrt-option">Enable</label>
                            <div class="check">
                              <div class="inside"></div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className='inline-flex-radiobtn'>
                        <div className={pancakeSwap ? "radio-btnn-oter-div mb-2 activeTab" : 'radio-btnn-oter-div mb-2'}>
                          <div className="uppercheckboxpara">
                            <div class="content ethereum-para">
                              <div className='chec'>
                                <div class="example">
                                  <label class="checkbox-button">
                                    <input type="checkbox" class="checkbox-button__input" id="choice1-1" name="choice1" onChange={() => setPancakeSwap(!pancakeSwap)} />
                                    <span class="checkbox-button__control"></span>
                                    {/* <span class="checkbox-button__label">I agree</span> */}
                                  </label>
                                </div>
                              </div>
                              <p className="checkboxpara mx-2">PancakeSwap</p>
                            </div>
                          </div>
                        </div>
                        <div className={sushiSwap ? "radio-btnn-oter-div mb-2 activeTab" : 'radio-btnn-oter-div mb-2'}>
                          <div className="uppercheckboxpara  ethereum-para">
                            <div class="content ethereum-para">
                              <div className='chec'>
                                <div class="example">
                                  <label class="checkbox-button">
                                    <input type="checkbox" class="checkbox-button__input" id="choice1-1" name="choice1" onChange={() => setSushiSwap(!sushiSwap)} />
                                    <span class="checkbox-button__control"></span>
                                    {/* <span class="checkbox-button__label">I agree</span> */}
                                  </label>
                                </div>
                              </div>
                              <p className="checkboxpara mx-2">SushiSwap</p>
                            </div>
                          </div>
                        </div>
                        <div className={uniSwap ? 'radio-btnn-oter-div mb-2 activeTab' : 'radio-btnn-oter-div mb-2'}>
                          <div className="uppercheckboxpara">
                            <div class="content ethereum-para">
                              <div className='chec'>
                                <div class="example">
                                  <label class="checkbox-button">
                                    <input type="checkbox" class="checkbox-button__input" id="choice1-1" name="choice1" onChange={() => setUniSwap(!uniSwap)} />
                                    <span class="checkbox-button__control"></span>
                                    {/* <span class="checkbox-button__label">I agree</span> */}
                                  </label>
                                </div>
                              </div>
                              <p className="checkboxpara mx-2">UniSwap</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='inline-flex-radiobtn mt-3'>
                        <div className="option-fields">
                          <div class="material-textfield">
                            <input placeholder="0.00" type="text" />
                            <label>Softcap (BNB)</label>
                          </div>
                          <p className='receive-para'>
                            Softcap must be &gt;= 25% of Hardcap!
                          </p>
                        </div>
                        <div className="option-fields ">
                          <div class="material-textfield">
                            <input placeholder="0.00" type="text" />
                            <label>Hardcap (BNB)</label>
                          </div>
                        </div>
                      </div>
                      <div className='inline-flex-radiobtn '>
                        <div className="option-fields margin-nonezro">
                          <div class="material-textfield">
                            <input placeholder="0.00" type="text" />
                            <label>Minimum buy (BNB)</label>
                          </div>
                        </div>
                        <div className="option-fields margin-nonezro">
                          <div class="material-textfield">
                            <input placeholder="0.00" type="text" />
                            <label>Maximum buy (BNB)</label>
                          </div>
                        </div>
                      </div>
                      <div className='dropdowns-maindiv-create  '>
                        <Dropdown>
                          <Dropdown.Toggle variant="success" id="dropdown-basic">
                            <div class="material-textfield">
                              <input placeholder="Burn" type="text" className='formargin' />
                              <label>Refund type</label>
                            </div>
                            <img src="\Assets\goldenarrow.svg" alt="arrowimg" className="arrowimg" />
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                          <Dropdown.Toggle variant="success" id="dropdown-basic">
                            <div class="material-textfield">
                              <input placeholder="Select Router Exchange" type="text" className='formargin' />
                              <label>Router</label>
                            </div>
                            <img src="\Assets\goldenarrow.svg" alt="arrowimg" className="arrowimg" />
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                      <div className='inline-flex-radiobtn '>
                        <div className="option-fields margin-nonezro">
                          <div class="material-textfield">
                            <input placeholder="0.00" type="text" />
                            <label>Liquidity (%)</label>
                          </div>
                        </div>
                        <div className="option-fields margin-nonezro">
                          <div class="material-textfield">
                            <input placeholder="0.00" type="text" />
                            <label>Listing rate</label>
                          </div>
                        </div>
                      </div>
                      <div className='percentage-div'>
                        <p className='percentage-para-fst'>
                          Enter the percentage of raised funds that should be allocated to Liquidity on (Min 51%, Max 100%)
                        </p>
                        <p className='percentage-para-sec'>
                          If I spend 1 BNB on how many tokens will I receive? Usually this amount is lower than presale rate to allow for a higher listing price on
                        </p>
                      </div>
                    </div>
                    <div className='input-radio-headind'>
                      <div className='input-maindiv onlu-margin'>
                        <h6 className='chains-lable common-green'>
                          Select start time & end time (UTC)*
                        </h6>
                      </div>
                      <div className='inline-flex-radiobtn '>
                        <div className="option-fields margin-nonezro">
                          <div class="material-textfield onestinput">
                            <input placeholder="Select date " type="date" />
                            <label className='green-lable'>Start time (UTC)</label>
                          </div>
                        </div>
                        <div className="option-fields margin-nonezro">
                          <div class="material-textfield onestinput">
                            <input placeholder="Select date " type="date" />
                            <label className='green-lable'>End time (UTC)</label>
                          </div>
                        </div>
                      </div>
                      <div className='inline-flex-radiobtn my-3 '>
                        <div className="option-fields margin-nonezro">
                          <div class="material-textfield">
                            <input placeholder="0" type="text" />
                            <label>Liquidity lockup (days)</label>
                          </div>
                        </div>
                      </div>
                      <div className='single-radiobtn margin-bttoomm '>
                        <div className="uppercheckboxpara">
                          <div class="content ethereum-para">
                            <div className='chec'>
                              <div class="example">
                                <label class="checkbox-button">
                                  <input type="checkbox" class="checkbox-button__input" id="choice1-1" name="choice1" />
                                  <span class="checkbox-button__control"></span>
                                  {/* <span class="checkbox-button__label">I agree</span> */}
                                </label>
                              </div>
                            </div>
                            <p className="checkboxpara">Using Vesting Contributor?</p>
                          </div>
                        </div>
                      </div>
                      <div className='inline-flex-radiobtn my-3 '>
                        <div className="option-fields margin-nonezro">
                          <div class="material-textfield">
                            <p className="percentagesign">%</p>
                            <input placeholder="Ex. 40%" type="text" />
                            <label>First release for presale (percent)</label>
                          </div>
                        </div>
                      </div>
                      <div className='inline-flex-radiobtn my-3 '>
                        <div className="option-fields margin-nonezro">
                          <div class="material-textfield">
                            <input placeholder="Enter (days). Ex. 4" type="text" />
                            {/* <label>Vesting period each cycle (days)</label> */}
                            <label>Vesting period each cycle (days) </label>
                          </div>
                        </div>
                        <div className="option-fields margin-nonezro">
                          <div class="material-textfield">
                            <p className="percentagesign">%</p>
                            <input placeholder="Ex. 20%" type="text" />
                            <label>Presale token release each cycle (percent)</label>
                            {/* <label>Presale token release each cycle (percent)</label> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='mainbutton last-btn'>
                      <div className="outerbtn-black-btnonewidth w-100 me-2" onClick={() => verifyTokenBackHandel()}>
                        <div className="innerbtn-black">
                          <span className="btnspan"></span>
                          <h5 className="btntext">back</h5>
                        </div>
                      </div>
                      <div className="outerbtn-green-btnonewidth w-100" onClick={() => deFiLaunchpadHandel()}>
                        <div className="innerbtn">
                          <span className="btnspan"></span>
                          <h5 className="btntext">Next</h5>
                        </div>
                      </div>
                    </div>
                  </div>

                  :
                  routes == 2 ?
                    <div className="connectwallet-content">
                      <div className="inner-side">
                        <h6>Add Additional Info</h6>
                      </div>
                      <div className='flex-div-top'>
                        <div class="material-textfield  ">
                          <input placeholder="Image URL" id="inputGroupFile02" />
                          <label>Logo URL</label>
                        </div>
                        <div className='upload-btnn'>
                          <button className='   upload-Image ' type="file" id="formFile">
                            <img src='\Assets\create\Upload.svg' alt='img' className='img-fluid' />
                            Upload Image
                          </button>
                        </div>
                      </div>
                      <p className='receive-para'>
                        URL must end with a supported image extension .png .jpg .jpeg or .gif.
                      </p>
                      <div className='input-thrdd'>
                        <div className='input-maindiv'>
                          <h6 className='chains-lable-common'>
                            Social Links
                          </h6>
                        </div>
                        <div className='inline-flex-radiobtn mb-3  '>
                          <div className="option-fields margin-nonezro">
                            <div class="material-textfield">
                              <input placeholder="https://" type="text" />
                              <label>Website</label>

                            </div>
                          </div>
                        </div>
                        <div className='inline-flex-radiobtn'>
                          <div className="option-fields margin-topbtmzro">
                            <div class="material-textfield">
                              <input placeholder="Facebook account" type="text" />
                              <label>Facebook</label>
                            </div>
                            <p className='receive-para'>
                              Softcap must be = 25% of Hardcap!
                            </p>
                          </div>
                          <div className="option-fields margin-topbtmzro">
                            <div class="material-textfield">
                              <input placeholder="Twitter account" type="text" />

                              <label>Twitter</label>
                            </div>
                          </div>
                        </div>
                        <div className='inline-flex-radiobtn mb-3 mb-3'>
                          <div className="option-fields margin-topbtmzro ">
                            <div class="material-textfield">
                              <input placeholder="Github account" type="text" />
                              <label>Github</label>
                            </div>
                          </div>
                          <div className="option-fields margin-topbtmzro">
                            <div class="material-textfield">
                              <input placeholder="Telegram account" type="text" />
                              <label>Telegram</label>
                            </div>
                          </div>
                        </div>
                        <div className='inline-flex-radiobtn mb-3'>
                          <div className="option-fields margin-topbtmzro">
                            <div class="material-textfield">
                              <input placeholder="Instagram account" type="text" />
                              <label>Instagram</label>
                            </div>
                          </div>
                          <div className="option-fields margin-topbtmzro">
                            <div class="material-textfield">
                              <input placeholder="Discord account" type="text" />
                              <label>Discord</label>
                            </div>
                          </div>
                        </div>
                        <div className='inline-flex-radiobtn mb-3'>
                          <div className="option-fields margin-topbtmzro">
                            <div class="material-textfield">
                              <input placeholder="Reddit account" type="text" />
                              <label>Reddit</label>
                            </div>
                          </div>
                          <div className="option-fields margin-topbtmzro">
                            <div class="material-textfield">
                              <input placeholder="Medium account" type="text" />
                              <label>Medium</label>
                            </div>
                          </div>
                        </div>
                        <div className="option-fields margin-topbtmzro">
                          <p className='green-text'>Description</p>
                          <div class="material-textfield onestinput">
                            {/* <label>Medium</label> */}
                            <textarea class="form-control input " id="form6Example7" rows="8" placeholder=" Description about your project in detail"></textarea>
                          </div>
                          <div className='iconbtnnnn-icon'>
                            <ul className="list-inline">
                              <li className="list-inline-item iconbtnnnn">    <img src='\Assets\create\Frame 22.svg' alt='img' className='img-fluid' /></li>
                              <li className="list-inline-item iconbtnnnn">    <img src='\Assets\create\Frame 33.svg' alt='img' className='img-fluid' /></li>
                              <li className="list-inline-item iconbtnnnn">    <img src='\Assets\create\Frame 29.svg' alt='img' className='img-fluid' /></li>
                              <li className="list-inline-item iconbtnnnn">    <img src='\Assets\create\Frame 34.svg' alt='img' className='img-fluid' /></li>
                              <li className="list-inline-item iconbtnnnn">    <img src='\Assets\create\Frame 30.svg' alt='img' className='img-fluid' /></li>
                              <li className="list-inline-item iconbtnnnn">    <img src='\Assets\create\Frame 32.svg' alt='img' className='img-fluid' /></li>
                              <li className="list-inline-item iconbtnnnn">    <img src='\Assets\create\Frame 31.svg' alt='img' className='img-fluid' /></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className='mainbutton last-btn'>
                        <div className="outerbtn-black-btnonewidth w-100 me-2" onClick={() => deFiLaunchpadBackHandel()} >
                          <div className="innerbtn-black">
                            <span className="btnspan"></span>
                            <h5 className="btntext">back</h5>
                          </div>
                        </div>
                        <div className="outerbtn-green-btnonewidth w-100" onClick={() => additionalInfoHandel()}>
                          <div className="innerbtn">
                            <span className="btnspan"></span>
                            <h5 className="btntext">Next</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    : routes == 3 ?
                      <div className="connectwallet-content4">
                        <div className='innercard1'>
                          <div className='mainhead'>
                            <h2>Finish</h2>
                          </div>
                          <div className='mainparent'>
                            <div className='right'>
                              <p>Total Tokens</p>
                            </div>
                            <div className='left'>
                              <h6>XXX,XXX,XXX.XXX</h6>
                            </div>
                          </div>
                          <div className='mainparent'>
                            <div className='right'>
                              <p>Factory Address</p>
                            </div>
                            <div className='left'>
                              <h6>0x7b44578c25F6CC536893699360E3a84b7aa9B5FB</h6>
                            </div>
                          </div>
                          <div className='mainparent'>
                            <div className='right'>
                              <p>Token Name</p>
                            </div>
                            <div className='left'>
                              <h6>PreSaleToken</h6>
                            </div>
                          </div>
                          <div className='mainparent'>
                            <div className='right'>
                              <p>Token Symbol</p>
                            </div>
                            <div className='left'>
                              <h6>PST</h6>
                            </div>
                          </div>
                          <div className='mainparent'>
                            <div className='right'>
                              <p>Token decimals</p>
                            </div>
                            <div className='left'>
                              <h6>XX</h6>
                            </div>
                          </div>
                          <div className='mainparent'>
                            <div className='right'>
                              <p>Presale rate</p>
                            </div>
                            <div className='left'>
                              <h6>XX PreSaleToken</h6>
                            </div>
                          </div>
                          <div className='mainparent'>
                            <div className='right'>
                              <p>Listing rate</p>
                            </div>
                            <div className='left'>
                              <h6>XXX PreSaleToken</h6>
                            </div>
                          </div>
                          <div className='mainparent'>
                            <div className='right'>
                              <p>Sale method</p>
                            </div>
                            <div className='left'>
                              <h6>Public</h6>
                            </div>
                          </div>
                          <div className='mainparent'>
                            <div className='right'>
                              <p>Softcap</p>
                            </div>
                            <div className='left'>
                              <h6>XXX,XXX.XX BNB</h6>
                            </div>
                          </div>
                          <div className='mainparent'>
                            <div className='right'>
                              <p>Hardcap</p>
                            </div>
                            <div className='left'>
                              <h6>XXX,XXX.XX BNB</h6>
                            </div>
                          </div>
                          <div className='mainparent'>
                            <div className='right'>
                              <p>Unsold tokens</p>
                            </div>
                            <div className='left'>
                              <h6>Sum</h6>
                            </div>
                          </div>
                          <div className='mainparent'>
                            <div className='right'>
                              <p>Minimum buy</p>
                            </div>
                            <div className='left'>
                              <h6>XXX,XXX.XX BNB</h6>
                            </div>
                          </div>
                          <div className='mainparent'>
                            <div className='right'>
                              <p>Maximum buy</p>
                            </div>
                            <div className='left'>
                              <h6>XXX,XXX.XX BNB</h6>
                            </div>
                          </div>
                          <div className='mainparent'>
                            <div className='right'>
                              <p>Liquidity</p>
                            </div>
                            <div className='left'>
                              <h6>XXX.XX BNB</h6>
                            </div>
                          </div>
                          <div className='mainparent'>
                            <div className='right'>
                              <p>Start time</p>
                            </div>
                            <div className='left'>
                              <h6>XXX-XX:XX XX:XX (UTC)</h6>
                            </div>
                          </div>
                          <div className='mainparent'>
                            <div className='right'>
                              <p>End time</p>
                            </div>
                            <div className='left'>
                              <h6>XXX-XX:XX XX:XX (UTC)</h6>
                            </div>
                          </div>
                          <div className='mainparent'>
                            <div className='right'>
                              <p>Liquidity lock time</p>
                            </div>
                            <div className='left'>
                              <h6>XXX days</h6>
                            </div>
                          </div>
                          <div className='mainparent'>
                            <div className='right'>
                              <p>Manual Listing</p>
                            </div>
                            <div className='left'>
                              <h6>Liquidity will not be automatically added!</h6>
                            </div>
                          </div>
                          <div className='mainparent'>
                            <div className='right'>
                              <p>Website</p>
                            </div>
                            <div className='left'>
                              <h6>https://www.presaletoken.io/</h6>
                            </div>
                          </div>
                          <div className='mainparent'>
                            <div className='right'>
                              <p>Facebook</p>
                            </div>
                            <div className='left'>
                              <h6>https://www.facebook.com/presaletoken</h6>
                            </div>
                          </div>
                          <div className='mainparent'>
                            <div className='right'>
                              <p>Twitter</p>
                            </div>
                            <div className='left'>
                              <h6>https://www.twitter.com/presaletoken</h6>
                            </div>
                          </div>
                          <div className='mainparent'>
                            <div className='right'>
                              <p>Telegram</p>
                            </div>
                            <div className='left'>
                              <h6>https://www.t.me/presaletoken</h6>
                            </div>
                          </div>
                          <div className='mainparent'>
                            <div className='right'>
                              <p>Github</p>
                            </div>
                            <div className='left'>
                              <h6>https://www.github.com/presaletoken</h6>
                            </div>
                          </div>
                          <div className='mainparent'>
                            <div className='right'>
                              <p>Instagram</p>
                            </div>
                            <div className='left'>
                              <h6>https://www.instagram.com/presaletoken</h6>
                            </div>
                          </div>
                          <div className='mainparent'>
                            <div className='right'>
                              <p>Discord</p>
                            </div>
                            <div className='left'>
                              <h6>https://www.discord.com/presaletoken</h6>
                            </div>
                          </div>
                          <div className='mainparent'>
                            <div className='right'>
                              <p>Reddit</p>
                            </div>
                            <div className='left'>
                              <h6>https://www.reddit.com/presaletoken</h6>
                            </div>
                          </div>
                          <div className='mainparent'>
                            <div className='right'>
                              <p>    Medium  </p>
                            </div>
                            <div className='left'>
                              <h6>https://www.medium.com</h6>
                            </div>
                          </div>
                          <div className='mainparent'>
                            <div className='right'>

                              <p>Description</p>
                            </div>
                            <div className='left'>
                              <h6>Sed ut perspiciatis unde omnis iste natus error sit voluptatem...</h6>
                            </div>
                          </div>
                          <div className='mainparent'>
                            <div className='right'>

                              <p>Using team vesting</p>
                            </div>
                            <div className='left'>
                              <h6>No</h6>
                            </div>
                          </div>
                          <div className='last-para-box'>
                            <p className='Warning-last'>Warning: Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                          </div>
                          <div className='mainbutton last-btn'>
                            <div className="outerbtn-black-btnonewidth w-100 me-2" onClick={() => additionalInfoBackHandel()}>
                              <div className="innerbtn-black">
                                <span className="btnspan"></span>
                                <h5 className="btntext">back</h5>
                              </div>
                            </div>
                            <div className="outerbtn-green-btnonewidth w-100" onClick={() => finishHandel()}>
                              <div className="innerbtn">
                                <span className="btnspan"></span>
                                <h5 className="btntext">Submit</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      : routes == 45 ?
                        <div className="connectwallet-content">
                          <div className="inner-side">
                            <h6 className='main-head'>Transaction Confirm</h6>
                            <p className='upper-para'>Please confirm your transaction with your wallet</p>
                            <p className='end-para'>Waiting for transaction confirmation.</p>
                            <div className='radio-customm'>




                              <ul>
                                <li>
                                  <input type="radio" id="f-option" name="selector" />
                                  <label for="f-option">Pizza</label>

                                  <div class="check"></div>
                                </li>

                                <li>
                                  <input type="radio" id="r-option" name="selector" />
                                  <label for="r-option">Bacon</label>

                                  <div class="check">
                                    <div class="inside"></div>



                                  </div>
                                </li>


                              </ul>


                            </div>
                          </div>
                        </div>
                        : ""
            }
          </div>

        </div>
      </section>
      <Modal className='createtokenmodal' show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create Token</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='mainssss'>
            <div className="filterdropdowns">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <div class="material-textfield">
                    <input placeholder="Standard Token" type="text" className='formargin paddright' />
                    <label>Token Type</label>
                  </div>
                  <img src="\Assets\goldenarrow.svg" alt="arrowimg" className="arrowimg" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className='maininput'>
              <div class="material-textfield">
                <input placeholder="Ex: Ethereum" type="text" />
                <label>Symbol</label>
              </div>
              <div class="material-textfield">
                <input placeholder="Ex: 18" type="text" />
                <label>Decimals</label>
              </div>
              <div class="material-textfield">
                <input placeholder="Ex: 100000000000000" type="text" />
                <label>Total Supply</label>
              </div>
              <div className='mattextfield'>
                <div class="material-textfield">
                  <input placeholder="Ex: 100000000000000" type="text" className='paddright' />
                  <label>Total Supply</label>
                </div>
                <img className='percent' src='\Assets\sidebar-icons\percent.svg' alt='img' />
              </div>

            </div>
          </div>

          <div className="uppercheckboxpara">
            <div className='chec'>
              <div class="example">
                <label class="checkbox-button">
                  <input type="checkbox" class="checkbox-button__input" id="choice1-1" name="choice1" />
                  <span class="checkbox-button__control"></span>
                  {/* <span class="checkbox-button__label">I agree</span> */}
                </label>
              </div>
            </div>
            <p className="checkboxpara">Implement Launchpad-Bot-System?</p>
          </div>
          <div className='end-btn'>
            <div className="outerbtn-green-btnonewidth w-100 createbtn">
              <div className="innerbtn">
                <span className="btnspan"></span>
                <h5 className="btntext">Create Token</h5>
              </div>
            </div>
          </div>
        </Modal.Body>

      </Modal>



    </>
  )
}

export default Create