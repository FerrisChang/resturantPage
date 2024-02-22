import React, { useState, useEffect } from 'react'
import './Carousell.css'

const Carousell = () => {
  const [activeDivIndex, setActiveDivIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      cycleDivs();
    }, 3000); // Adjust the interval as needed

    return () => clearTimeout(timer); // Cleanup function to clear the timer

  }, [activeDivIndex])

  const cycleDivs = () => {
    setActiveDivIndex((prevIndex) => (prevIndex + 1) % 3);
};

return (
    <div id='displayDiv'>
        <div className='rotate-slide' style={{ display: activeDivIndex === 0 ? 'flex' : 'none' }}>
          <div className='transparentCover'></div>
          <img src="#" alt="#" />
          <div className='information-container'>
            <h1>MONTHLY DUMPLING BOX</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore <br />
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
          </div>
        </div>
        <div className='rotate-slide' style={{ display: activeDivIndex === 1 ? 'flex' : 'none' }}>
          <div className='transparentCover'></div>
          <img src="#" alt="#" />
          <div className='information-container'>
            <h1>DAILY SPECIAL</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore <br />
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
          </div>
        </div>
        <div className='rotate-slide' style={{ display: activeDivIndex === 2 ? 'flex' : 'none' }}>
          <div className='transparentCover'></div>
          <img src="#" alt="#" />
          <div className='information-container'>
            <h1>WE CATER NOW!!! </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore <br />
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
          </div>
        </div>
        <button className='menu-btn' id='border'onClick={cycleDivs}>
          <span className="transition"></span>
          <span className="label">NEXT</span>
        </button>
    </div>
    )
}

export default Carousell
