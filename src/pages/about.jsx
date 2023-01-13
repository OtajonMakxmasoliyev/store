import React from 'react'
import Navbar from "../components/navbar"
import Footer from "../components/footer"

const About = () => {
    return (
        <div className='about'>

            <Navbar />


            <div className="showcase">
                <div className="left">
                    <div className="pagination">home / <span>about</span></div>
                    <h1>About Us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.</p>
                </div>
                <img src={require("../images/aboutShow.png")} alt="" />
            </div>

            <div className="aboutMarque">
                <div className="aboutInfo">
                    <h2>Profile</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis maxime sed libero facere sit reiciendis. Blanditiis porro debitis tempora ea cum, a aut quidem repellat?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure atque aut nobis quis repudiandae? Perspiciatis tempora consequatur libero repellat ducimus cum vel eveniet accusamus facere. Magni sequi vel facere culpa!</p>
                </div>
                <div className="image">
                    <img src={require("../images/aboutMangcoding.png")} alt="" />
                    <div className="whiteMar">
                        <p>Mangcoding Store</p>
                    </div>
                </div>
            </div>
            <div className="aboutMarque">
                <div className="image">
                    <img src={require("../images/aboutMangcoding.png")} alt="" />
                    <div className="whiteMar left">
                        <p>Mangcoding Store</p>
                    </div>
                </div>
                <div className="aboutInfo">
                    <h2>Our Mission</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis maxime sed libero facere sit reiciendis. Blanditiis porro debitis tempora ea cum, a aut quidem repellat?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure atque aut nobis quis repudiandae? Perspiciatis tempora consequatur libero repellat ducimus cum vel eveniet accusamus facere. Magni sequi vel facere culpa!</p>
                </div>

            </div>

            <Footer/>
        </div>
    )
}

export default About