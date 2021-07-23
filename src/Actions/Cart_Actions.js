import {
  CART_PRODUCTS,
  REMOVE_CART_PRODUCTS,
  INC_COUNT,
  DEC_COUNT,
  ADD_ADDRESS,
} from "./ActionTypes";

export const addtocartfromactions = function (data) {
  return {
    type: CART_PRODUCTS,
    payload: data,
  };
};
export const addaddresstocartfromactions = function (data) {
  return {
    type: ADD_ADDRESS,
    payload: data,
  };
};
export const deletecontentfromactions = function (id) {
  console.log("delete id", id);

  return (dispatch) => {
    let action = {
      type: REMOVE_CART_PRODUCTS,
      payload: id,
    };
    dispatch(action);
  };
};

export const incquantityfromactions = function (id) {
  console.log("delete id", id);

  return (dispatch) => {
    let action = {
      type: INC_COUNT,
      payload: id,
    };
    dispatch(action);
  };
};
export const decquantityfromactions = function (id) {
  console.log("delete id", id);

  return (dispatch) => {
    let action = {
      type: DEC_COUNT,
      payload: id,
    };
    dispatch(action);
  };
};
