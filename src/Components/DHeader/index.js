import React from "react";
import Styles from "./DHeader.module.scss";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authLogOut } from "../../Services/Store/Auth";

const DHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = async () => {
    await dispatch(authLogOut());
    await navigate("./");
  };

  return (
    <nav className="navbar bg-gradient bg-secondary">
      <div className="container-fluid">
        <Link className={`navbar-brand me-5  ms-2`} to="./Dashboard">
          <span className={`${Styles.brand} text-uppercase font-monospace`}>
            admin dashboard
          </span>
        </Link>
        <div className={`${Styles.links} ms-0 me-auto`}>
          <Link to={"/"} className={Styles.link}>
            Home
          </Link>
          <Link to={"/Categories"} className={Styles.link}>
            Categories
          </Link>
        </div>

        <button className={`${Styles.logout} btn`} type="button" onClick={logout}>
          <small className="me-2">LogOut</small>
          <RiLogoutBoxRLine className={Styles.icon} />
        </button>
      </div>
    </nav>
  );
};

export default DHeader;
