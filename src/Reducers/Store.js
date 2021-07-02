import AUTH_USER from "./Auth_User";
import CategoryReducer from "./CategoryReducer";
import ProductsReducer from "./ProductsReducer"
import { createStore ,compose ,applyMiddleware ,combineReducers} from "redux";
import thunk from "redux-thunk"

let composerEnhance= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const combinedReducers = combineReducers({
    Auth_Reducer: AUTH_USER,
    Category_Reducer:  CategoryReducer,
    ProductsReducer : ProductsReducer
    
});

let enhancedMiddleware = composerEnhance(applyMiddleware(thunk))

export default createStore(combinedReducers, enhancedMiddleware);
