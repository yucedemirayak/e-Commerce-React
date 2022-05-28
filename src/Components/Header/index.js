import React from "react";
import "./Header.scss";
import { FaOpencart } from "react-icons/fa";
import {
  RiSearchLine,
  RiUserLine,
  RiHeartLine,
  RiShoppingCartLine,
} from "react-icons/ri";
import { IconContext } from "react-icons";
import SearchAnimation from "../SearchAnimation/SearchAnimation";
import IconGenerator from "../IconGenerator";

const CompanyLogo = () => {
  return (
    <IconContext.Provider value={{ size: "60px" }}>
      <div>
        <FaOpencart />
      </div>
    </IconContext.Provider>
  );
};

const Header = () => {
  return (
    <header className="p-3">
      <div className="container bg-warning">
        <div className=" bg-primary d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 mx-2 text-white text-decoration-none"
          >
            <CompanyLogo />
          </a>

          <form
            className="bg-success flex-fill d-flex align-items-center col-11 col-lg-auto mx-3 mb-3 mb-lg-0 me-lg-3"
            role="search"
          >
            <input
              type="search"
              className="form-control form-control-dark text-white bg-dark"
              placeholder="Search..."
              aria-label="Search"
            />
            <div>
              {" "}
              <RiSearchLine className="mx-2 mb-1 border" />{" "}
            </div>
          </form>

          <ul className="bg-danger nav col-12 col-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" className="nav-link text-white bg-info">
                <RiUserLine className="mx-1 mb-1" />
                Login
              </a>
            </li>

            <li>
              <a href="#" className="nav-link text-white bg-warning ">
                <RiHeartLine className="mx-1 mb-1" />
                Favorites
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white bg-success">
                <RiShoppingCartLine className="mx-1 mb-1" />
                Cart
              </a>
            </li>
          </ul>

          {/* <SearchAnimation className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"/> */}

          {/* //TODO: logine göre tasarım  */}
          {/* If user not login in >>>>> */}

          {/* If user loginED in >>>>>  */}
          {/* <div class="dropdown text-end">
          <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
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
