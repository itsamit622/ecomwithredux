import { AUTH_SIGNIN, AUTH_SIGNOUT } from "./ActionTypes";
import { HttpsReq } from "../HttpsReq/HttpsRequest";

export const Auth_Checker_Action = function (value) {
  console.log("value", value);

  return (dispatch) => {
    HttpsReq.get("./Admin", { params: value }).then((res) => {
      console.log("hello", res.data);
      if (res.data.length > 0) {
        let action = {
          type: AUTH_SIGNIN,
          payload: res.data,
        };
        dispatch(action);
      } else alert("hello");
    });
  };
};

export const Auth_Checker_Action2 = function () {
  return {
    type: AUTH_SIGNOUT,
    payload: "",
  };
};
