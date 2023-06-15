import React from 'react'
const Newsletter = () => {
  return (
    <section className='main-leaderboard '>


      <div className='leaderboard-last'>
        <div className='row'>
          <div className='col-xl-7 col-md-12 p-0 m-auto'>


            <h2 className='newsletter'>
              Subscribe to our newsletter!
            </h2>
            <p className='adipiscing'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            </p>
              <div class="search">

                <input type="text" class="form-control forpaddset" placeholder="Enter your email address" />

                <div className="outerbtn-green-btnonewidth ssubscribe ">
                  <div className="innerbtn">
                    <span className="btnspan"></span>
                    <h5 className="btntext">Subscribe</h5>
                  </div>
                </div>

              </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Newsletter