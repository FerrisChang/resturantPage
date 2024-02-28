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
            <p className='message'> Thank you for visiting the BaoBao page we will soon offer Online Ordering.<br/> 
            Check back with us soon and make your next order a lucky one!</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Online
