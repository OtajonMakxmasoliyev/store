import React, { useState } from 'react'
import MyGallery from './carousel';
import StoreCard from './storeCard';


const handleDragStart = (e) => e.preventDefault();


const Showcase = () => {

    const [id, setId] = useState(0)
    console.log(id);
  



    return (
        <div className='showcase'>
            <div className="showcase_info">
                <h1>Get the Latest Dress Models From Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.</p>
                <button className='linearSpan'><span>Shop Now</span></button>
            </div>
            <div className="showcase_dressess">
                <p className='title'>More list</p>
                <div className="carousel_block">
                    <div className="carousel" style={{ transform: `translateY(${-150 * id}px)` }}>
                        <div className="item" style={id == 0 ? { transform: "scale(1.2)" } : null}>
                            <img src={require("../images/dressess/kuylak.png")} alt="" />
                            <p>Shirt</p>
                        </div>
                        <div className="item" style={id == 1 ? { transform: "scale(1.2)" } : null}>
                            <img src={require("../images/dressess/pidjak.png")} alt="" />
                            <p>Suit</p>
                        </div>
                        <div className="item" style={id == 2 ? { transform: "scale(1.2)" } : null}>
                            <img src={require("../images/dressess/kuylak.png")} alt="" />
                            <p>Shirt</p>
                        </div>
                    </div>
                </div>

                <div className="buttons">
                    <button value={0} onClick={(e) => setId(e.target.value)} style={id == 0 ? { transform: "scale(1.4)" } : null}></button>
                    <button value={1} onClick={(e) => setId(e.target.value)} style={id == 1 ? { transform: "scale(1.4)" } : null}></button>
                    <button value={2} onClick={(e) => setId(e.target.value)} style={id == 2 ? { transform: "scale(1.4)" } : null}></button>
                </div>
            </div>
            <div className="carousel">




                <MyGallery />

            </div>
           
        </div>
    )
}

export default Showcase