import { Badge, Close, FavoriteBorderOutlined, Hearing, HeartBrokenOutlined, Menu, MonitorHeart, Person2Outlined, Person3Outlined, PersonOutline, SearchOutlined, Shop, ShoppingBag, ShoppingBagOutlined, VerifiedUserOutlined } from '@mui/icons-material'
import { Modal } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Logo from "../images/logo.svg"


const Navbar = () => {
    const [display, setDisplay] = useState(true)
    const [toogleDisplayUse, setToogleDisplay] = useState(false)
    const count = 3

    const show =()=>{
        let navAccount = document.querySelector(".navigationAccount")
        if(navAccount.classList.contains("hide")){
            navAccount.classList.add("show")
            navAccount.classList.remove("hide")
        }
    }

    const hide = ()=>{
        let navAccount = document.querySelector(".navigationAccount")
        if(navAccount.classList.contains("show")){
            navAccount.classList.add("hide")
            navAccount.classList.remove("show")
        }
    }

    return (
        <nav>
            <div className="logo">
                <img src={Logo} alt="" />
            </div>

            <div className="navigationAccount hide">
                <button onClick={()=> hide()} className="close" ><Close/></button>
                <ul id='links'>
                    <li>
                        <Link to={"/home"}>Home</Link>
                    </li>

                    <li>
                        <Link to={"/shop"}>Shop</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>About Us</Link>
                    </li>
                    <li>
                        <Link to={"/contact"}>Contact</Link>
                    </li>
                </ul>
                <button><ShoppingBagOutlined /><span style={count ? { background: "#EF8484", display: "block" } : { background: "transparent", display: "none" }}>{count}</span></button>
                <button><FavoriteBorderOutlined /></button>
                <button><PersonOutline /></button>
                <div className="search">
                    <input type="search" placeholder='Search' onFocus={() => setDisplay(false)} onBlur={() => setDisplay(true)} />

                    <SearchOutlined style={display ? { display: "block" } : { display: "none" }} />
                </div>
            </div>

            <button onClick={()=>show()} className="toogle"> <Menu /></button>
        </nav>
    )
}

export default Navbar