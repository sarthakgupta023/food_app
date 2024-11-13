import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import  Navbar from './components/navbar' 
import './App.css'
import { Routes ,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/footer/footer'
import Loginpopup from './components/loginpopup/Loginpopup'
function App() {
  const [showlogin, setShowlogin] = useState(false)


  return (
    <>
    {showlogin?<Loginpopup setShowlogin={setShowlogin}/>:<></>}
      <div className="App">
    <Navbar setShowlogin={setShowlogin}/>
        <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/cart' element={<Cart/>}/>
         <Route path='/Place' element={<PlaceOrder/>}/>

        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
