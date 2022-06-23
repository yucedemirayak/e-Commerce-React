import React from "react";
import Styles from "./DHeader.module.scss";
import { RiLogoutBoxRLine, RiMenuFill } from "react-icons/ri";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

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
    <nav className="navbar bg-gradient bg-secondary">
      <div className="container-fluid">
        <button type="button" className={Styles.menu_btn}>
          <MenuLogo id="menu-icon" />
          <img
            className={Styles.blackhole}
            alt="blackhole"
            src="./Image/blackhole.svg"
          ></img>
        </button>
        <Link className="navbar-brand me-auto ms-2" to="./Dashboard">
          <span className="text-uppercase font-monospace">admin dashboard</span>
        </Link>
        <Link className={`${Styles.home} nav-link`} to="./">
          <RiLogoutBoxRLine className={Styles.icon} />
        </Link>
      </div>
    </nav>
  );
};

export default DHeader;