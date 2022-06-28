import { toast } from "react-toastify";

const errorToast = (message, duration = 5000) => {
  toast(message, {
    position: "top-center",
    type: "error",
    autoClose: duration,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

const successToast = (message, duration = 5000) => {
  toast(message, {
    position: "top-center",
    type: "success",
    autoClose: duration,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

const warningToast = (message, duration = 5000) => {
  toast(message, {
    position: "top-center",
    type: "warning",
    autoClose: duration,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export { errorToast, successToast , warningToast};
