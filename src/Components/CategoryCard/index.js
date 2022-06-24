import React from "react";
import { Link } from "react-router-dom";
import Styles from "./CategoryCard.module.scss";

const CategoryCard = (props) => {
  return (
    <article
      className={`${Styles.category_card} col-lg-4 col-md-6 card bg-dark`}
    >
      <img
        src={process.env.REACT_APP_FILE_URL + props.imgSource}
        className={`${Styles.img_category} ${Styles.opacity} card-img`}
        alt=""
      />
      <div className="card-img-overlay">
        <h5 className="mb-0 text-white">{props.name}</h5>
        <p className="card-text text-white"></p>
        <div className="text-white">{props.details}</div>
        <br />
        <Link to={"./#"} className={`${Styles.btn_light} btn`}>
          Discover
        </Link>
      </div>
    </article>
  );
};

export default CategoryCard;
