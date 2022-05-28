import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { FaOpencart } from "react-icons/fa";
import {
  RiSearchLine,
  RiUserLine,
  RiHeartLine,
  RiShoppingCartLine,
} from "react-icons/ri";
import { IconContext } from "react-icons";

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
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link
            to={"./"}
            className="d-flex align-items-center mb-2 mb-lg-0 mx-2  text-decoration-none"
          >
            <CompanyLogo />
          </Link>

          <form
            className="flex-fill d-flex align-items-center col-11 col-lg-auto mx-3 mb-3 mb-lg-0 me-lg-3"
            role="search"
          >
            <input
              type="search"
              className="form-control form-control "
              placeholder="Search..."
              aria-label="Search"
            />
            <div>
              <Link to={"./Login"} className="nav-link">
                <RiSearchLine className="mx-2 mb-1 border" />
              </Link>
            </div>
          </form>

          <ul className="nav col-12 col-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to={"./Login"} className="nav-link">
                <RiUserLine className="mx-1 mb-1" />
                Login
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
