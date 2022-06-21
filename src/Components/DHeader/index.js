import React from "react";
import "./DHeader.scss";
import { RiMenuFill } from "react-icons/ri";

const DHeader = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <button className="btn btn-lg">
          <RiMenuFill />
        </button>
        <a className="navbar-brand me-auto" href="./Dashboard">
          <span className="text-uppercase font-monospace">admin dashboard</span>
        </a>
        <button className="btn">
          LogOut
        </button>
      </div>
    </nav>
  );
};

export default DHeader;
