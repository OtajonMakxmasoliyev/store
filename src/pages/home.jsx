import React, { useState } from 'react'
import CategoriesStyle from '../components/categoriesStyle'
import FastOrder from '../components/fastOrder'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Showcase from '../components/showcase'
import Logos from '../components/showcaseLogo'
import StoreCard from '../components/storeCard'
import Testiominals from '../components/testiominals'

const Home = () => {
  const [stock, setStock] = useState("all")
  const [id, setId] = useState(0)

  const storeInfo = [
    {
      name: "Smart T-Shirt",
      price: "40",
      quality: "Best quality",
      rating: "5",
      image: "https://picsum.photos/267/248",
      type: ["t-shirt", "all"]
    },
    {
      name: "Smart T-Shirt",
      price: "40",
      quality: "Best quality",
      rating: "5",
      image: "https://picsum.photos/267/248",
      type: ["t-shirt", "all"]
    },
    {
      name: "Smart T-Shirt",
      price: "40",
      quality: "Best quality",
      rating: "5",
      image: "https://picsum.photos/267/248",
      type: ["t-shirt", "all"]
    },
    {
      name: "Smart T-Shirt",
      price: "40",
      quality: "Best quality",
      rating: "5",
      image: "https://picsum.photos/267/248",
      type: ["t-shirt", "all"]
    },
    {
      name: "Smart T-Shirt",
      price: "40",
      quality: "Best quality",
      rating: "5",
      image: "https://picsum.photos/267/248",
      type: ["t-shirt", "all"]
    },
    {
      name: "Smart T-Shirt",
      price: "40",
      quality: "Best quality",
      rating: "5",
      image: "https://picsum.photos/267/248",
      type: ["t-shirt", "all"]
    },
    {
      name: "Smart T-Shirt",
      price: "40",
      quality: "Best quality",
      rating: "5",
      image: "https://picsum.photos/267/248",
      type: ["t-shirt", "all"]
    },
    {
      name: "Smart T-Shirt",
      price: "40",
      quality: "Best quality",
      rating: "5",
      image: "https://picsum.photos/267/248",
      type: ["t-shirt", "all"]
    },
    {
      name: "Smart T-Shirt",
      price: "40",
      quality: "Best quality",
      rating: "5",
      image: "https://picsum.photos/267/248",
      type: ["t-shirt", "all"]
    },
    {
      name: "Smart T-Shirt",
      price: "40",
      quality: "Best quality",
      rating: "5",
      image: "https://picsum.photos/267/248",
      type: ["t-shirt", "all"]
    }


  ]



  const ordersInfo = []

  for (let index = 1; index < 4; index++) {
    const orderInfo = {
      id: "res" + index,
      name: "The Oblongers T-Shirt" + index,
      image: index,
      price: "40",
      rating: "3",
      colors: ["#FFFFFF", "#5463FF", "#7DAC5F"],
      view: "20k",
      sizes: ["s", "m", "l", "xl"],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis, justo nec porttitor auctor, erat sapien faucibus lectus, vel tempor dolor augue et lectus. Proin et lacus blandit quam semper placerat. "
    }
    ordersInfo.push(orderInfo)

  }
  console.log(ordersInfo);

  const testiominalsInfo = [
    {
      name: "Friskidia",
      role: "Client",
      rating: 5,
      image: "opa",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum dapibus luctus."
    },
    {
      name: "Friskidia",
      role: "Client",
      rating: 5,
      image: "opa2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum dapibus luctus."
    }
  ]

  return (
    <div className='home'>
      <Navbar />
      <Showcase />
      <Logos />
      <CategoriesStyle />

      <div className="product">
        <span>CHOOSE FROM THE BEST PRODUCTS</span>
        <h2>Our Best Seller Product</h2>
        <div className="product_filterButtons">
          <button onClick={(e) => setStock(e.target.textContent)} style={stock === "t-shirt" ? { borderBottom: "2px solid #5463FF ", color: "#5463FF" } : null}>t-shirt</button>
          <button onClick={(e) => setStock(e.target.textContent)} style={stock === "jacket" ? { borderBottom: "2px solid #5463FF ", color: "#5463FF" } : null}>jacket</button>
          <button onClick={(e) => setStock(e.target.textContent)} style={stock === "shirt" ? { borderBottom: "2px solid #5463FF ", color: "#5463FF" } : null}>shirt</button>
          <button onClick={(e) => setStock(e.target.textContent)} style={stock === "jens" ? { borderBottom: "2px solid #5463FF ", color: "#5463FF" } : null}>jens</button>
        </div>
        <div className="product_cards">
          {
            storeInfo.map((data, index) => (
              data.type.includes(stock) ? <StoreCard image={data.image} rating={data.rating} name={data.name} price={data.price} quality={data.quality} view={"4k"} key={index} /> : null
            ))
          }
        </div>
      </div>
      <FastOrder array={ordersInfo} />
      <div className="testimionals">
        <p className='testimionals_title'>Testimonials</p>
        {
          testiominalsInfo.map((data, index) => (
            <div key={index}>
              <Testiominals image={data.image} name={data.name} role={data.role} rating={data.rating} description={data.description} />
            </div>
          ))
        }
      </div>
      <div className="look">
        <div className="look_information">
          <p className="title">
            Look For Models Now
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.</p>
          <button>Login Now</button>
        </div>

        <img src={require("../images/kiyim.png")} alt="" />
      </div>
      <Footer/>
    </div>
  )
}

export default Home