import { AUTH_SIGNIN, AUTH_SIGNOUT } from "../Actions/ActionTypes";

const IntialState = {
 users:[],

  isLogin: false,
};

function Auth_Client(
  state = IntialState,

  action
) {
  switch (action.type) {
    case AUTH_SIGNIN:
      console.log("mypayload", action.payload);
      let addUsers=state.users.concat(action.payload)
      return { ...state,users:addUsers, isLogin:true,  };

    case AUTH_SIGNOUT:
      console.log("mystayeuser",state.users)
      return { ...state,users:"", isLogin: false };
  }

  return state;
}

export default Auth_Client;
