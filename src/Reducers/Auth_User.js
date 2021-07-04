import {AUTH_SIGNIN ,AUTH_SIGNOUT} from "../Actions/ActionTypes"




const IntialState ={

    isLogin :false
}

function AUTH_USER(
    state = IntialState,
  
    action
  ) {
    switch (action.type) {
     case AUTH_SIGNIN:
       console.log("Sdsdsd",action.payload)

     return {...state, isLogin:true}
     
     case AUTH_SIGNOUT:
      return {...state,isLogin:false}

    }
  
    return state;
  }
  
  export default AUTH_USER;