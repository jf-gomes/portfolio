import axios from "axios";

export const api = axios.create({
    baseURL: 'https://portfolio-backend-rho-snowy.vercel.app'
})