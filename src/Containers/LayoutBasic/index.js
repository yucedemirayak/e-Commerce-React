import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import SearchAnimation from "../../Components/SearchAnimation/SearchAnimation";

const LayoutBasic = ({ children }) => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default LayoutBasic;
