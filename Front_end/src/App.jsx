import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/homePage/Home'
import Catering from './pages/cateringPage/Catering'
import Location from './pages/locationsPage/Locations'
import Menu from './pages/menuPage/Menu'
import Online from './pages/onlineOrderPage/Online'
import GiftCard from './pages/giftCardPage/GiftCard'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/catering' element={<Catering />}/>
          <Route path='/location' element={<Location />}/>
          <Route path='/gift_card' element={<GiftCard />}/>
          <Route path='/menu' element={<Menu />}/>
          <Route path='/online_ordering' element={<Online />}/>
        </Routes>
      </Router>
    </div>

  )
}

export default App
