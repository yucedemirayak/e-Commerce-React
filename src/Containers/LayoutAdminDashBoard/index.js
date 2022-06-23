import React from "react";
import { Outlet } from "react-router";
import DHeader from "../../Components/DHeader/";
import DSideBar from "../../Components/DSideBar";

const LayoutAdmin = () => {
  return (
    <>
      <DHeader />
      <DSideBar/>
      <Outlet />
    </>
  );
};

export default LayoutAdmin;
