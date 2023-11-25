import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        isLoadingProducts: true,
        products: [],
        activeProduct: null
    },
    reducers: {
        onSetActiveProduct: (state, {payload}) => {
            state.activeProduct = payload;
        },
        onLoadProducts: (state, {payload=[]}) => {
            payload.forEach(dbProduct => {
                const exists = state.products.some(product => product.code ===  dbProduct.code )
                if (!exists) {
                    state.products.push(dbProduct)
                }                
            });
        },
        onCreateProduct: (state, {payload}) => {
            state.products.push(payload)
            state.activeProduct = null;
        },
        onUpdateProduct: (state, {payload}) => {
            var itemIndex = state.products.findIndex(x => x.code == payload.code)
            state.products[itemIndex] = {...payload}
            state.activeProduct = null;
        },
        onLogoutProducts: (state) => {
            state.isLoadingProducts = false;
            state.products = [];
            state.activeProduct = null;
        },
        onRemoveProduct: (state, {payload}) => {
            var itemIndex = state.products.findIndex(x => x.code == payload.code)
            state.products.splice(itemIndex, 1)
        }
    }
});

export const { onLoadProducts, onLogoutProducts, onCreateProduct,onUpdateProduct, onSetActiveProduct ,onRemoveProduct} = productsSlice.actions;