import React from "react";
import "./Header.scss";
import { FaOpencart } from "react-icons/fa";
import { RiHomeLine, RiDashboardLine } from "react-icons/ri";
import { IconContext } from "react-icons";

const CompanyLogo = () => {
  return (
    <IconContext.Provider value={{ size: "70px" }}>
      <div>
        <FaOpencart />
      </div>
    </IconContext.Provider>
  );
};

const Header = () => {
  return (
    <header className="p-3 bg-primary container-fluid">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <CompanyLogo />
          </a>
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" className="nav-link text-secondary">
                <RiHomeLine
                  className="bi d-block mx-auto mb-1"
                  width="24"
                  height="24"
                />
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                <RiDashboardLine
                  className="bi d-block mx-auto mb-1"
                  width="24"
                  height="24"
                />
                Categories
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                <RiDashboardLine
                  className="bi d-block mx-auto mb-1"
                  width="24"
                  height="24"
                />
                Stores
              </a>
            </li>
          </ul>

          <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            role="search"
          >
            <input
              type="search"
              className="form-control form-control "
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          {/* //TODO: logine göre tasarım  */}
          {/* If user not login in >>>>> */}
          {/* <div className="text-end">
            <button type="button" className="btn btn-outline-light me-2">
              Login
            </button>
            <button type="button" className="btn btn-warning">
              Sign-up
            </button>
          </div> */}
          {/* If user loginED in >>>>>  */}
        <div class="dropdown text-end">
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
        </div>
       
        </div>
      </div>
    </header>
  );
};

export default Header;
