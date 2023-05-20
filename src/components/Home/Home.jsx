import React from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import About from "../About/About";
import useTitle from "../../hooks/useTitle";
import Faq from "../Faq/Faq";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <About></About>
      <Faq></Faq>
    </div>
  );
};

export default Home;
