import React from 'react'
import Shrimpdim from '../../assets/menu/shript.jpeg'
import Chickendim from '../../assets/menu/chicken.jpg'
import Vegdim from '../../assets/menu/carret.jpeg'
import Specialdim from '../../assets/menu/special.png'
import Meatdim from '../../assets/menu/meat.jpeg'
import Bitbeef from '../../assets/menu/bitbeef.jpeg'


import './mainMenu.css'
const mainMenu = () => {
  return (
    <div className='mainMenu-container flex-container load-in-animation'>
      <p className='mainMenu-support'>Check out our menu on Toast and follow us on social media to hear about <br/>
      weekly specials and rotating "faux que" vegetarian offerings.</p>
      <button className='menu-btn' id='online-border' onClick={() => {}}>
        <span className="transition"></span>
        <span className="label">ORDER NOW</span>
      </button>
      <div className='column-container flex-container'>
        <div className='singleColumn' id='right'>
          <div className='category-container bottom-border'>
            <h2 className='spacing'>STEAMED DISHES</h2>
            <h3 className='spacing'>Steamed Sausage Rolls</h3>
            <p className='spacing'>Description: Savory Chinese sausages wrapped in sweet pastry dough and steamed.</p>
            <img className='spacing picture-sizing'src={Shrimpdim} alt="#" />
            <h3 className='spacing'>Steamed Soup Dumplings</h3>
            <p className='spacing'>Description: Dumplings filled with pork, crab meat and broth.</p>
            <h3 className='spacing'>Shrimp Dumplings</h3>
            <h3 className='spacing'>Pork Siu Mai</h3>
            <h3 className='spacing'>Steamed Pork Ribs</h3>
            <h3 className='spacing'>Steamed Chicken Feet</h3>
            <h3 className='spacing'>Sticky Rice in Lotus Leaf</h3>
            <img className='spacing picture-sizing'src={Chickendim} alt="#" />
            <h3 className='spacing'>Steamed Pork Buns</h3>
          </div>
          <div className='category-container'>
            <h2 className='spacing'>FRIED AND BAKED DISHES</h2>
            <h3 className='spacing'>Baked Pork Buns</h3>
            <p className='spacing'>Description: BBQ pork wrapped in sweet dough and baked.</p>
            <h3 className='spacing'>BBQ Pork Puffs</h3>
            <img className='spacing picture-sizing'src={Vegdim} alt="#" />
            <h3 className='spacing'>Glutinous Rice Dumplings</h3>
            <p className='spacing'>Description: Savory pork and shrimp in a sweet glutinous rice shell.</p>
            <h3 className='spacing'>Taro Root Dumplings</h3>
            <h3 className='spacing'>Pan Fried Turnip Cake</h3>
            <h3 className='spacing'>Fried Sticky Rice</h3>
            <p className='spacing'>Description: Glutinous rice with dried shrimps, scallops and mushrooms.</p>
            <h3 className='spacing'>Stuffed Eggplant</h3>
            <h3 className='spacing'>Spring Rolls</h3>
            <img className='spacing picture-sizing'src={Specialdim} alt="#" />
          </div>
        </div>
        <div className='singleColumn' id='left'>
          <div className='category-container'>
            <h2 className='spacing'>NOODLES AND SPECIAL DISHES</h2>

            <h3 className='spacing'>Shrimp Noodle Rolls</h3>
            <p className='spacing'>Description: Shrimp wrapped in a rice noodle sheet with soy sauce.</p>
            <img className='spacing picture-sizing'src={Meatdim} alt="#" />
            <h3 className='spacing'>Beef Noodle Rolls</h3>
            <p className='spacing'>Description: Minced beef wrapped in a rice noodle sheet with soy sauce.</p>
            <h3 className='spacing'>Chinese Donut Noodle Rolls</h3>
            <h3 className='spacing'>Dried Shrimp Scallion Noodle Rolls</h3>
            <h3 className='spacing'>Clams in Black Bean Sauce</h3>
            <h3 className='spacing'>Steamed Beef Tripe</h3>
            <h3 className='spacing'>BBQ Pork Noodle Rolls</h3>
            <img className='spacing picture-sizing'src={Bitbeef} alt="#" />
            <h3 className='spacing'>Garlic Pea Sprouts</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default mainMenu
