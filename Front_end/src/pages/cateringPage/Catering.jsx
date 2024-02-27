import React from 'react'
import './Catering.css'
import CateringMenu from '../../components/menus/cateringMenu'
import Footer from '../../components/footer/Footer'
import MenuBar from '../../components/Mainbar/Mainbar'

const Catering = () => {
  return (
    <div>
      <MenuBar />
      <div className='container load-in-animation'>
        <div className='background-image' id='bc-catering'>
          <div className='overlay'></div>
          <div className='text'>
            <h1>DAILY SPECIAL</h1>
            <p className='catering-text-box'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore <br />
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
            <button className='menu-btn' id='online-border' onClick={() => {}}>
              <span className="transition"></span>
              <span className="label">Link to deal</span>
            </button>
          </div>
        </div>
      </div>
      <CateringMenu />
      <Footer />
    </div>
  )
}

export default Catering
