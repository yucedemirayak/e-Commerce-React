import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import SideBar from "../../Components/SideBar/";

const LayoutBasic = ({ children }) => {
  return (
    <>
      <Header />
      <SideBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default LayoutBasic;
