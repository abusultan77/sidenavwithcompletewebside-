import React, { useEffect, useState } from 'react'
import "./chat.scss"
import EmojiPicker from 'emoji-picker-react';
import { Pagination } from 'react-bootstrap'
import { Link } from 'react-router-dom';
const Chat = ({ settoggle }) => {
    const [show, setshow] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <section className='main-chat'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-sm-12 paddddd'>
                            <div className='backbtn'>
                                <a onClick={() => settoggle(0)}>
                                    <button><img src='\Assets\sidebar-icons\arrow-left.svg' alt='img' className='img-fluid' />Back to Projects</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-xl-7 col-lg-12 col-md-12 col-12 paddddd'>
                            <div className='maincard'>
                                <div className='innercard'>
                                    <div className='parent'>
                                        <div className='left'>
                                            <div className='innerparent'>
                                                <div className='left'>
                                                    <img src='\Assets\sidebar-icons\gamer.svg' alt='img' className='img-fluid gamer' />
                                                </div>
                                                <div className='center'>
                                                    <h5>Scott Foster</h5>
                                                </div>
                                                <div className='right'>
                                                    <p>15:21</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='right'>
                                            <img src='\Assets\sidebar-icons\reply.svg' alt='img' className='img-fluid' />
                                        </div>
                                    </div>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur int occaecat cupidatat non proident.</p>
                                </div>
                                <div className='secondcard'>
                                    <div className='secondinner'>
                                        <div className='parent'>
                                            <div className='left'>
                                                <div className='innerparent mt-0'>
                                                    <div className='left'>
                                                        <img src='\Assets\sidebar-icons\gamer1.svg' alt='img' className='img-fluid gamer' />
                                                    </div>
                                                    <div className='center'>
                                                        <h5>Scott Foster</h5>
                                                    </div>
                                                    <div className='right'>
                                                        <p>15:21</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className='right'>
                                                <img src='\Assets\sidebar-icons\reply.svg' alt='img' className='img-fluid' />
                                            </div> */}
                                        </div>
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur int occaecat cupidatat non proident.</p>
                                    </div>
                                    <div className='innerparent'>
                                        <div className='left'>
                                            <div className='innerparent'>
                                                <div className='left'>
                                                    <img src='\Assets\sidebar-icons\gamer3.svg' alt='img' className='img-fluid gamer' />
                                                </div>
                                                <div className='center'>
                                                    <h5>Scott Foster</h5>
                                                </div>
                                                <div className='right'>
                                                    <p>15:21</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='right'>
                                            <img src='\Assets\sidebar-icons\reply.svg' alt='img' className='img-fluid' />
                                        </div>
                                    </div>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur int occaecat cupidatat non proident.</p>
                                </div>
                                <div className='innercard'>
                                    <div className='parent'>
                                        <div className='left'>
                                            <div className='innerparent'>
                                                <div className='left'>
                                                    <img src='\Assets\sidebar-icons\gamer.svg' alt='img' className='img-fluid gamer' />
                                                </div>
                                                <div className='center'>
                                                    <h5 className='green'>ME</h5>
                                                </div>
                                                <div className='right'>
                                                    <p>15:21</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='right'>
                                            <img src='\Assets\sidebar-icons\reply.svg' alt='img' className='img-fluid' />
                                        </div>
                                    </div>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur int occaecat cupidatat non proident.</p>
                                </div>
                                <div className="bottom-side">
                                    <div className="option-field">
                                        <input type="text" placeholder='Write your message...' />
                                        <div className="right-btns">
                                            <label htmlFor='upload'></label>
                                            <input type="file" className='d-none' id='upload' />
                                            <div className='emoji-picker'>
                                                {
                                                    show && <div>
                                                        <EmojiPicker />
                                                    </div>
                                                }
                                                <a onClick={() => setshow(!show)}><img src='\Assets\sidebar-icons\smiling.svg' alt='img' className='img-fluid' /></a>
                                            </div>
                                            {/* <button className='btn-send'>Send</button> */}
                                            <div className="outerbtn-green-btnonewidth w-100 send">
                                                <div className="innerbtn">
                                                    <span className="btnspan"></span>
                                                    <h5 className="btntext">Send</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='col-xl-5 col-lg-12 col-md-12 col-12 paddddd'>
                            <div className='members-card'>
                                <div className='heads'>
                                    <h2>Members</h2>
                                </div>
                                <div className='brdr'></div>
                                <div className='parent4'>
                                    <div className='left'>
                                        <p><img src='\Assets\sidebar-icons\gamer.svg' alt='img' className='img-fluid' />Scott Foster</p>
                                    </div>
                                    <div className='right'>
                                        <img src='\Assets\sidebar-icons\staked1.svg' alt='img' className='img-fluid' />
                                    </div>
                                </div>
                                <div className='brdr'></div>
                                <div className='parent4'>
                                    <div className='left'>
                                        <p><img src='\Assets\sidebar-icons\gamer.svg' alt='img' className='img-fluid' />Scott Foster</p>
                                    </div>
                                    <div className='right'>
                                        <img src='\Assets\sidebar-icons\staked1.svg' alt='img' className='img-fluid' />
                                    </div>
                                </div>
                                
                                <div className='brdr'></div>
                                <div className='parent4'>
                                    <div className='left'>
                                        <p><img src='\Assets\sidebar-icons\gamer1.svg' alt='img' className='img-fluid' />Ernest Perez</p>
                                    </div>
                                    <div className='right'>
                                        <img src='\Assets\sidebar-icons\staked2.svg' alt='img' className='img-fluid' />
                                    </div>
                                </div>
                                <div className='brdr'></div>
                                <div className='parent4'>
                                    <div className='left'>
                                        <p><img src='\Assets\sidebar-icons\gamer2.svg' alt='img' className='img-fluid' />Christina Turner</p>
                                    </div>
                                    <div className='right'>
                                        <img src='\Assets\sidebar-icons\staked3.svg' alt='img' className='img-fluid' />
                                    </div>
                                </div>
                                <div className='brdr'></div>
                                <div className='parent4'>
                                    <div className='left'>
                                        <p><img src='\Assets\sidebar-icons\gamer3.svg' alt='img' className='img-fluid' />Gary Hernandez</p>
                                    </div>
                                    <div className='right'>
                                        <img src='\Assets\sidebar-icons\staked3.svg' alt='img' className='img-fluid' />
                                    </div>
                                </div>
                                <div className='brdr'></div>
                                <div className='parent4'>
                                    <div className='left'>
                                        <p><img src='\Assets\sidebar-icons\gamer.svg' alt='img' className='img-fluid' />Scott Foster</p>
                                    </div>
                                    <div className='right'>
                                        <img src='\Assets\sidebar-icons\staked1.svg' alt='img' className='img-fluid' />
                                    </div>
                                </div>
                                <div className='brdr'></div>
                                <div className='parent4'>
                                    <div className='left'>
                                        <p><img src='\Assets\sidebar-icons\gamer6.svg' alt='img' className='img-fluid' />Phyllis Kelly</p>
                                    </div>
                                    <div className='right'>
                                        <img src='\Assets\sidebar-icons\staked2.svg' alt='img' className='img-fluid' />
                                    </div>
                                </div>
                                <div className='brdr'></div>
                                <div className="pagi">
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
                                        </Pagination>
                                        <div className='arrows' style={{display: 'flex' , gap: '13px' , alignItems : 'center'}}>
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
        </>
    )
}

export default Chat