import { createSlice } from '@reduxjs/toolkit';

export const productTypesSlice = createSlice({
    name: 'productTypes',
    initialState: {
        productTypes: []
    },
    reducers: {
        onLoadProducTypes: (state, {payload=[]}) => {
            payload.forEach(dbProductTypes => {
                const exists = state.productTypes.some(productType => productType.id ===  dbProductTypes.id )
                if (!exists) {
                    state.productTypes.push(dbProductTypes)
                } 
            });
        },
        onLogoutProductTypes: (state)=>{
            state.productTypes = []
        }
    }
});

export const { onLoadProducTypes, onLogoutProductTypes } = productTypesSlice.actions;