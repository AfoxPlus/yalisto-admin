import axios from 'axios'
import { getEnvVariables } from '../src/helpers'

const { VITE_API_RESTAURANT_URL } = getEnvVariables()

const restaurantApi = axios.create({
    baseURL: VITE_API_RESTAURANT_URL
})

restaurantApi.interceptors.request.use( config => {
    config.headers = {
        'restaurant_code': localStorage.getItem('restaurant_code')
    }
    return config
})


export default restaurantApi