import {CART_PRODUCTS} from "./ActionTypes"


export const addtocartfromactions = function(data){

      
       return {
            type : CART_PRODUCTS,
            payload :data
        }
      
    
    }
  