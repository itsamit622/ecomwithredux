import { AUTH_SIGNIN, AUTH_SIGNOUT, ADDPRODUCTS } from "./ActionTypes";
import { HttpsReq } from "../HttpsReq/HttpsRequest";

export const Auth_Checker_Action2 = function (value) {
  console.log("value", value);

  return (dispatch) => {
    HttpsReq.get("/Users2", { params: value }).then((res) => {
      console.log("hello", res.data);

      //  if (res.data[0].userId = value.userId && res.data[0].password ==value.password  ) {
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

export const postcontentfromactions = function (data) {
  console.log("mycontentfromuserlogin", data);

  return (dispatch) => {
    HttpsReq.get("/Users2", { params: { userId: data.userId } }).then((res) => {
      if (res.data.length === 0) {
        HttpsReq.post("/Users2", data).then((res) => {
          console.log("mycontentfromuserlogin", res.data);

          let action = {
            type: ADDPRODUCTS,
            payload: "",
          };
          dispatch(action);
        });
      } else {
        alert("User ID already taken");
      }
    });
  };
};

export const logOutfromAction = function () {
  return {
    type: AUTH_SIGNOUT,
    payload: "",
  };
};
