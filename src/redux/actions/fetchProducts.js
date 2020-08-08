// import Cookie from "js-cookie";

import { FETCH_ALL_PRODUCTS} from "../types";
import {getApi} from "../../Utils/reqHandlers";
// import { errorHandler } from "../../utils/handlers";

const fetchProducts = payload => ({
    type: FETCH_ALL_PRODUCTS,
    payload
});

const fetchProductsThunk = () => async (dispatch, getState) => {
    try {
        const { data } = await getApi(`products`);
        dispatch(fetchProducts(data));
    } catch (error) {
        // console(error)
        // errorHandler(error, ERROR_MESSAGE, dispatch);
    }
};

export default fetchProductsThunk;
