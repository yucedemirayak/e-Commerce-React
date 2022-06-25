import React, { useEffect } from "react";
import "../CategoryPage/categoryPage.scss";
import CategoryCard from "../../Components/CategoryCard";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCategories } from "../../Services/Store/Categories/getCategories";
import { Empty } from "antd";

const CategoryPage = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.allCategories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <section className="min-vh-100 bg-white p-5">
      <div className="row gy-3  justify-content-center">
        {categories ? (
          categories.map((item) => <CategoryCard {...item} />)
        ) : (
          <Empty />
        )}
      </div>
    </section>
  );
};

export default CategoryPage;
