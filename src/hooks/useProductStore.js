import { useDispatch, useSelector } from "react-redux"
import { yaListoGateway } from '../../api/yaListoAPI'
import { onCreateProduct, onUpdateProduct, onLoadProducts, onSetActiveProduct,onRemoveProduct } from "../store/products/productsSlice";

export const useProductStore = () => {
    const { products, activeProduct } = useSelector(state => state.products);
    const dispatch = useDispatch();

    const setActiveProduct = (product) => {
        dispatch(onSetActiveProduct(product))
    }

    const handleRemoveProduct = async (producCode) => {
        try {
            const {data} = await yaListoGateway.delete('products/'+producCode)
           if(data.success) {
            dispatch(onRemoveProduct(data.payload))
           }
        } catch (error) {
            console.log(error);
        }
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
             const resp = await yaListoGateway.post('products', product)
             dispatch(onCreateProduct(resp))
        } catch (error) {
            console.log(error);
        }        
    }

    const startUpdateProduct = async(product) => { 
        try {
            const resp = await yaListoGateway.put('products', product)    
            dispatch(onUpdateProduct(resp))
       } catch (error) {
           console.log(error);
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
        setActiveProduct,
        handleRemoveProduct
    }

}