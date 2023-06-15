import React from 'react'
import "./footer.scss"
export const Footer = () => {
    return (
        <>
            <section className='main-footer'>
                    <div className='maincard'>
                        <div className='row'>

                            <div className='col-sm-6'>
                                <div className='footer-logo'>
                                    <img src='\Assets\sidebar-icons\footerimage.svg' alt='img' className='img-fluid' />
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</p>
                                </div>
                                <div className='parenttt'>
                                    <div className='left'>
                                        <p>Social links:</p>
                                    </div>
                                    <div className='right'>
                                        <div className='icons'>
                                            <img src='\Assets\sidebar-icons\twitter.svg' alt='img' className='img-fluid' />
                                            <img src='\Assets\sidebar-icons\telegram.svg' alt='img' className='img-fluid' />
                                            <img src='\Assets\sidebar-icons\instagram.svg' alt='img' className='img-fluid' />
                                            <img src='\Assets\sidebar-icons\Discord.svg' alt='img' className='img-fluid' />
                                            <img src='\Assets\sidebar-icons\reddit.svg' alt='img' className='img-fluid' />
                                        </div>
                                    </div>

                                </div>

                                <p className='endpara'>© 2023 Launchpad, All Rights Reserved.</p>
                            </div>
                            <div className='col-sm-2 col-6'>
                                <div className='main-heading'>
                                    <h4>Links</h4>
                                </div>
                                <div className='para'>
                                    <p>All Projects</p>
                                    <p>Upcoming Projects</p>
                                    <p>Leaderboard</p>
                                    <p>Private Sale</p>
                                    <p>Buy Crypto</p>
                                </div>
                            </div>
                            <div className='col-sm-2 col-6'>
                                <div className='main-heading'>
                                    <h4>Company</h4>
                                </div>
                                <div className='para'>
                                    <p>About</p>
                                    <p>Documents</p>
                                    <p>Blog</p>
                                    <p>Press</p>
                                    <p>Team & Career</p>
                                </div>
                            </div>
                            <div className='col-sm-2'>
                                <div className='main-heading'>
                                    <h4>Support</h4>
                                </div>
                                <div className='para'>
                                    <p>Contact Us</p>
                                    <p>Help</p>
                                    <p>FAQs</p>
                                    <p>Terms & services</p>
                                    <p>Privacy Policy</p>
                                </div>
                                <div className='parent1 d-none'>
                                    <div className='left'>
                                        <p>Social links:</p>
                                    </div>
                                    <div className='right'>
                                        <div className='icons'>
                                            <img src='\Assets\sidebar-icons\twitter11.png' alt='img' className='img-fluid' />
                                            <img src='\Assets\sidebar-icons\telegram11.png' alt='img' className='img-fluid' />
                                            <img src='\Assets\sidebar-icons\instagram11.png' alt='img' className='img-fluid' />
                                            <img src='\Assets\sidebar-icons\Discord11.png' alt='img' className='img-fluid' />
                                            <img src='\Assets\sidebar-icons\reddit111.png' alt='img' className='img-fluid' />
                                        </div>
                                    </div>

                                </div>

                                <p className='endpara1 d-none'>© 2023 Launchpad, All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
            </section>
        </>
    )
}
