import {
  FETCH_ALL_PRODUCTS,
} from "../types";


const INITIAL_STATE = {};

const productsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_ALL_PRODUCTS:
            return {
                ...state,
                products: action.payload.data
            }

        default:
            return state;
    }
};

export default productsReducer;
