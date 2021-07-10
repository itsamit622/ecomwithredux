import { AUTH_SIGNIN, AUTH_SIGNOUT } from "../Actions/ActionTypes";

const IntialState = {
 customer:[],

  isLogin: false,
};

function Auth_Client(
  state = IntialState,

  action
) {
  switch (action.type) {
    case AUTH_SIGNIN:
      console.log("mypayload", action.payload);
      let addcustomer=state.customer.concat(action.payload)
      console.log("addusers",addcustomer)
      return { ...state,customer:addcustomer, isLogin:true,  };

    case AUTH_SIGNOUT:
      console.log("mystayeuser",state.users)
      return { ...state,customer:"", isLogin: false };
  }

  return state;
}

export default Auth_Client;
