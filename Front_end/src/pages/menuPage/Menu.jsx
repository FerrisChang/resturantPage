import React, {useState} from 'react'
import './Menu.css'
import Mainbar from '../../components/Mainbar/Mainbar'
import RegularMenu from '../../components/menus/mainMenu'
import SpecialMenu from '../../components/menus/specialMenu'
import LunchMenu from '../../components/menus/lunchHourMenu'
import CateringMenu from '../../components/menus/cateringMenu'

const Menu = () => {
  const [activeComponent, setActiveComponent] = useState('menu')

  const renderComponent = () => {
    switch(activeComponent) {
      case 'menu': return <RegularMenu />;
      case 'special': return <SpecialMenu />;
      case 'lunchHappyHour': return <LunchMenu />;
      case 'catering': return <CateringMenu />;
      default: return null;
    }
  }

  return (
    <div id='allMenusContainer'>
      <Mainbar />
      <div id='information-container'>
        <h1 id='menu-title'>MENUS</h1>
        <span id='menu-supporting-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/>
        eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris <br/>
        nisi ut aliquip ex ea commodo consequat. </span>
        <div id="menubar-btn-container">
          <button className='menu-btn' id='online-border' onClick={() => setActiveComponent('menu')}>
            <span className="transition"></span>
            <span className="label">MENU</span>
          </button>
          <button className='menu-btn' id='online-border' onClick={() => setActiveComponent('special')}>
            <span className="transition"></span>
            <span className="label">SPECIAL</span>
          </button>
          <button className='menu-btn' id='online-border' onClick={() => setActiveComponent('lunchHappyHour')}>
            <span className="transition"></span>
            <span className="label">LUNCH HAPPY HOUR</span>
          </button>
          <button className='menu-btn' id='online-border' onClick={() => setActiveComponent('catering')}>
            <span className="transition"></span>
            <span className="label">CATERING</span>
          </button>
        </div>
      </div>
      <div id='menu-container'>
        {renderComponent()}
      </div>
    </div>
  )
}

export default Menu
