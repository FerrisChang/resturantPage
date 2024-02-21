import React, { useState } from 'react'
import './Carousell.css'

const Carousell = () => {

  const [activeDivIndex, setActiveDivIndex] = useState(0);

  const cycleDivs = () => {
    setActiveDivIndex((prevIndex) => (prevIndex + 1) % 3);
};

return (
    <div>
        <div style={{ display: activeDivIndex === 0 ? 'block' : 'none' }}>Div 1 Content</div>
        <div style={{ display: activeDivIndex === 1 ? 'block' : 'none' }}>Div 2 Content</div>
        <div style={{ display: activeDivIndex === 2 ? 'block' : 'none' }}>Div 3 Content</div>
        <button onClick={cycleDivs}>Next</button>
    </div>
    )
}

export default Carousell
