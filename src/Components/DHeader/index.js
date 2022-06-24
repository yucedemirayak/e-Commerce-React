import React from "react";
import Styles from "./DHeader.module.scss";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const DHeader = () => {
  return (
    <nav className="navbar bg-gradient bg-secondary">
      <div className="container-fluid">
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
