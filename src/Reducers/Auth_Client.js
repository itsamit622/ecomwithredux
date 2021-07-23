import { AUTH_SIGNIN, AUTH_SIGNOUT } from "../Actions/ActionTypes";

const IntialState = {
 customer:[],

  isLogin: false,
};

if(localStorage.getItem("token")){
  IntialState.isLogin = true;
}

function Auth_Client(
  state = IntialState,

  action
) {
  switch (action.type) {
    case AUTH_SIGNIN:
      console.log("mypayload", action.payload);
      console.log("action.payload", action.payload)
      localStorage.setItem("token", action.payload.access_token)
      return { ...state,isLogin:true };

    case AUTH_SIGNOUT:
      console.log("mystayeuser",state.users)
      localStorage.removeItem("token")
      return { ...state, isLogin: false };
  }

  return state;
}

export default Auth_Client;
