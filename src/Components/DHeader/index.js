import React from "react";
import "./DHeader.scss";
import { RiMenuFill } from "react-icons/ri";
import { IconContext } from "react-icons";
const MenuLogo = () => {
  return (
    <IconContext.Provider className="" value={{ size: "20px" }}>
      <div className="text-white position-absolute d-flex align-items-center justify-content-center">
        <RiMenuFill />
      </div>
    </IconContext.Provider>
  );
};

const DHeader = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
      <button
          type="button"
          className="d-menu-btn"
          data-bs-toggle="collapse"
          data-bs-target="#categories-collapse"
          aria-expanded="true"
          aria-controls="categories-collapse"
        >
          <MenuLogo id="menu-icon" />
          <img
            alt=""
            height="80px"
            src="./Image/blackhole.svg"
          ></img>
        </button>
        <a className="navbar-brand me-auto" href="./Dashboard">
          <span className="text-uppercase font-monospace">admin dashboard</span>
        </a>
      </div>
    </nav>
  );
};

export default DHeader;
