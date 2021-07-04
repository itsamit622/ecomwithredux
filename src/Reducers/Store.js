import AUTH_USER from "./Auth_User";
import CategoryReducer from "./CategoryReducer";
import ProductsReducer from "./ProductsReducer"
import { createStore ,compose ,applyMiddleware ,combineReducers} from "redux";
import thunk from "redux-thunk"
import Auth_Client from "./Auth_Client";
import CART_REDUCER from "./CartReducer"

let composerEnhance= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const combinedReducers = combineReducers({
    Auth_Client: Auth_Client,
    Auth_Reducer: AUTH_USER,
    Category_Reducer:  CategoryReducer,
    ProductsReducer : ProductsReducer,
    CART_REDUCER:CART_REDUCER
    
});

let enhancedMiddleware = composerEnhance(applyMiddleware(thunk))

export default createStore(combinedReducers, enhancedMiddleware);
