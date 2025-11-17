import React from 'react';

import './slider.css'
export default function Slider(params) {
 return(
  <>
  <slide/>
  <title>Ice Cream Delight - Slider</title>
   <div id="carouselExampleIndicators" class="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE5UQtNqxQtVItvt7xstG1pscs0u-DTvP-ng&s" width="100%" height="400px" alt='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE5UQtNqxQtVItvt7xstG1pscs0u-DTvP-ng&s'/>
    </div>
    <div className="carousel-item">
      <img src="https://www.shutterstock.com/image-photo/ice-cream-disocunt-offer-banner-260nw-2404045423.jpg" width="100%" height="400px" alt='https://www.shutterstock.com/image-photo/ice-cream-disocunt-offer-banner-260nw-2404045423.jpg'/>
    </div>
    <div className="carousel-item">
      <img src="https://fielderschoiceicecream.com/wp-content/uploads/2024/09/The-Slider-600-4.webp" width="100%" height="390px" alt='https://fielderschoiceicecream.com/wp-content/uploads/2024/09/The-Slider-600-4.webp'/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
 </>)
}