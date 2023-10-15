import React from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import About from "../About/About";
import useTitle from "../../hooks/useTitle";
import Faq from "../Faq/Faq";
import Category from "../Category/Category";
import Creative from "../Crerative/Creative";
import Partners from "../Partners/Partners";
import Testimonial from "../Testimonial/Testimonial";
import Video from "../Video/Video";
import Newsletter from "../Newsletter/Newsletter";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Creative></Creative>
      <Partners></Partners>
      <Gallery></Gallery>
      <Testimonial></Testimonial>
      <Video></Video>
      <Category></Category>
      <Faq></Faq>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
