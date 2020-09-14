import axios from "axios";
// import Cookie from "js-cookie";
// import jwtDecode from "jwt-decode";
import API_BASE_URL from "../config/const";




export const getApi = async (url) => {
    const { data } = await axios.get(`${API_BASE_URL}`, url);

    return data;
};