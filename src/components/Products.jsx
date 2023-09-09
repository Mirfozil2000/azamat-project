import React from 'react';
import { productsData } from '../db';

const Products = () => {
  return (
    <div className="site-section site-section-sm bg-light">
      <div className="container">
        <div className="row mb-5">
          {productsData.map(product => (
            <div key={product.id} className="col-md-6 col-lg-4 mb-4">
              <div className="property-entry h-100">
                <a href="property-details.html" className="property-thumbnail">
                  <div className="offer-type-wrap">
                    {product.offerTypes.map((offerType, index) => (
                      <span key={index} className={`offer-type bg-${offerType.toLowerCase()}`}>{offerType}</span>
                    ))}
                  </div>
                  <img src={product.image} alt="Image" className="img-fluid" />
                </a>
                <div className="p-4 property-body">
                  <a href="#" className="property-favorite"><span className="icon-heart-o"></span></a>
                  <h2 className="property-title"><a href="property-details.html">{product.title}</a></h2>
                  <span className="property-location d-block mb-3"><span className="property-icon icon-room"></span> {product.location}</span>
                  <strong className="property-price text-primary mb-3 d-block text-success">{product.price}</strong>
                  <ul className="property-specs-wrap mb-3 mb-lg-0">
                    {product.specs.map((spec, index) => (
                      <li key={index}>
                        <span className="property-specs">{spec.label}</span>
                        <span className="property-specs-number">{spec.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products;