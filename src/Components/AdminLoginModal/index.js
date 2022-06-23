import React from "react";
import { Link } from "react-router-dom";
import "../LoginModal/LoginModal.scss";
import { Form, Formik } from "formik";
import { LogInModel } from "../../Services/Utils/Forms/Log-In/initialModel";
import { LogInValidationScheme } from "../../Services/Utils/Forms/Log-In/ValidationScheme";
import { useDispatch } from "react-redux";


const AdminLoginModal = () => {
  const dispatch = useDispatch();

//   const login = async (loginModel) => {
//     await dispatch(createToken(loginModel));
//   };

const login = async (loginModel) => {
    console.log(loginModel);
}

  return (
    <section className="vh-100">
      <div className="container h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://localhost:7488/Files/Images/Login/adminlogin.jpg"
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
                      Email address
                    </label>
                    {errors.email && touched.email ? (
                      <small>errors.email</small>
                    ) : null}
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
                      Password
                    </label>
                    {errors.password && touched.password ? (
                      <small>errors.password</small>
                    ) : null}
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
                  <div className="text-center text-lg-start mt-4 pt-2 d-flex justify-content-between">
                    <button type="submit" className="btn btn-primary btn-lg">
                      Login
                    </button>
                    <Link to={"/"} className="btn btn-warning btn-lg" type="button">
                      Back to Home Page
                    </Link>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminLoginModal;
