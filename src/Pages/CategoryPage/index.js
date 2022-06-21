import React from "react";
import "../CategoryPage/CategoryPage.scss";
import { Link } from "react-router-dom";

const CategoryPage = () => {
  
  return (
    <section className="min-vh-100 bg-white p-5">
      <div className="row gy-3  justify-content-center">
        <article className=" col-lg-4 col-md-6 card category-card bg-dark">
          <img
            src="./Image/Categories/pexels-polina-tankilevitch-3735641.jpg"
            className="card-img opacity img-category"
            alt=""
          />
          <div className="card-img-overlay">
            <h5 className="mb-0 text-white">Fashion</h5>
            <p className="card-text text-white"></p>
            <br />
            <br />
            <Link to={"./#"} className="btn btn-light categories">
              Discover
            </Link>
          </div>
        </article>
        <article className="col-lg-4 col-md-6 card category-card bg-dark">
          <img
            src="./Image/Categories/pexels-christina-morillo-1181675.jpg"
            className="card-img opacity img-category"
            alt=""
          />
          <div className="card-img-overlay">
            <h5 className="mb-0 text-white">Electronics</h5>
            <p className="card-text text-white"></p>
            <br />
            <br />
            <Link to={"./#"} className="btn btn-light">
              Discover
            </Link>
          </div>
        </article>
        <article className="col-lg-4 col-md-6 card category-card bg-dark">
          <img
            src="./Image/Categories/people-renovating-house-concept.jpg"
            className="card-img opacity img-category"
            alt=""
          />
          <div className="card-img-overlay">
            <h5 className="mb-0 text-white">Home and Garden</h5>
            <p className="card-text text-white"></p>
            <br />
            <br />
            <Link to={"./#"} className="btn btn-light">
              Discover
            </Link>
          </div>
        </article>
        <article className="col-lg-4 col-md-6 card category-card bg-dark">
          <img
            src="./Image/Categories/african-boy-asian-couple-playing-jenga-play-board-game-free-time-focus-game.jpg"
            className="card-img opacity img-category"
            alt=""
          />
          <div className="card-img-overlay">
            <h5 className="mb-0 text-white">Home Entertainment</h5>
            <p className="card-text text-white"></p>
            <br />
            <br />
            <Link to={"./#"} className="btn btn-light">
              Discover
            </Link>
          </div>
        </article>
        <article className="col-lg-4 col-md-6 card category-card bg-dark">
          <img
            src="./Image/Categories/concept-tooth-oral-care-blue-background.jpg"
            className="card-img opacity img-category"
            alt=""
          />
          <div className="card-img-overlay">
            <h5 className="mb-0 text-white">Health and Beauty</h5>
            <p className="card-text text-white"></p>
            <br />
            <br />
            <Link to={"./#"} className="btn btn-light">
              Discover
            </Link>
          </div>
        </article>
        <article className="col-lg-4 col-md-6 card category-card bg-dark">
          <img
            src="./Image/Categories/pexels-karolina-grabowska-7946392.jpg"
            className="card-img opacity img-category"
            alt=""
          />
          <div className="card-img-overlay">
            <h5 className="mb-0 text-white">Toys</h5>
            <p className="card-text text-white"></p>
            <br />
            <br />
            <Link to={"./#"} className="btn btn-light">
              Discover
            </Link>
          </div>
        </article>
        <article className="col-lg-4 col-md-6 card category-card bg-dark">
          <img
            src="./Image/Categories/pexels-oliver-sjöström-1103829.jpg"
            className="card-img opacity img-category"
            alt=""
          />
          <div className="card-img-overlay">
            <h5 className="mb-0 text-white">Sports and Leisure</h5>
            <p className="card-text text-white"></p>
            <br />
            <br />
            <Link to={"./#"} className="btn btn-light">
              Discover
            </Link>
          </div>
        </article>
        <article className="col-lg-4 col-md-6 card category-card bg-dark">
          <img
            src="./Image/Categories/pexels-damian-barczak-7460145.jpg"
            className="card-img opacity img-category"
            alt=""
          />
          <div className="card-img-overlay">
            <h5 className="mb-0 text-white">Motors</h5>
            <p className="card-text text-white"></p>
            <br />
            <br />
            <Link to={"./#"} className="btn btn-light">
              Discover
            </Link>
          </div>
        </article>
        <article className="col-lg-4 col-md-6 card category-card bg-dark">
          <img
            src="./Image/Categories/pexels-olga-lioncat-7245308.jpg"
            className="card-img opacity img-category"
            alt=""
          />
          <div className="card-img-overlay">
            <h5 className="mb-0 text-white">Collectables</h5>
            <p className="card-text text-white"></p>
            <br />
            <br />
            <Link to={"./#"} className="btn btn-light">
              Discover
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
};

export default CategoryPage;
