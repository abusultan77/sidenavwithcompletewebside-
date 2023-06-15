import React, { useEffect } from 'react'
import "./game.scss"
import { Pagination } from 'react-bootstrap'
const Game = ({settoggle}) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <section className='main-game'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-sm-12 paddddd'>
                            <div className='backbtn'>
                                <button onClick={() => {settoggle(0)}}><img src='\Assets\sidebar-icons\arrow-left.svg' alt='img' className='img-fluid' />Back to Projects</button>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-xl-7 col-lg-12 col-md-12 col-12 paddddd'>
                            <div className='gamecard'>
                                <div className='parent'>
                                    <div className='head'>
                                        <h3>You have 10 Tries to win.</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                        <div className='image'>
                                            <img src='\Assets\sidebar-icons\gamepic.svg' alt='img' className='img-fluid' />
                                        </div>
                                        <div className='mainbutton'>
                                            <div className="outerbtn-green-btnonewidth w-100 gamebtn">
                                                <div className="innerbtn">
                                                    <span className="btnspan"></span>
                                                    <h5 className="btntext">Spin the Wheel (10)</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-5 col-lg-12 col-md-12 col-12 paddddd'>
                            <div className='gameleadercard'>
                                <div className='head'>
                                    <h2>Game Leaderboard</h2>
                                </div>
                                <div className='parent'>
                                    <div className='left'>
                                        <h6 className='heading'>Players</h6>
                                    </div>
                                    <div className='right'>
                                        <h6 className='heading'>Points</h6>
                                    </div>
                                </div>
                                <div className='brdr'></div>
                                <div className='inner'>
                                    <div className='left'>
                                       <img src='\Assets\sidebar-icons\crown.svg'alt='img' className='img-fluid  crown'/>
                                       <p className='para'><img src='\Assets\sidebar-icons\gamer.svg'alt='img'className='img-fluid gamer'/>Scott Foster</p>
                                    </div>
                                    <div className='right'>
                                        <p className='para'>15,524</p>
                                    </div>
                                </div>
                                <div className='brdr'></div>
                                <div className='inner'>
                                    <div className='left'>
                                       <p>2</p>
                                       <p className='para'><img src='\Assets\sidebar-icons\gamer1.svg'alt='img'className='img-fluid gamer'/>Ernest Perez</p>
                                    </div>
                                    <div className='right'>
                                        <p className='para'>15,524</p>
                                    </div>
                                </div>
                                <div className='brdr'></div>
                                <div className='inner'>
                                    <div className='left'>
                                       <p>3</p>
                                       <p className='para'><img src='\Assets\sidebar-icons\gamer2.svg'alt='img'className='img-fluid gamer'/>Christina Turner</p>
                                    </div>
                                    <div className='right'>
                                        <p className='para'>14,214</p>
                                    </div>
                                </div>
                                <div className='brdr'></div>
                                <div className='inner'>
                                    <div className='left'>
                                       <p>4</p>
                                       <p className='para'><img src='\Assets\sidebar-icons\gamer3.svg'alt='img'className='img-fluid gamer'/>Gary Hernandez</p>
                                    </div>
                                    <div className='right'>
                                        <p className='para'>13,521</p>
                                    </div>
                                </div>
                                <div className='brdr'></div>
                                <div className='inner'>
                                    <div className='left'>
                                       <p>5</p>
                                       <p className='para'><img src='\Assets\sidebar-icons\036-gamer.svg'alt='img'className='img-fluid gamer'/>Joyce Diaz</p>
                                    </div>
                                    <div className='right'>
                                        <p className='para'>11,214</p>
                                    </div>
                                </div>
                                <div className='brdr'></div>
                                <div className='inner'>
                                    <div className='left'>
                                       <p>6</p>
                                       <p className='para'><img src='\Assets\sidebar-icons\gamer3.svg'alt='img'className='img-fluid gamer'/>10,981</p>
                                    </div>
                                    <div className='right'>
                                        <p className='para'>10,412</p>
                                    </div>
                                </div>
                                <div className='brdr'></div>
                                <div className='inner'>
                                    <div className='left'>
                                       <p>7</p>
                                       <p className='para'><img src='\Assets\sidebar-icons\gamer6.svg'alt='img'className='img-fluid gamer'/>Phyllis Kelly</p>
                                    </div>
                                    <div className='right'>
                                        <p className='para'>10,981</p>
                                    </div>
                                </div>
                                <div className='brdr'></div>
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
                                        </Pagination>
                                        <div className='arrows forspace'>
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

export default Game