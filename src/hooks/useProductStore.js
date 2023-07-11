import { useSelector } from "react-redux"
import { productsApi } from '../../api/restaurantAPI'


export const useProductStore = () => {
    const { products ,onLoadProducts } = useSelector(state => state.products)

    const startLoadingProducts = async() => {
        try {
            const resp = await productsApi.get('/search')
            console.log(resp);

        } catch (error) {
            console.log(error);
        }
    }

    const startNewProduct = async(product) => {
        try {
            const resp = await productsApi.post('', product)    
            console.log(resp);
        } catch (error) {
            console.log(error);
        }
        
    }

    return {
        //* Properties
        products,
        //* Methods 
        startLoadingProducts,
        startNewProduct
    }

}