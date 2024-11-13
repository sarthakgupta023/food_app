import React from 'react'
import './footer.css'
import { Assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={Assets.logo} alt="" />
                <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ut veniam temporibus exercitationem pariatur aperiam 
                    ad accusamus voluptatum quia corrupti dignissimos suscipit aliquid, dolores quod nobis perspiciatis. Dolorem, debiti
                    s minima?</p>
                    <div className="footer-left-social">
                        <img src={Assets.facebook_icon} alt="" /><img src={Assets.twitter_icon} alt="" /><img src={Assets.linkedin_icon} alt="" />
                    </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery-policies</li>
                    <li>Privacy-policies</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get-In-Touch</h2>
                <ul>
                    <li>+91 90000400030020</li>
                    <li>fool-del@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>copyright 2024 ©. all right reserved</p>
    </div>
  )
}

export default Footer