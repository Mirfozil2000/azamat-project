import React from "react";
import Products from "../components/Products";
import Search from "../components/Search";
import Blog from "../components/Sections/Blog";
import Slider from "../components/Slider";
const Home = () => {
  return (
    <div>
      <Slider />
      <Search />
      <Products />
      <Blog />
    </div>
  );
};

export default Home;
