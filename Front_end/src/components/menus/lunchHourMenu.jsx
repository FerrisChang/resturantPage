import React from 'react'
import './lunchHourMenu.css'
import Unlimited from '../../assets/desert/unlimited.jpeg'
const lunchHourMenu = () => {
  return (
    <div className='lunchHour-container flex-container load-in-animation'>
      <p className='lunchHour-support special-text-size'>Check out our menu on Toast and follow us on social media to hear about weekly specials.<br/>
      Happy hour is your hour to wind down and enjoy our great selection of half off beers on tap and deserts!</p>
      <div className='column-container flex-container'>
        <div className='singleColumn' id='right'>
          <div className='category-container bottom-border'>
            <h2 className='spacing'>BEER ON TAP</h2>
            <h3 className='spacing'>Corona</h3>
            <h3 className='spacing'>Heineken</h3>
            <h3 className='spacing'>Guinness</h3>
            <h3 className='spacing'>Peroni</h3>
            <h3 className='spacing'>Modelo</h3>
            <h3 className='spacing'>Newcastle</h3>
            <h3 className='spacing'>Miller Life</h3>
            <h3 className='spacing'>Smithwick's Red Ale</h3>
          </div>
          <div className='category-container'>
            <h2 className='spacing'>HALF OFF DESERTS</h2>
            <h3 className='spacing'>Egg tarts</h3>
            <h3 className='spacing'>Deep Fried Twisted Egg Puffs</h3>
            <h3 className='spacing'>Fried Sesame Balls</h3>
            <h3 className='spacing'>Deep Fried Egg Puffs</h3>
            <img className='spacing picture-sizing'src={Unlimited} alt="#" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default lunchHourMenu
