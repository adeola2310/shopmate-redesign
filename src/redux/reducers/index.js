import { combineReducers } from "redux";
import products from "./productReducer"




const allReducers = combineReducers({
products
});

const rootReducer = (state, action) => {

    return allReducers(state, action);
};

export default rootReducer;
