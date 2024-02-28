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
            <h1>BAOBAO CATERING</h1>
            <p className='catering-text-box special-text-size'>The traditional experience with a modern twist you will always remember. The new-school flavors you won’t forget. Let our team bring the BeoBao experience
            to your office, home, or special event. From office lunches or workplace gatherings, and birthday parties to weddings and galas.</p>
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
