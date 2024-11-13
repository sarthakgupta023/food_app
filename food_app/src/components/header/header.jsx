import React from 'react'
import './header.css'
const Header = () => {
  return (
    <div className='header'>
        <div className='header-contents'>
            <h2>Order your favourite food Here</h2>
            <p>"Don’t just take our word for it—our guests say it best! ‘The food is absolutely amazing, and the ambiance is perfect for any occasion.’ ‘I’ve been coming here for years, and [Restaurant Name] never disappoints!’ Come in and discover why [Restaurant Name] has become a beloved spot for locals and visitors alike."</p>
            
               <a href="#explore-menu" bu><button> menu</button> </a> 
        </div>
    </div>
  )
}

export default Header;