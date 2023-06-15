import React, { useState } from 'react'
import { Dropdown, Nav, Pagination } from 'react-bootstrap'
import './launchpad.scss'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Filtermodal from '../Filtermodal/Filtermodal';
import Projectsdetails from '../Projectsdetails/Projectsdetails';
import Newsletter from '../Newsletter/Newsletter';

const Launchpad = () => {
  const [activeTab, setActiveTab] = useState('link-1');

  const handleSelect = (eventKey) => {
    setActiveTab(eventKey);
  };

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const [toggle, settoggle] = useState(true);

  return (
    <>
      { 
        toggle ?
        <>
          <section className="mainlaunchpad">
            <div className="row h-100">
              <div className="col-lg-6 col-md-12 m-auto p-0">
                <div className="launchpadheadings">
                  <h4 className="launchpadhead">At vero eos et accusamus et</h4>
                  <p className="launchpadpara">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</p>
                </div>
                <div className="launchpad-btns">
                  <div className="outerbtn-green-btnonewidth width-set">
                    <div className="innerbtn">
                      <span className="btnspan"></span>
                      <h5 className="btntext">All Projects</h5>
                    </div>
                  </div>
                  <div className="outerbtn width-set">
                    <div className="innerbtn">
                      <span className="btnspan"></span>
                      <h5 className="btntext">Create Project</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 d-flex align-items-end justify-content-center p-0">
                <img src="\Assets\home-assets\mainhomeimg.png" alt="mainbannerimg" style={{ height: '100%', maxHeight: '560px' }} className="mainbannerimg img-fluid" />
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

          <section className="currpresale">
            <div className="currpresaleheadings">
              <h5 className="currpresalehead">Current Presales</h5>
              <p className="currpresalepara">Browse current presale project</p>
            </div>
            <div className="maintabs">
              <Nav variant="pills" activeKey={activeTab} onSelect={handleSelect}>
                <Nav.Item>
                  <Nav.Link eventKey="link-1">
                    <div className="outerbtn-green-btnonewidthnav">
                      <div className="innerbtnnav">
                        <span className="btnspannav"></span>
                        <h5 className="btntextnav">All Projects</h5>
                      </div>
                    </div>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2">
                    <div className="outerbtn-green-btnonewidthnav">
                      <div className="innerbtnnav">
                        <span className="btnspannav"></span>
                        <h5 className="btntextnav">Advance Mode</h5>
                      </div>
                    </div>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
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
            {activeTab === 'link-1' && (
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
                          <p className="currpresalecardpara ">Private Sale</p>
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
                      <p className="currpresaledataleft">Soft:</p>
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
                        <p className="currpresalecardboxupperpara">Starting Date:</p>
                        <p className="currpresalecardboxlowerpara">Starts in:</p>
                        <h6 className="currpresalecardboxtimerpara">2d : 5h : 32m</h6>
                      </div>
                      <div className="currpresalecardboxright">
                        <p className="currpresalecardboxrighthead">Apr 30, 2023</p>
                      </div>
                    </div>
                  </div>
                  <div className="currpresalecardbtns">
                    <div className="heart-bg outerbtn">
                      <div className="innerbtn">
                        <span className="btnspan"></span>
                        <h5 className="btntext"><img src="\Assets\home-assets\heartimg.svg" alt="img" /></h5>
                      </div>
                    </div>
                    <div onClick={()=>{
                      settoggle(!toggle);
                    }} className="outerbtn-green-btnonewidth w-100">
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
                        <span className="currpresalecardbox publicbox m-0">
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
                      <p className="currpresaledataleft">Soft:</p>
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
                        <p className="currpresalecardboxupperpara">Starting Date:</p>
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
                    <div onClick={()=>{
                      settoggle(!toggle);
                    }} className="outerbtn-green-btnonewidth w-100">
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
                          <p className="currpresalecardpara ">Private Sale</p>
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
                      <p className="currpresaledataleft">Soft:</p>
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
                        <p className="currpresalecardboxupperpara">Starting Date:</p>
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
                    <div className="heart-bg outerbtn">
                      <div className="innerbtn">
                        <span className="btnspan"></span>
                        <h5 className="btntext"><img src="\Assets\home-assets\heartimg.svg" alt="img" /></h5>
                      </div>
                    </div>
                    <div onClick={()=>{
                      settoggle(!toggle);
                    }} className="outerbtn-green-btnonewidth w-100">
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
                          <p className="currpresalecardpara ">Private Sale</p>
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
                      <p className="currpresaledataleft">Soft:</p>
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
                        <p className="currpresalecardboxupperpara">Starting Date:</p>
                        <p className="currpresalecardboxlowerpara">Starts in:</p>
                        <h6 className="currpresalecardboxtimerpara">2d : 5h : 32m</h6>
                      </div>
                      <div className="currpresalecardboxright">
                        <p className="currpresalecardboxrighthead">Apr 30, 2023</p>
                      </div>
                    </div>
                  </div>
                  <div className="currpresalecardbtns">
                    <div className="heart-bg outerbtn">
                      <div className="innerbtn">
                        <span className="btnspan"></span>
                        <h5 className="btntext"><img src="\Assets\home-assets\heartimg.svg" alt="img" /></h5>
                      </div>
                    </div>
                    <div onClick={()=>{
                      settoggle(!toggle);
                    }} className="outerbtn-green-btnonewidth w-100">
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
                        <span className="currpresalecardbox publicbox m-0">
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
                      <p className="currpresaledataleft">Soft:</p>
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
                        <p className="currpresalecardboxupperpara">Starting Date:</p>
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
                    <div onClick={()=>{
                      settoggle(!toggle);
                    }} className="outerbtn-green-btnonewidth w-100">
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
                          <p className="currpresalecardpara ">Private Sale</p>
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
                      <p className="currpresaledataleft">Soft:</p>
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
                        <p className="currpresalecardboxupperpara">Starting Date:</p>
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
                    <div className="heart-bg outerbtn">
                      <div className="innerbtn">
                        <span className="btnspan"></span>
                        <h5 className="btntext"><img src="\Assets\home-assets\heartimg.svg" alt="img" /></h5>
                      </div>
                    </div>
                    <div onClick={()=>{
                      settoggle(!toggle);
                    }} className="outerbtn-green-btnonewidth w-100">
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
                          <p className="currpresalecardpara ">Private Sale</p>
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
                      <p className="currpresaledataleft">Soft:</p>
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
                        <p className="currpresalecardboxupperpara">Starting Date:</p>
                        <p className="currpresalecardboxlowerpara">Starts in:</p>
                        <h6 className="currpresalecardboxtimerpara">2d : 5h : 32m</h6>
                      </div>
                      <div className="currpresalecardboxright">
                        <p className="currpresalecardboxrighthead">Apr 30, 2023</p>
                      </div>
                    </div>
                  </div>
                  <div className="currpresalecardbtns">
                    <div className="heart-bg outerbtn">
                      <div className="innerbtn">
                        <span className="btnspan"></span>
                        <h5 className="btntext"><img src="\Assets\home-assets\heartimg.svg" alt="img" /></h5>
                      </div>
                    </div>
                    <div onClick={()=>{
                      settoggle(!toggle);
                    }} className="outerbtn-green-btnonewidth w-100">
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
                        <span className="currpresalecardbox publicbox m-0">
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
                      <p className="currpresaledataleft">Soft:</p>
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
                        <p className="currpresalecardboxupperpara">Starting Date:</p>
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
                    <div onClick={()=>{
                      settoggle(!toggle);
                    }} className="outerbtn-green-btnonewidth w-100">
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
                          <p className="currpresalecardpara ">Private Sale</p>
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
                      <p className="currpresaledataleft">Soft:</p>
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
                        <p className="currpresalecardboxupperpara">Starting Date:</p>
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
                    <div className="heart-bg outerbtn">
                      <div className="innerbtn">
                        <span className="btnspan"></span>
                        <h5 className="btntext"><img src="\Assets\home-assets\heartimg.svg" alt="img" /></h5>
                      </div>
                    </div>
                    <div onClick={()=>{
                      settoggle(!toggle);
                    }} className="outerbtn-green-btnonewidth w-100">
                      <div className="innerbtn">
                        <span className="btnspan"></span>
                        <h5 className="btntext">View Details</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'link-2' && (
              <>
                          <div className='main-tablee'>
              <div className='main-table-inerdiv'>
                <div className='sec-img'>
                  <img
                    src="\Assets\learderboard\riselves.svg"
                    alt="img"
                    className="img-fluid "
                  />
                            <div className='thrd-rank'>
                  <p className='hndng-rank'>
                    Rise of Elves
                  </p>
                  <p className='   fair-launch '>
                    Fair Launch 
                  </p>
                </div>
                </div>
                <div className='fst-rank'>
                  <p className='hndng-raised'>
                  Hardcap
                  </p>
                  <p className='numberss'>
                  555.55 ETH
                  </p>
                </div>
                <div className='fst-rank'>
                  <p className='hndng-raised'>
                    Coin
                  </p>
                  <p className='numberss'>
                  ETH
                  </p>
                </div>
                <div className='fst-rank'>
                  <p className='hndng-raised'>
                    InitialCap
                  </p>
                  <p className='numberss'>
                  555.55 ETH
                  </p>
                </div>
           
                <div className='fst-rank'>
                  <p className='hndng-raised'>
                    KYC/Audit
                  </p>
                  <p className='numberss'>
                    <img
                      src="\Assets\learderboard\tick-circle.svg"
                      alt="img"
                      className="img-fluid "
                    />                         <img
                      src="\Assets\learderboard\close-circle.svg"
                      alt="img"
                      className="img-fluid "
                    />
                  </p>
                </div>
                <div className='fst-rank'>
                  <p className='hndng-raised'>
                    Status
                  </p>
                  <p className='numberss'>
                  Upcoming
                  </p>
                </div>

                <div className='fst-rank'>
                  <p className='hndng-raised'>
                  Countdown
                  </p>
                  <p className='numberss'>
                  2d : 5h : 32m
                  </p>
                </div>

                <div className="outerbtn-green-btnonewidth widthbtnset">
                  <div className="innerbtn">
                    <span className="btnspan"></span>
                    <h5 className="btntext">Details</h5>
                  </div>
                </div>


              </div>
              <div className='main-table-inerdiv'>
                <div className='sec-img'>
                  <img
                    src="\Assets\learderboard\riselves.svg"
                    alt="img"
                    className="img-fluid "
                  />
                            <div className='thrd-rank'>
                  <p className='hndng-rank'>
                    Rise of Elves
                  </p>
                  <p className='   fair-launch '>
                    Fair Launch 
                  </p>
                </div>
                </div>
                <div className='fst-rank'>
                  <p className='hndng-raised'>
                  Hardcap
                  </p>
                  <p className='numberss'>
                  555.55 ETH
                  </p>
                </div>
                <div className='fst-rank'>
                  <p className='hndng-raised'>
                    Coin
                  </p>
                  <p className='numberss'>
                  ETH
                  </p>
                </div>
                <div className='fst-rank'>
                  <p className='hndng-raised'>
                    InitialCap
                  </p>
                  <p className='numberss'>
                  555.55 ETH
                  </p>
                </div>
           
                <div className='fst-rank'>
                  <p className='hndng-raised'>
                    KYC/Audit
                  </p>
                  <p className='numberss'>
                    <img
                      src="\Assets\learderboard\tick-circle.svg"
                      alt="img"
                      className="img-fluid "
                    />                         <img
                      src="\Assets\learderboard\close-circle.svg"
                      alt="img"
                      className="img-fluid "
                    />
                  </p>
                </div>
                <div className='fst-rank'>
                  <p className='hndng-raised'>
                    Status
                  </p>
                  <p className='numberss'>
                  Upcoming
                  </p>
                </div>

                <div className='fst-rank'>
                  <p className='hndng-raised'>
                  Countdown
                  </p>
                  <p className='numberss'>
                  2d : 5h : 32m
                  </p>
                </div>

                <div className="outerbtn-green-btnonewidth widthbtnset">
                  <div className="innerbtn">
                    <span className="btnspan"></span>
                    <h5 className="btntext">Details</h5>
                  </div>
                </div>


              </div>
              <div className='main-table-inerdiv'>
                <div className='sec-img'>
                  <img
                    src="\Assets\learderboard\riselves.svg"
                    alt="img"
                    className="img-fluid "
                  />
                            <div className='thrd-rank'>
                  <p className='hndng-rank'>
                    Rise of Elves
                  </p>
                  <p className='   fair-launch '>
                    Fair Launch 
                  </p>
                </div>
                </div>
                <div className='fst-rank'>
                  <p className='hndng-raised'>
                  Hardcap
                  </p>
                  <p className='numberss'>
                  555.55 ETH
                  </p>
                </div>
                <div className='fst-rank'>
                  <p className='hndng-raised'>
                    Coin
                  </p>
                  <p className='numberss'>
                  ETH
                  </p>
                </div>
                <div className='fst-rank'>
                  <p className='hndng-raised'>
                    InitialCap
                  </p>
                  <p className='numberss'>
                  555.55 ETH
                  </p>
                </div>
           
                <div className='fst-rank'>
                  <p className='hndng-raised'>
                    KYC/Audit
                  </p>
                  <p className='numberss'>
                    <img
                      src="\Assets\learderboard\tick-circle.svg"
                      alt="img"
                      className="img-fluid "
                    />                         <img
                      src="\Assets\learderboard\close-circle.svg"
                      alt="img"
                      className="img-fluid "
                    />
                  </p>
                </div>
                <div className='fst-rank'>
                  <p className='hndng-raised'>
                    Status
                  </p>
                  <p className='numberss'>
                  Upcoming
                  </p>
                </div>

                <div className='fst-rank'>
                  <p className='hndng-raised'>
                  Countdown
                  </p>
                  <p className='numberss'>
                  2d : 5h : 32m
                  </p>
                </div>

                <div className="outerbtn-green-btnonewidth widthbtnset">
                  <div className="innerbtn">
                    <span className="btnspan"></span>
                    <h5 className="btntext">Details</h5>
                  </div>
                </div>


              </div>
              <div className='main-table-inerdiv'>
                <div className='sec-img'>
                  <img
                    src="\Assets\learderboard\riselves.svg"
                    alt="img"
                    className="img-fluid "
                  />
                            <div className='thrd-rank'>
                  <p className='hndng-rank'>
                    Rise of Elves
                  </p>
                  <p className='   fair-launch '>
                    Fair Launch 
                  </p>
                </div>
                </div>
                <div className='fst-rank'>
                  <p className='hndng-raised'>
                  Hardcap
                  </p>
                  <p className='numberss'>
                  555.55 ETH
                  </p>
                </div>
                <div className='fst-rank'>
                  <p className='hndng-raised'>
                    Coin
                  </p>
                  <p className='numberss'>
                  ETH
                  </p>
                </div>
                <div className='fst-rank'>
                  <p className='hndng-raised'>
                    InitialCap
                  </p>
                  <p className='numberss'>
                  555.55 ETH
                  </p>
                </div>
           
                <div className='fst-rank'>
                  <p className='hndng-raised'>
                    KYC/Audit
                  </p>
                  <p className='numberss'>
                    <img
                      src="\Assets\learderboard\tick-circle.svg"
                      alt="img"
                      className="img-fluid "
                    />                         <img
                      src="\Assets\learderboard\close-circle.svg"
                      alt="img"
                      className="img-fluid "
                    />
                  </p>
                </div>
                <div className='fst-rank'>
                  <p className='hndng-raised'>
                    Status
                  </p>
                  <p className='numberss'>
                  Upcoming
                  </p>
                </div>

                <div className='fst-rank'>
                  <p className='hndng-raised'>
                  Countdown
                  </p>
                  <p className='numberss'>
                  2d : 5h : 32m
                  </p>
                </div>

                <div className="outerbtn-green-btnonewidth widthbtnset">
                  <div className="innerbtn">
                    <span className="btnspan"></span>
                    <h5 className="btntext">Details</h5>
                  </div>
                </div>


              </div>
              <div className='main-table-inerdiv'>
                <div className='sec-img'>
                  <img
                    src="\Assets\learderboard\riselves.svg"
                    alt="img"
                    className="img-fluid "
                  />
                            <div className='thrd-rank'>
                  <p className='hndng-rank'>
                    Rise of Elves
                  </p>
                  <p className='   fair-launch '>
                    Fair Launch 
                  </p>
                </div>
                </div>
                <div className='fst-rank'>
                  <p className='hndng-raised'>
                  Hardcap
                  </p>
                  <p className='numberss'>
                  555.55 ETH
                  </p>
                </div>
                <div className='fst-rank'>
                  <p className='hndng-raised'>
                    Coin
                  </p>
                  <p className='numberss'>
                  ETH
                  </p>
                </div>
                <div className='fst-rank'>
                  <p className='hndng-raised'>
                    InitialCap
                  </p>
                  <p className='numberss'>
                  555.55 ETH
                  </p>
                </div>
           
                <div className='fst-rank'>
                  <p className='hndng-raised'>
                    KYC/Audit
                  </p>
                  <p className='numberss'>
                    <img
                      src="\Assets\learderboard\tick-circle.svg"
                      alt="img"
                      className="img-fluid "
                    />                         <img
                      src="\Assets\learderboard\close-circle.svg"
                      alt="img"
                      className="img-fluid "
                    />
                  </p>
                </div>
                <div className='fst-rank'>
                  <p className='hndng-raised'>
                    Status
                  </p>
                  <p className='numberss'>
                  Upcoming
                  </p>
                </div>

                <div className='fst-rank'>
                  <p className='hndng-raised'>
                  Countdown
                  </p>
                  <p className='numberss'>
                  2d : 5h : 32m
                  </p>
                </div>

                <div className="outerbtn-green-btnonewidth widthbtnset">
                  <div className="innerbtn">
                    <span className="btnspan"></span>
                    <h5 className="btntext">Details</h5>
                  </div>
                </div>


              </div>
              <div className='main-table-inerdiv'>
                <div className='sec-img'>
                  <img
                    src="\Assets\learderboard\riselves.svg"
                    alt="img"
                    className="img-fluid "
                  />
                            <div className='thrd-rank'>
                  <p className='hndng-rank'>
                    Rise of Elves
                  </p>
                  <p className='   fair-launch '>
                    Fair Launch 
                  </p>
                </div>
                </div>
                <div className='fst-rank'>
                  <p className='hndng-raised'>
                  Hardcap
                  </p>
                  <p className='numberss'>
                  555.55 ETH
                  </p>
                </div>
                <div className='fst-rank'>
                  <p className='hndng-raised'>
                    Coin
                  </p>
                  <p className='numberss'>
                  ETH
                  </p>
                </div>
                <div className='fst-rank'>
                  <p className='hndng-raised'>
                    InitialCap
                  </p>
                  <p className='numberss'>
                  555.55 ETH
                  </p>
                </div>
           
                <div className='fst-rank'>
                  <p className='hndng-raised'>
                    KYC/Audit
                  </p>
                  <p className='numberss'>
                    <img
                      src="\Assets\learderboard\tick-circle.svg"
                      alt="img"
                      className="img-fluid "
                    />                         <img
                      src="\Assets\learderboard\close-circle.svg"
                      alt="img"
                      className="img-fluid "
                    />
                  </p>
                </div>
                <div className='fst-rank'>
                  <p className='hndng-raised'>
                    Status
                  </p>
                  <p className='numberss'>
                  Upcoming
                  </p>
                </div>

                <div className='fst-rank'>
                  <p className='hndng-raised'>
                  Countdown
                  </p>
                  <p className='numberss'>
                  2d : 5h : 32m
                  </p>
                </div>

                <div className="outerbtn-green-btnonewidth widthbtnset">
                  <div className="innerbtn">
                    <span className="btnspan"></span>
                    <h5 className="btntext">Details</h5>
                  </div>
                </div>


              </div>
              <div className='main-table-inerdiv'>
                <div className='sec-img'>
                  <img
                    src="\Assets\learderboard\riselves.svg"
                    alt="img"
                    className="img-fluid "
                  />
                            <div className='thrd-rank'>
                  <p className='hndng-rank'>
                    Rise of Elves
                  </p>
                  <p className='   fair-launch '>
                    Fair Launch 
                  </p>
                </div>
                </div>
                <div className='fst-rank'>
                  <p className='hndng-raised'>
                  Hardcap
                  </p>
                  <p className='numberss'>
                  555.55 ETH
                  </p>
                </div>
                <div className='fst-rank'>
                  <p className='hndng-raised'>
                    Coin
                  </p>
                  <p className='numberss'>
                  ETH
                  </p>
                </div>
                <div className='fst-rank'>
                  <p className='hndng-raised'>
                    InitialCap
                  </p>
                  <p className='numberss'>
                  555.55 ETH
                  </p>
                </div>
           
                <div className='fst-rank'>
                  <p className='hndng-raised'>
                    KYC/Audit
                  </p>
                  <p className='numberss'>
                    <img
                      src="\Assets\learderboard\tick-circle.svg"
                      alt="img"
                      className="img-fluid "
                    />                         <img
                      src="\Assets\learderboard\close-circle.svg"
                      alt="img"
                      className="img-fluid "
                    />
                  </p>
                </div>
                <div className='fst-rank'>
                  <p className='hndng-raised'>
                    Status
                  </p>
                  <p className='numberss'>
                  Upcoming
                  </p>
                </div>

                <div className='fst-rank'>
                  <p className='hndng-raised'>
                  Countdown
                  </p>
                  <p className='numberss'>
                  2d : 5h : 32m
                  </p>
                </div>

                <div className="outerbtn-green-btnonewidth widthbtnset">
                  <div className="innerbtn">
                    <span className="btnspan"></span>
                    <h5 className="btntext">Details</h5>
                  </div>
                </div>


              </div>
              <div className='main-table-inerdiv'>
                <div className='sec-img'>
                  <img
                    src="\Assets\learderboard\riselves.svg"
                    alt="img"
                    className="img-fluid "
                  />
                            <div className='thrd-rank'>
                  <p className='hndng-rank'>
                    Rise of Elves
                  </p>
                  <p className='   fair-launch '>
                    Fair Launch 
                  </p>
                </div>
                </div>
                <div className='fst-rank'>
                  <p className='hndng-raised'>
                  Hardcap
                  </p>
                  <p className='numberss'>
                  555.55 ETH
                  </p>
                </div>
                <div className='fst-rank'>
                  <p className='hndng-raised'>
                    Coin
                  </p>
                  <p className='numberss'>
                  ETH
                  </p>
                </div>
                <div className='fst-rank'>
                  <p className='hndng-raised'>
                    InitialCap
                  </p>
                  <p className='numberss'>
                  555.55 ETH
                  </p>
                </div>
           
                <div className='fst-rank'>
                  <p className='hndng-raised'>
                    KYC/Audit
                  </p>
                  <p className='numberss'>
                    <img
                      src="\Assets\learderboard\tick-circle.svg"
                      alt="img"
                      className="img-fluid "
                    />                         <img
                      src="\Assets\learderboard\close-circle.svg"
                      alt="img"
                      className="img-fluid "
                    />
                  </p>
                </div>
                <div className='fst-rank'>
                  <p className='hndng-raised'>
                    Status
                  </p>
                  <p className='numberss'>
                  Upcoming
                  </p>
                </div>

                <div className='fst-rank'>
                  <p className='hndng-raised'>
                  Countdown
                  </p>
                  <p className='numberss'>
                  2d : 5h : 32m
                  </p>
                </div>

                <div className="outerbtn-green-btnonewidth widthbtnset">
                  <div className="innerbtn">
                    <span className="btnspan"></span>
                    <h5 className="btntext">Details</h5>
                  </div>
                </div>


              </div>
         
              <div className="pagi">
                <div className="left">
                </div>
                <div className="right">
                  <div className='arrows'>
                    <img src='\Assets\learderboard\down-arrow.svg' alt='1mg' className='img-fluid' />
                    <img src='\Assets\learderboard\down-arrow1.svg' alt='1mg' className='img-fluid' />
                  </div>
                  <Pagination>
                    <Pagination.Item active>{1}</Pagination.Item>
                    <Pagination.Item>{2}</Pagination.Item>
                    <Pagination.Item >{3}</Pagination.Item>
                    <Pagination.Item>{4}</Pagination.Item>
                    <Pagination.Item >{5}</Pagination.Item>
                    <Pagination.Item>{6}</Pagination.Item>
                  </Pagination>
                  <div className='arrows widthsetting'>
                    <img src='\Assets\learderboard\down-arrow2.svg' alt='1mg' className='img-fluid' />
                    <img src='\Assets\learderboard\down-arrow3.svg' alt='1mg' className='img-fluid' />
                  </div>
                </div>
              </div>
            </div>
              
              <div className="mobile-view-only">
              <div className='main-tablee-mobile'>
                <div className='mobile-card'>
                  <div className='main-card-head'>
                    <div className='sec-img'>
                      <img
                        src="\Assets\learderboard\riselves.svg"
                        alt="img"
                        className="img-fluid "
                      />
                    </div>
                    <div className='thrd-rank'>
                      <p className='hndng-rank'>
                        Rise of Elves
                      </p>
                      <p className='   fair-launch '>
                        Fair Launch <span className='purplenumbers'>100x</span>
                      </p>
                    </div>
                  </div>
                  <div className='main-card-boddy'>
                    <div className='fst-rank'>
                      <p className='hndng-raised'>
                      Hardcap
                      </p>
                      <p className='numberss'>
                        555,555.55 BNB
                      </p>
                    </div>
                    <div className='fst-rank'>
                      <p className='hndng-raised'>
                        Coin
                      </p>
                      <p className='numberss'>
                        BNB
                      </p>
                    </div>
                  </div>
                  <div className='main-card-boddy'>
                    <div className='fst-rank'>
                      <p className='hndng-raised'>
                        InitialCap
                      </p>
                      <p className='numberss'>
                        $45.55K
                      </p>
                    </div>
                    <div className='fst-rank'>
                      <p className='hndng-raised'>
                        KYC/Audit
                      </p>
                      <p className='numberss'>
                        <img
                          src="\Assets\learderboard\tick-circle.svg"
                          alt="img"
                          className="img-fluid "
                        />                         <img
                          src="\Assets\learderboard\close-circle.svg"
                          alt="img"
                          className="img-fluid "
                        />
                      </p>
                    </div>
                  </div>
                  <div className='main-card-boddy'>
                  <div className='fst-rank'>
                      <p className='hndng-raised'>
                      Status
                      </p>
                      <p className='numberss'>
                      Upcoming
                      </p>
                    </div>
                    <div className='fst-rank'>
                      <p className='hndng-raised'>
                        Status
                      </p>
                      <p className='numberss'>
                      2d : 5h : 32m
                      </p>
                    </div>
                  </div>

                  <div className="outerbtn-green-btnonewidth">
                    <div className="innerbtn">
                      <span className="btnspan"></span>
                      <h5 className="btntext">Details</h5>
                    </div>
                  </div>


                </div>
                <div className="pagi">
                  <div className="left">
                  </div>
                  <div className="right">
                    <div className='arrows'>
                      <img src='\Assets\learderboard\down-arrow.svg' alt='1mg' className='img-fluid' />
                      <img src='\Assets\learderboard\down-arrow1.svg' alt='1mg' className='img-fluid' />
                    </div>
                    <Pagination>
                      <Pagination.Item active>{1}</Pagination.Item>
                      <Pagination.Item>{2}</Pagination.Item>
                      <Pagination.Item >{3}</Pagination.Item>
                      <Pagination.Item>{4}</Pagination.Item>
                      <Pagination.Item >{5}</Pagination.Item>
                      <Pagination.Item>{6}</Pagination.Item>
                    </Pagination>
                    <div className='arrows'>
                      <img src='\Assets\learderboard\down-arrow2.svg' alt='1mg' className='img-fluid' />
                      <img src='\Assets\learderboard\down-arrow3.svg' alt='1mg' className='img-fluid' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
              </>
            )}
          </section>
          <Newsletter />
          </>
          :
         <Projectsdetails />
      }

      <Filtermodal
        show={show}
        setShow={setShow}
      />
    </>
  )
}

export default Launchpad