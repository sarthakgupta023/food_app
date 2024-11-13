import React, { useContext, useState } from 'react'
import './Fooditem.css'
import { Assets } from '../../assets/assets'
import { Storecontext } from '../../context/storecontext'
const Fooditem = ({id,name,price,description, image}) => {
   
    const {cartitem,addToCart,removeFromCart}=useContext(Storecontext);
  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img className='food-item-img' src={image} alt="" />
            {!cartitem[id]
            ? <img className='Add' onClick={()=> addToCart(id)} src={Assets.add_icon_white} alt="" srcset="" />
            : <div className='food-item-counter'> 
            <img onClick={()=>removeFromCart(id)} src={Assets.remove_icon_red} alt="" />
            <p>{cartitem[id]}</p>
            <img onClick={()=>addToCart(id)} src={Assets.add_icon_green} alt="" srcset="" />
            </div>
            }
        </div>
        <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{name}</p>
           <img src={Assets.rating_starts} alt="" />
        </div>
        
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>${price}</p>
        </div>
    </div>
  )
}

export default Fooditem