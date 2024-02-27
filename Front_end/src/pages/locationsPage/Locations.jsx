import React from 'react'
import GoogleMap from '../../components/googleMap/GoogleMap'
import Mainbar from '../../components/Mainbar/Mainbar'
import Footer from '../../components/footer/Footer'
import './Locations.css'

const Locations = () => {
  return (
    <div>
      <Mainbar />
      <div className='flex-container location-container'>
        <div className='flex-container location-information load-in-animation'>
          <h1 className='padding-bt'>NORTHERN TERRITORY, AUSTRALIA</h1>
          <p className='padding-bt'>1234 Filler address, Miltalie 5602</p>
          <h2 className='padding-bt'>OPEN 7 DAYS A WEEK!</h2>
          <h2 className='padding-bt'>9AM - 9PM OR UNTIL WE SELL OUT!</h2>
          <h2 className='padding-bt'>PHONE NUMBER: (08)8779-7727</h2>
          <button className='menu-btn' id='online-border' onClick={() => {}}>
            <span className="transition"></span>
            <span className="label">ORDER NOW</span>
          </button>
        </div>
        <GoogleMap />
      </div>
      <Footer />
    </div>
  )
}

export default Locations
