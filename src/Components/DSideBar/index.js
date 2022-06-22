import React from "react";
import Styles from "./DSideBar.module.scss";
import { Link } from "react-router-dom";
import { RiMenuFoldLine } from "react-icons/ri";




const DSideBar = () => {
  return (
    <div className="dside-bar-container">
      <div className="d-flex p-3 side-bar">
        <div className="collapse-horizontal show" id="categories-collapse">
          <div className="card sidebar-card card-body card-body-sidebar">
            <Link
              to=""
              className="d-flex align-items-center justify-content-start  text-decoration-none border-bottom"
            >
              <span className="fs-5 mb-2 fw-semibold">Categories</span>
            </Link>

            <ul className="list-unstyled ps-0 m-0">
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
                        Women
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className=" d-inline-flex text-decoration-none rounded"
                      >
                        Men
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className=" d-inline-flex text-decoration-none rounded"
                      >
                        Kids
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className=" d-inline-flex text-decoration-none rounded"
                      >
                        Baby Clothing and Accessories
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className=" d-inline-flex text-decoration-none rounded"
                      >
                        Shoes
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className=" d-inline-flex text-decoration-none rounded"
                      >
                        Jewellery and Watches
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className=" d-inline-flex text-decoration-none rounded"
                      >
                        Handbag and Accessories
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
                        Mobile phones and communication
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className=" d-inline-flex text-decoration-none rounded"
                      >
                        Computing, Tablets and Networking
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className=" d-inline-flex text-decoration-none rounded"
                      >
                        Cameras and photography
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className=" d-inline-flex text-decoration-none rounded"
                      >
                        Home appliances
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className=" d-inline-flex text-decoration-none rounded"
                      >
                        Sound and Vision
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className=" d-inline-flex text-decoration-none rounded"
                      >
                        Video games and consoles{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="mb-1">
                <button
                  className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#home-and-garden-collapse"
                  aria-expanded="false"
                >
                  Home and Garden
                </button>
                <div className="collapse " id="home-and-garden-collapse">
                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li>
                      <Link
                        to="#"
                        className=" d-inline-flex text-decoration-none rounded"
                      >
                        Furniture
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className=" d-inline-flex text-decoration-none rounded"
                      >
                        Home Decor and Rugs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className=" d-inline-flex text-decoration-none rounded"
                      >
                        Garden and Patio
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className=" d-inline-flex text-decoration-none rounded"
                      >
                        DIY Tools
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className=" d-inline-flex text-decoration-none rounded"
                      >
                        Home Decorating
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className=" d-inline-flex text-decoration-none rounded"
                      >
                        Personalised Gifts
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className=" d-inline-flex text-decoration-none rounded"
                      >
                        Bath
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className=" d-inline-flex text-decoration-none rounded"
                      >
                        Home Offers
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="mb-1">
                <button
                  className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#health-and-beauty-collapse"
                  aria-expanded="false"
                >
                  Health and Beauty
                </button>
                <div className="collapse " id="health-and-beauty-collapse">
                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li>
                      <Link
                        to="#"
                        className=" d-inline-flex text-decoration-none rounded"
                      >
                        Health Care
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className=" d-inline-flex text-decoration-none rounded"
                      >
                        Vitamins and Dietary Supplements
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className=" d-inline-flex text-decoration-none rounded"
                      >
                        Independent Living
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className=" d-inline-flex text-decoration-none rounded"
                      >
                        Oral Care
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className=" d-inline-flex text-decoration-none rounded"
                      >
                        Natural and Alternative Remedies
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className=" d-inline-flex text-decoration-none rounded"
                      >
                        Vision Care
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className=" d-inline-flex text-decoration-none rounded"
                      >
                        Other Health and Beauty
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className=" d-inline-flex text-decoration-none rounded"
                      >
                        Sports Supplements
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="mb-1">
                <button
                  className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#toys-collapse"
                  aria-expanded="false"
                >
                  Toys
                </button>
                <div className="collapse " id="toys-collapse">
                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li>
                      <Link
                        to="#"
                        className=" d-inline-flex text-decoration-none rounded"
                      >
                        LEGO
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className=" d-inline-flex text-decoration-none rounded"
                      >
                        Remote-Controlled Toys
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className=" d-inline-flex text-decoration-none rounded"
                      >
                        Games
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className=" d-inline-flex text-decoration-none rounded"
                      >
                        TV and Film Character Toys
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="mb-1">
                <button
                  className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#sports-and-leisure-collapse"
                  aria-expanded="false"
                >
                  Sports and Leisure
                </button>
                <div className="collapse" id="sports-and-leisure-collapse">
                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li>
                      <Link
                        to="#"
                        className=" d-inline-flex text-decoration-none rounded"
                      >
                        Sporting Goods
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className=" d-inline-flex text-decoration-none rounded"
                      >
                        Fitness, Running and Yoga
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className=" d-inline-flex text-decoration-none rounded"
                      >
                        Cycling
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className=" d-inline-flex text-decoration-none rounded"
                      >
                        Fishing
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className=" d-inline-flex text-decoration-none rounded"
                      >
                        Golf
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className=" d-inline-flex text-decoration-none rounded"
                      >
                        Camping and Hiking
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className=" d-inline-flex text-decoration-none rounded"
                      >
                        Equestrian
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className=" d-inline-flex text-decoration-none rounded"
                      >
                        Musical Instruments
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="mb-1">
                <button
                  className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#home-entertainment-collapse"
                  aria-expanded="false"
                >
                  Home Entertainment
                </button>
                <div className="collapse " id="home-entertainment-collapse">
                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li>
                      <Link
                        to="#"
                        className=" d-inline-flex text-decoration-none rounded"
                      >
                        Books and Comics
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className=" d-inline-flex text-decoration-none rounded"
                      >
                        Music
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className=" d-inline-flex text-decoration-none rounded"
                      >
                        DVD and Blu Ray
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className=" d-inline-flex text-decoration-none rounded"
                      >
                        Video Games
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="mb-1">
                <button
                  className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#motors-collapse"
                  aria-expanded="false"
                >
                  Motors
                </button>
                <div className="collapse " id="motors-collapse">
                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li>
                      <Link
                        to="#"
                        className=" d-inline-flex text-decoration-none rounded"
                      >
                        My Garage
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className=" d-inline-flex text-decoration-none rounded"
                      >
                        Vehicle Parts and Accessories
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className=" d-inline-flex text-decoration-none rounded"
                      >
                        Cars, Motorcycles and Vehicles
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className=" d-inline-flex text-decoration-none rounded"
                      >
                        Motoring Deals and Offers
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              
              <li className="mb-1">
                <button
                  className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collectables-collapse"
                  aria-expanded="false"
                >
                  Collectables
                </button>
                <div className="collapse " id="collectables-collapse">
                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li>
                      <Link
                        to="#"
                        className=" d-inline-flex text-decoration-none rounded"
                      >
                        Antiques
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className=" d-inline-flex text-decoration-none rounded"
                      >
                        Collectables
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className=" d-inline-flex text-decoration-none rounded"
                      >
                        Pottery Ceramics Glass
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DSideBar;
