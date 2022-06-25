import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router";
import DHeader from "../../Components/DHeader/";
import DSideBar from "../../Components/DSideBar";
import { userRoles } from "../../Services/Utils/Enums/UserRoles/userRoles";

const LayoutAdmin = () => {
  const { token } = useSelector((state) => state.auth);
  const { role } = useSelector((state) => state.auth);

  return (
    <>
      <DHeader />
      <section className="ant-layout ant-layout-has-sider">
        {token && role === userRoles.ADMIN ? <DSideBar /> : null}
        <Outlet />
      </section>
    </>
  );
};

export default LayoutAdmin;
