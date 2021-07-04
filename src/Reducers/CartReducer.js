import {CART_PRODUCTS ,REMOVE_CART_PRODUCTS} from "../Actions/ActionTypes"




const IntialState ={

    cart:[]
}

function CART_REDUCER(
    state = IntialState,
  
    action
  ) {
    switch (action.type) {
     case CART_PRODUCTS:
       console.log("action",action.payload)
let newstate =state.cart.concat(action.payload)
console.log("newstate",newstate)
     return {...state ,cart:newstate}
     
     case REMOVE_CART_PRODUCTS:
      return {...state}

    }
  
    return state;
  }
  
  export default CART_REDUCER;