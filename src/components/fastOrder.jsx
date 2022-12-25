import { ArrowRight, ArrowRightAlt, ArrowRightOutlined, ArrowRightRounded, JoinRight, KeyboardArrowLeft, KeyboardArrowRight, RampRight, Star, StarBorder } from '@mui/icons-material'
import React, { useState } from 'react'

const FastOrder = (props) => {
    const orderArray = props.array
    const [id, setId] = useState(1)




    const stars = new Array;
    for (let index = 0; index < 5; index++) {
        if (index < orderArray[id].rating) {
            stars.push(<Star />)
        } else {
            stars.push(<StarBorder />)
        }

    }


    const idSetIncrease=()=>{
        if(orderArray.length-1==id){
            setId(0)
        }else if (orderArray.length-1>id){
            setId(id+1)
        }
        console.log(id);
    }

    const idSetDecrease=()=>{
        if(id==0){
            setId(orderArray.length-1)
        }else if (orderArray.length>id){
            setId(id-1)
        }
        console.log("id"+id);
    }
console.log(orderArray.length);

    return (
        <div className='order'>
            <div className="order_Images">
                <button onClick={idSetDecrease}><KeyboardArrowLeft /></button>
                <div className="image">
                    <img src={require("../images/order/"+orderArray[id].image+".png")} />
                    <i></i>

                </div>
                <button onClick={idSetIncrease}><KeyboardArrowRight /></button>
            </div>
            <div className="order_information">
                <p className='title'>{orderArray[id].name}</p>
                <div className="order_information_rateColor">
                    <div className="order_information_rateColor_color">
                        <span className='titleSpan'>Color</span>
                        {
                            orderArray[id].colors.map((color, index)=>(
                                <button style={{ background: color }} key={index}></button>
                            ))
                        }
                        
                    </div>
                    <div className="order_information_rateColor_rate">
                        {stars.map((star, index)=>(
                            <i key={index}>{star}</i>
                        ))}
                        <span>({orderArray[id].view})</span>
                    </div>
                </div>
                <div className="order_information_sizesPrice">
                    <div className="size">
                        <span className='titleSpan'>Size</span>

                        {
                             orderArray[id].sizes.map((size, index)=>(
                                <button  key={index}>{size}</button>
                            ))
                        }
                       
                    </div>
                    <p className='title'>{orderArray[id].price}$</p>
                </div>
                <div className="order_information_description">
                    <p>{orderArray[id].description} </p>
                </div>
                <button className='orderButton'><span>Order Now</span></button>
            </div>
        </div>
    )
}

export default FastOrder