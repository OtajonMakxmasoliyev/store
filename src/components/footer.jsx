import { Facebook, FacebookOutlined, FacebookRounded, Instagram, LinkedCameraOutlined, LinkedIn, Twitter } from '@mui/icons-material'
import React from 'react'

const Footer = () => {
  return (
    
    <footer >
        <div className="logoDescription">
            <img src={require("../images/logoWhite.svg").default} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis, justo nec porttitor auctor, erat sapien faucibus lectus, vel tempor dolor augue et lectus. </p>
            <button className='linearSpan'><span>Login Now</span></button>
        </div>

        <dl>
            <dt>Home</dt>
            <dd>Product</dd>
            <dd>Categories</dd>
            <dd>Shop</dd>
            <dd>Log in</dd>
        </dl>
        <dl>
            <dt>Shop</dt>
            <dd>T-Shirt</dd>
            <dd>Jacket</dd>
            <dd>Shirt</dd>
            <dd>Jens</dd>
        </dl>
        <dl>
            <dt>Categories</dt>
            <dd>Men</dd>
            <dd>Children</dd>
            <dd>Woman</dd>
        </dl>
        <div className="contact">
            <p className="title">
            Contact
            </p>
            <a href="mailto:mangcoding@gmail.com">mangcoding@gmail.com</a>
            <div className="linkIcon">
                <a href="#"><FacebookRounded/></a>
                <a href="#"><Twitter/></a>
                <a href="#"><LinkedIn/></a>
                <a href="#"><Instagram/></a>
            </div>
        </div>
    </footer>
  )
}

export default Footer