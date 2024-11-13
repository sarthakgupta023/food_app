import React from 'react'
import { menu_list } from '../../assets/assets'
import './explore.css'
const Explore = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
         <h1>Explore Our Menu</h1>

        <p className='explore-para'>
       
            <h2>Classic Delights, Modern Twists</h2>
            "Discover a menu that brings together the best of traditional flavors with contemporary creativity. From timeless classics to modern innovations, our dishes are crafted to satisfy both comfort food lovers and adventurous palates. Let your taste buds explore a world of culinary delights!"</p>
   <div className='explore-menu-list'>
    {menu_list.map((item,index)=>{
        return(
        <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)
        } key={index} className="explore-menu-list-item">
            <img className={category===item.menu_name?"Active":""} src={item.menu_image} alt="" />
            <p>{item.menu_name}</p>
        </div>
        )
    })}
   </div>
   <hr />
    </div>
  )
}

export default Explore