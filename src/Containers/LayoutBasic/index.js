import React from "react";
import { Outlet } from "react-router-dom";
import Test from "../../Components/Footer/test";
import Header from "../../Components/Header";
import SideBar from "../../Components/SideBar/";

const LayoutBasic = ({ children }) => {
  return (
    <>
      <Header />
      <SideBar />
      <Outlet />
      <Test />
    </>
  );
};

export default LayoutBasic;
