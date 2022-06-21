import React from "react";
import { Link } from "react-router-dom";
import "./CategoryCard.module.scss";

const CategoryCard = (_name, _imgSource) => {
  return (
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
  );
};

export default CategoryCard;
