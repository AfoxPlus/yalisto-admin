import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { productsSlice } from './products/productsSlice'
import { productTypesSlice } from './products/productTypesSlice'

export const store = configureStore({
    reducer:{
        auth: authSlice.reducer,
        products: productsSlice.reducer,
        productTypes: productTypesSlice.reducer
    }
})