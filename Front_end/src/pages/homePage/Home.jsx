import React from 'react'
import Mainbar from '../../components/Mainbar/Mainbar'
import Footer from '../../components/footer/Footer'
import Carousell from '../../components/carousell/Carousell'


const Home = () => {

  return (
    <div>
      <Mainbar />
      <Carousell />

      <div id='first-deals'>
        <div className='deal-cards'>
          <img className='deal-pics' src="#" alt="#" />
          <h1 className='deal-titles'>ANOUNCEMENT FILLER TEXT</h1>
          <p className='deal-supporting'>supporting text</p>
          <button className='deal-btn'>Link to deal</button>
        </div>
        <div className='deal-cards'>
          <img className='deal-pics' src="#" alt="#" />
          <h1 className='deal-titles'>ANOUNCEMENT FILLER TEXT</h1>
          <p className='deal-supporting'>supporting text</p>
          <button className='deal-btn'>Link to deal</button>
        </div>
      </div>

      <div id='second-deals'>
        <div>
          <h1 className='deal-titles'>ANOUNCEMENT FILLER TEXT</h1>
          <p className='deal-supporting'>supporting text</p>
          <button className='deal-btn'>Link to deal</button>
        </div>
        <img src="#" alt="#" />
      </div>

      <div>
        <img src="#" alt="#" />
        <div>
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
