import React from 'react';
import { listingTypes, offerTypes, cities, sortOptions } from '../db';

const Search = () => {
  return (
    <div className="site-section site-section-sm pb-0">
      <div className="container">
        <div className="row">
          <form className="form-search col-md-12" style={{ marginTop: '-100px' }}>
            <div className="row  align-items-end">
              <div className="col-md-3">
                <label htmlFor="list-types">Listing Types</label>
                <div className="select-wrap">
                  <span className="icon icon-arrow_drop_down"></span>
                  <select name="list-types" id="list-types" className="form-control d-block rounded-0">
                    {listingTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-md-3">
                <label htmlFor="offer-types">Offer Type</label>
                <div className="select-wrap">
                  <span className="icon icon-arrow_drop_down"></span>
                  <select name="offer-types" id="offer-types" className="form-control d-block rounded-0">
                    {offerTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-md-3">
                <label htmlFor="select-city">Select City</label>
                <div className="select-wrap">
                  <span className="icon icon-arrow_drop_down"></span>
                  <select name="select-city" id="select-city" className="form-control d-block rounded-0">
                    {cities.map((city, index) => (
                      <option key={index} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-md-3">
                <input type="submit" className="btn btn-success text-white btn-block rounded-0" value="Search" />
              </div>
            </div>
          </form>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="view-options bg-white py-3 px-3 d-md-flex align-items-center">
              <div className="mr-auto">
                <a href="index.html" className="icon-view view-module active"><span className="icon-view_module"></span></a>
                <a href="view-list.html" className="icon-view view-list"><span className="icon-view_list"></span></a>
              </div>
              <div className="ml-auto d-flex align-items-center">
                <div>
                  <a href="#" className="view-list px-3 border-right active">All</a>
                  <a href="#" className="view-list px-3 border-right">Rent</a>
                  <a href="#" className="view-list px-3">Sale</a>
                </div>
                <div className="select-wrap">
                  <span className="icon icon-arrow_drop_down"></span>
                  <select className="form-control form-control-sm d-block rounded-0">
                    {sortOptions.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search;