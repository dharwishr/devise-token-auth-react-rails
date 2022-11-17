import axios from "axios";
import Cookies from "js-cookie";

import Toastr from "components/Common/Toastr";

const DEFAULT_ERROR_NOTIFICATION = "Something went wrong!";

axios.defaults.baseURL = "/";

const setAuthHeaders = () => {
  axios.defaults.headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-CSRF-TOKEN": document
      .querySelector('[name="csrf-token"]')
      .getAttribute("content"),
    "access-token": Cookies.get("_access_token"),
    client: Cookies.get("_client"),
    uid: Cookies.get("_uid"),
  };
};

const handleSuccessResponse = response => {
  if (response) {
    if (response.headers["access-token"]) {
      Cookies.set("_access_token", response.headers["access-token"]);
      Cookies.set("_client", response.headers["client"]);
      Cookies.set("_uid", response.headers["uid"]);
    }
    response.success = response.status === 200;
    if (response.data.notice) {
      Toastr.success(response.data.notice);
    }
  }

  return response;
};

const handleErrorResponse = axiosErrorObject => {
  if (axiosErrorObject.response?.status === 401) {
    // setToLocalStorage({ authToken: null, email: null, userId: null });
    // setTimeout(() => (window.location.href = "/"), 1000);
  }

  Toastr.error(
    axiosErrorObject.response?.data?.error || DEFAULT_ERROR_NOTIFICATION
  );

  if (axiosErrorObject.response?.status === 423) {
    // window.location.href = "/";
  }

  return Promise.reject(axiosErrorObject);
};

const registerIntercepts = () => {
  axios.interceptors.response.use(handleSuccessResponse, error =>
    handleErrorResponse(error)
  );
};

export { setAuthHeaders, registerIntercepts };
