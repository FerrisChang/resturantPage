import React from 'react'
import './Home.css'
import Mainbar from '../../components/Mainbar/Mainbar'
import Footer from '../../components/footer/Footer'
import Carousell from '../../components/carousell/Carousell'

//pictures for home page
import AssortedDumpling from '../../assets/Dumplings-assorted_525x350.jpg'
import sharingDumpling from '../../assets/caption_525x350.jpg'
import dumplingScene from '../../assets/dumpling-scene.jpeg'
import dimsum from '../../assets/Dim-Sum-Begoni-Bistro.png'


const Home = () => {

  return (
    <div className='home-container'>
      <Mainbar page='home'/>
      <Carousell />

      <div id='first-deals' className='flex-container fade-in-animation'>
        <div className='deal-cards flex-container'>
          <img className='deal-pics' src={AssortedDumpling} alt="assorted dumplings" />
          <h1 className='deal-titles'>SPECIALS</h1>
          <p className='deal-supporting'>Master chef Qi-Shun Lee has you covered! Check out our rotating specialty dim sum and limited drops.</p>
          <button className='menu-btn' id='online-border' onClick={() => {}}>
            <span className="transition"></span>
            <span className="label">SEE THE SPECIALS</span>
          </button>
        </div>
        <div className='deal-cards flex-container'>
          <img className='deal-pics' src={sharingDumpling} alt="sharing dumplings" />
          <h1 className='deal-titles'>FLIGHTS OF DIM SUM</h1>
          <p className='deal-supporting'>Once a month, Master chef Qi-Shun Lee and his sous-chef present a new dim sum flight dine-in experience that goes beyond our regular offerings and puts a spin on amazing asian cuisine.</p>
          <button className='menu-btn' id='online-border' onClick={() => {}}>
            <span className="transition"></span>
            <span className="label">GET YOUR TICKETS</span>
          </button>
        </div>
      </div>

      <div id='second-deals' className='reverse-column flex-container'>
        <div className='menu-card flex-container' id='right'>
          <h1 className='deal-titles'>MENU</h1>
          <p className='deal-supporting'>We are the best that Chinese flavors have to offer. All menu items are made in-house from never frozen always fresh ingredients.<br/>
          Get traditions and favorites from all of chinas providences on one plate. BaoBao is a three-time Michelin Bib Gormand winner serving the Australia&apos;s best blend of Chinas classics .</p>
          <button className='menu-btn' id='online-border' onClick={() => {}}>
            <span className="transition"></span>
            <span className="label">CHECK OUT THE MENU</span>
          </button>
        </div>
        <img  className='second-deal-pics' src={dumplingScene} alt="dumpling scene" />
      </div>

      <div id='second-deals' className='flex-container forward-column'>
        <img className='second-deal-pics' src={dimsum} alt="#" />
        <div className='menu-card flex-container' id='left'>
          <h1 className='deal-titles'>CATERING</h1>
          <p className='deal-supporting'>We&apos;ll bring the BEST to you! From backyard BBQs, holiday celebrations or hundred-person events, our 
          crew and catering truck can do it all. Serving thoughtfully crafted sides, vegan and vegetarian options, to the classics from all the providences of China — it&apos;s all here.</p>
          <button className='menu-btn' id='online-border' onClick={() => {}}>
            <span className="transition"></span>
            <span className="label">EXPLORE CATERING</span>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home
