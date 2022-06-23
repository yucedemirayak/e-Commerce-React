import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LayoutBasic from "../../Containers/LayoutBasic";
import Home from "../../Pages/Home";
import Login from "../../Pages/Login";
import Favorites from "../../Pages/Favorites";
import Search from "../../Pages/Search";
import Cart from "../../Pages/Cart";
import PageNotFound from "../../Pages/PageNotFound";
import SignUp from "../../Pages/SignUp";
import Team from "../../Pages/Team";
import CategoryPage from "../../Pages/CategoryPage";
import { useSelector } from "react-redux";
import AdminDashboard from "../../Pages/AdminDashboard";
import LayoutAdmin from "../../Containers/LayoutAdminDashBoard";
import RequireAuth from "./requireAuth";
import AdminLogin from "../../Pages/AdminLogin";

const PageRoutes = () => {
  const { token } = useSelector((state) => state.auth);

  return (
    <Router>
      <Routes>
        <Route element={<LayoutBasic />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Search" element={<Search />} />
          <Route
            exact
            path="/Login"
            element={!token ? <Login /> : <Navigate to="/" />}
          />
          <Route exact path="/Favorites" element={<Favorites />} />
          <Route exact path="/Cart" element={<Cart />} />
          <Route
            exact
            path="/SignUp"
            element={!token ? <SignUp /> : <Navigate to="/" />}
          />
          <Route exact path="/Team" element={<Team />} />
          <Route exact path="/Categories" element={<CategoryPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
        <Route element={<LayoutAdmin />}>
          <Route
            exact
            path="/Dashboard"
            element={
              <RequireAuth _userRole={0}>
                <AdminDashboard />
              </RequireAuth>
            }
          />
        </Route>
        <Route exact path="/AdminLogin" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
};

export default PageRoutes;
