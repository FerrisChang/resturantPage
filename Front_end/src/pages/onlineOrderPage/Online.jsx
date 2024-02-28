import React from 'react'
import './Online.css'
import Footer from '../../components/footer/Footer'
import Menubar from '../../components/Mainbar/Mainbar'

const Online = () => {
  return (
    <div>
      <Menubar />
      <div className='container load-in-animation'>
        <div className='background-image' id='bc-comingSoon'>
          <div className='overlay'></div>
          <div className='text'>
            <h1 className='large-text'>COMING SOON!</h1>
            <p className='message'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore <br />
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Online
