import React, { useEffect } from "react";
import "../CategoryPage/CategoryPage.scss";
// import CategoryCard from "../../Components/CategoryCard";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCategories } from "../../Services/Store/Categories/getCategories";

const CategoryPage = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.allCategories);  

  useEffect(() => {
    dispatch(getCategories());
  },[dispatch]);


  console.log(categories);
  return (
    <section className="min-vh-100 bg-white p-5">
      <div className="row gy-3  justify-content-center">
        {/* {categories.map((item) => (
          <CategoryCard item={item} />
        ))} */}
      </div>
    </section>
  );
};

export default CategoryPage;
