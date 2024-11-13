import React from 'react'
import { useState } from 'react'
import './Loginpopup.css'
import { Assets } from '../../assets/assets'
const Loginpopup = ({setShowlogin}) => {
    const [currState,setCurrState]=useState("Login")
  return (
    <div className='login-pop-up'>
        <form action="" className="login-pop-up-container">
            <div className="login-pop-up-title"><h3>{currState}</h3>
        
        <img onClick={()=>{setShowlogin(false) 
            setCurrState("Sign Up")}} src={Assets.cross_icon} alt="" />
        </div>
        <div className="login-pop-up-input">
           {currState==="Login"?<></>:<input type="text" placeholder='Your Name' />}
            <input type="text" placeholder='E-mail' />
            <input type="text" placeholder='password' />
           
        </div>
        <button onClick={()=>{setCurrState("Login")
                    setShowlogin(true)
    } }>{currState=="Sign Up"?"create account":"Login"}</button>
        <div className="login-pop-up-condition">
            <input type="checkbox" name="" id="" />
            <p>click to accept privacy and policy</p>
        </div>
        {currState==="Login"? <p>Create a new acount? <span onClick={()=>setCurrState("Sign Up")}> Click here</span></p>
        : <p> Already have an account? <span onClick={()=>setCurrState("Login")}>login here</span></p>
        }
        </form>

    </div>
  )
}

export default Loginpopup