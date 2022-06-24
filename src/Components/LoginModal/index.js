import React from "react";
import { Link } from "react-router-dom";
import "../LoginModal/LoginModal.scss";
import { Form, Formik } from "formik";
import { LogInModel } from "../../Services/Utils/Forms/Log-In/initialModel";
import { LogInValidationScheme } from "../../Services/Utils/Forms/Log-In/ValidationScheme";
import { useDispatch } from "react-redux";
import { createUserToken } from "../../Services/Store/Auth/createToken";

const LoginModal = () => {
  const dispatch = useDispatch();

  const login = async (loginModel) => {
    await dispatch(createUserToken(loginModel));
  };

  return (
    <section className="vh-100">
      <div className="container h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://localhost:7488/Files/Images/Login/login.jpg"
              className="img-fluid"
              alt="sample"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <Formik
              initialValues={LogInModel}
              validationSchema={LogInValidationScheme}
              onSubmit={(_values) => {
                login(_values);
              }}
            >
              {({ errors, touched, handleChange, handleBlur }) => (
                <Form>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3"
                      name="email"
                      onChange={handleChange}
                      className="form-control form-control-lg"
                      placeholder="Enter a valid email address"
                    />
                    <label className="form-label" htmlFor="form3Example3">
                    {errors.email && touched.email ? (
                      <small>{errors.email}</small>
                    ) : "Email Adress"}
                    </label>
                  </div>

                  <div className="form-outline mb-3">
                    <input
                      type="password"
                      name="password"
                      id="form3Example4"
                      onChange={handleChange}
                      className="form-control form-control-lg"
                      placeholder="Enter password"
                    />
                    <label className="form-label" htmlFor="form3Example4">
                    {errors.password && touched.password ? (
                      <small>{errors.password}</small>
                    ) : "Password"}
                    </label>

                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example3"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="form2Example3"
                      >
                        Remember me
                      </label>
                    </div>
                    <a href="#!" className="text-body">
                      Forgot password?
                    </a>
                  </div>

                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button type="submit" className="btn btn-primary btn-lg">
                      Login
                    </button>
                    <p className="small fw-bold mt-2 pt-1 mb-0">
                      Don't have an account?{" "}
                      <Link to={"/SignUp"} className="link-danger">
                        Register
                      </Link>
                    </p>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        <div className="text-white mb-3 mb-md-0">
          Copyright © 2020. All rights reserved.
        </div>

        <div>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-google"></i>
          </a>
          <a href="#!" className="text-white">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LoginModal;
