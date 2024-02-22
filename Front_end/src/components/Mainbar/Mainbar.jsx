import './Mainbar.css'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Mainbar = () => {
  const navigate = useNavigate()
  return (
    <div id="menuBar">
      <button id='logoBtn' onClick={() => {navigate('/')}}>BāoBāo</button>

      <div id="menubar-btn-container">
        <button className='menu-btn' onClick={() => {navigate('/menu')}}>
          <span className="transition"></span>
          <span className="label">MENUS</span>
        </button>
        <button className='menu-btn' onClick={() => {navigate('/catering')}}>
          <span className="transition"></span>
          <span className="label">CATERING</span>
        </button>
        <button className='menu-btn' onClick={() => {navigate('/location')}}>
          <span className="transition"></span>
          <span className="label">LOCATIONS</span>
        </button>
        <button className='menu-btn' onClick={() => {navigate('/gift_card')}}>
          <span className="transition"></span>
          <span className="label">GIFT CARDS</span>
        </button>
        <button className='menu-btn' id='online-border' onClick={() => {navigate('/online_ordering')}}>
          <span className="transition"></span>
          <span className="label">ORDER ONLINE</span>
        </button>
      </div>
    </div>
  )
}

export default Mainbar
