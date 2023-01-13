import { Adjust, AdjustOutlined, ArrowCircleDown, ArrowDownward, ArrowDropDown, ArrowDropDownOutlined, ArrowDropDownRounded, ArrowDropDownTwoTone, ArrowRightAlt, ExpandMore, Filter, Filter2Outlined, Settings, SettingsBackupRestore, Tune } from '@mui/icons-material';
import { fabClasses } from '@mui/material';
import React, { useState, useContext } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import ImageGallery from 'react-image-gallery';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import StoreCard from '../components/storeCard';
import { storeInfo } from './home';





const Shop = () => {



    const shopStore = storeInfo.map((data, index) => {
        if (index % 2 === 0) {
            data["color"] = "green"
        } else {
            data["color"] = "red"
        }
        if (index % 3 === 0) {
            data["gender"] = "woman"
            data["size"] = ["l"]
        } else {
            data["gender"] = "men"
            data["size"] = ["m"]
        }
        if (index % 2 === 1) {
            data["price"] = 40 + (index * 10)
        } else {
            data["price"] = 40 + (index * 5)
        }
        data.size.push("all")
        return data

    })

    const [price, setPrice] = useState()
    const [size, setSize] = useState()
    const [gender, setGender] = useState()
    const [color, setColor] = useState()

    const [forStore, setForStore] = useState(shopStore)



    const responsive = {
        0: {
            items: 1
        },
        568: {
            items: 3,
            margin:24
        },
        1024: {
            items: 4,
            itemsFit: 'contain'
        },
    };

    const items = [
        <img src={require("../images/carousel/carousel (1).png")} alt="" />,
        <img src={require("../images/carousel/carousel (2).png")} alt="" />,
        <img src={require("../images/carousel/carousel (3).png")} alt="" />,
        <img src={require("../images/carousel/carousel (4).png")} alt="" />,
        <img src={require("../images/carousel/carousel (1).png")} alt="" />,
        <img src={require("../images/carousel/carousel (2).png")} alt="" />,
        <img src={require("../images/carousel/carousel (3).png")} alt="" />,
        <img src={require("../images/carousel/carousel (4).png")} alt="" />,
    ]



    function handleGender(e, callback) {

        let buttons = document.getElementsByClassName("buttons")[0].children;
        for (let index = 0; index < buttons.length; index++) {
            const element = buttons[index];
            element.style = ""

        }
        e.target.style = "background:#5463FF; color:#fff"



        setGender(e.target.textContent.toLowerCase())
        callback()

    }
    const dropDown = (event) => {
        let downClass = document.getElementsByClassName("down")[event]
        let dropCLass = document.getElementsByClassName("dropButton")[event]
        if (downClass.style.height === "0px") {
            downClass.style.height = "auto"
        } else {
            downClass.style.height = "0px"
        }

        if (dropCLass.style.transform === "rotate(180deg)") {
            dropCLass.style.transform = "rotate(0)"
        } else {
            dropCLass.style.transform = "rotate(180deg)"
        }
    }







    const colorhandle = (event, callback) => {


        let label = document.getElementsByTagName("label")
        let labelLength = label.length
        for (let index = 0; index < labelLength; index++) {
            const element = label[index];
            if (element.getAttribute("for") === event.target.value) {
                element.children[0].classList.add("outline");
            } else {
                element.children[0].classList.remove("outline");
            }

        }
        setColor(event.target.value);

        callback()
    }


    const sizehandle = (event, callback) => {


        let label = document.getElementsByTagName("label")
        let labelLength = label.length
        for (let index = 0; index < labelLength; index++) {
            const element = label[index];
            if (element.getAttribute("for") === event.target.value) {
                element.children[0].classList.add("current");
            } else {
                element.children[0].classList.remove("current");
            }



        }

        setSize(event.target.value)
        callback()

    }
    const handlePrice = (e, callback) => {
        setPrice(e.target.value)
        callback()
    }



    const filter = (data, index) => {

    }


    console.log(shopStore);

    const forFinish = shopStore.filter((data) => {
        return (data.gender == gender || gender == undefined) && (data.price > price || price == undefined) && (data.color == color || color == undefined) && (data.size.includes(size) || size == undefined)
    })

    console.log(forFinish);


    console.log(gender, price, size, color);

    return (
        <div className='shop'>
            <Navbar />

            <div className="showcase">
                <div className="pagination">home / <span>shop</span></div>
                <p className='title'>Shop</p>
                <AliceCarousel
                    mouseTracking
                    items={items}
                    infinite={true}
                    disableDotsControls
                    responsive={responsive}

                />
            </div>
            <div className="title">
                <p>T - Shirt</p>
            </div>
            <div className='main'>
                <div className="filter">
                    <p>Filter <Tune /></p>
                    <div className="dropdown">
                        <div className="top">
                            <p>Categories</p>
                            <button onClick={() => dropDown(0)} className="dropButton"><ExpandMore /></button>
                        </div>
                        <div className="down">
                            <div className="buttons">
                                <button onClick={(e) => handleGender(e, filter)}>Men</button>
                                <button onClick={(e) => handleGender(e, filter)}>Woman</button>
                                <button onClick={(e) => handleGender(e, filter)}>Children</button>
                            </div>
                        </div>
                    </div>
                    <hr />

                    <div className="dropdown">
                        <div className="top">
                            <p>Price</p>
                            <button onClick={() => dropDown(1)} className="dropButton"><ExpandMore /></button>
                        </div>
                        <div className="down">
                            <input type="range" min={40} max={500} id="price" onChange={(e) => handlePrice(e, filter)} />

                            <div className='rangeBar'></div>

                            <div className="price">
                                <span>40$</span>
                                <span>{price}</span>
                                <span>500$</span>
                            </div>
                        </div>

                    </div>
                    <div className="dropdown">
                        <div className="top">
                            <p>Colors</p>
                            <button onClick={() => dropDown(2)} className="dropButton"><ExpandMore /></button>
                        </div>
                        <div className="down">
                            <div className="colors">
                                <form name='forColor' onChange={(e) => colorhandle(e, filter)} >
                                    <label htmlFor="green"><div style={{ background: "#078204" }} className="color"></div></label>
                                    <input type="radio" id='green' name="colors" value={"green"} />

                                    <label htmlFor="yellow"><div style={{ background: "#CD9913" }} className="color"></div></label>
                                    <input type="radio" id='yellow' name="colors" value={"yellow"} />

                                    <label htmlFor="blue"><div style={{ background: "#CD3C3C" }} className="color"></div></label>
                                    <input type="radio" id='blue' name="colors" value={"blue"} />

                                    <label htmlFor="#4F87DC"><div style={{ background: "#4F87DC" }} className="color"></div></label>
                                    <input type="radio" id='#4F87DC' name="colors" value={"#4F87DC"} />
                                </form>
                            </div>
                        </div>

                    </div>
                    <hr />
                    <div className="dropdown">
                        <div className="top">
                            <p>Size</p>
                            <button onClick={() => dropDown(3)} className="dropButton"><ExpandMore /></button>
                        </div>
                        <div className="down">
                            <div className="size">
                                <form name='forSize' onChange={(e) => sizehandle(e, filter)} >

                                    <label htmlFor="all">
                                        All
                                        <div className="sizeDegree"></div>
                                    </label>
                                    <input type="radio" id='all' name="size" value={"all"} />
                                    <label htmlFor="s">
                                        S
                                        <div className="sizeDegree"></div>
                                    </label>
                                    <input type="radio" id='s' name="size" value={"s"} />

                                    <label htmlFor="m">
                                        M
                                        <div className="sizeDegree"></div>
                                    </label>
                                    <input type="radio" id='m' name="size" value={"m"} />

                                    <label htmlFor="l">
                                        L
                                        <div className="sizeDegree"></div>
                                    </label>
                                    <input type="radio" id='l' name="size" value={"l"} />

                                    <label htmlFor="xl">
                                        XL
                                        <div className="sizeDegree"></div>
                                    </label>
                                    <input type="radio" id='xl' name="size" value={"xl"} />

                                    <label htmlFor="xxl">
                                        XXL
                                        <div className="sizeDegree"></div>
                                    </label>
                                    <input type="radio" id='xxl' name="size" value={"xxl"} />

                                </form>
                            </div>
                        </div>

                    </div>
                    <hr />
                </div>
                <div className="cards">
                    {

                        forFinish.map((data, index) => (
                            <StoreCard image={data.image} rating={data.rating} name={data.name} price={data.price} quality={data.quality} view={"4k"} key={index} />
                        ))

                    }
                </div>
            </div>
            <div className='recommended'>

                <p className='title'>Recommend Product</p>
                <AliceCarousel responsive={responsive} disableDotsControls={true} items={

                    forStore.map((data, index) => (
                        <StoreCard image={data.image} rating={data.rating} name={data.name} price={data.price} quality={data.quality} view={"4k"} key={index} />
                    ))

                } />

            </div>

            <Footer/>


        </div>
    )
}

export default Shop