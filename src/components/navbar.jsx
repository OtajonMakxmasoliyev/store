import { Badge, FavoriteBorderOutlined, Hearing, HeartBrokenOutlined, MonitorHeart, Person2Outlined, Person3Outlined, PersonOutline, SearchOutlined, Shop, ShoppingBag, ShoppingBagOutlined, VerifiedUserOutlined } from '@mui/icons-material'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import Logo from "../images/logo.svg"


const Navbar = () => {
    const [display, setDisplay] =  useState(true)
    const count = 3
  return (
    <nav>
        <div className="logo">
            <img src={Logo} alt="" />
        </div>
        <ul>
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
        <div className="navigationAccount">
            <button><ShoppingBagOutlined /><span style={count?{background:"#EF8484", display:"block"}:{background:"transparent", display:"none"}}>{count}</span></button>
            <button><FavoriteBorderOutlined/></button>
            <button><PersonOutline/></button>
            <div className="search">
            <input type="search"  placeholder='Search' onFocus={()=>setDisplay(false)} onBlur={()=>setDisplay(true)}/>

            <SearchOutlined style={display?{display:"block"}:{display:"none"}}/>
            </div>
        </div>
    </nav>
  )
}

export default Navbar