import React, { useState, useEffect, useRef } from 'react';
import { Galleria } from 'primereact/galleria';
// import { PhotoService } from './service/PhotoService';
import { images as PhotoService  } from './images';
import "./slider.css";
function Slider(props) {
  const [images, setImages] = useState(null);
  const responsiveOptions = [
    {
      breakpoint: "991px",
      numVisible: 4,
    },
    {
      breakpoint: "767px",
      numVisible: 3,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
    },
  ];

//   useEffect(() => {
//     PhotoService.getImages().then((data) => setImages(data));
//   }, []);

  const itemTemplate = (item) => {
    return (
      <img
        src={item.itemImageSrc}
        alt={item.alt}
        style={{ width: "100%", display: "block" }}
      />
    );
  };

  const thumbnailTemplate = (item) => {
    return (
      <img
        src={item.thumbnailImageSrc}
        alt={item.alt}
        style={{ display: "block" , width:"50px" , height:"50px" }}
      />
    );
  };

  return (
    <div className="card slider-page ">
      <Galleria
      className='slider-auto'
        value={PhotoService}
        responsiveOptions={responsiveOptions}
        numVisible={5}
      
        item={itemTemplate}
        thumbnail={thumbnailTemplate}
        circular
        autoPlay
        transitionInterval={2000}
      />
    </div>
  );
}

export default Slider;
