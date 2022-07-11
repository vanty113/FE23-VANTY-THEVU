import { API } from "./const.api";


export const ProductAPI = {
    getProducts: (data) => API.post(`${URL_API}/products`, data)
}