import React from 'react';
import ImageGallery from 'react-image-gallery';


const images = [
  {
    original: 'https://picsum.photos/id/1018/400/522/',
    thumbnail: 'https://picsum.photos/id/1018/400/522/',
  },
  {
    original: 'https://picsum.photos/id/1015/400/523/',
    thumbnail: 'https://picsum.photos/id/1015/400/523/',
  },
  {
    original: 'https://picsum.photos/id/1019/400/524/',
    thumbnail: 'https://picsum.photos/id/1019/400/524/',
  },
];

class MyGallery extends React.Component {
  render() {
    return <ImageGallery items={images} showFullscreenButton={false} showPlayButton={false}/>;
  }
}


export default MyGallery