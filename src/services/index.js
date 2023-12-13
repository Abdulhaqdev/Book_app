import appConfig from "../config/appConfig";
import { setSignedOutSuccess } from "../store/auth/sessionslice";
import store from "../store/index";

import axios from "axios";

const unAuthenticatedCode = ["403"];

const api = axios.create({
  timeout: 10000,
  baseURL: appConfig.apiPrifex,
});
console.log(appConfig.apiPrifex);

api.interceptors.request.use(
  (config) => {
    const stateData = store.getState();

    if (stateData.session.token !== "") {
      config.headers[
        "Authorization"
      ] = `${appConfig.tokenType} ${stateData.session.token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;

    if (response && unAuthenticatedCode.includes(response.status)) {
      return store.dispatch(setSignedOutSuccess());
    }

    return Promise.reject(error);
  }
);

export default api;
