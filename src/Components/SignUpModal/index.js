import { Form, Formik } from "formik";
import React from "react";
import { Genders } from "../../Services/Utils/Enums/Gender/genders";
// import { useDispatch } from "react-redux";
import { SingUpUserModel } from "../../Services/Utils/Forms/Sign-Up/User/initialModel";
import { SignUpUserValidationScheme } from "../../Services/Utils/Forms/Sign-Up/User/validationScheme";

import "../SignUpModal/signUpModal.scss";

const SignUpModal = () => {
  // const dispatch = useDispatch();
  // const login = (loginModel) => {
  //   ///dispatch(authCreateToken(loginModel));
  // };

  const signUpUser = (values) => {
    //axios post
    console.log(values);
  }

  return (
    <section className="">
      <div className="px-4 py-5 px-md-5 text-center text-lg-start">
        <div className="container">
          <div className="row gx-lg-5 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="my-5 display-3 fw-bold ls-tight">
                The best offer <br />
                <span className="text-primary">for your business</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                quibusdam tempora at cupiditate quis eum maiores libero
                veritatis? Dicta facilis sint aliquid ipsum atque?
              </p>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="card">
                <div className="card-body py-5 px-md-5">
                  {/* FIXME: Formik çalışmıyor */}
                  <Formik
                    id="sign-up-container-user"
                    initialValues={SingUpUserModel}
                    validationSchema={SignUpUserValidationScheme}
                    onSubmit={(values) => {
                      signUpUser(values);
                    }}
                  >{({ errors, touched, handleChange}) => (
                    <Form>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          {errors.firstName && touched.firstName ? (
                            <small>{errors.firstName}</small>
                          ) : null}
                          <input
                            type="text"
                            name="firstname"
                            onChange={handleChange}
                            className="form-control"
                          />
                          <label className="form-label">
                            First name
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          {errors.lastName && touched.lastName ? (
                            <small>{errors.lastName}</small>
                          ) : null}
                          <input
                            type="text"
                            name="lastName"
                            onChange={handleChange}
                            className="form-control"
                          />
                          <label className="form-label">
                            Last name
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      {errors.email && touched.email ? (
                        <small>{errors.email}</small>
                      ) : null}
                      <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        className="form-control"
                      />
                      <label className="form-label">
                        Email address
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      {errors.password && touched.password ? (
                        <small>{errors.password}</small>
                      ) : null}
                      <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        className="form-control"
                      />
                      <label className="form-label">
                        Password
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      {errors.rePassword && touched.rePassword ? (
                        <small>{errors.rePassword}</small>
                      ) : null}
                      <input
                        type="password"
                        name="rePassword"
                        onChange={handleChange}
                        className="form-control"
                      />
                      <label className="form-label">
                        re-Password
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      {errors.phoneNumber && touched.phoneNumber ? (
                        <small>{errors.phoneNumber}</small>
                      ) : null}
                      <input
                        type="text"
                        name="phoneNumber"
                        onChange={handleChange}
                        className="form-control"
                      />
                      <label className="form-label">
                        Phone Number
                      </label>
                    </div>

                    <div className="form-outline mb-4 border border-2">
                      {errors.gender && touched.gender ? (
                        <small>{errors.gender}</small>
                      ) : null}
                      <select name="gender">
                        <option
                          value={""}
                          label="Select your gender"
                        ></option>
                        <option
                          value={Genders.MALE}
                          label={Genders.MALE}
                        ></option>
                        <option
                          value={Genders.FEMALE}
                          label={Genders.FEMALE}
                        ></option>
                        <option
                          value={Genders.NOTDEFINED}
                          label={Genders.NOTDEFINED}
                        ></option>
                      </select>
                    </div>

                    <div className="form-outline mb-4">
                      {errors.birthDate && touched.birthDate ? (
                        <small>{errors.birthDate}</small>
                      ) : null}
                      <input
                        type="date"
                        name="birthDate"
                        onChange={handleChange}
                        className="form-control"
                      />
                      <label className="form-label">
                        Birth Date
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary btn-block mb-4"
                    >
                      Sign up
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary btn-block mb-4 ms-4"
                    >
                      Back to Login Page
                    </button>
                  </Form>
                  )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpModal;
