import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import "../SideBar/SideBar.scss";
import {
  RiMenuFoldLine
} from "react-icons/ri";
import { IconContext } from "react-icons";
const MenuLogo = () => {
  return (
    <IconContext.Provider className="" value={{ size: "20px" } }>
      <div className="text-white position-absolute d-flex align-items-center justify-content-center">
        <RiMenuFoldLine />
      </div>
    </IconContext.Provider>
  );
};
const Index = () => {

  return (
    <div className="side-bar-container">
    <div className="d-flex p-3 side-bar">
      <div className="collapse-horizontal show" id="categories-collapse"  >
    <div className="card card-body">
      <Link
       
        to=""
        className="d-flex align-items-center justify-content-start  text-decoration-none border-bottom"
      >
        
        <span className="fs-5 mb-2 fw-semibold">Categories</span>
        
      </Link>
      
      <ul className="list-unstyled ps-0 m-0" >
        <li className="mb-1">
          <button
            className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#fashion-collapse"
            aria-expanded="false"
          >
            Fashion
          </button>
          <div className="collapse " id="fashion-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link
                  to="#"
                  className=" d-inline-flex text-decoration-none rounded"
                >
                  Overview
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className=" d-inline-flex text-decoration-none rounded"
                >
                  Weekly
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className=" d-inline-flex text-decoration-none rounded"
                >
                  Monthly
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className=" d-inline-flex text-decoration-none rounded"
                >
                  Annually
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="mb-1">
          <button
            className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#electronics-collapse"
            aria-expanded="false"
          >
            Electronics
          </button>
          <div className="collapse " id="electronics-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link
                  to="#"
                  className=" d-inline-flex text-decoration-none rounded"
                >
                  Overview
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className=" d-inline-flex text-decoration-none rounded"
                >
                  Updates
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className=" d-inline-flex text-decoration-none rounded"
                >
                  Reports
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="mb-1">
          <button
            className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#home-and-living-collapse"
            aria-expanded="false"
          >
            Home and Living
          </button>
          <div className="collapse " id="home-and-living-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link
                  to="#"
                  className=" d-inline-flex text-decoration-none rounded"
                >
                  Overview
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className=" d-inline-flex text-decoration-none rounded"
                >
                  Updates
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className=" d-inline-flex text-decoration-none rounded"
                >
                  Reports
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="mb-1">
          <button
            className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#baby-collapse"
            aria-expanded="false"
          >
            Baby
          </button>
          <div className="collapse " id="baby-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link
                  to="#"
                  className=" d-inline-flex text-decoration-none rounded"
                >
                  Overview
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className=" d-inline-flex text-decoration-none rounded"
                >
                  Updates
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className=" d-inline-flex text-decoration-none rounded"
                >
                  Reports
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li className="mb-1">
          <button
            className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#beauty-and-care-collapse"
            aria-expanded="false"
          >
            Beauty and Personal Care
          </button>
          <div className="collapse " id="beauty-and-care-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link
                  to="#"
                  className=" d-inline-flex text-decoration-none rounded"
                >
                  Overview
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className=" d-inline-flex text-decoration-none rounded"
                >
                  Updates
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className=" d-inline-flex text-decoration-none rounded"
                >
                  Reports
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li className="mb-1">
          <button
            className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#jewelry-and-watches-collapse"
            aria-expanded="false"
          >
            Jewelry and Watches
          </button>
          <div className="collapse " id="jewelry-and-watches-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link
                  to="#"
                  className=" d-inline-flex text-decoration-none rounded"
                >
                  Overview
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className=" d-inline-flex text-decoration-none rounded"
                >
                  Updates
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className=" d-inline-flex text-decoration-none rounded"
                >
                  Reports
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="mb-1">
          <button
            className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#sports-and-outdoors-collapse"
            aria-expanded="false"
          >
            Sports and Outdoors
          </button>
          <div className="collapse" id="sports-and-outdoors-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link
                  to="#"
                  className=" d-inline-flex text-decoration-none rounded"
                >
                  New
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className=" d-inline-flex text-decoration-none rounded"
                >
                  Processed
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className=" d-inline-flex text-decoration-none rounded"
                >
                  Shipped
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className=" d-inline-flex text-decoration-none rounded"
                >
                  Returned
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="mb-1">
          <button
            className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#book-music-movie-game-collapse"
            aria-expanded="false"
          >
            Book, Music, Movie, Game
          </button>
          <div className="collapse " id="book-music-movie-game-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link
                  to="#"
                  className=" d-inline-flex text-decoration-none rounded"
                >
                  Overview
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className=" d-inline-flex text-decoration-none rounded"
                >
                  Updates
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className=" d-inline-flex text-decoration-none rounded"
                >
                  Reports
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="mb-1">
          <button
            className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#automotive-collapse"
            aria-expanded="false"
          >
            Automotive and Motorcycle
          </button>
          <div className="collapse " id="automotive-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link
                  to="#"
                  className=" d-inline-flex text-decoration-none rounded"
                >
                  Overview
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className=" d-inline-flex text-decoration-none rounded"
                >
                  Updates
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className=" d-inline-flex text-decoration-none rounded"
                >
                  Reports
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li className="border-top my-3"></li>
        <li className="mb-1">
          <button
            className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#account-collapse"
            aria-expanded="false"
          >
            Account
          </button>
          <div className="collapse" id="account-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link
                  to="#"
                  className=" d-inline-flex text-decoration-none rounded"
                >
                  New...
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className=" d-inline-flex text-decoration-none rounded"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className=" d-inline-flex text-decoration-none rounded"
                >
                  Settings
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className=" d-inline-flex text-decoration-none rounded"
                >
                  Sign out
                </Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      </div>
    </div>
    <button type="button" className="img-container" id="img-container"
    data-bs-toggle="collapse" 
    data-bs-target="#categories-collapse"
    aria-expanded="true"
    aria-controls="categories-collapse"
    
    >
<MenuLogo id="menu-icon"/>
    <img 
       className="" height="80px"src="./imagesForTest/blackhole.svg"></img>
       </button>
    </div>
    </div>
  );
};

export default Index;
