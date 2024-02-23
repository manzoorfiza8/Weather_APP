import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ImageSlider.css'; // Create this CSS file for styling

// Import your images directly within the component
import cloudy from './assets/cloudy.jpg';
import hotbg from './assets/hotbg.png';
import hills from "./assets/hills.jpeg"
import Header from './Header';
// import Home from "../HomePkgs/"

const images = [cloudy, hotbg, hills];

const ImageSlider = () => {
  return (
    <> 
    <Header />
    <div className="slider-container">
      <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Carousel>
      {/* <Home /> */}
    </div>
    </>
  );
};

export default ImageSlider;
