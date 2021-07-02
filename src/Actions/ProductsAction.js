import {ADDPRODUCTS,LOAD_PRODUCTS,DELETE_PRODUCTS} from "./ActionTypes"
import { HttpsReq } from "../HttpsReq/HttpsRequest";

export const postcontentfromactions = function(data){
   
  return (dispatch)=>{
      HttpsReq.post("products2" ,data).then((res)=>{
        console.log("mycontent",res.data)
          
          let action = {
          type : ADDPRODUCTS,
          payload :res.data
      }
      dispatch(action)
  })
  }
}


export const loadcontentfromactions = function(){
   
  return (dispatch)=>{
      HttpsReq.get("/products2").then((res)=>{
        console.log("mycontent",res.data)
          
          let action = {
          type : LOAD_PRODUCTS,
          payload :res.data
      }
      dispatch(action)
  })
  }
}
export const deletecontentfromactions = function(id){
   
  return (dispatch)=>{
      HttpsReq.delete("products2/" + id).then((res)=>{
    
      let action = {
          type : DELETE_PRODUCTS,
          payload :id
      }
      dispatch(action)
  }) 
  }
}
