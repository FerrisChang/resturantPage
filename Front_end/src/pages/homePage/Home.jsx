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
      <Mainbar />
      <Carousell />

      <div id='first-deals'>
        <div className='deal-cards'>
          <img className='deal-pics' src={AssortedDumpling} alt="assorted dumplings" />
          <h1 className='deal-titles'>ANOUNCEMENT FILLER TEXT</h1>
          <p className='deal-supporting'>supporting text</p>
          <button className='deal-btn'>Link to deal</button>
        </div>
        <div className='deal-cards'>
          <img className='deal-pics' src={sharingDumpling} alt="sharing dumplings" />
          <h1 className='deal-titles'>ANOUNCEMENT FILLER TEXT</h1>
          <p className='deal-supporting'>supporting text</p>
          <button className='deal-btn'>Link to deal</button>
        </div>
      </div>

      <div id='second-deals'>
        <div className='menu-card' id='right'>
          <h1 className='deal-titles'>ANOUNCEMENT FILLER TEXT</h1>
          <p className='deal-supporting'>supporting text</p>
          <button className='deal-btn'>Link to deal</button>
        </div>
        <img  className='second-deal-pics' src={dumplingScene} alt="dumpling scene" />
      </div>

      <div id='second-deals'>
        <img className='second-deal-pics' src={dimsum} alt="#" />
        <div className='menu-card' id='left'>
          <h1 className='deal-titles'>ANOUNCEMENT FILLER TEXT</h1>
          <p className='deal-supporting'>supporting text</p>
          <button className='deal-btn'>Link to deal</button>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home
