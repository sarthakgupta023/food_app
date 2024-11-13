import React, { useState } from 'react'
import './navbar.css'
import { Assets } from '../../src/assets/assets';
import { Link, useNavigate } from 'react-router-dom';
const Navbar = ({setShowlogin}) => {
    const [menu,setMenu]=useState("home");
    const navigate=useNavigate();
    const gotosecpage=()=>{
        navigate('/cart');
    }
  return (
    <div className='navbar'>
       <Link to='/'> <img src={Assets.logo} alt="" className='logo' />
       <img className='tomato' src='src/assets/Screenshot 2024-10-19 at 1.47.30 PM.png' alt="" />
       </Link>
        <ul className='navbar-menu'>
            <Link to='/' onClick={()=>{setMenu("home")}} className={menu==='home'?"active":""}>HOME</Link>
            <a href='#explore-menu' onClick={()=>{setMenu("menu")}} className={menu==='menu'?"active":""}>MENU</a>
            <a href='#app-download' onClick={()=>{setMenu("mobile-app")}} className={menu==='mobile-app'?"active":""}>MOBILE-APP</a>
            <a href='#footer' onClick={()=>{setMenu("contact-us")}} className={menu==='contact-us'?"active":""}>CONTACT US</a>
        </ul>
        <div className='navbar-right'>
            <img src={Assets.search_icon} alt="" />
           
            <div className='navbar-search-icon'>
                <img onClick={gotosecpage} src={Assets.basket_icon} alt="" />
                <div className="dot"></div>
            </div>
            <button onClick={()=>setShowlogin(true)}>{setShowlogin===true?"Login":"Sign Up"}</button>
        </div>
    </div>
  )
}

export default Navbar;