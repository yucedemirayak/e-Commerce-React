import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LayoutBasic from "../../Containers/LayoutBasic";
import Home from "../../Pages/Home";
import Login from "../../Pages/Login";
import Favorites from "../../Pages/Favorites";
import Search from "../../Pages/Search";
import Cart from "../../Pages/Cart";
import PageNotFound from "../../Pages/PageNotFound";
import RequireAuth from "./requireAuth";
const PageRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<LayoutBasic />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Search" element={<Search />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Favorites" element={<Favorites />} />
          <Route exact path="/Cart" element={<Cart />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default PageRoutes;