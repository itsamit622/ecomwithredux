import {
  ADDPRODUCTS,
  LOAD_PRODUCTS,
  DELETE_PRODUCTS,
} from "../Actions/ActionTypes";
const IntialState = {
  products: [],
};

function ProductsReducer(state = IntialState, action) {
  switch (action.type) {
    case ADDPRODUCTS:
      console.log("product2", action.payload);

      let addproducts = state.products.concat(action.payload);
      return { ...state, products: addproducts };

    case LOAD_PRODUCTS:
      console.log("product2", state.products);

      return { ...state, products: action.payload };
    case DELETE_PRODUCTS:
      const newproducts = state.products.filter(
        (value) => value.id !== action.payload
      );
      return {
        ...state,
        products: newproducts,
      };
  }
  return state;
}

export default ProductsReducer;
