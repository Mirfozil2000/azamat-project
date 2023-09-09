import React from 'react';
import { slides } from '../db';

const Slider = () => {
  return (
    <div className="slide-one-item home-slider owl-carousel">
      {slides.map((slide) => (
        <div
          className={`site-blocks-cover site-blocks-cover-${slide.id} overlay`}
          data-aos="fade"
          data-stellar-background-ratio="0.5"
          key={slide.id}
          style={{ backgroundImage: `url(${slide.imageUrl})` }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center text-center">
              <div className="col-md-10">
                <span className={`d-inline-block bg-${slide.type === 'For Rent' ? 'success' : 'danger'} text-white px-3 mb-3 property-offer-type rounded`}>
                  {slide.type}
                </span>
                <h1 className="mb-2">{slide.title}</h1>
                <p className="mb-5">
                  <strong className="h2 text-success font-weight-bold">{slide.price}</strong>
                </p>
                <p>
                  <a href="#" className="btn btn-white btn-outline-white py-3 px-5 rounded-0 btn-2">
                    {slide.buttonText}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;