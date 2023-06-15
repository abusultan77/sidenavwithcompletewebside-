
import React from 'react'
import './leaderboard.scss'
import { Pagination } from 'react-bootstrap'
import Newsletter from '../Newsletter/Newsletter'
import { Dropdown, Nav } from 'react-bootstrap'
import { useState } from 'react'
const Leaderboard = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <section className="main-leaderboard">
        <div className='row'>
          <div className='col-12 p-0'>
            <div className='mainheading'>
              <h3 className='projectbord-heading'>
                Project Leaderboard
              </h3>
              <p className='projects-para'>
                All resent sold projects
              </p>
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
            <div className="desktop-view-only">
              {/* <div class=" search-dropdown heighttt d-none">
                <div class="search">
                  <i class="fa fa-search">
                    <img
                      src="\Assets\learderboard\search-normal.svg"
                      alt="img"
                      className="img-fluid "
                    /></i>
                  <input type="text" class="form-control" placeholder="Enter token name or token sybmol" />
                  <button class="btn btn-primary">Search</button>
                </div>
             

                <div className='dropdowns-maindiv'>
                  <div class="floating-label mx-2">
                    <select class="floating-select" onclick="this.setAttribute('value', this.value);" value="">
                      <option value="">No Filter</option>
                      <option value="1">Item1</option>
                      <option value="2">Item2</option>
                      <option value="3">Item3</option>
                      <option value="4">Item4</option>
                      <option value="5">Item5</option>
                    </select>
                    <label>Filter by</label>
                  </div>
                  <div class="floating-label ">
                    <select class="floating-select" onclick="this.setAttribute('value', this.value);" value="">
                      <option value=""> No Filter</option>
                      <option value="1">Item1</option>
                      <option value="2">Item2</option>
                      <option value="3">Item3</option>
                      <option value="4">Item4</option>
                      <option value="5">Item5</option>
                    </select>
                    <label>Pool Type </label>
                  </div>
                  <div class="floating-label margin-leftt">
                    <select class="floating-select" onclick="this.setAttribute('value', this.value);" value="">
                      <option value="">No Filter</option>
                      <option value="1">Item1</option>
                      <option value="2">Item2</option>
                      <option value="3">Item3</option>
                      <option value="4">Item4</option>
                      <option value="5">Item5</option>
                    </select>
                    <label>Sort by</label>
                  </div>
                  <div class="floating-label margin-leftt">
                    <select class="floating-select" onclick="this.setAttribute('value', this.value);" value="">
                      <option value="">No Filter</option>
                      <option value="1">Item1</option>
                      <option value="2">Item2</option>
                      <option value="3">Item3</option>
                      <option value="4">Item4</option>
                      <option value="5">Item5</option>
                    </select>
                    <label>Chain</label>
                  </div>
                </div>
              </div> */}
              <div className='main-tablee'>
                <div className='main-table-inerdiv'>
                  <div className='fst-rank'>
                    <p className='hndng-raised'>
                      Rank
                    </p>
                    <p className='number-green'>
                      01
                    </p>
                  </div>
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

                  <div className='fst-rank'>
                    <p className='hndng-raised'>
                      Raised
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
                      Hardcap
                    </p>
                    <p className='numberss'>
                      555,555.55 BNB
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
                      Ended
                    </p>
                  </div>

                  <div className="outerbtn-green-btnonewidth btnwidth ">
                    <div className="innerbtn">
                      <span className="btnspan"></span>
                      <h5 className="btntext">Details</h5>
                    </div>
                  </div>


                </div>
                <div className='main-table-inerdiv'>
                  <div className='fst-rank'>
                    <p className='hndng-raised'>
                      Rank
                    </p>
                    <p className='number-green'>
                      02
                    </p>
                  </div>
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

                  <div className='fst-rank'>
                    <p className='hndng-raised'>
                      Raised
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
                      Hardcap
                    </p>
                    <p className='numberss'>
                      555,555.55 BNB
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
                      Ended
                    </p>
                  </div>

                  <div className="outerbtn-green-btnonewidth btnwidth">
                    <div className="innerbtn">
                      <span className="btnspan"></span>
                      <h5 className="btntext">Details</h5>
                    </div>
                  </div>


                </div>
                <div className='main-table-inerdiv'>
                  <div className='fst-rank'>
                    <p className='hndng-raised'>
                      Rank
                    </p>
                    <p className='number-green'>
                      03
                    </p>
                  </div>
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

                  <div className='fst-rank'>
                    <p className='hndng-raised'>
                      Raised
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
                      Hardcap
                    </p>
                    <p className='numberss'>
                      555,555.55 BNB
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
                      Ended
                    </p>
                  </div>

                  <div className="outerbtn-green-btnonewidth btnwidth">
                    <div className="innerbtn">
                      <span className="btnspan"></span>
                      <h5 className="btntext">Details</h5>
                    </div>
                  </div>


                </div>
                <div className='main-table-inerdiv'>
                  <div className='fst-rank'>
                    <p className='hndng-raised'>
                      Rank
                    </p>
                    <p className='number-green'>
                      04
                    </p>
                  </div>
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

                  <div className='fst-rank'>
                    <p className='hndng-raised'>
                      Raised
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
                      Hardcap
                    </p>
                    <p className='numberss'>
                      555,555.55 BNB
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
                      Ended
                    </p>
                  </div>

                  <div className="outerbtn-green-btnonewidth btnwidth">
                    <div className="innerbtn">
                      <span className="btnspan"></span>
                      <h5 className="btntext">Details</h5>
                    </div>
                  </div>


                </div>
                <div className='main-table-inerdiv'>
                  <div className='fst-rank'>
                    <p className='hndng-raised'>
                      Rank
                    </p>
                    <p className='number-green'>
                      05
                    </p>
                  </div>
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

                  <div className='fst-rank'>
                    <p className='hndng-raised'>
                      Raised
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
                      Hardcap
                    </p>
                    <p className='numberss'>
                      555,555.55 BNB
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
                      Ended
                    </p>
                  </div>

                  <div className="outerbtn-green-btnonewidth btnwidth">
                    <div className="innerbtn">
                      <span className="btnspan"></span>
                      <h5 className="btntext">Details</h5>
                    </div>
                  </div>


                </div>
                <div className='main-table-inerdiv'>
                  <div className='fst-rank'>
                    <p className='hndng-raised'>
                      Rank
                    </p>
                    <p className='number-green'>
                      06
                    </p>
                  </div>
                  <div className='sec-img'>
                    <img
                      src="\Assets\learderboard\planat.svg"
                      alt="img"
                      className="img-fluid "
                    />
                  </div>
                  <div className='thrd-rank'>
                    <p className='hndng-rank'>
                      Rise of Elves
                    </p>
                    <p className='   fair-launch '>
                      Fair Launch <span className='purplenumbers-green'>10x</span>
                    </p>
                  </div>

                  <div className='fst-rank'>
                    <p className='hndng-raised'>
                      Raised
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
                      Hardcap
                    </p>
                    <p className='numberss'>
                      555,555.55 BNB
                    </p>
                  </div>
                  <div className='fst-rank'>
                    <p className='hndng-raised'>
                      KYC/Audit
                    </p>
                    <p className='numberss'>
                      <img
                        src="\Assets\learderboard\close-circle.svg"
                        alt="img"
                        className="img-fluid "
                      />                        <img
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
                      Ended
                    </p>
                  </div>

                  <div className="outerbtn-green-btnonewidth btnwidth">
                    <div className="innerbtn">
                      <span className="btnspan"></span>
                      <h5 className="btntext">Details</h5>
                    </div>
                  </div>


                </div>
                <div className='main-table-inerdiv'>
                  <div className='fst-rank'>
                    <p className='hndng-raised'>
                      Rank
                    </p>
                    <p className='number-green'>
                      01
                    </p>
                  </div>
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

                  <div className='fst-rank'>
                    <p className='hndng-raised'>
                      Raised
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
                      Hardcap
                    </p>
                    <p className='numberss'>
                      555,555.55 BNB
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
                      Ended
                    </p>
                  </div>

                  <div className="outerbtn-green-btnonewidth btnwidth">
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

            {/* Mobile view  800 to 375 */}
            <div className="mobile-view-only">
              {/* <div class=" search-dropdown heighttt">
                <div class="search">
                  <i class="fa fa-search">
                    <img
                      src="\Assets\learderboard\search-normal.svg"
                      alt="img"
                      className="img-fluid "
                    /></i>
                  <input type="text" class="form-control" placeholder="Enter token name or token sybmol" />

                </div>
                <div className='filter-btn'>
                  <button className='filter-btn' > <img src="\Assets\learderboard\sort-filter.svg" alt="img" className="img-fluid" /></button>
                </div>
              </div> */}
              <div className='main-tablee-mobile'>
                <div className='mobile-card'>
                  <div className='main-card-head'>
                    <div className='fst-rank'>
                      <p className='hndng-raised'>
                        Rank
                      </p>
                      <p className='number-green'>
                        01
                      </p>
                    </div>
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
                        Raised
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
                        Hardcap
                      </p>
                      <p className='numberss'>
                        555,555.55 BNB
                      </p>
                    </div>
                  </div>
                  <div className='main-card-boddy'>
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
                        Ended
                      </p>
                    </div>
                  </div>

                  <div className="outerbtn-green-btnonewidth btnwidth">
                    <div className="innerbtn">
                      <span className="btnspan"></span>
                      <h5 className="btntext">Details</h5>
                    </div>
                  </div>


                </div>
                <div className='mobile-card'>
                  <div className='main-card-head'>
                    <div className='fst-rank'>
                      <p className='hndng-raised'>
                        Rank
                      </p>
                      <p className='number-green'>
                        06
                      </p>
                    </div>
                    <div className='sec-img'>
                      <img
                        src="\Assets\learderboard\planat.svg"
                        alt="img"
                        className="img-fluid "
                      />
                    </div>
                    <div className='thrd-rank'>
                      <p className='hndng-rank'>
                        Rise of Elves
                      </p>
                      <p className='   fair-launch '>
                        Fair Launch <span className='purplenumbers-green'>10x</span>
                      </p>
                    </div>
                  </div>
                  <div className='main-card-boddy'>
                    <div className='fst-rank'>
                      <p className='hndng-raised'>
                        Raised
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
                        Hardcap
                      </p>
                      <p className='numberss'>
                        555,555.55 BNB
                      </p>
                    </div>
                  </div>
                  <div className='main-card-boddy'>
                    <div className='fst-rank'>
                      <p className='hndng-raised'>
                        KYC/Audit
                      </p>
                      <p className='numberss'>
                        <img
                          src="\Assets\learderboard\close-circle.svg"
                          alt="img"
                          className="img-fluid "
                        />                        <img
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
                        Ended
                      </p>
                    </div>
                  </div>
                  <div className="outerbtn-green-btnonewidth btnwidth">
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
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  )
}

export default Leaderboard