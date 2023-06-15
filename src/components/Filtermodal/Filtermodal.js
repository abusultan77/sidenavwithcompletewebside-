import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './filters.scss'
import { Dropdown } from 'react-bootstrap';

const Filtermodal = ({show , setShow}) => {
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Modal className='filtermodal' show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Filtermodal