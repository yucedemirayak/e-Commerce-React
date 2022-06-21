import React from "react";
import { Outlet } from "react-router";
import DHeader from "../../Components/DHeader/";

const LayoutAdmin = () => {
  return (
    <>
      <DHeader />
      <Outlet />
    </>
  );
};

export default LayoutAdmin;
