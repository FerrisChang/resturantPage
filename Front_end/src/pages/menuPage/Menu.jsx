import React, {useState} from 'react'
import './Menu.css'
import Mainbar from '../../components/Mainbar/Mainbar'
import Footer from '../../components/footer/Footer'
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
    <div>
      <Mainbar />
      <div className='information-container flex-container load-in-animation'>
        <h1 id='menu-title'>MENUS</h1>
        <p id='menu-supporting-text' className='special-text-size'>Dim sum is not just a meal; it's a gastronomic experience that encompasses a wide range of delectable dishes, <br/>
        each meticulously crafted to tantalize the senses. Rooted in the tea houses of ancient China, <br/>
        dim sum has evolved into an intricate art form that showcases the culinary prowess of Chinese chefs. </p>
        <div className='flex-container' id='menubar-container'>
          <button className='menu-btn' id='online-border' onClick={() => setActiveComponent('menu')}>
            <span className='transition'></span>
            <span className='label'>MENU</span>
          </button>
          <button className='menu-btn' id='online-border' onClick={() => setActiveComponent('special')}>
            <span className='transition'></span>
            <span className='label'>SPECIAL</span>
          </button>
          <button className='menu-btn' id='online-border' onClick={() => setActiveComponent('lunchHappyHour')}>
            <span className='transition'></span>
            <span className='label'>LUNCH HAPPY HOUR</span>
          </button>
          <button className='menu-btn' id='online-border' onClick={() => setActiveComponent('catering')}>
            <span className='transition'></span>
            <span className='label'>CATERING</span>
          </button>
        </div>
      </div>
      <div className='menu-container flex-container'>
        {renderComponent()}
      </div>
      <Footer />
    </div>
  )
}

export default Menu
