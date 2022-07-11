import { API, URL_API } from "./const.api";


export const AuthAPI = {
    login: (data) => API.post(`${URL_API}/api/auth/login`, data),
    register: (data) => API.post(`${URL_API}/api/auth/users`, data),
}