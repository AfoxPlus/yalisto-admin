import { useDispatch, useSelector } from "react-redux"
import { productsApi } from '../../api/restaurantAPI'
import { onCreateProduct, onLoadProducts, onSetActiveProduct } from "../store/products/productsSlice";

export const useProductStore = () => {
    const { products, activeProduct } = useSelector(state => state.products);
    const dispatch = useDispatch();

    const setActiveProduct = (product) => {
        dispatch(onSetActiveProduct(product))
    }

    const startLoadingProducts = async() => {
        try {
            // /search?restaurant_code=648f94bd704db9741d1d2c04
            const {data} = await productsApi.get('/search', {
                params: {
                    restaurant_code: localStorage.getItem('restaurant_code')
                }
            })
            dispatch(onLoadProducts(data.payload))

        } catch (error) {
            console.log(error);
        }
    }

    const startCreateProduct = async(product) => {
        try {
            console.log(product);
            // // ?restaurant_code=648f94bd704db9741d1d2c04
            // const resp = await productsApi.post('', product, {
            //     params: {
            //         restaurant_code: localStorage.getItem('restaurant_code')
            //     }
            // })    
            // dispatch(onCreateProduct(product))
            // console.log(resp);
        } catch (error) {
            console.log(error);
        }        
    }

    const startUpdateProduct = async(product) => { 
        try {
            console.log(product);
        } catch (error) {
            
        }
    }

    return {
        //* Properties
        products,
        activeProduct,
        //* Methods 
        startLoadingProducts,
        startCreateProduct,
        startUpdateProduct,
        setActiveProduct
    }

}