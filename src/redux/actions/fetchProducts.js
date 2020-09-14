
import { FETCH_ALL_PRODUCTS} from "../types";
import  axios from "axios";
import constants from "../../config/const";


const fetchProducts = payload => ({
    type: FETCH_ALL_PRODUCTS,
    payload
});


const fetchProductsThunk = () => async (dispatch, getState) => {
    try {
        const { data } = axios.get(`${constants.API_BASE_URL}/products`)
            .then((res)=>{
                dispatch(fetchProducts(res));
            })

    } catch (error) {
    }
};

export default fetchProductsThunk;
