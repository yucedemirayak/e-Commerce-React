import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Styles from "../Header/Header.module.scss";
import { FaOpencart } from "react-icons/fa";
import {
  RiSearchLine,
  RiUserLine,
  RiHeartLine,
  RiShoppingCartLine,
  RiLogoutBoxRLine,
} from "react-icons/ri";
import { IconContext } from "react-icons";
import { useDispatch } from "react-redux";
import { authLogOut } from "../../Services/Store/Auth";
import { userRoles } from "../../Services/Utils/Enums/UserRoles/userRoles";

const CompanyLogo = () => {
  return (
    <IconContext.Provider value={{ size: "40px" }}>
      <div className="text-white">
        <FaOpencart />
      </div>
    </IconContext.Provider>
  );
};

const Header = () => {
  const { token } = useSelector((state) => state.auth);
  const { role } = useSelector((state) => state.auth);

  const customLink = (_userRole) => {
    if (_userRole === userRoles.ADMIN) {
      return "Dashboard";
    } else if (_userRole === userRoles.SHOPOWNER) {
      return "MyShop";
    } else {
      return "MyAccount";
    }
  };

  const customLinkEL = (_userRole) => {
    return (
      <Link
        to={`/${customLink(_userRole)}`}
        className={`${Styles.link} nav-link`}
      >
        <RiUserLine className="mx-1 mb-1" />
        {customLink(_userRole)}
      </Link>
    );
  };

  const componentCheck = (_token, _userRole) => {
    if (!_token) {
      return (
        <Link to={`/Login`} className={`${Styles.link} nav-link`}>
          <RiUserLine className="mx-1 mb-1" />
          Login
        </Link>
      );
    } else {
      return customLinkEL(_userRole);
    }
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const _signOut = async () => {
    await dispatch(authLogOut());
    await navigate("./");
  };

  return (
    <header className="p-3 ">
      <div className="container ">
        <div
          id="wrapper"
          className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
        >
          <Link
            to={"./"}
            className="d-flex align-items-center mb-2 mb-lg-0 mx-2  text-decoration-none"
          >
            <div
              className={`${Styles.header_img_container} position-relative d-flex align-items-center justify-content-center`}
            >
              <img
                className={`${Styles.blackhole} ${Styles.rotatex}`}
                height="180px"
                src="./image/blackhole.svg"
                alt="blackhole"
              ></img>
              <CompanyLogo className="" />
            </div>
          </Link>
          <div className={Styles.blackhole_big_container}>
            <img
              id="blackhole-big"
              className="blackhole-big "
              height="1800px"
              src="./image/blackhole.svg"
              alt="blackhole"
            ></img>
          </div>
          <form
            id="search-btn"
            className="flex-fill d-flex align-items-center col-11 col-lg-auto mx-3 mb-3 mb-lg-0 me-lg-3"
            role="search"
          >
            <input
              type="search"
              className="form-control form-control "
              placeholder="Search..."
              aria-label="Search"
            />
            <div className="">
              <Link
                to={"./Search"}
                className={Styles.search_icon}
                id="search-btn"
              >
                <RiSearchLine className="mx-2 mb-1" />
              </Link>
            </div>
          </form>

          <ul className="nav col-12 col-lg-auto mb-2 justify-content-center mb-md-0">
            <li>{componentCheck(token, role)}</li>
            <li>
              <Link to={"./Categories"} className={`${Styles.link} nav-link`}>
                <RiUserLine className="mx-1 mb-1" />
                Categories
              </Link>
            </li>
            <li>
              <Link to={"./Favorites"} className={`${Styles.link} nav-link`}>
                <RiHeartLine className="mx-1 mb-1" />
                Favorites
              </Link>
            </li>
            <li>
              <Link to={"./Cart"} className={`${Styles.link} nav-link`}>
                <RiShoppingCartLine className="mx-1 mb-1" />
                Cart
              </Link>
            </li>
            {token ? (
              <li>
                <button
                  className={`${Styles.logout} nav-link`}
                  onClick={() => {
                    _signOut();
                  }}
                >
                  <RiLogoutBoxRLine className="mx-1 mb-1" />
                  LogOut
                </button>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
