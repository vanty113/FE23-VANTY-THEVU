import { API, URL_API } from "./const.api";


export const ProductAPI = {
    getProducts: (data) => API.post(`${URL_API}/api/products`, data)
}