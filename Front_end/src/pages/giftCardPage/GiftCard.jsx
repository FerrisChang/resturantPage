import React from 'react'
import './GiftCard.css'
import Footer from '../../components/footer/Footer'
import Menubar from '../../components/Mainbar/Mainbar'

const GiftCard = () => {
  return (
    <div className='giftcard-container'>
      <Menubar />
      <div className='container'>
        <div className='background-image' id='bc-catering'>
          <div className='overlay'></div>
          <div className='text'>
            <h1 className='large-text'>SEND A LUCKY GIFT!</h1>
          </div>
        </div>
      </div>
      <div className='gift-information flex-container'>
        <p className='gift-text-box'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore <br />
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
        <p className='gift-text-box'>Treat your loved ones to multiple experiences with one card.</p>
        <div className='gift-button-container flex-container'>
          <button className='menu-btn bot-mar' id='online-border' onClick={() => {}}>
            <span className="transition"></span>
            <span className="label">Link to deal</span>
          </button>
          <button className='menu-btn bot-mar' id='online-border' onClick={() => {}}>
            <span className="transition"></span>
            <span className="label">Link to deal</span>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default GiftCard
