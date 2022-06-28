import { Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { createNewAdmin } from "../../Services/Store/Admins/createAdmin";
import { SingUpAdminModel } from "../../Services/Utils/Forms/Sign-Up/Admin/initialModel";
import { SingUpAdminValidationScheme } from "../../Services/Utils/Forms/Sign-Up/Admin/validationScheme";

const CreateAdminModal = () => {
  const dispatch = useDispatch();

  const createAdmin = async (SignUpModel) => {
    await dispatch(createNewAdmin(SignUpModel));
    if (createNewAdmin.fulfilled) {
      rstForm();
    }
  };

  const rstForm = () => {
    document.getElementById("create-admin").reset();
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }
  };

  return (
    <section className="">
      <Formik
        initialValues={SingUpAdminModel}
        validationSchema={SingUpAdminValidationScheme}
        onSubmit={(_values) => {
          delete _values["rePassword"];
          createAdmin(_values);
        }}
      >
        {({ errors, touched, handleChange, handleBlur }) => (
          <Form id="create-admin">
            <div className="row">
              <label className="form-label">* Full Name</label>
              <div className="form-outline mb-4">
                {errors.fullName && touched.fullName ? (
                  <small>{errors.fullName}</small>
                ) : null}
                <input
                  type="text"
                  name="fullName"
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>

            <label className="form-label">* E-mail Address</label>
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
            </div>
            <label className="form-label">* Password</label>
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
            </div>
            <label className="form-label">* Re-Password</label>
            <div className="form-outline mb-4">
              {errors.rePassword && touched.rePassword ? (
                <small>{errors.rePassword}</small>
              ) : null}
              <input
                type="password"
                name="rePassword"
                onChange={handleChange}
                onBlur={handleBlur}
                className="form-control"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Create Admin
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default CreateAdminModal;