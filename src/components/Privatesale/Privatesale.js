import React, { useState } from 'react'
import './privatesale.scss'
import { Dropdown, Nav } from 'react-bootstrap'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Filtermodal from '../Filtermodal/Filtermodal';
import Newsletter from '../Newsletter/Newsletter';
import Projectsdetails from '../Projectsdetails/Projectsdetails';

const Privatesale = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const [activeTab, setActiveTab] = useState('link-1');

  const handleSelect = (eventKey) => {
    setActiveTab(eventKey);
  };

  const [toggle, settoggle] = useState(true);
  return (
    <>
      {
        toggle ?
          <>
            <section className="mainprivatesale">
              <div className="row h-100">
                <div className="col-sm-6 m-auto  m-0p-0">
                  <div className="launchpadheadings">
                    <h4 className="launchpadhead">Private Sales</h4>
                    <p className="launchpadpara">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</p>
                  </div>
                </div>
                <div className="col-sm-6 d-flex align-items-end justify-content-center p-0">
                  <img src="\Assets\home-assets\privatesaleimg.png" alt="mainbannerimg" style={{ height: '100%', maxHeight: '278px' }} className="mainbannerimg img-fluid" />
                </div>
              </div>
            </section>

            <div className="row">
              <p className='trendingmobilehead d-none'>Trending Projects</p>
              <div className="trendinganimations">
                <div className="trendinganimationsleft">
                  <h6 className="trendinghead">Trending Projects</h6>
                </div>

                <div className="trendinganimationsright">
                  <div class="marquee">
                    <div class="marquee__group">
                      <div className="trendingcard wow animate__animated animate__fadeInLeft animate__slow">
                        <div className="tendingcardimg">
                          <img src="\Assets\home-assets\trendingcardimg.png" alt="trendingcardinnerimg" className="trendingcardinnerimg" />
                          <div className="exchangeimg">
                            <img src="\Assets\home-assets\exchangeimg.png" alt="innerexchangeimg" className="innerexchangeimg" />
                          </div>
                        </div>
                        <div className="trendingcardtext">
                          <h6 className="treandingcardhead">#2</h6>
                          <p className="trendingcardpara">BurgerCities</p>
                        </div>
                      </div>
                      <div className="trendingcard wow animate__animated animate__fadeInLeft animate__slow">
                        <div className="tendingcardimg">
                          <img src="\Assets\home-assets\trendingcardimg.png" alt="trendingcardinnerimg" className="trendingcardinnerimg" />
                          <div className="exchangeimg">
                            <img src="\Assets\home-assets\exchangeimg.png" alt="innerexchangeimg" className="innerexchangeimg" />
                          </div>
                        </div>
                        <div className="trendingcardtext">
                          <h6 className="treandingcardhead">#2</h6>
                          <p className="trendingcardpara">BurgerCities</p>
                        </div>
                      </div>
                      <div className="trendingcard wow animate__animated animate__fadeInLeft animate__slow">
                        <div className="tendingcardimg">
                          <img src="\Assets\home-assets\trendingcardimg.png" alt="trendingcardinnerimg" className="trendingcardinnerimg" />
                          <div className="exchangeimg">
                            <img src="\Assets\home-assets\exchangeimg.png" alt="innerexchangeimg" className="innerexchangeimg" />
                          </div>
                        </div>
                        <div className="trendingcardtext">
                          <h6 className="treandingcardhead">#2</h6>
                          <p className="trendingcardpara">BurgerCities</p>
                        </div>
                      </div>
                      <div className="trendingcard wow animate__animated animate__fadeInLeft animate__slow">
                        <div className="tendingcardimg">
                          <img src="\Assets\home-assets\trendingcardimg.png" alt="trendingcardinnerimg" className="trendingcardinnerimg" />
                          <div className="exchangeimg">
                            <img src="\Assets\home-assets\exchangeimg.png" alt="innerexchangeimg" className="innerexchangeimg" />
                          </div>
                        </div>
                        <div className="trendingcardtext">
                          <h6 className="treandingcardhead">#2</h6>
                          <p className="trendingcardpara">BurgerCities</p>
                        </div>
                      </div>
                      <div className="trendingcard wow animate__animated animate__fadeInLeft animate__slow">
                        <div className="tendingcardimg">
                          <img src="\Assets\home-assets\trendingcardimg.png" alt="trendingcardinnerimg" className="trendingcardinnerimg" />
                          <div className="exchangeimg">
                            <img src="\Assets\home-assets\exchangeimg.png" alt="innerexchangeimg" className="innerexchangeimg" />
                          </div>
                        </div>
                        <div className="trendingcardtext">
                          <h6 className="treandingcardhead">#2</h6>
                          <p className="trendingcardpara">BurgerCities</p>
                        </div>
                      </div>
                      <div className="trendingcard wow animate__animated animate__fadeInLeft animate__slow">
                        <div className="tendingcardimg">
                          <img src="\Assets\home-assets\trendingcardimg.png" alt="trendingcardinnerimg" className="trendingcardinnerimg" />
                          <div className="exchangeimg">
                            <img src="\Assets\home-assets\exchangeimg.png" alt="innerexchangeimg" className="innerexchangeimg" />
                          </div>
                        </div>
                        <div className="trendingcardtext">
                          <h6 className="treandingcardhead">#2</h6>
                          <p className="trendingcardpara">BurgerCities</p>
                        </div>
                      </div>
                      <div className="trendingcard wow animate__animated animate__fadeInLeft animate__slow">
                        <div className="tendingcardimg">
                          <img src="\Assets\home-assets\trendingcardimg.png" alt="trendingcardinnerimg" className="trendingcardinnerimg" />
                          <div className="exchangeimg">
                            <img src="\Assets\home-assets\exchangeimg.png" alt="innerexchangeimg" className="innerexchangeimg" />
                          </div>
                        </div>
                        <div className="trendingcardtext">
                          <h6 className="treandingcardhead">#2</h6>
                          <p className="trendingcardpara">BurgerCities</p>
                        </div>
                      </div>
                      <div className="trendingcard wow animate__animated animate__fadeInLeft animate__slow">
                        <div className="tendingcardimg">
                          <img src="\Assets\home-assets\trendingcardimg.png" alt="trendingcardinnerimg" className="trendingcardinnerimg" />
                          <div className="exchangeimg">
                            <img src="\Assets\home-assets\exchangeimg.png" alt="innerexchangeimg" className="innerexchangeimg" />
                          </div>
                        </div>
                        <div className="trendingcardtext">
                          <h6 className="treandingcardhead">#2</h6>
                          <p className="trendingcardpara">BurgerCities</p>
                        </div>
                      </div>
                      <div className="trendingcard wow animate__animated animate__fadeInLeft animate__slow">
                        <div className="tendingcardimg">
                          <img src="\Assets\home-assets\trendingcardimg.png" alt="trendingcardinnerimg" className="trendingcardinnerimg" />
                          <div className="exchangeimg">
                            <img src="\Assets\home-assets\exchangeimg.png" alt="innerexchangeimg" className="innerexchangeimg" />
                          </div>
                        </div>
                        <div className="trendingcardtext">
                          <h6 className="treandingcardhead">#2</h6>
                          <p className="trendingcardpara">BurgerCities</p>
                        </div>
                      </div>
                      <div className="trendingcard wow animate__animated animate__fadeInLeft animate__slow">
                        <div className="tendingcardimg">
                          <img src="\Assets\home-assets\trendingcardimg.png" alt="trendingcardinnerimg" className="trendingcardinnerimg" />
                          <div className="exchangeimg">
                            <img src="\Assets\home-assets\exchangeimg.png" alt="innerexchangeimg" className="innerexchangeimg" />
                          </div>
                        </div>
                        <div className="trendingcardtext">
                          <h6 className="treandingcardhead">#2</h6>
                          <p className="trendingcardpara">BurgerCities</p>
                        </div>
                      </div>
                      <div className="trendingcard wow animate__animated animate__fadeInLeft animate__slow">
                        <div className="tendingcardimg">
                          <img src="\Assets\home-assets\trendingcardimg.png" alt="trendingcardinnerimg" className="trendingcardinnerimg" />
                          <div className="exchangeimg">
                            <img src="\Assets\home-assets\exchangeimg.png" alt="innerexchangeimg" className="innerexchangeimg" />
                          </div>
                        </div>
                        <div className="trendingcardtext">
                          <h6 className="treandingcardhead">#2</h6>
                          <p className="trendingcardpara">BurgerCities</p>
                        </div>
                      </div>
                      <div className="trendingcard wow animate__animated animate__fadeInLeft animate__slow">
                        <div className="tendingcardimg">
                          <img src="\Assets\home-assets\trendingcardimg.png" alt="trendingcardinnerimg" className="trendingcardinnerimg" />
                          <div className="exchangeimg">
                            <img src="\Assets\home-assets\exchangeimg.png" alt="innerexchangeimg" className="innerexchangeimg" />
                          </div>
                        </div>
                        <div className="trendingcardtext">
                          <h6 className="treandingcardhead">#2</h6>
                          <p className="trendingcardpara">BurgerCities</p>
                        </div>
                      </div>
                    </div>

                    <div aria-hidden="true" class="marquee__group">
                      <div className="trendingcard wow animate__animated animate__fadeInLeft animate__slow">
                        <div className="tendingcardimg">
                          <img src="\Assets\home-assets\trendingcardimg.png" alt="trendingcardinnerimg" className="trendingcardinnerimg" />
                          <div className="exchangeimg">
                            <img src="\Assets\home-assets\exchangeimg.png" alt="innerexchangeimg" className="innerexchangeimg" />
                          </div>
                        </div>
                        <div className="trendingcardtext">
                          <h6 className="treandingcardhead">#2</h6>
                          <p className="trendingcardpara">BurgerCities</p>
                        </div>
                      </div>
                      <div className="trendingcard wow animate__animated animate__fadeInLeft animate__slow">
                        <div className="tendingcardimg">
                          <img src="\Assets\home-assets\trendingcardimg.png" alt="trendingcardinnerimg" className="trendingcardinnerimg" />
                          <div className="exchangeimg">
                            <img src="\Assets\home-assets\exchangeimg.png" alt="innerexchangeimg" className="innerexchangeimg" />
                          </div>
                        </div>
                        <div className="trendingcardtext">
                          <h6 className="treandingcardhead">#2</h6>
                          <p className="trendingcardpara">BurgerCities</p>
                        </div>
                      </div>
                      <div className="trendingcard wow animate__animated animate__fadeInLeft animate__slow">
                        <div className="tendingcardimg">
                          <img src="\Assets\home-assets\trendingcardimg.png" alt="trendingcardinnerimg" className="trendingcardinnerimg" />
                          <div className="exchangeimg">
                            <img src="\Assets\home-assets\exchangeimg.png" alt="innerexchangeimg" className="innerexchangeimg" />
                          </div>
                        </div>
                        <div className="trendingcardtext">
                          <h6 className="treandingcardhead">#2</h6>
                          <p className="trendingcardpara">BurgerCities</p>
                        </div>
                      </div>
                      <div className="trendingcard wow animate__animated animate__fadeInLeft animate__slow">
                        <div className="tendingcardimg">
                          <img src="\Assets\home-assets\trendingcardimg.png" alt="trendingcardinnerimg" className="trendingcardinnerimg" />
                          <div className="exchangeimg">
                            <img src="\Assets\home-assets\exchangeimg.png" alt="innerexchangeimg" className="innerexchangeimg" />
                          </div>
                        </div>
                        <div className="trendingcardtext">
                          <h6 className="treandingcardhead">#2</h6>
                          <p className="trendingcardpara">BurgerCities</p>
                        </div>
                      </div>
                      <div className="trendingcard wow animate__animated animate__fadeInLeft animate__slow">
                        <div className="tendingcardimg">
                          <img src="\Assets\home-assets\trendingcardimg.png" alt="trendingcardinnerimg" className="trendingcardinnerimg" />
                          <div className="exchangeimg">
                            <img src="\Assets\home-assets\exchangeimg.png" alt="innerexchangeimg" className="innerexchangeimg" />
                          </div>
                        </div>
                        <div className="trendingcardtext">
                          <h6 className="treandingcardhead">#2</h6>
                          <p className="trendingcardpara">BurgerCities</p>
                        </div>
                      </div>
                      <div className="trendingcard wow animate__animated animate__fadeInLeft animate__slow">
                        <div className="tendingcardimg">
                          <img src="\Assets\home-assets\trendingcardimg.png" alt="trendingcardinnerimg" className="trendingcardinnerimg" />
                          <div className="exchangeimg">
                            <img src="\Assets\home-assets\exchangeimg.png" alt="innerexchangeimg" className="innerexchangeimg" />
                          </div>
                        </div>
                        <div className="trendingcardtext">
                          <h6 className="treandingcardhead">#2</h6>
                          <p className="trendingcardpara">BurgerCities</p>
                        </div>
                      </div>
                      <div className="trendingcard wow animate__animated animate__fadeInLeft animate__slow">
                        <div className="tendingcardimg">
                          <img src="\Assets\home-assets\trendingcardimg.png" alt="trendingcardinnerimg" className="trendingcardinnerimg" />
                          <div className="exchangeimg">
                            <img src="\Assets\home-assets\exchangeimg.png" alt="innerexchangeimg" className="innerexchangeimg" />
                          </div>
                        </div>
                        <div className="trendingcardtext">
                          <h6 className="treandingcardhead">#2</h6>
                          <p className="trendingcardpara">BurgerCities</p>
                        </div>
                      </div>
                      <div className="trendingcard wow animate__animated animate__fadeInLeft animate__slow">
                        <div className="tendingcardimg">
                          <img src="\Assets\home-assets\trendingcardimg.png" alt="trendingcardinnerimg" className="trendingcardinnerimg" />
                          <div className="exchangeimg">
                            <img src="\Assets\home-assets\exchangeimg.png" alt="innerexchangeimg" className="innerexchangeimg" />
                          </div>
                        </div>
                        <div className="trendingcardtext">
                          <h6 className="treandingcardhead">#2</h6>
                          <p className="trendingcardpara">BurgerCities</p>
                        </div>
                      </div>
                      <div className="trendingcard wow animate__animated animate__fadeInLeft animate__slow">
                        <div className="tendingcardimg">
                          <img src="\Assets\home-assets\trendingcardimg.png" alt="trendingcardinnerimg" className="trendingcardinnerimg" />
                          <div className="exchangeimg">
                            <img src="\Assets\home-assets\exchangeimg.png" alt="innerexchangeimg" className="innerexchangeimg" />
                          </div>
                        </div>
                        <div className="trendingcardtext">
                          <h6 className="treandingcardhead">#2</h6>
                          <p className="trendingcardpara">BurgerCities</p>
                        </div>
                      </div>
                      <div className="trendingcard wow animate__animated animate__fadeInLeft animate__slow">
                        <div className="tendingcardimg">
                          <img src="\Assets\home-assets\trendingcardimg.png" alt="trendingcardinnerimg" className="trendingcardinnerimg" />
                          <div className="exchangeimg">
                            <img src="\Assets\home-assets\exchangeimg.png" alt="innerexchangeimg" className="innerexchangeimg" />
                          </div>
                        </div>
                        <div className="trendingcardtext">
                          <h6 className="treandingcardhead">#2</h6>
                          <p className="trendingcardpara">BurgerCities</p>
                        </div>
                      </div>
                      <div className="trendingcard wow animate__animated animate__fadeInLeft animate__slow">
                        <div className="tendingcardimg">
                          <img src="\Assets\home-assets\trendingcardimg.png" alt="trendingcardinnerimg" className="trendingcardinnerimg" />
                          <div className="exchangeimg">
                            <img src="\Assets\home-assets\exchangeimg.png" alt="innerexchangeimg" className="innerexchangeimg" />
                          </div>
                        </div>
                        <div className="trendingcardtext">
                          <h6 className="treandingcardhead">#2</h6>
                          <p className="trendingcardpara">BurgerCities</p>
                        </div>
                      </div>
                      <div className="trendingcard wow animate__animated animate__fadeInLeft animate__slow">
                        <div className="tendingcardimg">
                          <img src="\Assets\home-assets\trendingcardimg.png" alt="trendingcardinnerimg" className="trendingcardinnerimg" />
                          <div className="exchangeimg">
                            <img src="\Assets\home-assets\exchangeimg.png" alt="innerexchangeimg" className="innerexchangeimg" />
                          </div>
                        </div>
                        <div className="trendingcardtext">
                          <h6 className="treandingcardhead">#2</h6>
                          <p className="trendingcardpara">BurgerCities</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <section className="currpresale"> m-0
              <div className="currpresaleheadings">
                <h5 className="currpresalehead">Private Sale</h5>
                <p className="currpresalepara">Browse current presale project</p>
              </div>
              <div className="maintabs">
                <div className="searchinput">
                  <img src="\Assets\home-assets\search-normal.svg" alt="searchinputimg" className="searchinputimg" />
                  <input type="text" placeholder='Enter token name or token sybmol' className="searchinputmain" />
                  <img src="\Assets\home-assets\mobilefilter.svg" alt="filterimg" onClick={handleShow} className="filterimg d-none" />
                </div>
                <div className="filterdropdowns">
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      <div class="material-textfield">
                        <input placeholder="No Filter" type="text" className='formargin' />
                        <label>Filter by</label>
                      </div>
                      <img src="\Assets\home-assets\arrow-down.svg" alt="arrowimg" className="arrowimg" />
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
                        <input placeholder="No Filter" type="text" className='formargin' />
                        <label>Pool Type</label>
                      </div>
                      <img src="\Assets\home-assets\arrow-down.svg" alt="arrowimg" className="arrowimg" />
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
                        <input placeholder="No Filter" type="text" className='formargin' />
                        <label>Sort by</label>
                      </div>
                      <img src="\Assets\home-assets\arrow-down.svg" alt="arrowimg" className="arrowimg" />
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
                        <input placeholder="No Filter" type="text" className='formargin' />
                        <label>Chain</label>
                      </div>
                      <img src="\Assets\home-assets\arrow-down.svg" alt="arrowimg" className="arrowimg" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <div className="mainpresalecards">
                <div className="currpresalecard">
                  <div className="currpresaleupper">
                    <div className="currpresaleupperleft">
                      <div className="currpresalecardimg">
                        <img src="\Assets\home-assets\trendingcardimg.png" alt="trendingcardinnerimg" className="currpresalecardinnerimg" />
                        <div className="exchangeimg">
                          <img src="\Assets\home-assets\exchangeimg.png" alt="innerexchangeimg" className="innerexchangeimg" />
                        </div>
                      </div>
                      <div className="currpresalecardtexts">
                        <h6 className="currpresalecardhead">BurgerCities</h6>
                        <span className="currpresalecardbox m-0">
                          <img src="\Assets\home-assets\cardspanimg.svg" alt="img" className="img-fluid" />
                          <p className="currpresalecardpara">Private Sale</p>
                        </span>
                      </div>
                    </div>
                    <div className="currpresaleupperright">
                      <span className="currpresalecardboxright yellow">
                        <img src="\Assets\home-assets\cardyellowimg.svg" alt="yellowcircle" className="yellowcircle img-fluid" />
                        <p className="currpresalecardpararight yellowtext">Coming Soon</p>
                      </span>
                    </div>
                  </div>
                  <div className="currpresalecenter">
                    <p className="currpresalecenterpara">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem laudantium, totam rem aperiam eaque.</p>
                    <div className="currpresaledata">
                      <p className="currpresaledataleft">Soft</p>
                      <h6 className="currpresaledataright">555.55 ETH</h6>
                    </div>
                    <div className="currpresaledata">
                      <p className="currpresaledataleft">Liquidity %:</p>
                      <h6 className="currpresaledataright">55.52 %</h6>
                    </div>
                    <div className="currpresaledata">
                      <p className="currpresaledataleft">Lockup Time:</p>
                      <h6 className="currpresaledataright">365 Days</h6>
                    </div>
                  </div>
                  <div className="forcolor">
                    <div className="currpresalecardboxinner">
                      <div className="currpresalecardboxleft">
                        <p className="currpresalecardboxupperpara">Starting Date</p>
                        <p className="currpresalecardboxlowerpara">Starts in:</p>
                        <h6 className="currpresalecardboxtimerpara">2d : 5h : 32m</h6>
                      </div>
                      <div className="currpresalecardboxright">
                        <p className="currpresalecardboxrighthead">Apr 30, 2023</p>
                      </div>
                    </div>
                  </div>
                  <div className="currpresalecardbtns">
                    <div className="outerbtn heart-bg">
                      <div className="innerbtn">
                        <span className="btnspan"></span>
                        <h5 className="btntext"><img src="\Assets\home-assets\heartimg.svg" alt="img" /></h5>
                      </div>
                    </div>
                    <div onClick={()=>{settoggle(!toggle)}} className="outerbtn-green-btnonewidth w-100">
                      <div className="innerbtn">
                        <span className="btnspan"></span>
                        <h5 className="btntext">View Details</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="currpresalecard">
                  <div className="currpresaleupper">
                    <div className="currpresaleupperleft">
                      <div className="currpresalecardimg">
                        <img src="\Assets\home-assets\trendingcardimg.png" alt="trendingcardinnerimg" className="currpresalecardinnerimg" />
                        <div className="exchangeimg">
                          <img src="\Assets\home-assets\exchangeimg.png" alt="innerexchangeimg" className="innerexchangeimg" />
                        </div>
                      </div>
                      <div className="currpresalecardtexts">
                        <h6 className="currpresalecardhead">BurgerCities</h6>
                        <span className="currpresalecardbox publicbox mb-0">
                          <img src="\Assets\home-assets\publicsale.svg" alt="img" className="img-fluid" />
                          <p className="currpresalecardpara publicpara">Public Sale</p>
                        </span>
                      </div>
                    </div>
                    <div className="currpresaleupperright">
                      <span className="currpresalecardboxright livebox">
                        <img src="\Assets\home-assets\livecircle.svg" alt="yellowcircle" className="yellowcircle img-fluid" />
                        <p className="currpresalecardpararight livepara">Live</p>
                      </span>
                    </div>
                  </div>
                  <div className="currpresalecenter">
                    <p className="currpresalecenterpara">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem laudantium, totam rem aperiam eaque.</p>
                    <div className="currpresaledata">
                      <p className="currpresaledataleft">Soft</p>
                      <h6 className="currpresaledataright">555.55 ETH</h6>
                    </div>
                    <div className="currpresaledata">
                      <p className="currpresaledataleft">Liquidity %:</p>
                      <h6 className="currpresaledataright">55.52 %</h6>
                    </div>
                    <div className="currpresaledata">
                      <p className="currpresaledataleft">Lockup Time:</p>
                      <h6 className="currpresaledataright">365 Days</h6>
                    </div>
                  </div>
                  <div className="forcolor">
                    <div className="currpresalecardboxinner">
                      <div className="currpresalecardboxleft">
                        <p className="currpresalecardboxupperpara">Starting Date</p>
                        <p className="currpresalecardboxlowerpara">Starts in:</p>
                        <h6 className="currpresalecardboxtimerpara">2d : 5h : 32m</h6>
                      </div>
                      <div className="currpresalecardboxright">
                        <p className="currpresalecardboxrighthead">Apr 30, 2023</p>
                      </div>
                    </div>
                  </div>
                  <div className="currpresalecardbtns">
                    <div className="outerbtn">
                      <div className="innerbtn">
                        <span className="btnspan"></span>
                        <h5 className="btntext"><img src="\Assets\home-assets\emptyheart.svg" alt="img" /></h5>
                      </div>
                    </div>
                    <div onClick={()=>{settoggle(!toggle)}} className="outerbtn-green-btnonewidth w-100">
                      <div className="innerbtn">
                        <span className="btnspan"></span>
                        <h5 className="btntext">View Details</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="currpresalecard">
                  <div className="currpresaleupper">
                    <div className="currpresaleupperleft">
                      <div className="currpresalecardimg">
                        <img src="\Assets\home-assets\trendingcardimg.png" alt="trendingcardinnerimg" className="currpresalecardinnerimg" />
                        <div className="exchangeimg">
                          <img src="\Assets\home-assets\exchangeimg.png" alt="innerexchangeimg" className="innerexchangeimg" />
                        </div>
                      </div>
                      <div className="currpresalecardtexts">
                        <h6 className="currpresalecardhead">BurgerCities</h6>
                        <span className="currpresalecardbox m-0">
                          <img src="\Assets\home-assets\cardspanimg.svg" alt="img" className="img-fluid" />
                          <p className="currpresalecardpara">Private Sale</p>
                        </span>
                      </div>
                    </div>
                    <div className="currpresaleupperright">
                      <span className="currpresalecardboxright">
                        <img src="\Assets\home-assets\cardyellowimg.svg" alt="yellowcircle" className="yellowcircle img-fluid" />
                        <p className="currpresalecardpararight">Coming Soon</p>
                      </span>
                    </div>
                  </div>
                  <div className="currpresalecenter">
                    <p className="currpresalecenterpara">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem laudantium, totam rem aperiam eaque.</p>
                    <div className="currpresaledata">
                      <p className="currpresaledataleft">Soft</p>
                      <h6 className="currpresaledataright">555.55 ETH</h6>
                    </div>
                    <div className="currpresaledata">
                      <p className="currpresaledataleft">Liquidity %:</p>
                      <h6 className="currpresaledataright">55.52 %</h6>
                    </div>
                    <div className="currpresaledata">
                      <p className="currpresaledataleft">Lockup Time:</p>
                      <h6 className="currpresaledataright">365 Days</h6>
                    </div>
                  </div>
                  <div className="forcolor">
                    <div className="currpresalecardboxinner">
                      <div className="currpresalecardboxleft">
                        <p className="currpresalecardboxupperpara">Starting Date</p>
                      </div>
                      <div className="currpresalecardboxright">
                        <p className="currpresalecardboxrighthead">Apr 30, 2023</p>
                      </div>
                    </div>
                    <div className="cardprogress">
                      <div className="cardprogressheadings">
                        <p className="cardprogresspara">Progress</p>
                        <h6 className="cardprogresshead">50.5%</h6>
                      </div>
                      <ProgressBar now={60} />
                      <div className="cardprogressheadings">
                        <p className="cardprogresspara">5,550 ETH</p>
                        <h6 className="cardprogresshead">10,000 ETH</h6>
                      </div>
                    </div>
                  </div>
                  <div className="currpresalecardbtns">
                    <div className="outerbtn heart-bg">
                      <div className="innerbtn">
                        <span className="btnspan"></span>
                        <h5 className="btntext"><img src="\Assets\home-assets\heartimg.svg" alt="img" /></h5>
                      </div>
                    </div>
                    <div onClick={()=>{settoggle(!toggle)}} className="outerbtn-green-btnonewidth w-100">
                      <div className="innerbtn">
                        <span className="btnspan"></span>
                        <h5 className="btntext">View Details</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="currpresalecard">
                  <div className="currpresaleupper">
                    <div className="currpresaleupperleft">
                      <div className="currpresalecardimg">
                        <img src="\Assets\home-assets\trendingcardimg.png" alt="trendingcardinnerimg" className="currpresalecardinnerimg" />
                        <div className="exchangeimg">
                          <img src="\Assets\home-assets\exchangeimg.png" alt="innerexchangeimg" className="innerexchangeimg" />
                        </div>
                      </div>
                      <div className="currpresalecardtexts">
                        <h6 className="currpresalecardhead">BurgerCities</h6>
                        <span className="currpresalecardbox m-0">
                          <img src="\Assets\home-assets\cardspanimg.svg" alt="img" className="img-fluid" />
                          <p className="currpresalecardpara">Private Sale</p>
                        </span>
                      </div>
                    </div>
                    <div className="currpresaleupperright">
                      <span className="currpresalecardboxright">
                        <img src="\Assets\home-assets\cardyellowimg.svg" alt="yellowcircle" className="yellowcircle img-fluid" />
                        <p className="currpresalecardpararight">Coming Soon</p>
                      </span>
                    </div>
                  </div>
                  <div className="currpresalecenter">
                    <p className="currpresalecenterpara">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem laudantium, totam rem aperiam eaque.</p>
                    <div className="currpresaledata">
                      <p className="currpresaledataleft">Soft</p>
                      <h6 className="currpresaledataright">555.55 ETH</h6>
                    </div>
                    <div className="currpresaledata">
                      <p className="currpresaledataleft">Liquidity %:</p>
                      <h6 className="currpresaledataright">55.52 %</h6>
                    </div>
                    <div className="currpresaledata">
                      <p className="currpresaledataleft">Lockup Time:</p>
                      <h6 className="currpresaledataright">365 Days</h6>
                    </div>
                  </div>
                  <div className="forcolor">
                    <div className="currpresalecardboxinner">
                      <div className="currpresalecardboxleft">
                        <p className="currpresalecardboxupperpara">Starting Date</p>
                        <p className="currpresalecardboxlowerpara">Starts in:</p>
                        <h6 className="currpresalecardboxtimerpara">2d : 5h : 32m</h6>
                      </div>
                      <div className="currpresalecardboxright">
                        <p className="currpresalecardboxrighthead">Apr 30, 2023</p>
                      </div>
                    </div>
                  </div>
                  <div className="currpresalecardbtns">
                    <div className="outerbtn heart-bg">
                      <div className="innerbtn">
                        <span className="btnspan"></span>
                        <h5 className="btntext"><img src="\Assets\home-assets\heartimg.svg" alt="img" /></h5>
                      </div>
                    </div>
                    <div onClick={()=>{settoggle(!toggle)}} className="outerbtn-green-btnonewidth w-100">
                      <div className="innerbtn">
                        <span className="btnspan"></span>
                        <h5 className="btntext">View Details</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="currpresalecard">
                  <div className="currpresaleupper">
                    <div className="currpresaleupperleft">
                      <div className="currpresalecardimg">
                        <img src="\Assets\home-assets\trendingcardimg.png" alt="trendingcardinnerimg" className="currpresalecardinnerimg" />
                        <div className="exchangeimg">
                          <img src="\Assets\home-assets\exchangeimg.png" alt="innerexchangeimg" className="innerexchangeimg" />
                        </div>
                      </div>
                      <div className="currpresalecardtexts">
                        <h6 className="currpresalecardhead">BurgerCities</h6>
                        <span className="currpresalecardbox publicbox mb-0">
                          <img src="\Assets\home-assets\publicsale.svg" alt="img" className="img-fluid" />
                          <p className="currpresalecardpara publicpara">Public Sale</p>
                        </span>
                      </div>
                    </div>
                    <div className="currpresaleupperright">
                      <span className="currpresalecardboxright livebox">
                        <img src="\Assets\home-assets\livecircle.svg" alt="yellowcircle" className="yellowcircle img-fluid" />
                        <p className="currpresalecardpararight livepara">Live</p>
                      </span>
                    </div>
                  </div>
                  <div className="currpresalecenter">
                    <p className="currpresalecenterpara">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem laudantium, totam rem aperiam eaque.</p>
                    <div className="currpresaledata">
                      <p className="currpresaledataleft">Soft</p>
                      <h6 className="currpresaledataright">555.55 ETH</h6>
                    </div>
                    <div className="currpresaledata">
                      <p className="currpresaledataleft">Liquidity %:</p>
                      <h6 className="currpresaledataright">55.52 %</h6>
                    </div>
                    <div className="currpresaledata">
                      <p className="currpresaledataleft">Lockup Time:</p>
                      <h6 className="currpresaledataright">365 Days</h6>
                    </div>
                  </div>
                  <div className="forcolor">
                    <div className="currpresalecardboxinner">
                      <div className="currpresalecardboxleft">
                        <p className="currpresalecardboxupperpara">Starting Date</p>
                        <p className="currpresalecardboxlowerpara">Starts in:</p>
                        <h6 className="currpresalecardboxtimerpara">2d : 5h : 32m</h6>
                      </div>
                      <div className="currpresalecardboxright">
                        <p className="currpresalecardboxrighthead">Apr 30, 2023</p>
                      </div>
                    </div>
                  </div>
                  <div className="currpresalecardbtns">
                    <div className="outerbtn">
                      <div className="innerbtn">
                        <span className="btnspan"></span>
                        <h5 className="btntext"><img src="\Assets\home-assets\emptyheart.svg" alt="img" /></h5>
                      </div>
                    </div>
                    <div onClick={()=>{settoggle(!toggle)}} className="outerbtn-green-btnonewidth w-100">
                      <div className="innerbtn">
                        <span className="btnspan"></span>
                        <h5 className="btntext">View Details</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="currpresalecard">
                  <div className="currpresaleupper">
                    <div className="currpresaleupperleft">
                      <div className="currpresalecardimg">
                        <img src="\Assets\home-assets\trendingcardimg.png" alt="trendingcardinnerimg" className="currpresalecardinnerimg" />
                        <div className="exchangeimg">
                          <img src="\Assets\home-assets\exchangeimg.png" alt="innerexchangeimg" className="innerexchangeimg" />
                        </div>
                      </div>
                      <div className="currpresalecardtexts">
                        <h6 className="currpresalecardhead">BurgerCities</h6>
                        <span className="currpresalecardbox m-0">
                          <img src="\Assets\home-assets\cardspanimg.svg" alt="img" className="img-fluid" />
                          <p className="currpresalecardpara">Private Sale</p>
                        </span>
                      </div>
                    </div>
                    <div className="currpresaleupperright">
                      <span className="currpresalecardboxright">
                        <img src="\Assets\home-assets\cardyellowimg.svg" alt="yellowcircle" className="yellowcircle img-fluid" />
                        <p className="currpresalecardpararight">Coming Soon</p>
                      </span>
                    </div>
                  </div>
                  <div className="currpresalecenter">
                    <p className="currpresalecenterpara">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem laudantium, totam rem aperiam eaque.</p>
                    <div className="currpresaledata">
                      <p className="currpresaledataleft">Soft</p>
                      <h6 className="currpresaledataright">555.55 ETH</h6>
                    </div>
                    <div className="currpresaledata">
                      <p className="currpresaledataleft">Liquidity %:</p>
                      <h6 className="currpresaledataright">55.52 %</h6>
                    </div>
                    <div className="currpresaledata">
                      <p className="currpresaledataleft">Lockup Time:</p>
                      <h6 className="currpresaledataright">365 Days</h6>
                    </div>
                  </div>
                  <div className="forcolor">
                    <div className="currpresalecardboxinner">
                      <div className="currpresalecardboxleft">
                        <p className="currpresalecardboxupperpara">Starting Date</p>
                      </div>
                      <div className="currpresalecardboxright">
                        <p className="currpresalecardboxrighthead">Apr 30, 2023</p>
                      </div>
                    </div>
                    <div className="cardprogress">
                      <div className="cardprogressheadings">
                        <p className="cardprogresspara">Progress</p>
                        <h6 className="cardprogresshead">50.5%</h6>
                      </div>
                      <ProgressBar now={60} />
                      <div className="cardprogressheadings">
                        <p className="cardprogresspara">5,550 ETH</p>
                        <h6 className="cardprogresshead">10,000 ETH</h6>
                      </div>
                    </div>
                  </div>
                  <div className="currpresalecardbtns">
                    <div className="outerbtn heart-bg">
                      <div className="innerbtn">
                        <span className="btnspan"></span>
                        <h5 className="btntext"><img src="\Assets\home-assets\heartimg.svg" alt="img" /></h5>
                      </div>
                    </div>
                    <div onClick={()=>{settoggle(!toggle)}} className="outerbtn-green-btnonewidth w-100">
                      <div className="innerbtn">
                        <span className="btnspan"></span>
                        <h5 className="btntext">View Details</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="currpresalecard">
                  <div className="currpresaleupper">
                    <div className="currpresaleupperleft">
                      <div className="currpresalecardimg">
                        <img src="\Assets\home-assets\trendingcardimg.png" alt="trendingcardinnerimg" className="currpresalecardinnerimg" />
                        <div className="exchangeimg">
                          <img src="\Assets\home-assets\exchangeimg.png" alt="innerexchangeimg" className="innerexchangeimg" />
                        </div>
                      </div>
                      <div className="currpresalecardtexts">
                        <h6 className="currpresalecardhead">BurgerCities</h6>
                        <span className="currpresalecardbox m-0">
                          <img src="\Assets\home-assets\cardspanimg.svg" alt="img" className="img-fluid" />
                          <p className="currpresalecardpara">Private Sale</p>
                        </span>
                      </div>
                    </div>
                    <div className="currpresaleupperright">
                      <span className="currpresalecardboxright">
                        <img src="\Assets\home-assets\cardyellowimg.svg" alt="yellowcircle" className="yellowcircle img-fluid" />
                        <p className="currpresalecardpararight">Coming Soon</p>
                      </span>
                    </div>
                  </div>
                  <div className="currpresalecenter">
                    <p className="currpresalecenterpara">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem laudantium, totam rem aperiam eaque.</p>
                    <div className="currpresaledata">
                      <p className="currpresaledataleft">Soft</p>
                      <h6 className="currpresaledataright">555.55 ETH</h6>
                    </div>
                    <div className="currpresaledata">
                      <p className="currpresaledataleft">Liquidity %:</p>
                      <h6 className="currpresaledataright">55.52 %</h6>
                    </div>
                    <div className="currpresaledata">
                      <p className="currpresaledataleft">Lockup Time:</p>
                      <h6 className="currpresaledataright">365 Days</h6>
                    </div>
                  </div>
                  <div className="forcolor">
                    <div className="currpresalecardboxinner">
                      <div className="currpresalecardboxleft">
                        <p className="currpresalecardboxupperpara">Starting Date</p>
                        <p className="currpresalecardboxlowerpara">Starts in:</p>
                        <h6 className="currpresalecardboxtimerpara">2d : 5h : 32m</h6>
                      </div>
                      <div className="currpresalecardboxright">
                        <p className="currpresalecardboxrighthead">Apr 30, 2023</p>
                      </div>
                    </div>
                  </div>
                  <div className="currpresalecardbtns">
                    <div className="outerbtn heart-bg">
                      <div className="innerbtn">
                        <span className="btnspan"></span>
                        <h5 className="btntext"><img src="\Assets\home-assets\heartimg.svg" alt="img" /></h5>
                      </div>
                    </div>
                    <div onClick={()=>{settoggle(!toggle)}} className="outerbtn-green-btnonewidth w-100">
                      <div className="innerbtn">
                        <span className="btnspan"></span>
                        <h5 className="btntext">View Details</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="currpresalecard">
                  <div className="currpresaleupper">
                    <div className="currpresaleupperleft">
                      <div className="currpresalecardimg">
                        <img src="\Assets\home-assets\trendingcardimg.png" alt="trendingcardinnerimg" className="currpresalecardinnerimg" />
                        <div className="exchangeimg">
                          <img src="\Assets\home-assets\exchangeimg.png" alt="innerexchangeimg" className="innerexchangeimg" />
                        </div>
                      </div>
                      <div className="currpresalecardtexts">
                        <h6 className="currpresalecardhead">BurgerCities</h6>
                        <span className="currpresalecardbox publicbox mb-0">
                          <img src="\Assets\home-assets\publicsale.svg" alt="img" className="img-fluid" />
                          <p className="currpresalecardpara publicpara">Public Sale</p>
                        </span>
                      </div>
                    </div>
                    <div className="currpresaleupperright">
                      <span className="currpresalecardboxright livebox">
                        <img src="\Assets\home-assets\livecircle.svg" alt="yellowcircle" className="yellowcircle img-fluid" />
                        <p className="currpresalecardpararight livepara">Live</p>
                      </span>
                    </div>
                  </div>
                  <div className="currpresalecenter">
                    <p className="currpresalecenterpara">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem laudantium, totam rem aperiam eaque.</p>
                    <div className="currpresaledata">
                      <p className="currpresaledataleft">Soft</p>
                      <h6 className="currpresaledataright">555.55 ETH</h6>
                    </div>
                    <div className="currpresaledata">
                      <p className="currpresaledataleft">Liquidity %:</p>
                      <h6 className="currpresaledataright">55.52 %</h6>
                    </div>
                    <div className="currpresaledata">
                      <p className="currpresaledataleft">Lockup Time:</p>
                      <h6 className="currpresaledataright">365 Days</h6>
                    </div>
                  </div>
                  <div className="forcolor">
                    <div className="currpresalecardboxinner">
                      <div className="currpresalecardboxleft">
                        <p className="currpresalecardboxupperpara">Starting Date</p>
                        <p className="currpresalecardboxlowerpara">Starts in:</p>
                        <h6 className="currpresalecardboxtimerpara">2d : 5h : 32m</h6>
                      </div>
                      <div className="currpresalecardboxright">
                        <p className="currpresalecardboxrighthead">Apr 30, 2023</p>
                      </div>
                    </div>
                  </div>
                  <div className="currpresalecardbtns">
                    <div className="outerbtn">
                      <div className="innerbtn">
                        <span className="btnspan"></span>
                        <h5 className="btntext"><img src="\Assets\home-assets\emptyheart.svg" alt="img" /></h5>
                      </div>
                    </div>
                    <div onClick={()=>{settoggle(!toggle)}} className="outerbtn-green-btnonewidth w-100">
                      <div className="innerbtn">
                        <span className="btnspan"></span>
                        <h5 className="btntext">View Details</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="currpresalecard">
                  <div className="currpresaleupper">
                    <div className="currpresaleupperleft">
                      <div className="currpresalecardimg">
                        <img src="\Assets\home-assets\trendingcardimg.png" alt="trendingcardinnerimg" className="currpresalecardinnerimg" />
                        <div className="exchangeimg">
                          <img src="\Assets\home-assets\exchangeimg.png" alt="innerexchangeimg" className="innerexchangeimg" />
                        </div>
                      </div>
                      <div className="currpresalecardtexts">
                        <h6 className="currpresalecardhead">BurgerCities</h6>
                        <span className="currpresalecardbox m-0">
                          <img src="\Assets\home-assets\cardspanimg.svg" alt="img" className="img-fluid" />
                          <p className="currpresalecardpara">Private Sale</p>
                        </span>
                      </div>
                    </div>
                    <div className="currpresaleupperright">
                      <span className="currpresalecardboxright">
                        <img src="\Assets\home-assets\cardyellowimg.svg" alt="yellowcircle" className="yellowcircle img-fluid" />
                        <p className="currpresalecardpararight">Coming Soon</p>
                      </span>
                    </div>
                  </div>
                  <div className="currpresalecenter">
                    <p className="currpresalecenterpara">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem laudantium, totam rem aperiam eaque.</p>
                    <div className="currpresaledata">
                      <p className="currpresaledataleft">Soft</p>
                      <h6 className="currpresaledataright">555.55 ETH</h6>
                    </div>
                    <div className="currpresaledata">
                      <p className="currpresaledataleft">Liquidity %:</p>
                      <h6 className="currpresaledataright">55.52 %</h6>
                    </div>
                    <div className="currpresaledata">
                      <p className="currpresaledataleft">Lockup Time:</p>
                      <h6 className="currpresaledataright">365 Days</h6>
                    </div>
                  </div>
                  <div className="forcolor">
                    <div className="currpresalecardboxinner">
                      <div className="currpresalecardboxleft">
                        <p className="currpresalecardboxupperpara">Starting Date</p>
                      </div>
                      <div className="currpresalecardboxright">
                        <p className="currpresalecardboxrighthead">Apr 30, 2023</p>
                      </div>
                    </div>
                    <div className="cardprogress">
                      <div className="cardprogressheadings">
                        <p className="cardprogresspara">Progress</p>
                        <h6 className="cardprogresshead">50.5%</h6>
                      </div>
                      <ProgressBar now={60} />
                      <div className="cardprogressheadings">
                        <p className="cardprogresspara">5,550 ETH</p>
                        <h6 className="cardprogresshead">10,000 ETH</h6>
                      </div>
                    </div>
                  </div>
                  <div className="currpresalecardbtns">
                    <div className="outerbtn heart-bg">
                      <div className="innerbtn">
                        <span className="btnspan"></span>
                        <h5 className="btntext"><img src="\Assets\home-assets\heartimg.svg" alt="img" /></h5>
                      </div>
                    </div>
                    <div onClick={()=>{settoggle(!toggle)}} className="outerbtn-green-btnonewidth w-100">
                      <div className="innerbtn">
                        <span className="btnspan"></span>
                        <h5 className="btntext">View Details</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
          :
          <Projectsdetails />
      }


      <Newsletter />

      <Filtermodal
        show={show}
        setShow={setShow}
      />
    </>
  )
}

export default Privatesale