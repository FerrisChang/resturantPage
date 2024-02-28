import React from 'react'
import './GiftCard.css'
import Footer from '../../components/footer/Footer'
import Menubar from '../../components/Mainbar/Mainbar'

const GiftCard = () => {
  return (
    <div className='giftcard-container'>
      <Menubar />
      <div className='container load-in-animation'>
        <div className='background-image' id='bc-gift'>
          <div className='overlay'></div>
          <div className='text'>
            <h1 className='large-text'>SEND A LUCKY GIFT!</h1>
          </div>
        </div>
      </div>
      <div className='gift-information flex-container'>
        <p className='gift-text-box special-text-size'>It’s tradition to give the gift of a bright, beautiful red envelope (known as 紅包, hóngbāo) to your<br/>
        friends and family. But not just any old envelope. These are filled with money - and symbolize good wishes and luck for the new year ahead.<br/>
        The importance of the hóngbāo isn’t the cash held inside; it’s actually the envelope itself. The red color symbolizes<br/>
        good luck and prosperity in Chinese (and other East Asian) cultures.</p>
        <p className='gift-text-box special-text-size'>Treat your loved ones to multiple experiences with one red card.</p>
        <div className='gift-button-container flex-container'>
          <button className='menu-btn bot-mar' id='online-border' onClick={() => {}}>
            <span className="transition"></span>
            <span className="label">GET YOUR RED ENVELOPE HERE</span>
          </button>
          <button className='menu-btn bot-mar' id='online-border' onClick={() => {}}>
            <span className="transition"></span>
            <span className="label">SEND A LITTLE LUCK DIGITALLY</span>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default GiftCard
