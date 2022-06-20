import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "../Header/Header.scss";
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

const CompanyLogo = () => {
  return (
    <IconContext.Provider className="" value={{ size: "40px" }}>
      <div className="text-white">
        <FaOpencart />
      </div>
    </IconContext.Provider>
  );
};

const Header = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const _signOut = async () => {
   await dispatch(authLogOut());
   await navigate("./");
  };

  return (
    <header className="p-3 ">
      <div className="container ">
        <div id="wrapper" className=" d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link
            to={"./"}
            className="d-flex align-items-center mb-2 mb-lg-0 mx-2  text-decoration-none"
          >
            <div className="header-img-container position-relative d-flex align-items-center justify-content-center">
              <img
                className="blackhole rotatex"
                height="180px"
                src="./image/blackhole.svg"
                alt="blockhole"
              ></img>
              <CompanyLogo className="" />
            </div>
          </Link>
          <div className="blackhole-big-container">
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
              <Link to={"./Search"} className="nav-link " id="search-btn">
                <RiSearchLine className="mx-2 mb-1 border" />
              </Link>
            </div>
          </form>

          <ul className="nav col-12 col-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              {!token? <Link to={"./Login"} className="nav-link">
                <RiUserLine className="mx-1 mb-1" />
                Login
              </Link> : <Link to={"./Dashboard"} className="nav-link">
                <RiUserLine className="mx-1 mb-1" />
                My Account
              </Link>}

            </li>
            <li>
              <Link to={"./Categories"} className="nav-link">
                <RiUserLine className="mx-1 mb-1" />
                Categories
              </Link>
            </li>
            <li>
              <Link to={"./Favorites"} className="nav-link">
                <RiHeartLine className="mx-1 mb-1" />
                Favorites
              </Link>
            </li>
            <li>
              <Link to={"./Cart"} className="nav-link">
                <RiShoppingCartLine className="mx-1 mb-1" />
                Cart
              </Link>
            </li>
            {token? 
            <li>
              <button className="nav-link logout" onClick={() => {
                _signOut();
              }}>
              <RiLogoutBoxRLine className="mx-1 mb-1" />
              LogOut
              </button>
            </li> : null 
          }
          </ul>

          {/* <SearchAnimation className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"/> */}

          {/* //TODO: logine göre tasarım  */}
          {/* If user not login in >>>>> */}

          {/* If user loginED in >>>>>  */}
          {/* <div class="dropdown text-end">
          <a href="#" class="d-block link text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" class="rounded-circle" width="32" height="32"/>
          </a>
          <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">
            <li><a class="dropdown-item" href="#">New project...</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
