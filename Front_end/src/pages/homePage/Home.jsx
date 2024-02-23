import React from 'react'
import './Home.css'
import Mainbar from '../../components/Mainbar/Mainbar'
import Footer from '../../components/footer/Footer'
import Carousell from '../../components/carousell/Carousell'

//pictures for home page
import AssortedDumpling from '../../assets/Dumplings-assorted_525x350.jpg'
import sharingDumpling from '../../assets/caption_525x350.jpg'
import dumplingScene from '../../assets/dumpling-scene.jpeg'
import dimsum from '../../assets/Dim-Sum-Begoni-Bistro.png'


const Home = () => {

  return (
    <div>
      <Mainbar page='home'/>
      <Carousell />

      <div id='first-deals' className='flex-container'>
        <div className='deal-cards flex-container'>
          <img className='deal-pics' src={AssortedDumpling} alt="assorted dumplings" />
          <h1 className='deal-titles'>ANOUNCEMENT FILLER TEXT</h1>
          <p className='deal-supporting'>supporting text</p>
          <button className='menu-btn' id='online-border' onClick={() => {}}>
            <span className="transition"></span>
            <span className="label">Link to deal</span>
          </button>
        </div>
        <div className='deal-cards flex-container'>
          <img className='deal-pics' src={sharingDumpling} alt="sharing dumplings" />
          <h1 className='deal-titles'>ANOUNCEMENT FILLER TEXT</h1>
          <p className='deal-supporting'>supporting text</p>
          <button className='menu-btn' id='online-border' onClick={() => {}}>
            <span className="transition"></span>
            <span className="label">Link to deal</span>
          </button>
        </div>
      </div>

      <div id='second-deals' className='flex-container'>
        <div className='menu-card flex-container' id='right'>
          <h1 className='deal-titles'>ANOUNCEMENT FILLER TEXT</h1>
          <p className='deal-supporting'>supporting text</p>
          <button className='menu-btn' id='online-border' onClick={() => {}}>
            <span className="transition"></span>
            <span className="label">Link to deal</span>
          </button>
        </div>
        <img  className='second-deal-pics' src={dumplingScene} alt="dumpling scene" />
      </div>

      <div id='second-deals' className='flex-container'>
        <img className='second-deal-pics' src={dimsum} alt="#" />
        <div className='menu-card flex-container' id='left'>
          <h1 className='deal-titles'>ANOUNCEMENT FILLER TEXT</h1>
          <p className='deal-supporting'>supporting text</p>
          <button className='menu-btn' id='online-border' onClick={() => {}}>
            <span className="transition"></span>
            <span className="label">Link to deal</span>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home
