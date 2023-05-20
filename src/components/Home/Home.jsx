import React from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import About from "../About/About";
import useTitle from "../../hooks/useTitle";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <About></About>
    </div>
  );
};

export default Home;
