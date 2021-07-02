import {CATEGORIES ,LOAD_CATEGORIES ,DELETE_ITEM} from "./ActionTypes"
import { HttpsReq } from "../HttpsReq/HttpsRequest";

export const postcontentfromactions = function(data){
   
  return (dispatch)=>{
      HttpsReq.post("category" ,data).then((res)=>{
        console.log("mycontent",res.data)
          
          let action = {
          type : CATEGORIES,
          payload :res.data
      }
      dispatch(action)
  })
  }
}


export const loadcontentfromactions = function(){
   
  return (dispatch)=>{
      HttpsReq.get("/category").then((res)=>{
        console.log("mycontent",res.data)
          
          let action = {
          type : LOAD_CATEGORIES,
          payload :res.data
      }
      dispatch(action)
  })
  }
}
export const deletecontentfromactions = function(id){
   
  return (dispatch)=>{
      HttpsReq.delete("category/" + id).then((res)=>{
    
      let action = {
          type : DELETE_ITEM,
          payload :id
      }
      dispatch(action)
  }) 
  }
}
