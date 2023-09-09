import React from 'react';
import { menuItems } from '../db';

const Navbar = () => {
  return (
    <div>
      <div className="site-wrap">
        <div className="site-navbar mt-4">
          <div className="container py-1">
            <div className="row align-items-center">
              <div className="col-8 col-md-8 col-lg-4">
                <h1 className="mb-0">
                  <a href="/" className="text-white h2 mb-0">
                    <strong>Homeland<span className="text-danger">.</span></strong>
                  </a>
                </h1>
              </div>
              <div className="col-4 col-md-4 col-lg-8">
                <nav className="site-navigation text-right text-md-right" role="navigation">
                  <ul className="site-menu js-clone-nav d-none d-lg-block">
                    {menuItems.map(item => (
                      <li key={item.id}>
                        <a href={item.link}>{item.title}</a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;