import axios from 'axios'
import { getEnvVariables } from '../src/helpers'

const { VITE_YALISTO_GATEWAY } = getEnvVariables()

export const yaListoGateway = axios.create({
    baseURL: VITE_YALISTO_GATEWAY
})

yaListoGateway.interceptors.request.use( config => {
     config.headers = {
         'restaurant_code': localStorage.getItem('restaurant_code')
    }
     return config
 })