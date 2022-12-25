import React from 'react'
import ImageGallery from 'react-image-gallery';

const CategoriesStyle = () => {
    const images = [
        {
            original: 'https://picsum.photos/id/1018/451/230/',
            thumbnail: 'https://picsum.photos/id/1018/451/230/',
          },
          {
            original: 'https://picsum.photos/id/1015/452/232/',
            thumbnail: 'https://picsum.photos/id/1015/452/232/',
          },
          {
            original: 'https://picsum.photos/id/1019/453/233/',
            thumbnail: 'https://picsum.photos/id/1019/453/233/',
          }
    ]
  return (
    <div className='categoriesStyle'>
        <div className="categoriesStyle_info">
            <span>CHOOSE YOUR CATEGORY</span>
            <h2>Categories Style</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.</p>
        </div>
        <div className="categoriesStyle_carousel">
            <ImageGallery items={images} additionalClass="categoriesStyle_carousel_block" showThumbnails={false} showPlayButton={false} showFullscreenButton={false}/>
        </div>
    </div>
  )
}

export default CategoriesStyle