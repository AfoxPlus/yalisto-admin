import { useDispatch, useSelector } from "react-redux"
import { yaListoGateway } from '../../api/yaListoAPI'
import { onCreateProduct, onLoadProducts, onSetActiveProduct } from "../store/products/productsSlice";

export const useProductStore = () => {
    const { products, activeProduct } = useSelector(state => state.products);
    const dispatch = useDispatch();

    const setActiveProduct = (product) => {
        dispatch(onSetActiveProduct(product))
    }

    const startLoadingProducts = async() => {
        try {
            const {data} = await yaListoGateway.get('products/search')
            dispatch(onLoadProducts(data.payload))

        } catch (error) {
            console.log(error);
        }
    }

    const startCreateProduct = async(product) => {
        try {
             const resp = await yaListoGateway.post('product', product)    
             console.log(resp)
             dispatch(onCreateProduct(product))
        } catch (error) {
            console.log(error);
        }        
    }

    const startUpdateProduct = async(product) => { 
       console.log(product)
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