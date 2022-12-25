import { BookmarkBorderOutlined, BookmarkRounded, FavoriteBorder, FavoriteBorderOutlined, FavoriteOutlined, Save, Star, StarBorder } from '@mui/icons-material'
import React from 'react'

const StoreCard = (props) => {
  const star = new Array;
  for (let index = 0; index < 5; index++) {
    if (index < props.rating) {
      star.push(<Star />)
    } else {
      star.push(<StarBorder />)
    }

  }
  return (
    <div className='storeCard'>
      <div className="storeCard_image">
        <img src={props.image} />
        <div className="storeCard_image_buttons">
          <button><BookmarkBorderOutlined /></button>
          <button><FavoriteBorderOutlined /></button>
        </div>
      </div>
      <div className="storeCard_namePrice">
        <p>{props.name}</p>
        <p className='price'>{props.price}$</p>
      </div>
      <p className='storeCard_quality'>{props.quality}</p>
      <div className="storeCard_view">
        <div className="star">
          {star.map((data, index)=>(
            <i key={index}>{data}</i>
          ))}
        </div>
        <span>({props.view})</span>
      </div>
    </div>
  )
}

export default StoreCard