import React from 'react'
import './cateringMenu.css'
const cateringMenu = () => {
  return (
    <div className='catering-container flex-container load-in-animation'>
      <h1 className='catering-title'>TITLE PLACEHOLDER</h1>
      <button className='menu-btn' id='online-border' onClick={() => {}}>
        <span className="transition"></span>
        <span className="label">ORDER NOW</span>
      </button>
      <div className='column-container flex-container'>
        <div className='singleColumn' id='right'>
          <div className='category-container bottom-border'>
            <h2 className='spacing'>Food Category</h2>
            <p className='spacing'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
            <h3 className='spacing'>food name</h3>
            <img className='spacing'src="#" alt="#" />
            <h3 className='spacing'>food name</h3>
            <p className='spacing'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
            <h3 className='spacing'>food name</h3>
            <h3 className='spacing'>food name</h3>
            <h3 className='spacing'>food name</h3>
            <h3 className='spacing'>food name</h3>
            <h3 className='spacing'>food name</h3>
            <img className='spacing'src="#" alt="#" />
            <h3 className='spacing'>food name</h3>
            <h3 className='spacing'>food name</h3>
          </div>
          <div className='category-container'>
            <h2 className='spacing'>Food Category</h2>
            <p className='spacing'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
            <h3 className='spacing'>food name</h3>
            <img className='spacing'src="#" alt="#" />
            <h3 className='spacing'>food name</h3>
            <p className='spacing'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
            <h3 className='spacing'>food name</h3>
            <h3 className='spacing'>food name</h3>
            <h3 className='spacing'>food name</h3>
            <h3 className='spacing'>food name</h3>
            <h3 className='spacing'>food name</h3>
            <img className='spacing'src="#" alt="#" />
            <h3 className='spacing'>food name</h3>
            <h3 className='spacing'>food name</h3>
          </div>
        </div>
        <div className='singleColumn' id='left'>
          <div className='category-container'>
            <h2 className='spacing'>Food Category</h2>
            <p className='spacing'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
            <h3 className='spacing'>food name</h3>
            <img className='spacing'src="#" alt="#" />
            <h3 className='spacing'>food name</h3>
            <p className='spacing'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
            <h3 className='spacing'>food name</h3>
            <h3 className='spacing'>food name</h3>
            <h3 className='spacing'>food name</h3>
            <h3 className='spacing'>food name</h3>
            <h3 className='spacing'>food name</h3>
            <img className='spacing'src="#" alt="#" />
            <h3 className='spacing'>food name</h3>
            <h3 className='spacing'>food name</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default cateringMenu
