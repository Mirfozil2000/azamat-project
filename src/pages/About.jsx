import React from 'react';

const About = () => {
  return (
    <div>
      <div className="site-loader"></div>
      <div className="site-wrap">
        <div className="site-mobile-menu">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
              <span className="icon-close2 js-menu-toggle"></span>
            </div>
          </div>
          <div className="site-mobile-menu-body"></div>
        </div> 
        <div className="site-navbar mt-4">
          <div className="container py-1">
            <div className="row align-items-center">
              <div className="col-8 col-md-8 col-lg-4">
                <h1 className="mb-0"><a href="index.html" className="text-white h2 mb-0"><strong>Homeland<span className="text-danger">.</span></strong></a></h1>
              </div>
              <div className="col-4 col-md-4 col-lg-8">
                <nav className="site-navigation text-right text-md-right" role="navigation">
                  <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3"><a href="#" className="site-menu-toggle js-menu-toggle text-white"><span className="icon-menu h3"></span></a></div>
                  <ul className="site-menu js-clone-nav d-none d-lg-block">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li><a href="buy.html">Buy</a></li>
                    <li><a href="rent.html">Rent</a></li>
                    <li className="has-children">
                      <a href="properties.html">Properties</a>
                      <ul className="dropdown arrow-top">
                        <li><a href="#">Condo</a></li>
                        <li><a href="#">Property Land</a></li>
                        <li><a href="#">Commercial Building</a></li>
                        <li className="has-children">
                          <a href="#">Sub Menu</a>
                          <ul className="dropdown">
                            <li><a href="#">Menu One</a></li>
                            <li><a href="#">Menu Two</a></li>
                            <li><a href="#">Menu Three</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li><a href="blog.html">Blog</a></li>
                    <li className="active"><a href="about.html">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-blocks-cover inner-page-cover overlay" style={{backgroundImage: "url(images/hero_bg_2.jpg)"}} data-aos="fade" data-stellar-background-ratio="0.5">
        <div className="container">
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-md-10">
              <h1 className="mb-2">About Homeland</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
              <img src="images/about.jpg" alt="Image" className="img-fluid"/>
            </div>
            <div className="col-md-5 ml-auto"  data-aos="fade-up" data-aos-delay="200">
              <div className="site-section-title">
                <h2>Our Company</h2>
              </div>
              <p className="lead">Lorem ipsum dolor sit ame</p>
              <p>Illum repudiandae ratione facere explicabo. Consequatur dolor optio iusto, quos autem voluptate ea? Sunt laudantium fugiat, mollitia voluptate? Modi blanditiis veniam nesciunt architecto odit voluptatum tempore impedit magnam itaque natus!</p>
              <p><a href="#" className="btn btn-outline-primary rounded-0 py-2 px-5">Read More</a></p>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="row mb-5 justify-content-center"  data-aos="fade-up" >
            <div className="col-md-7">
              <div className="site-section-title text-center">
                <h2>Leadership</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero magnam officiis ipsa eum pariatur labore fugit amet eaque iure vitae, repellendus laborum in modi reiciendis quis! Optio minima quibusdam, laboriosam.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-5 mb-lg-5"  data-aos="fade-up" data-aos-delay="200">
              <div className="team-member">
                <img src="images/person_1.jpg" alt="Image" className="img-fluid rounded mb-4"/>
                <div className="text">
                  <h2 className="mb-2 font-weight-light text-black h4">Megan Smith</h2>
                  <span className="d-block mb-3 text-white-opacity-05">Real Estate Agent</span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi dolorem totam non quis facere blanditiis praesentium est. Totam atque corporis nisi, veniam non. Tempore cupiditate, vitae minus obcaecati provident beatae!</p>
                  <p>
                    <a href="#" className="text-black p-2"><span className="icon-facebook"></span></a>
                    <a href="#" className="text-black p-2"><span className="icon-twitter"></span></a>
                    <a href="#" className="text-black p-2"><span className="icon-linkedin"></span></a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-5 mb-lg-5"  data-aos="fade-up" data-aos-delay="300">
              <div className="team-member">
                <img src="images/person_2.jpg" alt="Image" className="img-fluid rounded mb-4"/>
                <div className="text">
                  <h2 className="mb-2 font-weight-light text-black h4">Brooke Cagle</h2>
                  <span className="d-block mb-3 text-white-opacity-05">Real Estate Agent</span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, cumque vitae voluptates culpa earum similique corrupti itaque veniam doloribus amet perspiciatis recusandae sequi nihil tenetur ad, modi quos id magni!</p>
                  <p>
                    <a href="#" className="text-black p-2"><span className="icon-facebook"></span></a>
                    <a href="#" className="text-black p-2"><span className="icon-twitter"></span></a>
                    <a href="#" className="text-black p-2"><span className="icon-linkedin"></span></a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-5 mb-lg-5"  data-aos="fade-up" data-aos-delay="400">
              <div className="team-member">
                <img src="images/person_3.jpg" alt="Image" className="img-fluid rounded mb-4"/>
                <div className="text">
                  <h2 className="mb-2 font-weight-light text-black h4">Philip Martin</h2>
                  <span className="d-block mb-3 text-white-opacity-05">Real Estate Agent</span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores illo iusto, inventore, iure dolorum officiis modi repellat nobis, praesentium perspiciatis, explicabo. Atque cupiditate, voluptates pariatur odit officia libero veniam quo.</p>
                  <p>
                    <a href="#" className="text-black p-2"><span className="icon-facebook"></span></a>
                    <a href="#" className="text-black p-2"><span className="icon-twitter"></span></a>
                    <a href="#" className="text-black p-2"><span className="icon-linkedin"></span></a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section bg-light">
        <div className="container" data-aos="fade">
          <div className="row mb-5 justify-content-center">
            <div className="col-md-7">
              <div className="site-section-title text-center">
                <h2>Our Agents</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero magnam officiis ipsa eum pariatur labore fugit amet eaque iure vitae, repellendus laborum in modi reiciendis quis! Optio minima quibusdam, laboriosam.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
              <div className="team-member">
                <img src="images/person_4.jpg" alt="Image" className="img-fluid rounded mb-4"/>
                <div className="text">
                  <h2 className="mb-2 font-weight-light text-black h4">Steven Ericson</h2>
                  <span className="d-block mb-3 text-white-opacity-05">Real Estate Agent</span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates sed qui at harum ipsum earum voluptas a unde error sapiente, sint perspiciatis, fugiat neque iure rerum repellendus tempora odio doloribus.</p>
                  <p>
                    <a href="#" className="text-black p-2"><span className="icon-facebook"></span></a>
                    <a href="#" className="text-black p-2"><span className="icon-twitter"></span></a>
                    <a href="#" className="text-black p-2"><span className="icon-linkedin"></span></a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
              <div className="team-member">
                <img src="images/person_5.jpg" alt="Image" className="img-fluid rounded mb-4"/>
                <div className="text">
                  <h2 className="mb-2 font-weight-light text-black h4">Nathan Dumlao</h2>
                  <span className="d-block mb-3 text-white-opacity-05">Real Estate Agent</span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo nobis commodi rerum dicta, nulla. Delectus neque hic deserunt consequuntur esse facere, necessitatibus corrupti! Blanditiis ratione consequuntur beatae adipisci, voluptatum consequatur.</p>
                  <p>
                    <a href="#" className="text-black p-2"><span className="icon-facebook"></span></a>
                    <a href="#" className="text-black p-2"><span className="icon-twitter"></span></a>
                    <a href="#" className="text-black p-2"><span className="icon-linkedin"></span></a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
              <div className="team-member">
                <img src="images/person_2.jpg" alt="Image" className="img-fluid rounded mb-4"/>
                <div className="text">
                  <h2 className="mb-2 font-weight-light text-black h4">Brooke Cagle</h2>
                  <span className="d-block mb-3 text-white-opacity-05">Real Estate Agent</span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nam tenetur molestiae maiores officiis consectetur, distinctio aperiam in illum praesentium corrupti, harum porro reiciendis magnam non enim dolorem aut explicabo.</p>
                  <p>
                    <a href="#" className="text-black p-2"><span className="icon-facebook"></span></a>
                    <a href="#" className="text-black p-2"><span className="icon-twitter"></span></a>
                    <a href="#" className="text-black p-2"><span className="icon-linkedin"></span></a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-7 text-center">
              <div className="site-section-title">
                <h2>Frequently Asked Questions</h2>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis maiores quisquam saepe architecto error corporis aliquam. Cum ipsam a consectetur aut sunt sint animi, pariatur corporis, eaque, deleniti cupiditate officia.</p>
            </div>
          </div>
          <div className="row justify-content-center" data-aos="fade" data-aos-delay="100">
            <div className="col-md-8">
              <div className="accordion unit-8" id="accordion">
                <div className="accordion-item">
                  <h3 className="mb-0 heading">
                    <a className="btn-block" data-toggle="collapse" href="#collapseOne" role="button" aria-expanded="true" aria-controls="collapseOne">What is the name of your company<span className="icon"></span></a>
                  </h3>
                  <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="body-text">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quae cumque perspiciatis aperiam accusantium facilis provident aspernatur nisi optio debitis dolorum, est eum eligendi vero aut ad necessitatibus nulla sit labore doloremque magnam! Ex molestiae, dolor tempora, ad fuga minima enim mollitia consequuntur, necessitatibus praesentium eligendi officia recusandae culpa tempore eaque quasi ullam magnam modi quidem in amet. Quod debitis error placeat, tempore quasi aliquid eaque vel facilis culpa voluptate.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="mb-0 heading">
                    <a className="btn-block" data-toggle="collapse" href="#collapseTwo" role="button" aria-expanded="false" aria-controls="collapseTwo">How much do I pay for 3 months?<span className="icon"></span></a>
                  </h3>
                  <div id="collapseTwo" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="body-text">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel ad laborum expedita. Nostrum iure atque enim quisquam minima distinctio omnis, consequatur aliquam suscipit, quidem, esse aspernatur! Libero, excepturi animi repellendus porro impedit nihil in doloremque a quaerat enim voluptatum, perspiciatis, quas dignissimos maxime ut cum reiciendis eius dolorum voluptatem aliquam!</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="mb-0 heading">
                    <a className="btn-block" data-toggle="collapse" href="#collapseThree" role="button" aria-expanded="false" aria-controls="collapseThree">Do I need to register?  <span className="icon"></span></a>
                  </h3>
                  <div id="collapseThree" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="body-text">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel ad laborum expedita. Nostrum iure atque enim quisquam minima distinctio omnis, consequatur aliquam suscipit, quidem, esse aspernatur! Libero, excepturi animi repellendus porro impedit nihil in doloremque a quaerat enim voluptatum, perspiciatis, quas dignissimos maxime ut cum reiciendis eius dolorum voluptatem aliquam!</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="mb-0 heading">
                    <a className="btn-block" data-toggle="collapse" href="#collapseFour" role="button" aria-expanded="false" aria-controls="collapseFour">Who should I contact in case of support?<span className="icon"></span></a>
                  </h3>
                  <div id="collapseFour" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="body-text">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel ad laborum expedita. Nostrum iure atque enim quisquam minima distinctio omnis, consequatur aliquam suscipit, quidem, esse aspernatur! Libero, excepturi animi repellendus porro impedit nihil in doloremque a quaerat enim voluptatum, perspiciatis, quas dignissimos maxime ut cum reiciendis eius dolorum voluptatem aliquam!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="mb-5">
                <h3 className="footer-heading mb-4">About Homeland</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe pariatur reprehenderit vero atque, consequatur id ratione, et non dignissimos culpa? Ut veritatis, quos illum totam quis blanditiis, minima minus odio!</p>
              </div>
              <div className="mb-5">
                <h3 className="footer-heading mb-4">Subscribe</h3>
                <form action="#" method="post">
                  <div className="input-group mb-3">
                    <input type="text" className="form-control border-secondary text-white bg-transparent" placeholder="Enter Email" aria-label="Enter Email" aria-describedby="button-addon2"/>
                    <div className="input-group-append">
                      <button className="btn btn-primary text-white" type="button" id="button-addon2">Send</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="row mb-5">
                <div className="col-md-12">
                  <h3 className="footer-heading mb-4">Navigations</h3>
                </div>
                <div className="col-md-6 col-lg-6">
                  <ul className="list-unstyled">
                    <li><a href="#">Sell Home</a></li>
                    <li><a href="#">Rent Home</a></li>
                    <li><a href="#">Buy Home</a></li>
                    <li><a href="#">Estates</a></li>
                    <li><a href="#">Investment</a></li>
                  </ul>
                </div>
                <div className="col-md-6 col-lg-6">
                  <ul className="list-unstyled">
                    <li><a href="#">News</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">About Us</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="mb-5">
                <h3 className="footer-heading mb-4">Follow Us</h3>
                <a href="#" className="pl-0 pr-3"><span className="icon-facebook"></span></a>
                <a href="#" className="pl-3 pr-3"><span className="icon-twitter"></span></a>
                <a href="#" className="pl-3 pr-3"><span className="icon-instagram"></span></a>
                <a href="#" className="pl-3 pr-3"><span className="icon-linkedin"></span></a>
              </div>

              <div>
                <h3 className="footer-heading mb-4">We Accept Credit Card</h3>
                <img src="images/visa.png" alt="Image" className="mr-2"/>
                <img src="images/mastercard.png" alt="Image" className="mr-2"/>
                <img src="images/american-express.png" alt="Image" className="mr-2"/>
                <img src="images/paypal.png" alt="Image"/>
              </div>
            </div>
          </div>
          <div className="row pt-5 mt-5 text-center">
            <div className="col-md-12">
              <div className="border-top pt-5">
                <p>
                  &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default About;
