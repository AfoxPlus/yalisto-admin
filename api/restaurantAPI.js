import axios from 'axios'
import { getEnvVariables } from '../src/helpers'

const { VITE_API_RESTAURANT_URL, VITE_API_PRODUCTS_URL } = getEnvVariables()

export const restaurantApi = axios.create({
    baseURL: VITE_API_RESTAURANT_URL
})

export const productsApi = axios.create({
    baseURL: VITE_API_PRODUCTS_URL
})

// productsApi.interceptors.request.use( config => {
//     config.headers = {
//         'restaurant_code': localStorage.getItem('restaurant_code')
//     }
//     return config
// })