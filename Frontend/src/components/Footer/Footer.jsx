import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img className='footer-logo' src={assets.logo} alt="" />
                <p>Stay connected with us on Facebook, Instagram and Twitter. Explore our FAQ, Privacy Policy, and Terms of Service for more information.Download our app from the App Store or Google Play.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-centre">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-7667149663</li>
                    <li>aaharofranchi@gmail.com</li>
                    <div className='location'><img src={assets.location} alt="" />
                        <p>Office-Aahar, Purulia Road, Tatisilwai, Ranchi, Jharkhand (Pin:835103)</p>
                    </div>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2025 @ Tomato.com -All Right Reserved</p>
    </div>
  )
};
export default Footer