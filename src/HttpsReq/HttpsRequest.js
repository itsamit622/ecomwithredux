import axios from "axios";
import { readyException } from "jquery";

let axiosOptions = {
  baseURL: "http://localhost:4000",
};

console.log("myaxios", axiosOptions);

export const HttpsReq = axios.create(axiosOptions);

HttpsReq.interceptors.request.use(function (request) {
  let token = localStorage.getItem("token");
  console.log("intersep", token);
  if (token) {
    let headers = {
      Authorization: `Bearer ${token}`,
    };

    request.headers = headers;
  }
  return request;
});
