import React from 'react';

const Blog = () => {
  return (
    <div>
      <div className="site-loader"></div>
      <div className="site-wrap">
        <div className="site-mobile-menu">
          {/* Здесь размещаем содержимое site-mobile-menu */}
        </div> 
        <div className="site-navbar mt-4">
          {/* Здесь размещаем содержимое site-navbar */}
        </div>
      </div>

      <div className="site-blocks-cover inner-page-cover overlay" style={{backgroundImage: "url(images/hero_bg_2.jpg)"}} data-aos="fade" data-stellar-background-ratio="0.5">
        <div className="container">
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-md-10">
              <h1 className="mb-2">Our Blog</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-4"  data-aos="fade-up" data-aos-delay="100">
              <a href="#"><img src="images/img_4.jpg" alt="Image" className="img-fluid" /></a>
              <div className="p-4 bg-white">
                <span className="d-block text-secondary small text-uppercase">Jan 20th, 2019</span>
                <h2 className="h5 text-black mb-3"><a href="#">Art Gossip by Mike Charles</a></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias enim, ipsa exercitationem veniam quae sunt.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="200">
              <a href="#"><img src="images/img_2.jpg" alt="Image" className="img-fluid"/></a>
              <div className="p-4 bg-white">
                <span className="d-block text-secondary small text-uppercase">Jan 20th, 2019</span>
                <h2 className="h5 text-black mb-3"><a href="#">Art Gossip by Mike Charles</a></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias enim, ipsa exercitationem veniam quae sunt.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="300">
              <a href="#"><img src="images/img_3.jpg" alt="Image" className="img-fluid"/></a>
              <div className="p-4 bg-white">
                <span className="d-block text-secondary small text-uppercase">Jan 20th, 2019</span>
                <h2 className="h5 text-black mb-3"><a href="#">Art Gossip by Mike Charles</a></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias enim, ipsa exercitationem veniam quae sunt.</p>
              </div>
            </div>

            {/* Добавьте здесь еще карточки блога, используя тот же шаблон */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
