import React from 'react'
import "./Footer.scss"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
          <div className='item'>
            <h1>Categories</h1>
            <span>Men</span>
            <span>Women</span>
            <span>Shoes</span>
            <span>Accessories</span>
            <span>New Arrivals</span>
          </div>
          <div className='item'>
          <h1>Links</h1>
            <span>FAQ</span>
            <span>Pages</span>
            <span>Store</span>
            <span>Policy</span>
            <span>Cookies</span>
          </div>
          <div className='item'>
          <h1>About</h1>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.t</span>
          </div>
          <div className='item'>
            <h1>Contact</h1>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
          </div>
      </div>


      <div className='bottom'>
        <div className='left'>
          <span className='logo'>Devstore</span>
          <span className='copyrights'>  © Copyrights 2023. All rights reserved </span>
        </div>
        <div className='right'>
          <img src='img/payment.png' alt='payment'/>
        </div>
      </div>
    </div>
  )
}

export default Footer