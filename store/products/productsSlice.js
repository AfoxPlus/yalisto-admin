import { createSlice } from '@reduxjs/toolkit';

const productTemp = {
    code: "123",
    name: 'Frito de chancho',
    description: 'Acompañado con yuca, mote y zarza',
    imageURL: 'https://imagen.com',
    stock: 10,
    price: 12,
    showInApp: true,
    productType: {
        code: '3444',
        name: 'Carta'
    }
}

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        isLoadingProducts: true,
        products: []
    },
    reducers: {
        onLoadProducts: (state, {payload=[]}) => {
            payload.forEach(dbProduct => {
                const exists = state.products.some(product => product.code ===  dbProduct.code )
                if (!exists) {
                    state.products.push(dbProduct)
                }                
            });

        }
    }
});

export const { onLoadProducts } = productsSlice.actions;