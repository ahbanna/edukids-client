import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import HeaderTop from "../components/HeaderTop/HeaderTop";

const Main = () => {
  return (
    <div>
      <HeaderTop></HeaderTop>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
