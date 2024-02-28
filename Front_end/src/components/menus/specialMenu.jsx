import React from 'react'
import './specialMenu.css'
import Friedegg from '../../assets/desert/bicho-bicho.jpg'
import Eggtart from '../../assets/desert/200918_Hong-Kong-Egg-Tart_550.jpg'
const specialMenu = () => {
  return (
    <div className='specialMenu-container flex-container load-in-animation'>
      <div className='column-container flex-container'>
        <div className='singleColumn' id='right'>
          <div className='category-container bottom-border'>
            <h2 className='spacing'>DESSERT DISHES</h2>
            <h3 className='spacing'>Deep Fried Egg Puffs</h3>
            <p className='spacing'>Description: Deep fried egg dough knots drizzled with honey.</p>
            <img className='spacing picture-sizing'src={Friedegg} alt="#" />
            <h3 className='spacing'>Deep Fried Twisted Egg Puffs</h3>
            <p className='spacing'>Description: Deep fried egg dough knots drizzled with honey.</p>
            <h3 className='spacing'>Egg Tarts</h3>
            <h3 className='spacing'>Fried Sesame Balls</h3>
            <h3 className='spacing'>Steamed Sesame Balls</h3>
            <h3 className='spacing'>Sponge Cake</h3>
            <h3 className='spacing'>Mango Pudding</h3>
            <img className='spacing picture-sizing'src={Eggtart} alt="#" />
            <h3 className='spacing'>Sweet Tofu</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default specialMenu
