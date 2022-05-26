import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LayoutBasic from "../../../Containers/LayoutBasic";
import Home from "../../../Pages/Home";

const PageRoutes = () => {
    
  return (
    <Router>
      <Routes>
        <Route element={<LayoutBasic />}>
          <Route exact path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default PageRoutes;
