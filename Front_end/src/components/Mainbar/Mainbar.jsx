import './Mainbar.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Baozi from '../../assets/Bao.svg'

const Mainbar = ({page}) => {
  const navigate = useNavigate()
  const [clicked, setClicked] = useState(false)
  const [isHidden, setIsHidden] = useState(true)

  const changeClick = () => {
    if (!clicked) {
      setClicked(true)
      setIsHidden(false)
    } else {
      setClicked(false)
      setIsHidden(true)
    }
  }




  return (
    <div id={`${page == 'home' ? "menuBar" : "otherMenuBar"}`} className='default-params flex-container'>
      <button id='logoBtn' onClick={() => {navigate('/')}}>
        <img src={Baozi} alt="logo"  className='logo-image'/>
      </button>

      <div className="background">
        <button className={`${!clicked ? "menu__icon" : "menu__icon menu__hovering"}`} onClick={changeClick}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div id={`${isHidden ? "hidden" : "not-hidden"}`} >
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
