import React from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import About from "../About/About";
import useTitle from "../../hooks/useTitle";
import Faq from "../Faq/Faq";
import Category from "../Category/Category";
import Creative from "../Crerative/Creative";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Creative></Creative>
      <Gallery></Gallery>
      <Category></Category>
      <Faq></Faq>
    </div>
  );
};

export default Home;
