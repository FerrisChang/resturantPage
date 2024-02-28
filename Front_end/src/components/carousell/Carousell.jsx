import React, { useState, useEffect } from 'react'
import './Carousell.css'

//pictures for background
import dragon from '../../assets/dragon.png'

const Carousell = () => {
  const [activeDivIndex, setActiveDivIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      cycleDivs();
    }, 7000); // Adjust the interval as needed

    return () => clearTimeout(timer); // Cleanup function to clear the timer

  }, [activeDivIndex])

  const cycleDivs = () => {
    setActiveDivIndex((prevIndex) => (prevIndex + 1) % 3);
};

return (
    <div className='load-in-animation' id='displayDiv'>
        <div className='container' style={{ display: activeDivIndex === 0 ? 'flex' : 'none' }}>
          <div className='background-image' id='bc-one'>
            <div className='overlay'></div>
            <div className='text'>
              <h1>MONTHLY DESERT BOX</h1>
              <p className='special-text-size'>When you sign-up for a special monthly desert box you will receive a assortment of chinas native deserts. <br />
              This assortment box is great for different occasions or gifts for your loved ones.</p>
            </div>
          </div>
        </div>
        <div className='container' style={{ display: activeDivIndex === 1 ? 'flex' : 'none' }}>
          <div className='background-image' id='bc-two'>
            <div className='overlay'></div>
            <div className='text'>
              <h1>DAILY SPECIAL</h1>
              <p className='special-text-size'>Everyday we offer specialties that our many different master chiefs have crafted.<br />
              These special daily items will never be sold more than once week so come down to be able to try that days special treat!</p>
            </div>
          </div>
        </div>
        <div className='container' style={{ display: activeDivIndex === 2 ? 'flex' : 'none' }}>
          <div className='background-image' id='bc-three'>
            <div className='overlay'></div>
            <div className='text'>
              <h1>WE CATER NOW!!!</h1>
              <p className='special-text-size'>We now offer catering for all of your different occasions!<br />
              Be the talk of your next event when you have an equally amazing catering for your events!<br />
              Please call ahead to book your catering now!</p>
            </div>
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
