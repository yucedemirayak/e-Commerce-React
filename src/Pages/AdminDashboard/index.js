import React from "react";
import { useSelector } from "react-redux";
import AdminList from "../../Components/AdminList";
import CreateAdminModal from "../../Components/CreateAdminModal";

const AdminDashboard = () => {
  const dCompName = useSelector((state) => state.dComponents.name);

  const setComponent = (componentName) => {
    if (!dCompName) {
      return null;
    }
    switch (componentName) {
      case "CreateAdminModal":
        return <CreateAdminModal />
        case "AdminList":
          return <AdminList/>
      default:
        break;
    }
    if (componentName === "CreateAdminModal") {
      return <CreateAdminModal />;
    }
  };

  return (
    <section className="ant-layout bg-white">
      <main className="ant-layout-content p-4">{setComponent(dCompName)}</main>
    </section>
  );
};

export default AdminDashboard;
