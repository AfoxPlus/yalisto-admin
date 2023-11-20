import axios from 'axios'
import { getEnvVariables } from '../src/helpers'

const { VITE_API_RESTAURANT_URL, VITE_API_PRODUCTS_URL,VITE_GATEWAY_PRODUCTS_URL } = getEnvVariables()

export const restaurantApi = axios.create({
    baseURL: VITE_API_RESTAURANT_URL
})

export const productsApi = axios.create({
    baseURL: VITE_API_PRODUCTS_URL
})

export const productGateway = axios.create({
    baseURL: VITE_GATEWAY_PRODUCTS_URL
})

productGateway.interceptors.request.use( config => {
     config.headers = {
         'restaurant_code': localStorage.getItem('restaurant_code')
    }
     return config
 })