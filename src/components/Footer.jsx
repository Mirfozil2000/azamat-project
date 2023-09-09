import React from 'react';
import { footerInfo } from '../db';

const Footer = () => {
  const { aboutText, navigationLinks, socialLinks, copyrightText } = footerInfo;

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="mb-5">
              <h3 className="footer-heading mb-4">About Homeland</h3>
              <p>{aboutText}</p>
            </div>
          </div>
          <div className="col-lg-4 mb-5 mb-lg-0">
            <div className="row mb-5">
              <div className="col-md-12">
                <h3 className="footer-heading mb-4">Navigations</h3>
              </div>
              <div className="col-md-6 col-lg-6">
                <ul className="list-unstyled">
                  {navigationLinks.column1.map(item => (
                    <li key={item.id}><a href={item.link}>{item.title}</a></li>
                  ))}
                </ul>
              </div>
              <div className="col-md-6 col-lg-6">
                <ul className="list-unstyled">
                  {navigationLinks.column2.map(item => (
                    <li key={item.id}><a href={item.link}>{item.title}</a></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h3 className="footer-heading mb-4">Follow Us</h3>
            <div>
              {socialLinks.map(item => (
                <a key={item.id} href={item.link} className="pl-3 pr-3">
                  <span className={item.icon}></span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="row pt-5 mt-5 text-center">
          <div className="col-md-12">
            <p>{copyrightText}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
