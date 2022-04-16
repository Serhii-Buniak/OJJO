import axios from "axios";

export const baseURL = 'https://localhost:7293/api/'

const instance = axios.create({
    baseURL: baseURL,
})

export default instance