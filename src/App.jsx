import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Shop from './pages/Shop'
import ItemDetails from './components/Items/ItemDetails'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {


  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Shop /> } />
          <Route path='/:id' element={<ItemDetails />}
/>        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
