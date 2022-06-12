import axios from "axios";
import { ResponseModel } from "./responseModel";
import { errorToast } from "./toastHelper";

const defaultHeaders = {
  "Content-Type": "application/json",
};

const exceptionHandler = (err) => {
  if (err?.response?.data) {
    const { data, isSuccess, message } = err.response.data;
    errorToast(message);
    return new ResponseModel(data, isSuccess, message);
  }

  errorToast("Unexpected error occured!");
  return new ResponseModel(null, false, "Unexpected error occured!");
};

const Get = (url, headers) => {
  return axios
    .get(url, {
      headers: headers ? { ...defaultHeaders, ...headers } : defaultHeaders,
    })
    .then((response) => {
      const { isSuccess, data, message } = response.data;
      if (isSuccess) {
        return new ResponseModel(data, isSuccess, message);
      } else {
        errorToast(message);
      }
    })
    .catch((err) => {
      return exceptionHandler(err);
    });
};

const Post = (url, reqBody, headers) => {
  return axios
    .post(url, reqBody, {
      headers: headers ? { ...defaultHeaders, ...headers } : defaultHeaders,
    })
    .then((response) => {
      const { isSuccess, data, message } = response.data;
      if (isSuccess) {
        return new ResponseModel(data, isSuccess, message);
      } else {
        errorToast(message);
      }
    })
    .catch((err) => {
      return exceptionHandler(err);
    });
};

const Put = (url, reqBody, headers) => {
  return axios
    .put(url, reqBody, {
      headers: headers ? { ...defaultHeaders, ...headers } : defaultHeaders,
    })
    .then((response) => {
      const { isSuccess, data, message } = response.data;
      if (isSuccess) {
        return new ResponseModel(data, isSuccess, message);
      } else {
        errorToast(message);
      }
    })
    .catch((err) => {
      return exceptionHandler(err);
    });
};

const Delete = (url, headers) => {
  return axios
    .delete(url, {
      headers: headers ? { ...defaultHeaders, ...headers } : defaultHeaders,
    })
    .then((response) => {
      const { isSuccess, data, message } = response.data;
      if (isSuccess) {
        return new ResponseModel(data, isSuccess, message);
      } else {
        errorToast(message);
      }
    })
    .catch((err) => {
      return exceptionHandler(err);
    });
};

export { Get, Post, Put, Delete };
