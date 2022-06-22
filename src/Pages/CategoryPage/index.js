import React from "react";
import "../CategoryPage/CategoryPage.scss";
import CategoryCard from "../../Components/CategoryCard";

const CategoryPage = () => {
  const _categories = [{name: "Fashion"} , {name: "Collectables"}]

  return (
    <section className="min-vh-100 bg-white p-5">
      <div className="row gy-3  justify-content-center">
      {_categories.map(item => 
      <CategoryCard {...item} />
      )}
      </div>
    </section>
  );
};

export default CategoryPage;
